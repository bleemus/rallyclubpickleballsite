import { useEffect, useState, useCallback } from 'react';
import Head from 'next/head';

const STATUS_OPTIONS = ['All', 'New', 'Contacted', 'Scheduled', 'Closed', 'Spam'];

function formatRelative(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  const diffMs = Date.now() - d.getTime();
  const min = Math.floor(diffMs / 60000);
  if (min < 1) return 'just now';
  if (min < 60) return `${min}m ago`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h ago`;
  const day = Math.floor(hr / 24);
  if (day < 30) return `${day}d ago`;
  return d.toLocaleDateString();
}

export default function AdminDashboard() {
  const [me, setMe] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [expandedId, setExpandedId] = useState(null);
  const [editDraft, setEditDraft] = useState({ status: '', adminNotes: '' });
  const [saving, setSaving] = useState(false);

  const load = useCallback(async () => {
    setLoading(true);
    setError('');
    try {
      const q = statusFilter && statusFilter !== 'All' ? `?status=${encodeURIComponent(statusFilter)}` : '';
      const res = await fetch(`/api/manage/requests${q}`, { credentials: 'include' });
      if (!res.ok) {
        if (res.status === 401 || res.status === 403) {
          window.location.href = '/.auth/login/github?post_login_redirect_uri=/admin/';
          return;
        }
        throw new Error(`Failed (${res.status})`);
      }
      const data = await res.json();
      setItems(data.items || []);
    } catch (err) {
      setError(err.message || 'Failed to load requests');
    } finally {
      setLoading(false);
    }
  }, [statusFilter]);

  useEffect(() => {
    fetch('/.auth/me', { credentials: 'include' })
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        const principal = data && (data.clientPrincipal || (data[0] && data[0].user_id ? data[0] : null));
        if (principal) setMe(principal);
      })
      .catch(() => {});
  }, []);

  useEffect(() => { load(); }, [load]);

  const expand = (item) => {
    if (expandedId === item.id) {
      setExpandedId(null);
      return;
    }
    setExpandedId(item.id);
    setEditDraft({ status: item.status, adminNotes: item.adminNotes || '' });
  };

  const save = async (item) => {
    setSaving(true);
    try {
      const res = await fetch(`/api/manage/requests/${item.partitionKey}/${item.rowKey}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(editDraft)
      });
      if (!res.ok) throw new Error('save failed');
      await load();
      setExpandedId(null);
    } catch (err) {
      setError('Failed to save changes');
    } finally {
      setSaving(false);
    }
  };

  const remove = async (item) => {
    if (!confirm(`Delete request from ${item.name}? This cannot be undone.`)) return;
    setSaving(true);
    try {
      const res = await fetch(`/api/manage/requests/${item.partitionKey}/${item.rowKey}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      if (!res.ok) throw new Error('delete failed');
      await load();
      setExpandedId(null);
    } catch (err) {
      setError('Failed to delete');
    } finally {
      setSaving(false);
    }
  };

  return (
    <>
      <Head>
        <title>Admin · Training Requests | Rally Club</title>
        <meta name="robots" content="noindex,nofollow" />
      </Head>

      <div className="admin">
        <header className="admin-header">
          <div className="admin-header-inner">
            <a href="/" className="admin-brand">Rally Club · Admin</a>
            <div className="admin-user">
              {me ? (
                <>
                  <span>Signed in as <strong>{me.userDetails}</strong></span>
                  <a href="/.auth/logout?post_logout_redirect_uri=/">Sign out</a>
                </>
              ) : (
                <a href="/.auth/login/github?post_login_redirect_uri=/admin/">Sign in</a>
              )}
            </div>
          </div>
        </header>

        <main className="admin-main">
          <div className="admin-top">
            <h1>Training Requests</h1>
            <button type="button" className="admin-refresh" onClick={load} disabled={loading}>
              {loading ? 'Loading…' : 'Refresh'}
            </button>
          </div>

          <div className="admin-filters">
            {STATUS_OPTIONS.map(s => (
              <button
                key={s}
                type="button"
                className={`admin-chip ${statusFilter === s ? 'active' : ''}`}
                onClick={() => setStatusFilter(s)}
              >
                {s}
              </button>
            ))}
          </div>

          {error && <div className="admin-error">{error}</div>}

          {!loading && items.length === 0 && (
            <div className="admin-empty">No requests with status &ldquo;{statusFilter}&rdquo;.</div>
          )}

          <div className="admin-table">
            {items.map(item => (
              <div key={item.id} className={`admin-row ${expandedId === item.id ? 'expanded' : ''}`}>
                <button type="button" className="admin-row-summary" onClick={() => expand(item)}>
                  <span className="col-when">{formatRelative(item.submittedAt)}</span>
                  <span className="col-name"><strong>{item.name}</strong></span>
                  <span className="col-contact">
                    <span>{item.email}</span>
                    <span className="muted">{item.phone}</span>
                  </span>
                  <span className="col-instructor">{item.instructorName || 'Any trainer'}</span>
                  <span className="col-skill muted">{item.duprOrSkill}</span>
                  <span className={`admin-status status-${item.status}`}>{item.status}</span>
                </button>

                {expandedId === item.id && (
                  <div className="admin-row-detail">
                    <div className="detail-grid">
                      <div>
                        <h4>Goals</h4>
                        <p>{item.goals || <em className="muted">none</em>}</p>
                      </div>
                      <div>
                        <h4>Preferred times</h4>
                        <p>{item.preferredTimes || <em className="muted">none</em>}</p>
                      </div>
                      <div>
                        <h4>Notes from requester</h4>
                        <p>{item.notes || <em className="muted">none</em>}</p>
                      </div>
                      <div>
                        <h4>Submitted</h4>
                        <p>{new Date(item.submittedAt).toLocaleString()}</p>
                      </div>
                    </div>

                    <div className="detail-edit">
                      <label>
                        <span>Status</span>
                        <select
                          value={editDraft.status}
                          onChange={(e) => setEditDraft({ ...editDraft, status: e.target.value })}
                          disabled={saving}
                        >
                          {STATUS_OPTIONS.filter(s => s !== 'All').map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </label>
                      <label className="full-width">
                        <span>Admin notes</span>
                        <textarea
                          rows={3}
                          maxLength={2000}
                          value={editDraft.adminNotes}
                          onChange={(e) => setEditDraft({ ...editDraft, adminNotes: e.target.value })}
                          disabled={saving}
                        />
                      </label>
                    </div>

                    <div className="detail-actions">
                      <button type="button" className="btn-danger" onClick={() => remove(item)} disabled={saving}>
                        Delete
                      </button>
                      <div className="spacer" />
                      <button type="button" className="btn-secondary" onClick={() => setExpandedId(null)} disabled={saving}>
                        Cancel
                      </button>
                      <button type="button" className="btn-primary" onClick={() => save(item)} disabled={saving}>
                        {saving ? 'Saving…' : 'Save'}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </main>
      </div>

      <style jsx>{`
        * { box-sizing: border-box; }
        .admin {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          color: #1a1a1a;
          background: #f8fafc;
          min-height: 100vh;
        }
        .admin-header {
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          padding: 1rem 0;
        }
        .admin-header-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
        }
        .admin-brand {
          color: white;
          font-weight: 700;
          font-size: 1.1rem;
          text-decoration: none;
        }
        .admin-user {
          font-size: 0.9rem;
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .admin-user a {
          color: #CBD5E1;
          text-decoration: underline;
        }
        .admin-main {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1.5rem;
        }
        .admin-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 1rem;
        }
        .admin-top h1 {
          font-size: 1.75rem;
          color: #475569;
          margin: 0;
        }
        .admin-refresh {
          background: white;
          border: 1px solid #cbd5e1;
          padding: 0.5rem 1rem;
          border-radius: 8px;
          cursor: pointer;
          font: inherit;
          color: #475569;
          font-weight: 600;
        }
        .admin-refresh:hover:not(:disabled) {
          background: #f1f5f9;
        }
        .admin-filters {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }
        .admin-chip {
          background: white;
          border: 1px solid #cbd5e1;
          padding: 0.4rem 0.9rem;
          border-radius: 999px;
          cursor: pointer;
          font: inherit;
          color: #475569;
          font-size: 0.9rem;
        }
        .admin-chip:hover {
          background: #f1f5f9;
        }
        .admin-chip.active {
          background: #475569;
          color: white;
          border-color: #475569;
        }
        .admin-error {
          background: #fef2f2;
          color: #b91c1c;
          border: 1px solid #fecaca;
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 1rem;
        }
        .admin-empty {
          background: white;
          border: 1px dashed #cbd5e1;
          padding: 2rem;
          text-align: center;
          color: #64748B;
          border-radius: 12px;
        }
        .admin-table {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          border: 1px solid #e2e8f0;
        }
        .admin-row {
          border-bottom: 1px solid #e2e8f0;
        }
        .admin-row:last-child {
          border-bottom: none;
        }
        .admin-row.expanded {
          background: #f8fafc;
        }
        .admin-row-summary {
          width: 100%;
          background: transparent;
          border: none;
          padding: 1rem 1.25rem;
          display: grid;
          grid-template-columns: 110px 1.2fr 1.6fr 1fr 0.7fr auto;
          align-items: center;
          gap: 1rem;
          cursor: pointer;
          text-align: left;
          font: inherit;
        }
        .admin-row-summary:hover {
          background: #f1f5f9;
        }
        .col-when { color: #64748B; font-size: 0.85rem; }
        .col-contact { display: flex; flex-direction: column; font-size: 0.9rem; }
        .col-contact .muted { font-size: 0.8rem; }
        .col-instructor { font-size: 0.9rem; }
        .col-skill { font-size: 0.85rem; }
        .muted { color: #64748B; }
        .admin-status {
          padding: 0.2rem 0.65rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          white-space: nowrap;
        }
        .status-New { background: #3b82f6; }
        .status-Contacted { background: #f59e0b; }
        .status-Scheduled { background: #10b981; }
        .status-Closed { background: #64748B; }
        .status-Spam { background: #b91c1c; }
        .admin-row-detail {
          padding: 1rem 1.5rem 1.25rem;
          border-top: 1px solid #e2e8f0;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem 2rem;
          margin-bottom: 1rem;
        }
        .detail-grid h4 {
          margin: 0 0 0.25rem;
          font-size: 0.85rem;
          color: #475569;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        .detail-grid p {
          margin: 0;
          color: #1a1a1a;
          font-size: 0.95rem;
          white-space: pre-wrap;
        }
        .detail-edit {
          display: grid;
          grid-template-columns: 200px 1fr;
          gap: 1rem;
          margin-bottom: 1rem;
        }
        .detail-edit label {
          display: block;
        }
        .detail-edit label.full-width {
          grid-column: span 1;
        }
        .detail-edit span {
          display: block;
          font-size: 0.85rem;
          color: #475569;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }
        .detail-edit select,
        .detail-edit textarea {
          width: 100%;
          padding: 0.5rem 0.6rem;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font: inherit;
          background: white;
        }
        .detail-edit textarea {
          font-family: inherit;
          resize: vertical;
        }
        .detail-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .detail-actions .spacer { flex: 1; }
        .btn-primary, .btn-secondary, .btn-danger {
          padding: 0.55rem 1.1rem;
          border-radius: 8px;
          font: inherit;
          font-weight: 600;
          cursor: pointer;
          border: 1px solid transparent;
        }
        .btn-primary {
          background: #475569;
          color: white;
        }
        .btn-primary:hover:not(:disabled) { background: #334155; }
        .btn-secondary {
          background: white;
          color: #475569;
          border-color: #cbd5e1;
        }
        .btn-secondary:hover:not(:disabled) { background: #f1f5f9; }
        .btn-danger {
          background: white;
          color: #b91c1c;
          border-color: #fecaca;
        }
        .btn-danger:hover:not(:disabled) { background: #fef2f2; }
        button:disabled { opacity: 0.6; cursor: not-allowed; }

        @media (max-width: 900px) {
          .admin-row-summary {
            grid-template-columns: 1fr;
            gap: 0.25rem;
          }
          .col-when { order: 0; }
          .col-name { order: 1; }
          .col-contact { order: 2; }
          .col-instructor { order: 3; }
          .col-skill { order: 4; }
          .admin-status { order: 5; align-self: flex-start; }
          .detail-grid,
          .detail-edit {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
