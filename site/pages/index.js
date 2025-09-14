import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
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
              Rally Club Pickleball
            </div>
            <nav className="nav">
              <a href="#booking" className="nav-link">Book a Court</a>
              <a href="#membership" className="nav-link">Membership</a>
              <a href="#facility" className="nav-link">About us</a>
              <a href="#contact" className="nav-link">Contact</a>
              <a href="https://rallyclub.pickleplanner.com" className="sign-in-btn" target="_blank" rel="noopener noreferrer">Sign In</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="hero-title">Play When You Want, With Who You Want Anytime.</h1>
            <p className="hero-subtitle">Glen Carbon's exclusive indoor pickleball facility with premium courts, tournament-grade courts.</p>
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
            <div className="membership-card">
              <h3 className="membership-title">A-List</h3>
              <div className="membership-price">
                <span className="price">$99</span>
                <span className="period">/month</span>
              </div>
              <div className="membership-cta">
                <a href="https://checkout.square.site/merchant/MLRWNHWZVQE4S/checkout/ZPZHAIKDZ2D5K7JVUP2C25YQ" className="membership-button" target="_blank" rel="noopener noreferrer">Join A-List</a>
              </div>
              <ul className="membership-features">
                <li>✓ Unlimited court access</li>
                <li>✓ 24 hour booking</li>
                <li>✓ Member events</li>
                <li>✓ Discounts on gear</li>
              </ul>
            </div>
            <div className="membership-card">
              <h3 className="membership-title">Rally Reserve</h3>
              <div className="membership-price">
                <span className="price">$49</span>
                <span className="period">/month</span>
              </div>
              <div className="membership-cta">
                <a href="https://rallyclub.pickleplanner.com/dashboard/membership/join" className="membership-button secondary" target="_blank" rel="noopener noreferrer">Join Rally Reserve</a>
              </div>
              <ul className="membership-features">
                <li>✓ Limited court access</li>
                <li>✓ Standard booking</li>
                <li>✓ Member events</li>
                <li>✓ Discounts on gear</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Facility Overview */}
        <section id="facility" className="facility">
          <h2 className="section-title">Facility Overview</h2>
          <div className="facility-grid">
            <div className="facility-image">
              <Image
                src="/facility-layout.jpg"
                alt="Facility Layout"
                width={400}
                height={300}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
              />
            </div>
            <div className="facility-image">
              <Image
                src="/facility-outside.jpg"
                alt="Facility Exterior"
                width={400}
                height={300}
                style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '12px' }}
              />
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

        {/* FAQ */}
        <section className="faq">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 0 ? 'active' : ''}`}
                onClick={() => toggleFaq(0)}
              >
                What are the membership options?
                <span className="faq-arrow">{openFaq === 0 ? '−' : '+'}</span>
              </button>
              {openFaq === 0 && (
                <div className="faq-answer">
                  We offer A-List membership for $99/month with unlimited access, and Rally Reserve for $49/month with standard booking options. Both include member events and gear discounts.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 1 ? 'active' : ''}`}
                onClick={() => toggleFaq(1)}
              >
                How do I book a court?
                <span className="faq-arrow">{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className="faq-answer">
                  Simply visit our booking platform at rallyclub.pickleplanner.com, select your preferred court and time, choose your playing partners, and complete your reservation. You'll receive a door code 20 minutes before your scheduled time.
                </div>
              )}
            </div>
            <div className="faq-item">
              <button
                className={`faq-question ${openFaq === 2 ? 'active' : ''}`}
                onClick={() => toggleFaq(2)}
              >
                What are the court specifications?
                <span className="faq-arrow">{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className="faq-answer">
                  Our facility features 2 tournament-grade courts with premium lighting, spacious layouts, and optimal acoustics designed specifically for pickleball. Courts meet all official tournament standards.
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
          background-image: url('/about.jpg');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.4);
        }

        .hero-content {
          position: relative;
          z-index: 1;
          text-align: center;
          color: white;
          max-width: 800px;
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
          padding: 2.5rem 2rem;
          max-width: 1000px;
          margin: 0 auto;
        }

        .membership-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .membership-card {
          background: white;
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
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
          text-align: left;
        }

        .membership-features li {
          padding: 0.5rem 0;
          color: #666;
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

        /* FAQ */
        .faq {
          padding: 2.5rem 2rem;
          background: #f8f9fa;
          max-width: 800px;
          margin: 0 auto;
        }

        .faq-list {
          margin-top: 2rem;
        }

        .faq-item {
          margin-bottom: 1rem;
          background: white;
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

          .booking-steps {
            grid-template-columns: repeat(2, 1fr);
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
        }
      `}</style>
    </>
  );
}