// Shared site footer — one source of truth (replaces the two divergent footers).
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <p>2026 Rally Club Pickleball</p>
        <nav className="site-footer-links">
          <a href="/">Home</a>
          <a href="https://www.facebook.com/profile.php?id=61572523900750" target="_blank" rel="noopener noreferrer">Facebook</a>
        </nav>
      </div>
      <style jsx>{`
        .site-footer { background: var(--baseline-navy); color: var(--court-white); padding: 2rem; }
        .site-footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem; }
        .site-footer-inner p { font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); }
        .site-footer-links { display: flex; gap: 1.5rem; }
        .site-footer-links a { color: var(--court-white); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
        .site-footer-links a:hover { color: var(--rally-orange); }
        @media (max-width: 600px) { .site-footer-inner { flex-direction: column; text-align: center; } }
      `}</style>
    </footer>
  );
}
