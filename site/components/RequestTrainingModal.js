import { useEffect, useRef, useState, useCallback } from 'react';

const TURNSTILE_SCRIPT_ID = 'cf-turnstile-script';
const TURNSTILE_SCRIPT_SRC = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
const FALLBACK_TEST_SITE_KEY = '1x00000000000000000000AA';

function loadTurnstileScript() {
  if (typeof window === 'undefined') return Promise.resolve();
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(TURNSTILE_SCRIPT_ID);
  if (existing) {
    return new Promise(resolve => {
      const check = () => (window.turnstile ? resolve() : setTimeout(check, 50));
      check();
    });
  }
  return new Promise(resolve => {
    const script = document.createElement('script');
    script.id = TURNSTILE_SCRIPT_ID;
    script.src = TURNSTILE_SCRIPT_SRC;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      const check = () => (window.turnstile ? resolve() : setTimeout(check, 50));
      check();
    };
    document.head.appendChild(script);
  });
}

export default function RequestTrainingModal({ open, onClose, instructors = [] }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    instructorId: 'any',
    duprOrSkill: '',
    goals: '',
    preferredTimes: '',
    notes: '',
    website: ''
  });
  const [status, setStatus] = useState('form');
  const [errorMsg, setErrorMsg] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});
  const [turnstileToken, setTurnstileToken] = useState('');
  const turnstileContainerRef = useRef(null);
  const turnstileWidgetIdRef = useRef(null);
  const pageLoadAtRef = useRef(null);
  const previousActiveRef = useRef(null);
  const dialogRef = useRef(null);

  const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || FALLBACK_TEST_SITE_KEY;
  const activeInstructors = instructors.filter(i => i && i.active !== false);

  const resetForm = useCallback(() => {
    setForm({
      name: '', email: '', phone: '', instructorId: 'any',
      duprOrSkill: '', goals: '', preferredTimes: '', notes: '', website: ''
    });
    setStatus('form');
    setErrorMsg('');
    setFieldErrors({});
    setTurnstileToken('');
  }, []);

  useEffect(() => {
    if (!open) return undefined;

    pageLoadAtRef.current = Date.now();
    previousActiveRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const onKey = (e) => {
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
          callback: (token) => setTurnstileToken(token),
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

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) setFieldErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMsg('');
    setFieldErrors({});

    const elapsedMs = pageLoadAtRef.current ? Date.now() - pageLoadAtRef.current : 0;
    const payload = { ...form, elapsedMs, turnstileToken };

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
      setErrorMsg("Something went wrong on our end. Please try again in a moment.");
    } catch {
      setStatus('form');
      setErrorMsg("We couldn't reach the server. Please check your connection and try again.");
    }
  };

  const onBackdropClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  const submitDisabled = status === 'submitting' || !turnstileToken;

  return (
    <div className="ptm-backdrop" onMouseDown={onBackdropClick} role="dialog" aria-modal="true" aria-labelledby="ptm-title">
      <div className="ptm-dialog" ref={dialogRef}>
        <button className="ptm-close" type="button" aria-label="Close" onClick={onClose}>×</button>

        {status === 'success' ? (
          <div className="ptm-success">
            <h2 id="ptm-title">Request Sent</h2>
            <p>Thanks! We'll be in touch within 1–2 business days to schedule your session.</p>
            <button type="button" className="ptm-primary-btn" onClick={onClose}>Close</button>
          </div>
        ) : (
          <>
            <h2 id="ptm-title">Request Personal Training</h2>
            <p className="ptm-lede">Tell us a little about you and we'll match you with a coach.</p>

            <form onSubmit={onSubmit} noValidate>
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={form.website}
                onChange={onChange}
                className="ptm-honeypot"
                aria-hidden="true"
              />

              <div className="ptm-row">
                <label className="ptm-field">
                  <span>Name <em>*</em></span>
                  <input name="name" type="text" required maxLength={100} value={form.name} onChange={onChange} disabled={status === 'submitting'} />
                  {fieldErrors.name && <small className="ptm-err">{fieldErrors.name}</small>}
                </label>
                <label className="ptm-field">
                  <span>Email <em>*</em></span>
                  <input name="email" type="email" required maxLength={200} value={form.email} onChange={onChange} disabled={status === 'submitting'} />
                  {fieldErrors.email && <small className="ptm-err">{fieldErrors.email}</small>}
                </label>
              </div>

              <div className="ptm-row">
                <label className="ptm-field">
                  <span>Phone <em>*</em></span>
                  <input name="phone" type="tel" required maxLength={30} value={form.phone} onChange={onChange} disabled={status === 'submitting'} placeholder="(555) 555-5555" />
                  {fieldErrors.phone && <small className="ptm-err">{fieldErrors.phone}</small>}
                </label>
                <label className="ptm-field">
                  <span>Instructor</span>
                  <select name="instructorId" value={form.instructorId} onChange={onChange} disabled={status === 'submitting'}>
                    <option value="any">Any trainer</option>
                    {activeInstructors.map(i => (
                      <option key={i.id} value={i.id}>{i.name}</option>
                    ))}
                  </select>
                  {fieldErrors.instructorId && <small className="ptm-err">{fieldErrors.instructorId}</small>}
                </label>
              </div>

              <label className="ptm-field">
                <span>DUPR / Skill level <em>*</em></span>
                <input name="duprOrSkill" type="text" required maxLength={50} value={form.duprOrSkill} onChange={onChange} disabled={status === 'submitting'} placeholder="e.g. 3.5 or 'beginner'" />
                {fieldErrors.duprOrSkill && <small className="ptm-err">{fieldErrors.duprOrSkill}</small>}
              </label>

              <label className="ptm-field">
                <span>Goals (optional)</span>
                <textarea name="goals" rows={2} maxLength={1000} value={form.goals} onChange={onChange} disabled={status === 'submitting'} placeholder="What do you want to work on?" />
                {fieldErrors.goals && <small className="ptm-err">{fieldErrors.goals}</small>}
              </label>

              <label className="ptm-field">
                <span>Preferred days / times <em>*</em></span>
                <textarea name="preferredTimes" rows={2} maxLength={500} value={form.preferredTimes} onChange={onChange} disabled={status === 'submitting'} placeholder="e.g. weekday mornings, Wed evenings" />
                {fieldErrors.preferredTimes && <small className="ptm-err">{fieldErrors.preferredTimes}</small>}
              </label>

              <label className="ptm-field">
                <span>Notes (optional)</span>
                <textarea name="notes" rows={2} maxLength={1000} value={form.notes} onChange={onChange} disabled={status === 'submitting'} />
                {fieldErrors.notes && <small className="ptm-err">{fieldErrors.notes}</small>}
              </label>

              <div className="ptm-turnstile" ref={turnstileContainerRef} />

              {errorMsg && <div className="ptm-error-banner">{errorMsg}</div>}

              <div className="ptm-actions">
                <button type="button" className="ptm-secondary-btn" onClick={onClose} disabled={status === 'submitting'}>Cancel</button>
                <button type="submit" className="ptm-primary-btn" disabled={submitDisabled}>
                  {status === 'submitting' ? 'Sending…' : 'Send Request'}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <style jsx>{`
        .ptm-backdrop {
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
        .ptm-dialog {
          background: white;
          color: #1a1a1a;
          border-radius: 16px;
          max-width: 560px;
          width: 100%;
          padding: 2rem 2rem 1.5rem;
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
          max-height: calc(100vh - 2rem);
          overflow-y: auto;
        }
        .ptm-close {
          position: absolute;
          top: 0.75rem;
          right: 0.75rem;
          background: transparent;
          border: none;
          font-size: 1.75rem;
          line-height: 1;
          color: #64748B;
          cursor: pointer;
          padding: 0.25rem 0.5rem;
          border-radius: 6px;
        }
        .ptm-close:hover {
          background: #f1f5f9;
          color: #475569;
        }
        h2 {
          font-size: 1.5rem;
          color: #475569;
          margin-bottom: 0.25rem;
        }
        .ptm-lede {
          color: #64748B;
          margin-bottom: 1.25rem;
          font-size: 0.95rem;
        }
        .ptm-honeypot {
          position: absolute;
          left: -9999px;
          width: 1px;
          height: 1px;
          opacity: 0;
        }
        .ptm-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
          margin-bottom: 0.75rem;
        }
        .ptm-field {
          display: block;
          margin-bottom: 0.75rem;
        }
        .ptm-field span {
          display: block;
          font-size: 0.85rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 0.25rem;
        }
        .ptm-field em {
          color: #FF6600;
          font-style: normal;
        }
        .ptm-field input,
        .ptm-field select,
        .ptm-field textarea {
          width: 100%;
          padding: 0.6rem 0.75rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font: inherit;
          color: #1a1a1a;
          background: white;
          box-sizing: border-box;
        }
        .ptm-field textarea {
          resize: vertical;
          min-height: 60px;
          font-family: inherit;
        }
        .ptm-field input:focus,
        .ptm-field select:focus,
        .ptm-field textarea:focus {
          outline: none;
          border-color: #475569;
          box-shadow: 0 0 0 3px rgba(71, 85, 105, 0.15);
        }
        .ptm-err {
          display: block;
          color: #b91c1c;
          font-size: 0.8rem;
          margin-top: 0.25rem;
        }
        .ptm-turnstile {
          margin: 0.75rem 0 0.5rem;
          min-height: 65px;
        }
        .ptm-error-banner {
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          border-radius: 8px;
          padding: 0.6rem 0.75rem;
          margin-bottom: 0.75rem;
          font-size: 0.9rem;
        }
        .ptm-actions {
          display: flex;
          gap: 0.75rem;
          justify-content: flex-end;
          margin-top: 0.5rem;
        }
        .ptm-primary-btn {
          background: #475569;
          color: white;
          border: none;
          padding: 0.7rem 1.5rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .ptm-primary-btn:hover:not(:disabled) {
          background: #334155;
        }
        .ptm-primary-btn:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
        .ptm-secondary-btn {
          background: white;
          color: #475569;
          border: 1px solid #cbd5e1;
          padding: 0.7rem 1.25rem;
          border-radius: 8px;
          font-weight: 600;
          cursor: pointer;
          font-size: 1rem;
        }
        .ptm-secondary-btn:hover:not(:disabled) {
          background: #f8fafc;
        }
        .ptm-success {
          text-align: center;
          padding: 1rem 0;
        }
        .ptm-success h2 {
          margin-bottom: 0.75rem;
        }
        .ptm-success p {
          color: #475569;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 600px) {
          .ptm-backdrop {
            padding: 0;
            align-items: stretch;
          }
          .ptm-dialog {
            border-radius: 0;
            max-height: 100vh;
            max-width: 100%;
            padding: 1.25rem 1rem;
          }
          .ptm-row {
            grid-template-columns: 1fr;
            gap: 0;
            margin-bottom: 0;
          }
          h2 {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </div>
  );
}
