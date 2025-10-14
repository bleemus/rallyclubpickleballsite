import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openLightbox = (imageSrc, imageAlt, heading, caption) => {
    setLightboxImage({ src: imageSrc, alt: imageAlt, heading, caption });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <Head>
        <title>Rally Club Pickleball | Metro East Premier Indoor Pickleball Club</title>
        <meta
          name="description"
          content="Play pickleball anytime at Rally Club Pickleball in Glen Carbon, IL. Enjoy 24-hour facility access, top-notch courts, and fun community events."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/" />
        <meta
          name="keywords"
          content="pickleball, indoor courts, Glen Carbon IL, membership, rally club, sports facility"
        />
        <meta property="og:title" content="Rally Club Pickleball" />
        <meta
          property="og:description"
          content="Join Glen Carbon's premier 24/7 indoor pickleball facility. Reserve courts, play with friends, and be part of the Rally Club community!"
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Club Pickleball" />
        <meta
          name="twitter:description"
          content="Your Court. Your Crew. Your Rally. Discover the best indoor pickleball experience in Glen Carbon, IL."
        />
        <meta name="twitter:image" content="/logo-transparent.png" />
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
              <a href="#booking" className="nav-link">Book a Court</a>
              <a href="#membership" className="nav-link">Membership</a>
              <a href="#facility" className="nav-link">About us</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="/honcho" className="nav-link honcho-nav-link">Honcho League</a>
              <a href="https://rallyclub.pickleplanner.com" className="sign-in-btn" target="_blank" rel="noopener noreferrer">Sign In</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="hero-video"
          >
            <source src="/club_interior_reversed_optimized.mp4" type="video/mp4" />
          </video>
          <div className="hero-content">
            <h1 className="hero-title">Play When You Want, with Who You Want &mdash; Anytime.</h1>
            <p className="hero-subtitle">Glen Carbon's exclusive indoor pickleball hub &mdash; no contracts, 24/7 access, tournament grade courts.</p>
            <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/make" className="cta-button" target="_blank" rel="noopener noreferrer">
              Book Your First Rally in 60 Seconds
            </a>
          </div>
        </section>

        {/* Membership Benefits */}
        <section id="benefits" className="benefits">
          <h2 className="section-title">Membership Benefits</h2>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">⚡</div>
              <h3>Flexibility</h3>
              <p>24/7 access to courts when you want to play</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">💰</div>
              <h3>Pricing</h3>
              <p>Competitive rates with member discounts</p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">👥</div>
              <h3>Perks</h3>
              <p>Member events and community access</p>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section id="membership" className="membership">
          <h2 className="section-title">Membership Tiers</h2>
          <div className="membership-grid">
            <div className="membership-card featured">
              <div className="best-value-badge">BEST VALUE</div>
              <h3 className="membership-title">A-List</h3>
              <div className="membership-price">
                <span className="price">$35</span>
                <span className="period">/month</span>
              </div>
              <div className="membership-cta">
                <a href="https://checkout.square.site/merchant/MLRWNHWZVQE4S/checkout/ZPZHAIKDZ2D5K7JVUP2C25YQ" className="membership-button" target="_blank" rel="noopener noreferrer">Join A-List</a>
              </div>
              <ul className="membership-features">
                <li>✓ Reserve 10 days in advance</li>
                <li>✓ $8/hr base rate ($2/hr per player)</li>
                <li>✓ $20/hr prime time* ($5/hr per player)</li>
                <li>✓ Member events</li>
              </ul>
            </div>
            <div className="membership-card">
              <div className="no-commitment-badge">NO COMMITMENT</div>
              <h3 className="membership-title">Rally Reserve</h3>
              <div className="membership-price">
                <span className="price">$0</span>
                <span className="period">/month</span>
              </div>
              <div className="membership-cta">
                <a href="https://rallyclub.pickleplanner.com/dashboard/membership/join" className="membership-button secondary" target="_blank" rel="noopener noreferrer">Join Rally Reserve</a>
              </div>
              <ul className="membership-features">
                <li>✓ Reserve 5 days in advance</li>
                <li>✓ $16/hr base rate ($4/hr per player)</li>
                <li>✓ $28/hr prime time* ($7/hr per player)</li>
                <li>✓ Member events</li>
              </ul>
            </div>
          </div>
          <div className="pricing-note">
            <p><strong>*Prime Time:</strong> Monday - Friday 4:30 pm - 9:00 pm, all day Saturday & Sunday</p>
            <div className="pricing-highlights">
              <div className="highlight-box registration">
                <p>All Players must register an account with <strong>PicklePlanner</strong> and sign waivers. Unregistered guests are <span className="not-permitted">NOT</span> permitted</p>
              </div>
              <div className="highlight-box mixed-play">
                <p>Mix & match <strong>A-List</strong> members and <strong>Rally Reserve</strong> players - the court rate is set by the membership tier</p>
              </div>
              <div className="highlight-box payment">
                <p>Reserving player pays court costs & fees up front, it is up to them how their playing partners reimburse them</p>
              </div>
            </div>
          </div>
        </section>

        {/* Honcho Pickleball League */}
        <section id="honcho" className="honcho-league">
          <div className="honcho-content">
            <div className="honcho-header">
              <Image
                src="/honcho-logo-small.png"
                alt="Honcho Pickleball Logo"
                width={120}
                height={58}
                style={{ marginBottom: '1rem' }}
              />
              <h2 className="honcho-title">Join the Honcho Pickleball League</h2>
              <p className="honcho-subtitle">The premier amateur pickleball community sweeping the nation</p>
            </div>

            <div className="honcho-summary">
              <p className="honcho-description">
                Two exciting ways to compete: partner up for Doubles or rise through the ranks in our Ladder League.
                Enjoy guaranteed weekly court time, championship prizes, and community events across an 8-week season.
              </p>

              <div className="honcho-highlights">
                <div className="highlight-item">
                  <span className="highlight-icon">📅</span>
                  <div>
                    <strong>Registration Open:</strong><br />
                    Oct 13 - Nov 16 (Early bird ends Oct 26)
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🏆</span>
                  <div>
                    <strong>Season Starts:</strong><br />
                    December 1st
                  </div>
                </div>
                <div className="highlight-item">
                  <span className="highlight-icon">🤝</span>
                  <div>
                    <strong>Community:</strong><br />
                    All skill levels welcome
                  </div>
                </div>
              </div>

              <div className="honcho-cta">
                <a href="/honcho" className="honcho-button primary">
                  Learn More & Join the #HonchoFam
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Overview */}
        <section id="facility" className="facility">
          <h2 className="section-title">Facility Overview</h2>
          <div className="facility-grid">
            <div className="facility-item">
              <div className="facility-image" onClick={() => openLightbox('/facility-layout.jpg', 'Facility Layout', 'Floor Plan', "Here's your future HQ.")}>
                <Image
                  src="/facility-layout.jpg"
                  alt="Facility Layout"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', cursor: 'pointer' }}
                />
              </div>
              <div className="facility-caption">
                <h3>Floor Plan</h3>
                <p>Here's your future HQ.</p>
              </div>
            </div>
            <div className="facility-item">
              <div className="facility-image" onClick={() => openLightbox('/facility-outside.jpg', 'Facility Exterior', 'Outside View', 'Pull up. Walk in. Rally begins.')}>
                <Image
                  src="/facility-outside.jpg"
                  alt="Facility Exterior"
                  width={400}
                  height={300}
                  style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px', cursor: 'pointer' }}
                />
              </div>
              <div className="facility-caption">
                <h3>Outside View</h3>
                <p>Pull up. Walk in. Rally begins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section id="booking" className="booking">
          <h2 className="section-title">Booking Process</h2>
          <div className="booking-steps">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Select Court</h3>
              <p>Instant door code, 20 minutes before play</p>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Choose Time</h3>
              <p>Flexible slots available</p>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Confirm Booking</h3>
              <p>No contracts, pay as you go</p>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Play</h3>
              <p>24/7 access</p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="location">
          <h2 className="section-title">Our Location</h2>
          <div className="location-content">
            <div className="location-info">
              <div className="address">
                <h3>Visit Us</h3>
                <p>1 Cottonwood Industrial Park<br />Glen Carbon, IL 62034</p>
                <p>Conveniently located a short drive from the intersection of IL-159 and Cottonwood Rd.</p>
              </div>
              <div className="hours">
                <h3>Our Hours</h3>
                <p><strong>Available 24 hours per day with <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/make" target="_blank" rel="noopener noreferrer">reservation</a>!</strong></p>
              </div>
            </div>
            <div className="map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d799.5860377841626!2d-89.93756610367085!3d38.76633662956965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f9f92112c085%3A0x4217965f56847a5e!2sThe%20Rally%20Club!5e0!3m2!1sen!2sus!4v1746223485153!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 0 ? 'active' : ''}`}
                onClick={() => toggleFaq(0)}
              >
                Do I need a membership to book?
                <span className="faq-arrow">{openFaq === 0 ? '−' : '+'}</span>
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  No. A-List members get the best rate and earlier booking windows. Rally Reserve guests can still book and play pay-as-you-go.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 1 ? 'active' : ''}`}
                onClick={() => toggleFaq(1)}
              >
                How does the door code work?
                <span className="faq-arrow">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  After checkout you'll receive a unique code via email/text. It activates 20 minutes before your reservation.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 2 ? 'active' : ''}`}
                onClick={() => toggleFaq(2)}
              >
                What's the pricing for members vs guests?
                <span className="faq-arrow">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className="faq-answer">
                  A-List: $8/hr base ($2/player), $20/hr prime time ($5/player). Rally Reserve: $16/hr base ($4/player), $28/hr prime time ($7/player).
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 3 ? 'active' : ''}`}
                onClick={() => toggleFaq(3)}
              >
                Can I bring friends who aren't registered?
                <span className="faq-arrow">{openFaq === 3 ? '−' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className="faq-answer">
                  All players must be registered with PicklePlanner & Rally Club before playing.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 4 ? 'active' : ''}`}
                onClick={() => toggleFaq(4)}
              >
                How do I cancel or reschedule?
                <span className="faq-arrow">{openFaq === 4 ? '−' : '+'}</span>
              </button>
              {openFaq === 4 && (
                <div className="faq-answer">
                  Manage your booking in PicklePlanner. Policies may apply based on timing.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="contact">
          <h2 className="contact-title">Have more questions? Contact us!</h2>
          <a href="mailto:rally.club618@gmail.com" className="contact-button">Contact Us</a>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Rally Club Pickleball. All rights reserved.</p>
            <div className="footer-links">
              <a href="https://www.facebook.com/profile.php?id=61572523900750" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </footer>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
              <button className="lightbox-close" onClick={closeLightbox}>&times;</button>
              <div className="lightbox-header">
                <h3 className="lightbox-heading">{lightboxImage.heading}</h3>
              </div>
              <Image
                src={lightboxImage.src}
                alt={lightboxImage.alt}
                width={1200}
                height={800}
                style={{ maxWidth: '90vw', maxHeight: '70vh', objectFit: 'contain' }}
              />
              <div className="lightbox-footer">
                <p className="lightbox-caption">{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        )}
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

        .nav-link:hover {
          color: #e74c3c;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover {
          color: #3E7B3E !important;
        }

        .sign-in-btn {
          background: #e74c3c;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 500;
          transition: background 0.3s;
        }

        .sign-in-btn:hover {
          background: #c0392b;
        }

        /* Hero */
        .hero {
          margin-top: 80px;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .hero-video {
          position: absolute;
          top: 50%;
          left: 50%;
          min-width: 100%;
          min-height: 100%;
          width: auto;
          height: auto;
          transform: translate(-50%, -50%);
          object-fit: cover;
          z-index: 0;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          color: white;
          max-width: 1200px;
          width: 100%;
          padding: 0 2rem;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .hero-subtitle {
          font-size: 1.2rem;
          color: white;
          margin-bottom: 2rem;
          text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        }

        .cta-button {
          background: #e74c3c;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          transition: background 0.3s;
        }

        .cta-button:hover {
          background: #c0392b;
        }

        /* Benefits */
        .benefits {
          padding: 1.5rem 2rem 2.5rem;
          background: #f8f9fa;
        }

        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 2rem;
          font-weight: bold;
        }

        .benefits-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        .benefit-item {
          text-align: center;
        }

        .benefit-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit-item h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .benefit-item p {
          color: #666;
        }

        /* Membership */
        .membership {
          padding: 1.5rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .membership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          align-items: stretch;
        }

        .membership-card {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .membership-title {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .membership-price {
          margin-bottom: 2rem;
        }

        .price {
          font-size: 3rem;
          font-weight: bold;
        }

        .period {
          font-size: 1rem;
          color: #666;
        }

        .membership-cta {
          margin-bottom: 2rem;
        }

        .membership-button {
          background: #e74c3c;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          transition: background 0.3s;
        }

        .membership-button.secondary {
          background: #95a5a6;
        }

        .membership-button:hover {
          background: #c0392b;
        }

        .membership-button.secondary:hover {
          background: #7f8c8d;
        }

        .membership-features {
          list-style: none;
          text-align: center;
          flex-grow: 1;
        }

        .membership-features li {
          padding: 0.5rem 0;
          color: #666;
        }

        /* Membership badges */
        .best-value-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: linear-gradient(45deg, #ff6b35, #f7931e);
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          transform: rotate(-15deg);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .no-commitment-badge {
          position: absolute;
          top: -10px;
          left: 20px;
          background: #3498db;
          color: white;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
          transform: rotate(-15deg);
          box-shadow: 0 2px 5px rgba(0,0,0,0.2);
        }

        .membership-card.featured {
          position: relative;
          border: 2px solid #ff6b35;
        }

        .membership-card {
          position: relative;
        }

        .membership-annual {
          font-size: 0.9rem;
          color: #666;
          font-style: italic;
          margin-bottom: 1.5rem;
          margin-top: -0.5rem;
        }

        /* Pricing note section */
        .pricing-note {
          max-width: 1000px;
          margin: 3rem auto 0;
          padding: 2rem;
          background: #f8f9fa;
          border-radius: 12px;
          border-left: 4px solid #e74c3c;
        }

        .pricing-note > p {
          font-size: 1.1rem;
          margin-bottom: 1.5rem;
          text-align: center;
        }

        .pricing-highlights {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .highlight-box {
          padding: 1rem;
          border-radius: 8px;
          border-left: 4px solid;
        }

        .highlight-box.registration {
          background: #e3f2fd;
          border-left-color: #2196f3;
        }

        .highlight-box.mixed-play {
          background: #fff3e0;
          border-left-color: #ff9800;
        }

        .highlight-box.payment {
          background: #e8f5e8;
          border-left-color: #4caf50;
        }

        .highlight-box p {
          margin: 0;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .not-permitted {
          color: #e74c3c;
          font-weight: bold;
        }

        .join-info {
          text-align: center;
          background: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          border: 2px solid #e74c3c;
        }

        .join-info p {
          margin: 0.25rem 0;
          font-size: 1rem;
        }

        .join-info p:first-child {
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
        }

        /* Honcho League */
        .honcho-league {
          padding: 2.5rem 2rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          position: relative;
        }

        .honcho-league::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .honcho-content {
          max-width: 1000px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .honcho-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .honcho-title {
          font-size: 2.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
          color: white;
        }

        .honcho-subtitle {
          font-size: 1.1rem;
          color: #E8F5E8;
          max-width: 600px;
          margin: 0 auto;
        }

        .honcho-summary {
          text-align: center;
        }

        .honcho-description {
          font-size: 1.1rem;
          color: #E8F5E8;
          margin-bottom: 2rem;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .honcho-highlights {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .highlight-item {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(200, 245, 96, 0.3);
          text-align: center;
        }

        .highlight-icon {
          font-size: 2rem;
          margin-bottom: 1rem;
          display: block;
        }

        .highlight-item strong {
          color: #C8F560;
        }

        .honcho-cta {
          margin-top: 2rem;
        }

        .honcho-button {
          background: #C8F560;
          color: #2D5A27;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
          font-size: 1.1rem;
          display: inline-block;
        }

        .honcho-button:hover {
          background: #B8E550;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(200, 245, 96, 0.3);
        }

        .honcho-button:visited {
          background: #C8F560;
          color: #2D5A27;
          text-decoration: none;
        }

        .honcho-button:visited:hover {
          background: #B8E550;
          color: #2D5A27;
          text-decoration: none;
        }

        /* Facility */
        .facility {
          padding: 2.5rem 2rem;
          background: #f8f9fa;
        }

        .facility-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .facility-item {
          text-align: center;
        }

        .facility-caption {
          margin-top: 1rem;
        }

        .facility-caption h3 {
          font-size: 1.25rem;
          margin-bottom: 0.5rem;
          color: #333;
        }

        .facility-caption p {
          color: #666;
          font-style: italic;
          margin: 0;
        }

        /* Booking */
        .booking {
          padding: 2.5rem 2rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        .booking-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .step {
          text-align: center;
        }

        .step-number {
          width: 60px;
          height: 60px;
          background: #e74c3c;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.5rem;
          font-weight: bold;
          margin: 0 auto 1rem;
        }

        .step h3 {
          margin-bottom: 0.5rem;
        }

        .step p {
          color: #666;
          font-size: 0.9rem;
        }

        /* Location */
        .location {
          padding: 2.5rem 2rem 4rem;
          background: #f8f9fa;
        }

        .location-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .location-info {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .address h3,
        .hours h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #333;
        }

        .address p,
        .hours p {
          color: #666;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }

        .hours a {
          color: #e74c3c;
          text-decoration: none;
        }

        .hours a:hover {
          text-decoration: underline;
        }

        .map-container {
          height: 400px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        /* FAQ */
        .faq {
          padding: 3.5rem 2rem 2.5rem;
          background: white;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          margin-top: 2rem;
        }

        .faq-item {
          margin-bottom: 1rem;
          background: white;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
        }

        .faq-question {
          width: 100%;
          padding: 1.5rem;
          background: none;
          border: none;
          text-align: left;
          font-size: 1.1rem;
          font-weight: 500;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .faq-question:hover {
          background: #f8f9fa;
        }

        .faq-arrow {
          font-size: 1.5rem;
          font-weight: bold;
        }

        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: #666;
          line-height: 1.6;
        }

        /* Contact */
        .contact {
          padding: 2.5rem 2rem;
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .contact-title {
          font-size: 2rem;
          margin-bottom: 2rem;
        }

        .contact-button {
          background: #e74c3c;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          display: inline-block;
          transition: background 0.3s;
        }

        .contact-button:hover {
          background: #c0392b;
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
          color: #e74c3c;
        }

        /* Lightbox */
        .lightbox-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2000;
          cursor: pointer;
        }

        .lightbox-content {
          position: relative;
          max-width: 90vw;
          max-height: 90vh;
          cursor: default;
        }

        .lightbox-close {
          position: absolute;
          top: -40px;
          right: -10px;
          background: none;
          border: none;
          color: white;
          font-size: 3rem;
          cursor: pointer;
          z-index: 2001;
          line-height: 1;
        }

        .lightbox-close:hover {
          color: #e74c3c;
        }

        .lightbox-header {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .lightbox-footer {
          text-align: center;
          margin-top: 1.5rem;
        }

        .lightbox-heading {
          color: white;
          font-size: 2rem;
          margin: 0;
          font-weight: bold;
        }

        .lightbox-caption {
          color: #ccc;
          font-size: 1.1rem;
          font-style: italic;
          margin: 0;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .hero {
            height: 400px;
          }

          .hero-title {
            font-size: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }

          .membership-grid {
            grid-template-columns: 1fr;
          }

          .facility-grid {
            grid-template-columns: 1fr;
          }

          .location-content {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .booking-steps {
            grid-template-columns: repeat(2, 1fr);
          }

          .honcho-highlights {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .hero-title {
            font-size: 1.5rem;
          }

          .section-title {
            font-size: 1.5rem;
          }

          .contact-title {
            font-size: 1.5rem;
          }

          .booking-steps {
            grid-template-columns: 1fr;
          }

          .honcho-title {
            font-size: 2rem;
          }
        }
      `}</style>
    </>
  );
}