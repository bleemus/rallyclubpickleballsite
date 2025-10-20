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
            <h1 className="honcho-hero-title">Same-Partner Doubles League</h1>
            <p className="honcho-hero-subtitle">
              Team up with 2-4 players and compete in 7 DUPR-eligible matches plus playoffs. Battle for the Head Honcho Championship and win over $500 in prizes!
            </p>
            <div className="honcho-hero-cta">
              <a href="https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-winter-2026/" className="honcho-cta-button" target="_blank" rel="noopener noreferrer">Register Now</a>
              <span className="honcho-hashtag">#HonchoFam</span>
            </div>
            <p style={{ marginTop: '1rem', fontSize: '1rem', color: '#E8F5E8' }}>Use code <strong style={{ color: '#C8F560' }}>RALLYCLUB</strong> for extra savings!</p>
          </div>
        </section>

        {/* League Details */}
        <section id="league-details" className="league-details-section">
          <h2 className="section-title">League Format</h2>
          <div className="details-grid">
            <div className="detail-card">
              <div className="detail-icon">👥</div>
              <h3>Team Structure</h3>
              <p>2–4 players per team for flexibility. Two players compete each week as doubles partners. No gender requirements.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">📅</div>
              <h3>Season Schedule</h3>
              <p>8-week season starting December 1st. 7 guaranteed match-ups with a league break Dec 22 - Jan 4.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">🏆</div>
              <h3>Playoffs & Prizes</h3>
              <p>Standings lead to single-elimination playoffs. Champions win over $500 including cash, free Early-Spring Entry & Sponsor Gear.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">📊</div>
              <h3>Skill Divisions</h3>
              <p><strong>Intermediate:</strong> DUPR 3.0-3.5<br /><strong>Upper-Intermediate:</strong> DUPR 3.5-4.25</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">✅</div>
              <h3>What's Included</h3>
              <p>DUPR eligible matches, weekly gameplay fully administered, court costs included, standings tracking.</p>
            </div>
            <div className="detail-card">
              <div className="detail-icon">📆</div>
              <h3>Registration</h3>
              <p><strong>Early Bird:</strong> Oct 13-26<br /><strong>Regular:</strong> Oct 13 - Nov 16<br /><br /><strong>Code RALLYCLUB:</strong> Extra savings on top of early bird pricing!</p>
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="why-join-section">
          <h2 className="section-title">Why Join the #HonchoFam?</h2>
          <div className="why-join-content">
            <p className="why-join-intro">Join thousands of players across the nation in the premier amateur pickleball community. The ideal league for busy players who want consistent partners, flexible rosters, competitive rallies, and a shot at glory!</p>
            <div className="benefits-grid-compact">
              <div className="benefit-item-compact">
                <span className="benefit-icon-compact">🤝</span>
                <div>
                  <strong>Build Community</strong>
                  <p>Connect with like-minded players nationwide</p>
                </div>
              </div>
              <div className="benefit-item-compact">
                <span className="benefit-icon-compact">📈</span>
                <div>
                  <strong>Track Progress</strong>
                  <p>DUPR eligible matches show your improvement</p>
                </div>
              </div>
              <div className="benefit-item-compact">
                <span className="benefit-icon-compact">⚡</span>
                <div>
                  <strong>No Hassle</strong>
                  <p>Fully administered gameplay, court costs included</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Referral Perks */}
        <section className="referral-section">
          <div className="referral-content">
            <div className="referral-icon">🎁</div>
            <h2 className="referral-title">Referral Perks</h2>
            <p className="referral-text">Recruit 3+ friends and earn rewards like a free JOOLA paddle, free entry & more (just have them list you during registration!)</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Ready to Compete?</h2>
            <p style={{ fontSize: '1.1rem', fontWeight: 'bold', color: '#C8F560', marginBottom: '2rem' }}>Use discount code <span style={{ fontSize: '1.3rem' }}>RALLYCLUB</span> for extra savings on top of early bird pricing!</p>
            <div className="cta-buttons">
              <a href="https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-winter-2026/" className="honcho-button primary large" target="_blank" rel="noopener noreferrer">Register for League</a>
            </div>
          </div>
        </section>

        {/* Honcho Contact */}
        <section className="honcho-contact">
          <div className="honcho-contact-content">
            <p>Questions? Reach out to Honcho at <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> — they've got your back.</p>
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

        /* League Details Section */
        .league-details-section {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }

        .details-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .detail-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .detail-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.12);
        }

        .detail-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .detail-card h3 {
          font-size: 1.3rem;
          margin-bottom: 1rem;
          color: #2D5A27;
        }

        .detail-card p {
          color: #666;
          line-height: 1.6;
          font-size: 0.95rem;
        }

        .detail-card p strong {
          color: #2D5A27;
        }

        /* Competition Formats */
        .competition-formats {
          padding: 4rem 2rem;
          background: #f8f9fa;
        }

        .format-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .format-single {
          max-width: 900px;
          margin: 0 auto;
        }

        .format-card {
          background: white;
          padding: 3rem;
          border-radius: 16px;
          box-shadow: 0 15px 40px rgba(0,0,0,0.1);
          text-align: center;
        }

        .format-card-large {
          background: white;
          padding: 3.5rem;
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

        /* Why Join Section */
        .why-join-section {
          padding: 4rem 2rem;
          background: white;
        }

        .why-join-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .why-join-intro {
          text-align: center;
          font-size: 1.2rem;
          color: #555;
          margin-bottom: 3rem;
          line-height: 1.7;
        }

        .benefits-grid-compact {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .benefit-item-compact {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          padding: 1.5rem;
          background: linear-gradient(135deg, rgba(45, 90, 39, 0.05) 0%, rgba(62, 123, 62, 0.05) 100%);
          border-radius: 12px;
          border-left: 4px solid #2D5A27;
        }

        .benefit-icon-compact {
          font-size: 2rem;
          flex-shrink: 0;
        }

        .benefit-item-compact strong {
          display: block;
          color: #2D5A27;
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
        }

        .benefit-item-compact p {
          color: #666;
          font-size: 0.9rem;
          margin: 0;
          line-height: 1.4;
        }

        /* Referral Section */
        .referral-section {
          padding: 3rem 2rem;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
        }

        .referral-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          padding: 2.5rem;
          background: white;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          border: 3px solid #C8F560;
        }

        .referral-icon {
          font-size: 4rem;
          margin-bottom: 1rem;
        }

        .referral-title {
          font-size: 2rem;
          color: #2D5A27;
          margin-bottom: 1rem;
          font-weight: bold;
        }

        .referral-text {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.7;
          margin: 0;
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

        /* Honcho Contact */
        .honcho-contact {
          padding: 2rem 2rem;
          background: #f8f9fa;
          text-align: center;
        }

        .honcho-contact-content {
          max-width: 800px;
          margin: 0 auto;
        }

        .honcho-contact-content p {
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        .honcho-contact-content a {
          color: #2D5A27;
          font-weight: bold;
          text-decoration: none;
          transition: color 0.3s;
        }

        .honcho-contact-content a:hover {
          color: #3E7B3E;
          text-decoration: underline;
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

          .details-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .benefits-grid-compact {
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

          .details-grid {
            grid-template-columns: 1fr;
          }

          .detail-card {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}