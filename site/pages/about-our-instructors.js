import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import RequestTrainingModal from '../components/RequestTrainingModal';
import instructors from '../data/instructors.json';

const PICKLEPLANNER_BOOK_URL = 'https://rallyclub.pickleplanner.com/dashboard/lesson/book';

function initialsFor(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function AboutOurInstructors() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [personalModalOpen, setPersonalModalOpen] = useState(false);
  const activeInstructors = instructors.filter(i => i && i.active !== false);

  return (
    <>
      <Head>
        <title>About Our Instructors | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Meet the Rally Club Pickleball coaches. PPR-certified pros teaching beginner clinics, performance training, and 1-on-1 lessons in Glen Carbon, IL."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/about-our-instructors" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="About Our Instructors | Rally Club Pickleball" />
        <meta
          property="og:description"
          content="Meet the coaches behind Rally Academy. PPR-certified pros teaching all levels."
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/about-our-instructors" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Club Pickleball Instructors" />
        <meta
          name="twitter:description"
          content="Meet the coaches behind Rally Academy."
        />
        <meta name="twitter:image" content="/logo-transparent.png" />
      </Head>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <a href="/" className="logo">
              <Image
                src="/logo-transparent.png"
                alt="Rally Club Pickleball Logo"
                width={40}
                height={40}
                style={{ marginRight: '0.5rem', objectFit: 'contain' }}
              />
              Rally Club Pickleball
            </a>
            <nav className="nav">
              <a href="/#booking" className="nav-link">Book a Court</a>
              <a href="/#membership" className="nav-link">Membership</a>
              <a href="/merch" className="nav-link">Merch</a>
              <a href="/honcho" className="nav-link honcho-nav-link">Honcho League</a>
              <a href="/rally-academy" className="nav-link academy-nav-link">Rally Academy</a>
              <a href="/rally-experiences" className="nav-link rally-nav-link">Rally Experiences</a>
            </nav>
            <button
              className="mobile-menu-button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`hamburger ${mobileMenuOpen ? 'open' : ''}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <nav className="mobile-nav">
            <a href="/#booking" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Book a Court</a>
            <a href="/#membership" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Membership</a>
            <a href="/merch" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Merch</a>
            <a href="/honcho" className="mobile-nav-link honcho-link" onClick={() => setMobileMenuOpen(false)}>Honcho League</a>
            <a href="/rally-academy" className="mobile-nav-link academy-link" onClick={() => setMobileMenuOpen(false)}>Rally Academy</a>
            <a href="/rally-experiences" className="mobile-nav-link rally-link" onClick={() => setMobileMenuOpen(false)}>Rally Experiences</a>
          </nav>
        </div>

        {/* Hero */}
        <section className="instructors-hero">
          <div className="instructors-hero-content">
            <h1 className="instructors-hero-title">About Our Instructors</h1>
            <p className="instructors-hero-subtitle">
              Meet the coaches behind Rally Academy &mdash; each ready to help you find your next level.
            </p>
          </div>
        </section>

        {/* Instructor Cards */}
        <section className="instructors-grid-section">
          <div className="instructors-grid">
            {activeInstructors.map(coach => (
              <article key={coach.id} className="coach-card">
                <div className="coach-photo">
                  {coach.photo ? (
                    <img src={coach.photo} alt={`${coach.name} headshot`} />
                  ) : (
                    <div className="coach-photo-fallback" aria-label={`${coach.name} (photo coming soon)`}>
                      {initialsFor(coach.name)}
                    </div>
                  )}
                </div>
                <h2 className="coach-name">{coach.name}</h2>
                <div className="coach-bio">
                  {coach.bio.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Ready to train?</h2>
            <p className="cta-reassurance">Request a 1-on-1 session, or browse availability and book directly.</p>
            <div className="cta-buttons">
              <button
                type="button"
                className="cta-button primary"
                onClick={() => setPersonalModalOpen(true)}
              >
                Request Personal Training
              </button>
              <a
                className="cta-button secondary"
                href={PICKLEPLANNER_BOOK_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book on PicklePlanner
              </a>
            </div>
          </div>
        </section>

        <RequestTrainingModal
          open={personalModalOpen}
          onClose={() => setPersonalModalOpen(false)}
          instructors={instructors}
        />

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Rally Club Pickleball. All rights reserved.</p>
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="https://www.facebook.com/profile.php?id=61572523900750" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Header (mirrors rally-academy.js) */
        .header {
          background: white;
          padding: 1rem 0;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
        }
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: bold;
          color: #333;
          display: flex;
          align-items: center;
          text-decoration: none;
        }
        .nav { display: flex; align-items: center; gap: 2rem; }
        .nav-link {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s;
        }
        .nav-link:hover, .nav-link.active { color: #FF6600; }
        .academy-nav-link { color: #475569 !important; font-weight: 600; }
        .academy-nav-link:hover, .academy-nav-link.active { color: #64748B !important; }
        .honcho-nav-link { color: #2D5A27 !important; font-weight: 600; }
        .honcho-nav-link:hover { color: #3E7B3E !important; }
        .rally-nav-link { color: #FF6600 !important; font-weight: 600; }
        .rally-nav-link:hover { color: #E65100 !important; }

        .mobile-menu-button {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0.5rem;
          z-index: 1001;
        }
        .hamburger {
          width: 25px;
          height: 20px;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .hamburger span {
          display: block;
          height: 3px;
          width: 100%;
          background: #64748B;
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(6px, -6px); }

        .mobile-menu {
          position: fixed;
          top: 70px;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          z-index: 999;
          transform: translateX(100%);
          transition: transform 0.3s ease;
          overflow-y: auto;
          display: none;
        }
        @media (max-width: 768px) { .mobile-menu { display: block; } }
        .mobile-menu.open { transform: translateX(0); }
        .mobile-nav {
          display: flex;
          flex-direction: column;
          padding: 2rem;
          gap: 0.5rem;
        }
        .mobile-nav-link {
          color: #333;
          text-decoration: none;
          font-weight: 500;
          padding: 1rem;
          border-radius: 8px;
          transition: all 0.3s ease;
          text-align: center;
          border: 1px solid rgba(0, 0, 0, 0.1);
        }
        .mobile-nav-link.academy-link {
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          border-color: #64748B;
        }
        .mobile-nav-link.honcho-link {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          border-color: #3E7B3E;
        }
        .mobile-nav-link.rally-link {
          background: #FF6600;
          color: white !important;
          border-color: #FF6600;
        }

        /* Hero */
        .instructors-hero {
          margin-top: 80px;
          padding: 3.25rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          text-align: center;
          position: relative;
        }
        .instructors-hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }
        .instructors-hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }
        .instructors-hero-subtitle {
          font-size: 1.2rem;
          color: #CBD5E1;
        }

        /* Instructor Grid */
        .instructors-grid-section {
          padding: 3.25rem 2rem;
          background: #f8f9fa;
        }
        .instructors-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .coach-card {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .coach-photo {
          width: 160px;
          height: 160px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 1.25rem;
          background: #e2e8f0;
          flex-shrink: 0;
        }
        .coach-photo img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .coach-photo-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          font-size: 3rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }

        .coach-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #475569;
          margin-bottom: 1rem;
        }

        .coach-bio {
          color: #475569;
          line-height: 1.65;
        }
        .coach-bio p {
          margin-bottom: 0.85rem;
        }
        .coach-bio p:last-child { margin-bottom: 0; }

        /* Final CTA */
        .final-cta {
          padding: 3.25rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          text-align: center;
          color: white;
        }
        .cta-content { max-width: 700px; margin: 0 auto; }
        .cta-content h2 {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }
        .cta-reassurance {
          font-size: 1.15rem;
          color: #CBD5E1;
          margin-bottom: 1.5rem;
        }
        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .cta-button {
          padding: 1rem 2rem;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          font-family: inherit;
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }
        .cta-button.primary {
          background: white;
          color: #475569;
        }
        .cta-button.primary:hover {
          background: #F1F5F9;
          transform: translateY(-2px);
        }
        .cta-button.secondary {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.7);
        }
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: white;
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: #1a1a1a;
          color: white;
          padding: 2rem;
          text-align: center;
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .footer-links { display: flex; gap: 2rem; }
        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }
        .footer-links a:hover { color: #94A3B8; }

        /* Responsive */
        @media (max-width: 768px) {
          .nav { display: none; }
          .mobile-menu-button { display: block; }
          .instructors-hero-title { font-size: 2.25rem; }
          .instructors-hero-subtitle { font-size: 1.05rem; }
          .instructors-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .coach-photo { width: 140px; height: 140px; }
          .footer-content { flex-direction: column; gap: 1rem; }
          .cta-buttons { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .instructors-hero-title { font-size: 1.85rem; }
        }
      `}</style>
    </>
  );
}
