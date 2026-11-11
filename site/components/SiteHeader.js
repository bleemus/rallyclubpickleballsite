import { useEffect, useState } from 'react';
import Image from 'next/image';

// Many players type the club's own domain when asked to log into PicklePlanner,
// so the header carries a "Book a Court" button that goes straight there.
const PICKLEPLANNER_BOOK_URL = 'https://rallyclub.pickleplanner.com/dashboard/reservation/make';

const NAV = [
  { href: '/#membership', label: 'Membership', key: 'membership' },
  { href: '/merch', label: 'Merch', key: 'merch' },
  { href: '/rally-academy', label: 'Rally Academy', key: 'academy' },
  { href: '/rally-experiences', label: 'Rally Experiences', key: 'experiences' },
];

// Shared site chrome — one source of truth for the header, nav, and mobile menu.
// `active` is one of the NAV keys and highlights the current page.
// `bookCtaWatchId`: id of an on-page booking button (the home hero CTA). While that
// button is on screen or below, the header's Book button stays hidden so the two
// don't duplicate; it fades in once the user scrolls past it. Omit to always show.
export default function SiteHeader({ active, bookCtaWatchId }) {
  const [open, setOpen] = useState(false);
  // Initial state must match the static-export render, so a watched page starts hidden.
  const [showBook, setShowBook] = useState(!bookCtaWatchId);

  useEffect(() => {
    if (!bookCtaWatchId) return;
    const target = document.getElementById(bookCtaWatchId);
    if (!target || typeof IntersectionObserver === 'undefined') { setShowBook(true); return; }
    const header = document.querySelector('.site-header');
    const headerH = header ? header.offsetHeight : 0;
    // Shrink the root by the fixed header so "scrolled past" means past the header's bottom edge.
    const observer = new IntersectionObserver(
      ([entry]) => setShowBook(!entry.isIntersecting && entry.boundingClientRect.top < headerH),
      { rootMargin: `-${headerH}px 0px 0px 0px` }
    );
    observer.observe(target);
    return () => observer.disconnect();
  }, [bookCtaWatchId]);

  return (
    <>
      <header className="site-header">
        <div className="site-header-inner">
          <a href="/" className="site-logo">
            <Image src="/logo-transparent.png" alt="Rally Club Pickleball" width={40} height={40} style={{ objectFit: 'contain' }} />
            <span>Rally Club Pickleball</span>
          </a>
          <nav className="site-nav">
            {NAV.map((n) => (
              <a key={n.key} href={n.href} className={`site-nav-link${active === n.key ? ' active' : ''}`}>{n.label}</a>
            ))}
          </nav>
          <a href={PICKLEPLANNER_BOOK_URL} className={`site-book${showBook ? '' : ' hidden'}`} target="_blank" rel="noopener noreferrer" aria-hidden={!showBook} tabIndex={showBook ? undefined : -1}>
            <span className="site-book-long">Book a Court at PicklePlanner</span>
            <span className="site-book-short">Book a Court</span>
          </a>
          <button className="site-burger" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
            <span className={`site-burger-box${open ? ' open' : ''}`}><i></i><i></i><i></i></span>
          </button>
        </div>
      </header>
      <div className={`site-mobile${open ? ' open' : ''}`}>
        <nav className="site-mobile-nav">
          {NAV.map((n) => (
            <a key={n.key} href={n.href} className={`site-mobile-link${active === n.key ? ' active' : ''}`} onClick={() => setOpen(false)}>{n.label}</a>
          ))}
        </nav>
      </div>
      <style jsx>{`
        .site-header { background: var(--court-white); border-bottom: 2px solid var(--border); position: fixed; top: 0; width: 100%; z-index: 1000; }
        .site-header-inner { max-width: 1200px; margin: 0 auto; padding: 0.75rem 2rem; display: flex; justify-content: space-between; align-items: center; }
        .site-logo { display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: var(--ink); font-family: var(--font-display); font-weight: 800; text-transform: uppercase; letter-spacing: 0.01em; font-size: 1.05rem; }
        .site-nav { display: flex; align-items: center; gap: 1.75rem; }
        .site-nav-link { text-decoration: none; color: var(--muted); font-weight: 500; font-size: 0.95rem; transition: color 0.2s; }
        .site-nav-link:hover, .site-nav-link.active { color: var(--rally-orange); }
        .site-nav-link.active { font-weight: 600; }
        .site-book { margin-left: 1.75rem; flex-shrink: 0; background: var(--rally-orange); color: white; text-decoration: none; font-weight: 700; font-size: 1rem; padding: 0.65rem 1.25rem; border-radius: 8px; white-space: nowrap; transition: background 0.2s, opacity 0.25s, visibility 0.25s; }
        .site-book:hover { background: var(--orange-ink); }
        /* Hidden keeps its layout slot so the nav doesn't jump when it fades in. */
        .site-book.hidden { opacity: 0; visibility: hidden; pointer-events: none; }
        .site-book-short { display: none; }
        .site-burger { display: none; background: none; border: none; cursor: pointer; padding: 0.5rem; z-index: 1001; }
        .site-burger-box { width: 25px; height: 20px; display: flex; flex-direction: column; justify-content: space-between; }
        .site-burger-box i { display: block; height: 3px; width: 100%; background: var(--rally-orange); border-radius: 2px; transition: all 0.3s ease; }
        .site-burger-box.open i:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
        .site-burger-box.open i:nth-child(2) { opacity: 0; }
        .site-burger-box.open i:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }
        .site-mobile { position: fixed; top: 62px; left: 0; right: 0; bottom: 0; background: var(--court-white); z-index: 999; transform: translateX(100%); transition: transform 0.3s ease; overflow-y: auto; display: none; }
        .site-mobile.open { transform: translateX(0); }
        .site-mobile-nav { display: flex; flex-direction: column; padding: 1.5rem; gap: 0.5rem; }
        .site-mobile-link { color: var(--ink); text-decoration: none; font-weight: 500; padding: 1rem; border: 1px solid var(--border); border-radius: 8px; text-align: center; transition: color 0.2s, border-color 0.2s; }
        .site-mobile-link:hover, .site-mobile-link.active { border-color: var(--rally-orange); color: var(--rally-orange); }
        /* The full nav plus the Book button needs ~1150px; below that, collapse to the burger
           so the button never gets squeezed or wrapped. */
        @media (max-width: 1150px) {
          .site-nav { display: none; }
          .site-burger { display: block; }
          .site-mobile { display: block; }
          .site-book { margin-left: auto; margin-right: 0.5rem; }
        }
        @media (max-width: 480px) {
          .site-header-inner { padding: 0.75rem 1rem; }
          .site-logo span { display: none; }
          .site-book-long { display: none; }
          .site-book-short { display: inline; }
        }
      `}</style>
    </>
  );
}
