// Shared site footer — one source of truth (replaces the two divergent footers).
export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <address className="site-footer-contact">
          <strong>The Rally Club</strong>
          <span>1 Cottonwood Industrial Park, Ste 10, Glen Carbon, IL 62034</span>
          <span>
            <a href="mailto:info@rallyclubpickleball.com">info@rallyclubpickleball.com</a>
            <span className="sep" aria-hidden="true">·</span>
            <span className="nowrap">Text or call <a href="tel:+16186383019">618-638-3019</a></span>
          </span>
        </address>
        <div className="site-footer-meta">
          <nav className="site-footer-links">
            <a href="/">Home</a>
            <a href="https://www.facebook.com/profile.php?id=61572523900750" target="_blank" rel="noopener noreferrer">Facebook</a>
          </nav>
          <p>2026 Rally Club Pickleball</p>
        </div>
      </div>
      <style jsx>{`
        .site-footer { background: var(--baseline-navy); color: var(--court-white); padding: 2rem; }
        .site-footer-inner { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1.5rem; }
        .site-footer-contact { font-style: normal; display: flex; flex-direction: column; gap: 0.3rem; font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); line-height: 1.5; }
        .site-footer-contact strong { color: var(--court-white); font-size: 1rem; }
        .site-footer-contact a { color: var(--court-white); text-decoration: none; transition: color 0.2s; }
        .site-footer-contact a:hover { color: var(--rally-orange); }
        .sep { margin: 0 0.5rem; }
        .nowrap { white-space: nowrap; }
        .site-footer-meta { display: flex; flex-direction: column; align-items: flex-end; gap: 0.5rem; }
        .site-footer-meta p { font-size: 0.9rem; color: rgba(255, 255, 255, 0.7); }
        .site-footer-links { display: flex; gap: 1.5rem; }
        .site-footer-links a { color: var(--court-white); text-decoration: none; font-size: 0.9rem; transition: color 0.2s; }
        .site-footer-links a:hover { color: var(--rally-orange); }
        @media (max-width: 600px) {
          .site-footer-inner { flex-direction: column; text-align: center; }
          .site-footer-contact { align-items: center; }
          .sep { display: none; }
          .nowrap { display: block; }
          .site-footer-meta { align-items: center; }
        }
      `}</style>
    </footer>
  );
}
