import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function RallyAcademy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openBeginnerFaq, setOpenBeginnerFaq] = useState(null);
  const [openPerformanceFaq, setOpenPerformanceFaq] = useState(null);

  const toggleBeginnerFaq = (index) => {
    setOpenBeginnerFaq(openBeginnerFaq === index ? null : index);
  };

  const togglePerformanceFaq = (index) => {
    setOpenPerformanceFaq(openPerformanceFaq === index ? null : index);
  };

  const beginnersFaqData = [
    {
      question: "Do I need any experience?",
      answer: "No experience needed! Beginner Programs are designed for complete beginners and players rated 2.5-3.0. We'll teach you everything from grip basics to game strategy."
    },
    {
      question: "What paddle should I bring?",
      answer: "For Beginner Programs, bring any paddle you have! If you don't own one yet, we have loaner paddles available. Our coaches can also help you choose the right paddle for your playing style."
    },
    {
      question: "What if I miss a week?",
      answer: "Beginner Programs require consistent attendance to ensure all participants progress together. If you know you'll miss a week, please contact us before signing up to discuss options."
    },
    {
      question: <>{"Is it "}<i>really</i>{" beginner-friendly?"}</>,
      answer: "Absolutely! Beginner Programs are taught by coaches who create a supportive, zero-pressure environment. You'll learn alongside other beginners, and we focus on making improvement fun. No judgment, just pickleball!"
    }
  ];

  const performanceFaqData = [
    {
      question: "What skill level do I need?",
      answer: "Performance Training is designed for intermediate and upper intermediate players with an estimated DUPR of 3.5-4.5."
    },
    {
      question: "Do I need to commit to a schedule?",
      answer: "No! Performance Training uses a drop-in format. Sign up for any session that works for your schedule."
    },
    {
      question: "What will I work on?",
      answer: "Performance Training sessions include focused drills, tactical training, game analysis, and skill building tailored to intermediate players looking to level up."
    }
  ];

  return (
    <>
      <Head>
        <title>Rally Academy | Pickleball Training Programs | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Pickleball training at Rally Club. Beginner Programs ($80/4 weeks) on Tuesdays and Performance Training ($20/session) for 3.5-4.5 DUPR players. Glen Carbon, IL."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/rally-academy" />
        <meta
          name="keywords"
          content="pickleball training, pickleball lessons, beginner pickleball, competitive pickleball, pickleball coaching, Glen Carbon IL, Rally Club"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rally Academy | Pickleball Training Programs" />
        <meta
          property="og:description"
          content="Beginner Programs for new players & Performance Training for intermediate players. Join Rally Academy at Rally Club Pickleball."
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/rally-academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Academy | Pickleball Training" />
        <meta
          name="twitter:description"
          content="Beginner Programs and Performance Training sessions. Train with Rally Club Pickleball."
        />
        <meta name="twitter:image" content="/logo-transparent.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Rally Academy Pickleball Training Programs",
              "description": "Pickleball training at Rally Club. Beginner Programs on Tuesdays and Performance Training for 3.5-4.5 DUPR players.",
              "provider": {
                "@type": "Organization",
                "name": "Rally Club Pickleball",
                "url": "https://www.rallyclubpickleball.com"
              },
              "location": {
                "@type": "Place",
                "name": "Rally Club Pickleball",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1 Cottonwood Industrial Park",
                  "addressLocality": "Glen Carbon",
                  "addressRegion": "IL",
                  "postalCode": "62034",
                  "addressCountry": "US"
                }
              },
              "hasCourseInstance": [
                {
                  "@type": "CourseInstance",
                  "name": "Beginner Programs",
                  "description": "4-week beginner pickleball program for new players and 2.5-3.0 rating. Tuesdays 1:00-2:30 pm.",
                  "courseMode": "onsite",
                  "offers": {
                    "@type": "Offer",
                    "price": "80",
                    "priceCurrency": "USD",
                    "url": "https://square.link/u/k6oFr2Fw"
                  }
                },
                {
                  "@type": "CourseInstance",
                  "name": "Performance Training",
                  "description": "60-minute focused drills for intermediate players (DUPR 3.5-4.5). Mondays 4:30-5:30 pm and Wednesdays 5:00-6:00 pm.",
                  "courseMode": "onsite",
                  "offers": {
                    "@type": "Offer",
                    "price": "20",
                    "priceCurrency": "USD",
                    "url": "https://rallyclub.pickleplanner.com/event/7a812974-29c0-4907-8929-26ad3cb8123e"
                  }
                }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": "https://www.rallyclubpickleball.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Rally Academy"
                }
              ]
            })
          }}
        />
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
              <a href="/rally-academy" className="nav-link academy-nav-link active">Rally Academy</a>
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
            <a href="/rally-academy" className="mobile-nav-link academy-link active" onClick={() => setMobileMenuOpen(false)}>Rally Academy</a>
            <a href="/rally-experiences" className="mobile-nav-link rally-link" onClick={() => setMobileMenuOpen(false)}>Rally Experiences</a>
          </nav>
        </div>

        {/* Hero Section */}
        <section className="academy-hero">
          <div className="academy-hero-content">
            <h1 className="academy-hero-title">Pickleball Training Programs</h1>
            <p className="academy-hero-subtitle">
              Structured coaching for beginners & training drills for intermediate players.
            </p>
            <div className="academy-hero-cta">
              <a href="#beginner" className="academy-cta-button">Beginner Programs</a>
              <a href="#training" className="academy-cta-button">Performance Training</a>
            </div>
          </div>
        </section>

        {/* Why Train With Us */}
        <section className="why-train">
          <h2 className="section-title">Why Train With Us?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="why-icon">📋</div>
              <h4>Proven Methodology</h4>
              <p>Structured curriculum designed for measurable improvement</p>
            </div>
            <div className="why-item">
              <div className="why-icon">📈</div>
              <h4>Track Progress</h4>
              <p>Clear milestones and skill development tracking</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🎉</div>
              <h4>Fun Atmosphere</h4>
              <p>Improvement doesn't have to be boring – we keep it enjoyable</p>
            </div>
            <div className="why-item">
              <div className="why-icon">🤝</div>
              <h4>Community</h4>
              <p>Join a supportive group of players committed to getting better</p>
            </div>
          </div>
        </section>

        {/* Program Cards Section */}
        <section className="programs-overview">
          <h2 className="section-title">Choose Your Path</h2>
          <div className="programs-grid">
            {/* Beginner Card */}
            <div className="program-card">
              <div className="program-badge">Only 8 Spots!</div>
              <h3 className="program-title">Beginner Programs</h3>
              <p className="program-headline">From First Paddle to Confident Player in 4 Weeks</p>
              <p className="program-description">
                Structured lessons, simple progress, tons of fun. Tuesdays 1:00–2:30 pm.
              </p>
              <div className="program-price">
                <span className="price-amount">$80</span>
                <span className="price-period">4-week program</span>
              </div>
              <a href="#beginner" className="program-cta">Learn More</a>
            </div>

            {/* Performance Training Card */}
            <div className="program-card performance">
              <h3 className="program-title">Performance Training</h3>
              <p className="program-headline">Level-Up Your Game: Drills for Intermediate Players</p>
              <p className="program-description">
                60-minute focused drills for DUPR 3.5–4.5 players. Mondays & Wednesdays.
              </p>
              <div className="program-price">
                <span className="price-amount">$20</span>
                <span className="price-period">per session</span>
              </div>
              <a href="#training" className="program-cta">Learn More</a>
            </div>
          </div>
        </section>

        {/* Beginner Programs Detailed Section */}
        <section id="beginner" className="beginner-section">
          <div className="section-content">
            <h2 className="section-title-light">Beginner Programs</h2>
            <p className="section-subtitle">4 weeks to confident play</p>

            {/* Schedule Info */}
            <div className="schedule-box-dark">
              <h3 className="schedule-title-dark">Session Times</h3>
              <div className="schedule-slot-single">
                <span className="slot-day-dark">Tuesdays</span>
                <span className="slot-time-dark">1:00 – 2:30 pm</span>
              </div>
            </div>

            {/* Week by Week */}
            <div className="curriculum">
              <h3 className="curriculum-title">What You'll Learn</h3>
              <div className="curriculum-grid">
                <div className="week-card">
                  <div className="week-number">Week 1</div>
                  <h4>Foundations</h4>
                  <p>Grip, ready position, basic strokes. Build your foundation right from day one.</p>
                </div>
                <div className="week-card">
                  <div className="week-number">Week 2</div>
                  <h4>Footwork</h4>
                  <p>Court movement, positioning, split step. Move efficiently and be ready for any shot.</p>
                </div>
                <div className="week-card">
                  <div className="week-number">Week 3</div>
                  <h4>Strategy Basics</h4>
                  <p>Dinking, third shot drops, court positioning. Learn the smart way to play.</p>
                </div>
                <div className="week-card">
                  <div className="week-number">Week 4</div>
                  <h4>Putting It All Together</h4>
                  <p>Consistency, confidence, mini-tournament. Show off everything you've learned!</p>
                </div>
              </div>
            </div>

            {/* Selling Points */}
            <div className="selling-points">
              <div className="selling-point">
                <div>
                  <strong>Small Group</strong>
                  <p>Max 8 players for personalized attention</p>
                </div>
              </div>
              <div className="selling-point">
                <div>
                  <strong>Cohort Progress</strong>
                  <p>Learn and improve together as a group</p>
                </div>
              </div>
              <div className="selling-point">
                <div>
                  <strong>Fun Format</strong>
                  <p>Mix of drills, mini-games & coached play</p>
                </div>
              </div>
              <div className="selling-point">
                <div>
                  <strong>Zero Pressure</strong>
                  <p>Supportive, encouraging environment</p>
                </div>
              </div>
              <div className="selling-point">
                <div>
                  <strong>Right Level</strong>
                  <p>Ideal for new players & 2.5-3.0 rating</p>
                </div>
              </div>
            </div>

            {/* Sign Up Box */}
            <div className="signup-box">
              <div className="signup-box-header">
                <div className="price-box-amount">$80</div>
                <div className="price-box-details">
                  <p>Complete 4-week program</p>
                  <p className="urgency">Only 8 Players Per Session!</p>
                </div>
              </div>
              <div className="signup-box-steps">
                <h4 className="steps-title">How to Join</h4>
                <ol className="instructions-list">
                  <li>Choose and pay for your session using the button below</li>
                  <li>The instructor will add you to the session</li>
                  <li>The instructor will reach out to answer any questions</li>
                </ol>
              </div>
              <a href="https://square.link/u/k6oFr2Fw" className="price-box-cta" target="_blank" rel="noopener noreferrer">
                Sign Up
              </a>
            </div>
          </div>
        </section>

        {/* Performance Training Detailed Section */}
        <section id="training" className="performance-section">
          <div className="section-content">
            <h2 className="section-title">Performance Training</h2>
            <p className="section-subtitle-dark">For intermediate players (DUPR 3.5–4.5) ready to level up</p>

            {/* Schedule Info */}
            <div className="schedule-box">
              <h3 className="schedule-title">Session Times</h3>
              <div className="schedule-slots">
                <div className="schedule-slot">
                  <span className="slot-day">Mondays</span>
                  <span className="slot-time">4:30 – 5:30 pm</span>
                </div>
                <div className="schedule-divider"></div>
                <div className="schedule-slot">
                  <span className="slot-day">Wednesdays</span>
                  <span className="slot-time">5:00 – 6:00 pm</span>
                </div>
              </div>
            </div>

            {/* What's Included */}
            <div className="included-grid">
              <div className="included-item">
                <h4>Focused Drills</h4>
                <p>60-minute sessions with targeted skill development.</p>
              </div>
              <div className="included-item">
                <h4>Tactical Training</h4>
                <p>Situational play, pattern recognition, and strategic decision-making.</p>
              </div>
              <div className="included-item">
                <h4>Game Analysis</h4>
                <p>Real-time coaching feedback during competitive play.</p>
              </div>
              <div className="included-item">
                <h4>Skill Building</h4>
                <p>Work on specific shots and techniques to improve your game.</p>
              </div>
            </div>

            {/* Selling Points */}
            <div className="performance-points">
              <div className="perf-point">
                For DUPR 3.5–4.5 players
              </div>
              <div className="perf-point">
                Drop-in format – join anytime
              </div>
              <div className="perf-point">
                60-minute focused sessions
              </div>
            </div>

            {/* Sign Up Box */}
            <div className="signup-box-light">
              <div className="signup-box-header-light">
                <div className="price-box-amount-dark">$20</div>
                <div className="price-box-details-dark">
                  <p>Per session</p>
                  <p className="urgency-dark">Limited Court Capacity</p>
                </div>
              </div>
              <div className="signup-box-steps-light">
                <h4 className="steps-title-dark">How to Join</h4>
                <ol className="instructions-list-dark">
                  <li>Visit PicklePlanner using the button below</li>
                  <li>Sign up for the sessions you want to join</li>
                </ol>
              </div>
              <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/joinable" className="price-box-cta-dark" target="_blank" rel="noopener noreferrer">
                Reserve Your Spot
              </a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title-light">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-column">
              <h3 className="faq-column-title">Beginner Programs</h3>
              <div className="faq-container">
                {beginnersFaqData.map((faq, index) => (
                  <div key={index} className={`faq-item ${openBeginnerFaq === index ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleBeginnerFaq(index)}>
                      <span>{faq.question}</span>
                      <span className="faq-toggle">{openBeginnerFaq === index ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="faq-column">
              <h3 className="faq-column-title">Performance Training</h3>
              <div className="faq-container">
                {performanceFaqData.map((faq, index) => (
                  <div key={index} className={`faq-item ${openPerformanceFaq === index ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => togglePerformanceFaq(index)}>
                      <span>{faq.question}</span>
                      <span className="faq-toggle">{openPerformanceFaq === index ? '−' : '+'}</span>
                    </button>
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="final-cta">
          <div className="cta-content">
            <h2>Join Our Training – Let's Get You Better, Faster</h2>
            <p className="cta-reassurance">Beginner friendly. Zero judgment. Just improvement + fun.</p>
            <div className="cta-buttons">
              <a href="https://square.link/u/k6oFr2Fw" className="cta-button primary" target="_blank" rel="noopener noreferrer">
                Beginner Programs – $80 per 4 weeks
              </a>
              <a href="https://rallyclub.pickleplanner.com/event/7a812974-29c0-4907-8929-26ad3cb8123e" className="cta-button primary" target="_blank" rel="noopener noreferrer">
                Performance Training – $20 per session
              </a>
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
          color: #FF6600;
        }

        .academy-nav-link {
          color: #475569 !important;
          font-weight: 600;
        }

        .academy-nav-link:hover,
        .academy-nav-link.active {
          color: #64748B !important;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover {
          color: #3E7B3E !important;
        }

        .rally-nav-link {
          color: #FF6600 !important;
          font-weight: 600;
        }

        .rally-nav-link:hover {
          color: #E65100 !important;
        }

        /* Mobile Menu Button */
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

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Menu */
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

        @media (max-width: 768px) {
          .mobile-menu {
            display: block;
          }
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

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

        .mobile-nav-link:hover,
        .mobile-nav-link:active {
          background: rgba(71, 85, 105, 0.1);
          border-color: #64748B;
          color: #475569;
        }

        .mobile-nav-link.active {
          background: rgba(71, 85, 105, 0.2);
          border-color: #64748B;
          color: #475569;
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

        /* Hero Section */
        .academy-hero {
          margin-top: 80px;
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          text-align: center;
          position: relative;
        }

        .academy-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .academy-hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .academy-hero-title {
          font-size: 3.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
          line-height: 1.2;
        }

        .academy-hero-subtitle {
          font-size: 1.3rem;
          color: #CBD5E1;
          margin-bottom: 2.5rem;
        }

        .academy-hero-cta {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .academy-cta-button {
          background: white;
          color: #475569;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .academy-cta-button:hover {
          background: #F1F5F9;
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .academy-cta-button.secondary {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .academy-cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        /* Section Titles */
        .section-title {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-weight: bold;
          color: #475569;
        }

        .section-title-light {
          text-align: center;
          font-size: 2.5rem;
          margin-bottom: 3rem;
          font-weight: bold;
          color: white;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-top: -2rem;
          margin-bottom: 3rem;
        }

        .section-subtitle-dark {
          text-align: center;
          font-size: 1.2rem;
          color: #666;
          margin-top: -2rem;
          margin-bottom: 3rem;
        }

        /* Programs Overview */
        .programs-overview {
          padding: 5rem 2rem;
          background: #f8f9fa;
        }

        .programs-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        .program-card {
          background: white;
          padding: 2.5rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
        }

        .program-card:hover {
          transform: translateY(-5px);
        }

        .program-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: #FF6600;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .program-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .program-title {
          font-size: 1.5rem;
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .program-headline {
          font-size: 1.1rem;
          font-weight: 600;
          color: #333;
          margin-bottom: 1rem;
        }

        .program-description {
          color: #666;
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .program-price {
          margin-bottom: 1.5rem;
        }

        .price-amount {
          font-size: 2.5rem;
          font-weight: bold;
          color: #475569;
        }

        .price-period {
          display: block;
          color: #666;
          font-size: 0.95rem;
        }

        .program-cta {
          display: inline-block;
          background: #64748B;
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          transition: background 0.3s;
        }

        .program-cta:hover {
          background: #475569;
        }

        /* Beginner Section */
        .beginner-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
        }

        .section-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Curriculum */
        .curriculum {
          margin-bottom: 4rem;
        }

        .curriculum-title {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #CBD5E1;
        }

        .curriculum-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .week-card {
          background: rgba(255, 255, 255, 0.1);
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          backdrop-filter: blur(5px);
        }

        .week-number {
          background: white;
          color: #475569;
          padding: 0.25rem 0.75rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
          display: inline-block;
          margin-bottom: 0.75rem;
        }

        .week-card h4 {
          font-size: 1.1rem;
          margin-bottom: 0.5rem;
        }

        .week-card p {
          font-size: 0.9rem;
          color: #CBD5E1;
        }

        /* Selling Points */
        .selling-points {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
          margin-bottom: 4rem;
        }

        .selling-point {
          text-align: center;
        }

        .selling-icon {
          font-size: 2rem;
          display: block;
          margin-bottom: 0.5rem;
        }

        .selling-point strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .selling-point p {
          font-size: 0.85rem;
          color: #CBD5E1;
        }

        /* Sign Up Box */
        .signup-box {
          background: rgba(255, 255, 255, 0.15);
          padding: 2rem;
          border-radius: 16px;
          backdrop-filter: blur(5px);
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }

        .signup-box-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .signup-box-steps {
          margin-bottom: 1.75rem;
        }

        .steps-title {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: white;
        }

        .instructions-list {
          color: #CBD5E1;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0 auto;
          text-align: left;
          padding-left: 1.25rem;
          display: inline-block;
        }

        .instructions-list li {
          margin-bottom: 0.4rem;
          white-space: nowrap;
        }

        .price-box-amount {
          font-size: 3rem;
          font-weight: bold;
        }

        .price-box-details p {
          margin: 0;
        }

        .urgency {
          color: #FFEB3B;
          font-weight: bold;
        }

        .price-box-cta {
          background: white;
          color: #475569;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .price-box-cta:hover {
          background: #F1F5F9;
          transform: translateY(-2px);
        }

        /* Performance Section */
        .performance-section {
          padding: 5rem 2rem;
          background: #f8f9fa;
        }

        .schedule-box {
          background: white;
          padding: 1.5rem 3rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          max-width: 500px;
          margin: 0 auto 3rem;
        }

        .schedule-title {
          color: #475569;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .schedule-slots {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 2.5rem;
        }

        .schedule-slot {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .slot-day {
          color: #475569;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .slot-time {
          color: #666;
          font-size: 0.95rem;
        }

        .schedule-divider {
          width: 1px;
          height: 40px;
          background: #e2e8f0;
        }

        .schedule-box-dark {
          background: rgba(255, 255, 255, 0.15);
          padding: 1.5rem 3rem;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(5px);
          max-width: 300px;
          margin: 0 auto 3rem;
        }

        .schedule-title-dark {
          color: white;
          font-size: 1.1rem;
          margin-bottom: 1rem;
          font-weight: 600;
        }

        .schedule-slot-single {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }

        .slot-day-dark {
          color: white;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .slot-time-dark {
          color: #CBD5E1;
          font-size: 0.95rem;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .included-item {
          background: white;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .included-icon {
          font-size: 2.5rem;
          display: block;
          margin-bottom: 1rem;
        }

        .included-item h4 {
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .included-item p {
          color: #666;
          font-size: 0.95rem;
        }

        .performance-points {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-bottom: 3rem;
        }

        .perf-point {
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          font-weight: 500;
        }

        .perf-point span {
          margin-right: 0.5rem;
        }

        /* Sign Up Box Light */
        .signup-box-light {
          background: white;
          padding: 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          max-width: 650px;
          margin: 0 auto;
          text-align: center;
        }

        .signup-box-header-light {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        }

        .signup-box-steps-light {
          margin-bottom: 1.75rem;
        }

        .steps-title-dark {
          font-size: 1.1rem;
          margin-bottom: 0.75rem;
          color: #475569;
        }

        .instructions-list-dark {
          color: #666;
          font-size: 1rem;
          line-height: 1.7;
          margin: 0 auto;
          text-align: left;
          padding-left: 1.25rem;
          display: inline-block;
        }

        .instructions-list-dark li {
          margin-bottom: 0.4rem;
          white-space: nowrap;
        }

        .price-box-amount-dark {
          font-size: 3rem;
          font-weight: bold;
          color: #475569;
        }

        .price-box-details-dark p {
          margin: 0;
          color: #666;
        }

        .urgency-dark {
          color: #FF6600;
          font-weight: bold;
        }

        .price-box-cta-dark {
          background: #64748B;
          color: white;
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .price-box-cta-dark:hover {
          background: #475569;
          transform: translateY(-2px);
        }

        /* Why Train With Us */
        .why-train {
          padding: 5rem 2rem;
          background: white;
        }

        .why-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
        }

        .why-item {
          text-align: center;
          padding: 1.5rem;
        }

        .why-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .why-item h4 {
          color: #475569;
          margin-bottom: 0.5rem;
        }

        .why-item p {
          color: #666;
          font-size: 0.95rem;
        }

        /* FAQ Section */
        .faq-section {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
        }

        .faq-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
        }

        .faq-column {

        }

        .faq-column-title {
          font-size: 1.5rem;
          color: white;
          margin-bottom: 1.5rem;
          padding-bottom: 0.75rem;
          text-align: center;
          font-weight: 600;
          border-bottom: 2px solid rgba(255, 255, 255, 0.3);
          display: inline-block;
          width: 100%;
        }

        .faq-container {

        }

        .faq-item {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          margin-bottom: 1rem;
          overflow: hidden;
          backdrop-filter: blur(5px);
        }

        .faq-question {
          width: 100%;
          padding: 1.25rem 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          cursor: pointer;
          font-size: 1rem;
          font-weight: 600;
          color: white;
          text-align: left;
        }

        .faq-question:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .faq-toggle {
          font-size: 1.5rem;
          color: white;
          font-weight: bold;
        }

        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .faq-item.open .faq-answer {
          max-height: 200px;
        }

        .faq-answer p {
          padding: 0 1.5rem 1.5rem;
          color: #CBD5E1;
          line-height: 1.6;
        }

        /* Final CTA */
        .final-cta {
          padding: 5rem 2rem;
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          text-align: center;
          color: white;
        }

        .cta-content {
          max-width: 600px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        .cta-reassurance {
          font-size: 1.2rem;
          color: #CBD5E1;
          margin-bottom: 2rem;
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
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          transition: all 0.3s ease;
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
          border: 2px solid white;
        }

        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.1);
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

        .footer-links {
          display: flex;
          gap: 2rem;
        }

        .footer-links a {
          color: #ccc;
          text-decoration: none;
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #94A3B8;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }

          .academy-hero-title {
            font-size: 2.5rem;
          }

          .academy-hero-subtitle {
            font-size: 1.1rem;
          }

          .programs-grid {
            grid-template-columns: 1fr;
          }

          .curriculum-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .selling-points {
            grid-template-columns: repeat(2, 1fr);
          }

          .signup-box-header,
          .signup-box-header-light {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .instructions-list li,
          .instructions-list-dark li {
            white-space: normal;
          }

          .included-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .performance-points {
            flex-direction: column;
            align-items: center;
          }

          .schedule-slots {
            flex-direction: column;
            gap: 1rem;
          }

          .schedule-divider {
            width: 80px;
            height: 1px;
          }

          .why-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .faq-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title,
          .section-title-light {
            font-size: 2rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .academy-hero-title {
            font-size: 2rem;
          }

          .curriculum-grid {
            grid-template-columns: 1fr;
          }

          .selling-points {
            grid-template-columns: 1fr;
          }

          .included-grid {
            grid-template-columns: 1fr;
          }

          .why-grid {
            grid-template-columns: 1fr;
          }

          .cta-buttons {
            flex-direction: column;
          }

          .academy-hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
