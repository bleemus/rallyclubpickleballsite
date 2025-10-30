import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Honcho() {
  return (
    <>
      <Head>
        <title>Honcho Pickleball League | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Join the Honcho Pickleball League - the premier amateur pickleball community with doubles and ladder league formats. Registration open Oct 13-Nov 16."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/honcho" />
        <meta
          name="keywords"
          content="honcho pickleball, pickleball league, amateur tournament, doubles league, ladder league, glen carbon"
        />
        <meta property="og:title" content="Honcho Pickleball League" />
        <meta
          property="og:description"
          content="Join the premier amateur pickleball community with guaranteed weekly court time, championship prizes, and community events."
        />
        <meta property="og:image" content="/honcho-logo.svg" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/honcho" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Honcho Pickleball League" />
        <meta
          name="twitter:description"
          content="Premier amateur pickleball league with doubles and ladder formats. Registration open now!"
        />
        <meta name="twitter:image" content="/honcho-logo.svg" />
      </Head>

      <div className="container">
        {/* Header */}
        <header className="header">
          <div className="header-content">
            <div className="logo">
              <Image
                src="/logo-transparent.png"
                alt="Rally Club Pickleball Logo"
                width={40}
                height={40}
                style={{ marginRight: '0.5rem', objectFit: 'contain' }}
              />
              Rally Club Pickleball
            </div>
            <nav className="nav">
              <a href="/#booking" className="nav-link">Book a Court</a>
              <a href="/#membership" className="nav-link">Membership</a>
              <a href="/merch" className="nav-link">Merch</a>
              <a href="/#facility" className="nav-link">About us</a>
              <a href="/#contact" className="nav-link">Contact</a>
              <a href="/honcho" className="nav-link honcho-nav-link active">Honcho League</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="honcho-hero">
          <div className="honcho-hero-content">
            <Image
              src="/honcho-logo-optimized.png"
              alt="Honcho Pickleball Logo"
              width={300}
              height={145}
              style={{ marginBottom: '2rem' }}
            />
            <h1 className="honcho-hero-title">Join the Honcho Pickleball League</h1>
            <p className="honcho-hero-subtitle">
              The premier amateur pickleball community sweeping the nation
            </p>
            <div className="honcho-hero-cta">
              <a href="https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-winter-2026/" className="honcho-cta-button" target="_blank" rel="noopener noreferrer">Register Now (Use Code: RALLYCLUB)</a>
              <span className="honcho-hashtag">#HonchoFam</span>
            </div>
          </div>
        </section>

        {/* Registration Info */}
        <section id="registration" className="registration-section">
          <h2 className="section-title">Registration Information</h2>
          <div className="registration-info-centered">
            <div className="registration-card featured">
              <h3>Winter 2026 Season</h3>
              <div className="registration-dates">
                <div className="date-range">Season kicks off December 1st</div>
                <div className="season-info">Registration open now through November 16th</div>
                <div className="discount-highlight">Use code <strong>RALLYCLUB</strong> for your discount!</div>
              </div>
            </div>
          </div>
          <div className="league-break-info">
            <h3>League Break</h3>
            <p>December 22nd - January 4th</p>
            <p>Enjoy the holidays and come back refreshed for the new year!</p>
          </div>
        </section>

        {/* What's Included */}
        <section className="whats-included">
          <h2 className="section-title">What's Included</h2>
          <div className="included-grid">
            <div className="included-item">
              <div className="included-icon">⏰</div>
              <h3>Guaranteed Weekly Court Time</h3>
              <p>Secure your spot with guaranteed weekly court time across an 8-week season</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🏆</div>
              <h3>Championship Prizes</h3>
              <p>Compete for exciting prizes and recognition as league champions</p>
            </div>
            <div className="included-item">
              <div className="included-icon">🎉</div>
              <h3>End-of-Season Social Hour</h3>
              <p>Celebrate the season with fellow players at our exclusive social event</p>
            </div>
          </div>
        </section>

        {/* Competition Formats */}
        <section className="competition-formats">
          <h2 className="section-title">Doubles League Format</h2>
          <div className="format-single">
            <div className="format-card">
              <div className="format-icon">👥</div>
              <h3>Doubles League</h3>
              <p>Partner up with a friend or teammate and compete together throughout the season. Build chemistry and strategy as a team while facing other dynamic duos.</p>
              <ul className="format-features">
                <li>Team-based competition</li>
                <li>Consistent partnerships</li>
                <li>Strategic gameplay development</li>
                <li>Social team building</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Community Benefits */}
        <section className="community-benefits">
          <h2 className="section-title">More Than Just a Game</h2>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">🌟</div>
              <h3>A Community for All Levels</h3>
              <p>Whether you're just starting out or you're a seasoned player, Honcho welcomes players of all skill levels. Our inclusive environment helps everyone improve and have fun.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">🤝</div>
              <h3>Build Lasting Connections</h3>
              <p>Form friendships that extend beyond the court. Our league creates opportunities to meet like-minded players and build a strong pickleball community.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📅</div>
              <h3>Structured, Dependable Play</h3>
              <p>No more wondering when you'll get to play. Our league provides consistent, organized gameplay that fits into your schedule with reliable weekly matches.</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">📈</div>
              <h3>A Space to Grow Your Game</h3>
              <p>Challenge yourself against different opponents and playing styles. Our league environment provides the perfect setting to develop your skills and strategy.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Ready to Join the #HonchoFam?</h2>
            <p>Registration is open now through November 16th. Don't miss your chance to be part of the premier amateur pickleball community!</p>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#C8F560', marginTop: '-1rem', marginBottom: '2rem' }}>Use discount code: RALLYCLUB</p>
            <div className="cta-buttons">
              <a href="https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-winter-2026/" className="honcho-button primary large" target="_blank" rel="noopener noreferrer">Register for League</a>
            </div>
          </div>
        </section>

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
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #333;
        }

        /* Header */
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

        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          text-decoration: none;
          color: #666;
          font-weight: 500;
          transition: color 0.3s;
        }

        .nav-link:hover,
        .nav-link.active {
          color: #e74c3c;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover,
        .honcho-nav-link.active {
          color: #3E7B3E !important;
        }


        /* Hero Section */
        .honcho-hero {
          margin-top: 80px;
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          text-align: center;
          position: relative;
        }

        .honcho-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .honcho-hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .honcho-hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .honcho-hero-subtitle {
          font-size: 1.3rem;
          color: #E8F5E8;
          margin-bottom: 2.5rem;
        }

        .honcho-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .honcho-cta-button {
          background: #C8F560;
          color: #2D5A27;
          padding: 1.2rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.2rem;
          transition: all 0.3s ease;
        }

        .honcho-cta-button:hover {
          background: #B8E550;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(200, 245, 96, 0.3);
        }

        .honcho-hashtag {
          font-size: 1.5rem;
          font-weight: bold;
          color: #C8F560;
          font-style: italic;
        }

        /* Section Styles */
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-weight: bold;
          color: #2D5A27;
        }

        /* Registration Section */
        .registration-section {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }

        .registration-info-centered {
          max-width: 700px;
          margin: 0 auto 3rem;
        }

        .registration-card {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          border: 2px solid transparent;
        }

        .registration-card.featured {
          border-color: #C8F560;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
        }

        .registration-card h3 {
          font-size: 2rem;
          margin-bottom: 1.5rem;
        }

        .registration-card.featured h3 {
          color: #C8F560;
        }

        .date-range {
          font-size: 1.4rem;
          font-weight: bold;
          margin-bottom: 1rem;
          color: #C8F560;
        }

        .season-info {
          font-size: 1.1rem;
          opacity: 0.9;
          margin-bottom: 1.5rem;
        }

        .discount-highlight {
          font-size: 1.3rem;
          margin-top: 1.5rem;
          padding: 1rem;
          background: rgba(200, 245, 96, 0.2);
          border-radius: 8px;
          color: #C8F560;
        }

        .discount-highlight strong {
          font-size: 1.5rem;
          color: #C8F560;
          letter-spacing: 1px;
        }

        .league-break-info {
          max-width: 600px;
          margin: 0 auto;
          text-align: center;
          background: rgba(45, 90, 39, 0.1);
          padding: 2rem;
          border-radius: 12px;
          border-left: 4px solid #2D5A27;
        }

        .league-break-info h3 {
          color: #2D5A27;
          margin-bottom: 1rem;
        }

        /* What's Included */
        .whats-included {
          padding: 4rem 2rem;
          background: white;
        }

        .included-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }

        .included-item {
          text-align: center;
          padding: 2rem;
          border-radius: 12px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .included-icon {
          font-size: 3.5rem;
          margin-bottom: 1.5rem;
          filter: grayscale(100%) sepia(100%) hue-rotate(90deg) saturate(200%);
        }

        .included-item h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #2D5A27;
        }

        .included-item p {
          color: #666;
        }

        /* Competition Formats */
        .competition-formats {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }

        .format-single {
          max-width: 700px;
          margin: 0 auto;
        }

        .format-card {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          text-align: center;
        }

        .format-icon {
          font-size: 4rem;
          margin-bottom: 1.5rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .format-card h3 {
          font-size: 1.8rem;
          margin-bottom: 1.5rem;
          color: #2D5A27;
        }

        .format-card p {
          margin-bottom: 2rem;
          color: #666;
          line-height: 1.7;
        }

        .format-features {
          list-style: none;
          text-align: left;
        }

        .format-features li {
          padding: 0.5rem 0;
          padding-left: 1.5rem;
          position: relative;
          color: #555;
        }

        .format-features li::before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #C8F560;
          font-weight: bold;
        }

        /* Community Benefits */
        .community-benefits {
          padding: 4rem 2rem;
          background: white;
        }

        .benefits-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }

        .benefit-card {
          padding: 2.5rem;
          border-radius: 12px;
          background: linear-gradient(135deg, rgba(45, 90, 39, 0.05) 0%, rgba(62, 123, 62, 0.05) 100%);
          border: 1px solid rgba(45, 90, 39, 0.1);
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1.5rem;
          display: block;
        }

        .benefit-card h3 {
          font-size: 1.4rem;
          margin-bottom: 1rem;
          color: #2D5A27;
        }

        .benefit-card p {
          color: #666;
          line-height: 1.7;
        }

        /* Final CTA */
        .final-cta {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          text-align: center;
        }

        .cta-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1.5rem;
          color: #C8F560;
        }

        .cta-content p {
          font-size: 1.2rem;
          margin-bottom: 2.5rem;
          color: #E8F5E8;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
        }

        .honcho-button {
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .honcho-button.primary {
          background: #C8F560;
          color: #2D5A27;
        }

        .honcho-button.primary:hover {
          background: #B8E550;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(200, 245, 96, 0.3);
        }

        .honcho-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .honcho-button.secondary:hover {
          background: white;
          color: #2D5A27;
        }

        .honcho-button.large {
          padding: 1.2rem 2.5rem;
          font-size: 1.1rem;
        }

        /* Footer */
        .footer {
          background: #333;
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

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: white;
          text-decoration: none;
        }

        .footer-links a:hover {
          color: #C8F560;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .honcho-hero-title {
            font-size: 2.5rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .registration-info-centered {
            padding: 0 1rem;
          }

          .registration-card {
            padding: 2rem;
          }

          .included-grid {
            grid-template-columns: 1fr;
          }

          .honcho-hero-cta {
            flex-direction: column;
            gap: 1rem;
          }

          .cta-buttons {
            flex-direction: column;
            align-items: center;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .honcho-hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 1.8rem;
          }

          .cta-content h2 {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}