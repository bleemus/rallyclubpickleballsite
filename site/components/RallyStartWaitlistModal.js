import { useEffect, useRef, useState, useCallback } from 'react';
import { loadTurnstileScript, FALLBACK_TEST_SITE_KEY } from './turnstileClient';

// Mirror site/api/src/lib/validate.js — keep these in sync.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_LIMITS = { name: 100, email: 200, phone: 30, duprOrSkill: 50, preferredTimes: 500, notes: 1000 };

const SKILL_LEVELS = [
  { value: 'Complete beginner', label: 'Complete beginner — never played' },
  { value: 'Played a few times', label: 'Played a few times' }
];

// Order matters: the joined string is what an admin reads in the dashboard.
const AVAILABILITY = [
  'Weekday mornings',
  'Weekday afternoons',
  'Weekday evenings',
  'Weekends'
];

const ERROR_MESSAGES = {
  name: { required: 'Please enter your name', too_long: 'Name is too long' },
  email: { required: 'Email is required', too_long: 'Email is too long', invalid: 'Enter a valid email address' },
  phone: { required: 'Phone is required', too_long: 'Phone number is too long', invalid: 'Enter a phone number with at least 10 digits' },
  duprOrSkill: { required: 'Pick the option that fits you best', too_long: 'Too long' },
  preferredTimes: { required: 'Pick at least one time that works for you', too_long: 'Too long' },
  notes: { too_long: 'Too long (max 1000 characters)' }
};

function errorText(field, code) {
  return (ERROR_MESSAGES[field] && ERROR_MESSAGES[field][code]) || code;
}

function validateField(name, value) {
  const v = typeof value === 'string' ? value.trim() : '';
  switch (name) {
    case 'name':
      if (!v) return 'required';
      if (v.length > FIELD_LIMITS.name) return 'too_long';
      return null;
    case 'email':
      if (!v) return 'required';
      if (v.length > FIELD_LIMITS.email) return 'too_long';
      if (!EMAIL_RE.test(v.toLowerCase())) return 'invalid';
      return null;
    case 'phone':
      if (!v) return 'required';
      if (v.length > FIELD_LIMITS.phone) return 'too_long';
      if (v.replace(/\D/g, '').length < 10) return 'invalid';
      return null;
    case 'duprOrSkill':
      if (!v) return 'required';
      if (v.length > FIELD_LIMITS.duprOrSkill) return 'too_long';
      return null;
    case 'notes':
      if (v.length > FIELD_LIMITS.notes) return 'too_long';
      return null;
    default:
      return null;
  }
}

const EMPTY_FORM = { name: '', email: '', phone: '', duprOrSkill: '', notes: '', website: '' };

export default function RallyStartWaitlistModal({ open, onClose }) {
  const [form, setForm] = useState(EMPTY_FORM);
  const [availability, setAvailability] = useState([]);
  const [status, setStatus] = useState('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);
  const turnstileWidgetIdRef = useRef(null);
  const openedAtRef = useRef(null);
  const previousActiveRef = useRef(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || FALLBACK_TEST_SITE_KEY;

  const resetForm = useCallback(() => {
    setForm(EMPTY_FORM);
    setAvailability([]);
    setStatus('form');
    setErrorMsg('');
    setFieldErrors({});
    setTurnstileToken('');
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    openedAtRef.current = Date.now();
    previousActiveRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const onKey = e => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      if (previousActiveRef.current && typeof previousActiveRef.current.focus === 'function') {
        previousActiveRef.current.focus();
      }
      if (window.turnstile && turnstileWidgetIdRef.current != null) {
        try { window.turnstile.remove(turnstileWidgetIdRef.current); } catch {}
        turnstileWidgetIdRef.current = null;
      }
      resetForm();
    };
  }, [open, onClose, resetForm]);

  useEffect(() => {
    if (!open || status !== 'form') return;
    let cancelled = false;
    loadTurnstileScript().then(() => {
      if (cancelled) return;
      if (!turnstileContainerRef.current || !window.turnstile) return;
      if (turnstileWidgetIdRef.current != null) return;
      try {
        turnstileWidgetIdRef.current = window.turnstile.render(turnstileContainerRef.current, {
          sitekey: siteKey,
          callback: token => setTurnstileToken(token),
          'error-callback': () => setTurnstileToken(''),
          'expired-callback': () => setTurnstileToken('')
        });
      } catch (err) {
        console.error('Turnstile render failed', err);
      }
    });
    return () => { cancelled = true; };
  }, [open, status, siteKey]);

  if (!open) return null;

  const onChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const onBlur = e => {
    const { name, value } = e.target;
    const err = validateField(name, value);
    setFieldErrors(prev => ({ ...prev, [name]: err || undefined }));
  };

  const toggleAvailability = option => {
    setAvailability(prev => (prev.includes(option) ? prev.filter(o => o !== option) : [...prev, option]));
    if (fieldErrors.preferredTimes) setFieldErrors(prev => ({ ...prev, preferredTimes: undefined }));
  };

  const onSubmit = async e => {
    e.preventDefault();

    const clientErrors = {};
    for (const field of ['name', 'email', 'phone', 'duprOrSkill', 'notes']) {
      const err = validateField(field, form[field]);
      if (err) clientErrors[field] = err;
    }
    // Checkbox group, so it can't use validateField — the server sees it as
    // preferredTimes, which is the key any server-side error comes back under.
    if (availability.length === 0) clientErrors.preferredTimes = 'required';

    if (Object.keys(clientErrors).length > 0) {
      setFieldErrors(clientErrors);
      setErrorMsg('Please correct the highlighted fields and try again.');
      return;
    }

    setStatus('submitting');
    setErrorMsg('');
    setFieldErrors({});

    const elapsedMs = openedAtRef.current ? Date.now() - openedAtRef.current : 0;
    const payload = {
      requestType: 'rally-start',
      name: form.name,
      email: form.email,
      phone: form.phone,
      instructorId: 'any',
      duprOrSkill: form.duprOrSkill,
      preferredTimes: availability.join(', '),
      goals: '',
      notes: form.notes,
      website: form.website,
      elapsedMs,
      turnstileToken
    };

    try {
      const res = await fetch('/api/training-requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json().catch(() => ({}));

      if (res.ok && data && data.ok) {
        setStatus('success');
        return;
      }
      if (res.status === 429) {
        setStatus('form');
        setErrorMsg("You've submitted a lot of requests recently. Please try again later.");
        return;
      }
      if (res.status === 400 && data && data.error === 'verification_failed') {
        setStatus('form');
        setErrorMsg("We couldn't verify you weren't a bot. Please try again.");
        if (window.turnstile && turnstileWidgetIdRef.current != null) {
          try { window.turnstile.reset(turnstileWidgetIdRef.current); } catch {}
        }
        setTurnstileToken('');
        return;
      }
      if (res.status === 400 && data && data.fields) {
        setStatus('form');
        setFieldErrors(data.fields);
        setErrorMsg('Please correct the highlighted fields and try again.');
        return;
      }
      setStatus('form');
      setErrorMsg('Something went wrong on our end. Please try again in a moment.');
    } catch {
      setStatus('form');
      setErrorMsg("We couldn't reach the server. Please check your connection and try again.");
    }
  };

  const onBackdropClick = e => {
    if (e.target === e.currentTarget) onClose();
  };

  const submitDisabled = status === 'submitting' || !turnstileToken;

  return (
    <div className="rsw-backdrop" onMouseDown={onBackdropClick} role="dialog" aria-modal="true" aria-labelledby="rsw-title">
      <div className="rsw-dialog">
        <button className="rsw-close" type="button" aria-label="Close" onClick={onClose}>×</button>

        {status === 'success' ? (
          <div className="rsw-success">
            <h2 id="rsw-title">You&rsquo;re on the list</h2>
            <p>
              Thanks! We&rsquo;ll email you as soon as we have enough players to form the next
              Rally Start group, with the dates and times we land on.
            </p>
            <button type="button" className="rsw-primary-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 id="rsw-title">Join the Rally Start Waitlist</h2>
            <p className="rsw-lede">
              No class is scheduled yet — we form a group once enough beginners sign up.
              Tell us when you&rsquo;re free and we&rsquo;ll build the schedule around it.
            </p>

            <form onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
                className="rsw-honeypot"
                aria-hidden="true"
              />

              <div className="rsw-row">
                <label className="rsw-field">
                  <span>Name <em>*</em></span>
                  <input name="name" type="text" required maxLength={100} value={form.name} onChange={onChange} onBlur={onBlur} disabled={status === 'submitting'} aria-invalid={!!fieldErrors.name} />
                  {fieldErrors.name && <small className="rsw-err">{errorText('name', fieldErrors.name)}</small>}
                </label>
                <label className="rsw-field">
                  <span>Email <em>*</em></span>
                  <input name="email" type="email" required maxLength={200} value={form.email} onChange={onChange} onBlur={onBlur} disabled={status === 'submitting'} aria-invalid={!!fieldErrors.email} />
                  {fieldErrors.email && <small className="rsw-err">{errorText('email', fieldErrors.email)}</small>}
                </label>
              </div>

              <div className="rsw-row">
                <label className="rsw-field">
                  <span>Phone <em>*</em></span>
                  <input name="phone" type="tel" required maxLength={30} value={form.phone} onChange={onChange} onBlur={onBlur} disabled={status === 'submitting'} placeholder="(555) 555-5555" aria-invalid={!!fieldErrors.phone} />
                  {fieldErrors.phone && <small className="rsw-err">{errorText('phone', fieldErrors.phone)}</small>}
                </label>
                <label className="rsw-field">
                  <span>Skill level <em>*</em></span>
                  <select name="duprOrSkill" value={form.duprOrSkill} onChange={onChange} onBlur={onBlur} disabled={status === 'submitting'} aria-invalid={!!fieldErrors.duprOrSkill}>
                    <option value="">Select one…</option>
                    {SKILL_LEVELS.map(level => (
                      <option key={level.value} value={level.value}>{level.label}</option>
                    ))}
                  </select>
                  {fieldErrors.duprOrSkill && <small className="rsw-err">{errorText('duprOrSkill', fieldErrors.duprOrSkill)}</small>}
                </label>
              </div>

              <fieldset className="rsw-fieldset" aria-invalid={!!fieldErrors.preferredTimes}>
                <legend>When could you play? <em>*</em> <span className="rsw-hint">Pick all that work</span></legend>
                <div className="rsw-checks">
                  {AVAILABILITY.map(option => (
                    <label key={option} className="rsw-check">
                      <input
                        type="checkbox"
                        checked={availability.includes(option)}
                        onChange={() => toggleAvailability(option)}
                        disabled={status === 'submitting'}
                      />
                      <span>{option}</span>
                    </label>
                  ))}
                </div>
                {fieldErrors.preferredTimes && <small className="rsw-err">{errorText('preferredTimes', fieldErrors.preferredTimes)}</small>}
              </fieldset>

              <label className="rsw-field">
                <span>Anything else you&rsquo;d like us to know? (optional)</span>
                <textarea name="notes" rows={2} maxLength={1000} value={form.notes} onChange={onChange} onBlur={onBlur} disabled={status === 'submitting'} />
                {fieldErrors.notes && <small className="rsw-err">{errorText('notes', fieldErrors.notes)}</small>}
              </label>

              <div className="rsw-turnstile" ref={turnstileContainerRef} />

              {errorMsg && <div className="rsw-error-banner">{errorMsg}</div>}

              <div className="rsw-actions">
                <button type="button" className="rsw-secondary-btn" onClick={onClose} disabled={status === 'submitting'}>Cancel</button>
                <button type="submit" className="rsw-primary-btn" disabled={submitDisabled}>
                  {status === 'submitting' ? 'Sending…' : 'Join the Waitlist'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .rsw-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.65);
          z-index: 2000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          overflow-y: auto;
        }
        .rsw-dialog {
          background: white;
          color: var(--baseline-navy);
          border-radius: 16px;
          max-width: 560px;
          width: 100%;
          padding: 2rem 2rem 1.5rem;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          max-height: calc(100vh - 2rem);
          max-height: calc(100dvh - 2rem);
          overflow-y: auto;
        }
        .rsw-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: transparent;
          border: none;
          font-size: 1.75rem;
          line-height: 1;
          color: var(--concrete);
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }
        .rsw-close:hover {
          background: var(--concrete-light);
          color: var(--baseline-navy);
        }
        h2 {
          font-size: 1.5rem;
          color: var(--baseline-navy);
          margin-bottom: 0.25rem;
        }
        .rsw-lede {
          color: var(--concrete);
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .rsw-honeypot {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          opacity: 0;
        }
        .rsw-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .rsw-field {
          display: block;
          margin-bottom: 0.75rem;
        }
        .rsw-field span {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--baseline-navy);
          margin-bottom: 0.25rem;
        }
        .rsw-field em,
        .rsw-fieldset em {
          color: var(--rally-orange);
          font-style: normal;
        }
        .rsw-field input,
        .rsw-field select,
        .rsw-field textarea {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid var(--concrete-light);
          border-radius: 8px;
          font: inherit;
          line-height: 1.5;
          color: var(--baseline-navy);
          background: white;
          box-sizing: border-box;
        }
        .rsw-field select {
          appearance: none;
          -webkit-appearance: none;
          -moz-appearance: none;
          padding-right: 2.25rem;
          background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2012%208%22%3E%3Cpath%20fill%3D%22none%22%20stroke%3D%22%2364748B%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%20d%3D%22M1%201l5%205%205-5%22%2F%3E%3C%2Fsvg%3E");
          background-repeat: no-repeat;
          background-position: right 0.75rem center;
          background-size: 0.7rem auto;
        }
        .rsw-field textarea {
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
        }
        .rsw-field input:focus,
        .rsw-field select:focus,
        .rsw-field textarea:focus {
          outline: none;
          border-color: var(--baseline-navy);
          box-shadow: 0 0 0 3px rgba(71, 85, 105, 0.15);
        }
        .rsw-field input[aria-invalid="true"],
        .rsw-field select[aria-invalid="true"],
        .rsw-field textarea[aria-invalid="true"] {
          border-color: var(--danger);
        }

        /* Availability group — a surface-alt panel rather than a bare list, so
           the four options read as one answer to one question. */
        .rsw-fieldset {
          border: 0;
          margin-bottom: 0.75rem;
          padding: 0.85rem 1rem 0.9rem;
          background: var(--surface-alt);
          border-radius: 6px;
        }
        .rsw-fieldset legend {
          font-size: 0.85rem;
          font-weight: 600;
          color: var(--baseline-navy);
          padding: 0;
          margin-bottom: 0.5rem;
        }
        .rsw-hint {
          font-weight: 400;
          color: var(--muted);
        }
        .rsw-checks {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.4rem 0.75rem;
        }
        .rsw-check {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.92rem;
          cursor: pointer;
        }
        .rsw-check input {
          width: 1rem;
          height: 1rem;
          accent-color: var(--rally-orange);
          cursor: pointer;
          flex-shrink: 0;
        }

        .rsw-err {
          display: block;
          color: var(--danger);
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }
        .rsw-turnstile {
          margin: 0.75rem 0 0.5rem;
          min-height: 65px;
        }
        .rsw-error-banner {
          background: var(--danger-bg);
          color: var(--danger);
          border: 1px solid var(--danger-border);
          border-radius: 8px;
          padding: 0.6rem 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
        }
        .rsw-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }
        .rsw-primary-btn {
          background: var(--baseline-navy);
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .rsw-primary-btn:disabled {
          background: var(--concrete);
          cursor: not-allowed;
        }
        .rsw-secondary-btn {
          background: white;
          color: var(--baseline-navy);
          border: 1px solid var(--concrete-light);
          padding: 0.7rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .rsw-secondary-btn:hover:not(:disabled) {
          background: var(--concrete-light);
        }
        .rsw-success {
          text-align: center;
          padding: 1rem 0;
        }
        .rsw-success h2 {
          margin-bottom: 0.75rem;
        }
        .rsw-success p {
          color: var(--baseline-navy);
          margin-bottom: 1.5rem;
        }
        @media (max-width: 600px) {
          .rsw-backdrop {
            padding: 0;
            align-items: stretch;
          }
          .rsw-dialog {
            border-radius: 0;
            max-height: 100vh;
            max-height: 100dvh;
            max-width: 100%;
            padding: 1.25rem 1rem;
          }
          .rsw-row {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 0;
          }
          .rsw-checks {
            grid-template-columns: 1fr;
          }
          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
