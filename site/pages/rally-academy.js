import { useState } from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RequestTrainingModal from '../components/RequestTrainingModal';
import instructors from '../data/instructors.json';

export default function RallyAcademy() {
  const [openBeginnerFaq, setOpenBeginnerFaq] = useState(null);
  const [openPerformanceFaq, setOpenPerformanceFaq] = useState(null);
  const [personalModalOpen, setPersonalModalOpen] = useState(false);

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
      answer: "No! Performance Training uses a drop-in format — there's no multi-week commitment, so you can join the sessions that suit you."
    },
    {
      question: "What will I work on?",
      answer: "Performance Training sessions include focused drills, tactical training, game analysis, and skill building tailored to intermediate players sharpening specific parts of their game."
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
                  "description": "60-minute focused drills for intermediate players (DUPR 3.5-4.5).",
                  "courseMode": "onsite",
                  "offers": {
                    "@type": "Offer",
                    "price": "20",
                    "priceCurrency": "USD"
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
        <SiteHeader active="academy" />

        {/* Hero Section */}
        <section className="academy-hero">
          <div className="academy-hero-content">
            <h1 className="academy-hero-title">Pickleball Training Programs</h1>
            <p className="academy-hero-subtitle">
              Structured coaching for beginners & training drills for intermediate players.
            </p>
            <div className="academy-hero-cta">
              <div className="academy-cta-row">
                <a href="#beginner" className="academy-cta-button">Beginner Programs</a>
                <a href="#training" className="academy-cta-button">Performance Training</a>
              </div>
              <button
                type="button"
                className="academy-cta-button academy-cta-button-pill"
                onClick={() => setPersonalModalOpen(true)}
              >
                Request Personal Training
              </button>
            </div>
            <a href="/about-our-instructors" className="academy-hero-meet">Meet our coaches &rarr;</a>
          </div>
        </section>

        {/* Why Train With Us */}
        <section className="why-train">
          <h2 className="section-title">Why Train With Us?</h2>
          <div className="why-grid">
            <div className="why-item">
              <div className="rally-mark" aria-hidden="true"><span></span><span></span><span></span></div>
              <h4>Proven Methodology</h4>
              <p>Structured curriculum designed for measurable improvement</p>
            </div>
            <div className="why-item">
              <div className="rally-mark" aria-hidden="true"><span></span><span></span><span></span></div>
              <h4>Track Progress</h4>
              <p>Clear milestones and skill development tracking</p>
            </div>
            <div className="why-item">
              <div className="rally-mark" aria-hidden="true"><span></span><span></span><span></span></div>
              <h4>Fun Atmosphere</h4>
              <p>Improvement doesn't have to be boring – we keep it enjoyable</p>
            </div>
            <div className="why-item">
              <div className="rally-mark" aria-hidden="true"><span></span><span></span><span></span></div>
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
                60-minute focused drills for DUPR 3.5–4.5 players.
              </p>
              <div className="program-price">
                <span className="price-amount">$20</span>
                <span className="price-period">per session</span>
              </div>
              <a href="#training" className="program-cta">Learn More</a>
            </div>

            {/* Personal Training Card */}
            <div className="program-card personal">
              <h3 className="program-title">Personal Training</h3>
              <p className="program-headline">One-on-One Coaching, Tailored to You</p>
              <p className="program-description">
                Private sessions with a Rally Club coach. Pick a trainer or let us match you. Scheduled around your availability.
              </p>
              <div className="program-price">
                <span className="price-amount">Request</span>
                <span className="price-period">we'll be in touch</span>
              </div>
              <button
                type="button"
                className="program-cta program-cta-pill"
                onClick={() => setPersonalModalOpen(true)}
              >
                Request Now
              </button>
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
                Drop-in format – no multi-week commitment
              </div>
              <div className="perf-point">
                60-minute focused sessions
              </div>
            </div>

            {/* Booking box removed — Performance Training is no longer actively
                scheduled, so the "Reserve Your Spot" journey led to an empty
                PicklePlanner listing. Restore this block when sessions resume. */}
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
                <span className="cta-label">Beginner Programs</span>
                <span className="cta-sublabel">$80 per 4 weeks</span>
              </a>
              {/* Performance Training booking CTA removed — no longer actively
                  scheduled, so this PicklePlanner event link had nothing to book.
                  Restore alongside the booking box when sessions resume. */}
              <button
                type="button"
                className="cta-button primary cta-button-pill"
                onClick={() => setPersonalModalOpen(true)}
              >
                <span className="cta-label">Personal Training</span>
                <span className="cta-sublabel">Request a session</span>
              </button>
            </div>
          </div>
        </section>

        <RequestTrainingModal
          open={personalModalOpen}
          onClose={() => setPersonalModalOpen(false)}
          instructors={instructors}
        />

        <SiteFooter />
      </div>

      <style jsx>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .container {
          font-family: var(--font-body);
          line-height: 1.6;
          color: var(--ink);
        }

        /* Hero Section */
        .academy-hero {
          margin-top: 62px;
          padding: 3.25rem 2rem;
          background: var(--baseline-navy);
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
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .academy-hero-subtitle {
          font-size: 1.2rem;
          color: var(--concrete-light);
          margin-bottom: 1.75rem;
        }

        .academy-hero-cta {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .academy-cta-row {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .academy-cta-button {
          background: white;
          color: var(--baseline-navy);
          padding: 0.9rem 2rem;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
          font-weight: bold;
          font-size: 1.1rem;
          font-family: inherit;
          line-height: 1.5;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .academy-cta-button:hover {
          background: var(--concrete-light);
          box-shadow: 0 8px 25px rgba(255, 255, 255, 0.2);
        }

        .academy-cta-button-pill {
          border-radius: 999px;
          padding: 0.9rem 2.25rem;
          box-shadow: 0 10px 24px rgba(0, 0, 0, 0.22), 0 2px 6px rgba(0, 0, 0, 0.18);
        }

        .academy-cta-button-pill:hover {
          box-shadow: 0 14px 32px rgba(0, 0, 0, 0.28), 0 4px 10px rgba(0, 0, 0, 0.2);
        }

        .academy-hero-meet {
          display: inline-block;
          margin-top: 1.25rem;
          color: var(--concrete-light);
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          border-bottom: 1px solid transparent;
          transition: color 0.2s, border-color 0.2s;
        }
        .academy-hero-meet:hover {
          color: white;
          border-bottom-color: rgba(255, 255, 255, 0.6);
        }

        /* Section Titles */
        .section-title {
          text-align: center;
          font-size: 2.25rem;
          margin-bottom: 2rem;
          font-weight: bold;
          color: var(--baseline-navy);
        }

        .section-title-light {
          text-align: center;
          font-size: 2.25rem;
          margin-bottom: 2rem;
          font-weight: bold;
          color: white;
        }

        .section-subtitle {
          text-align: center;
          font-size: 1.15rem;
          color: var(--concrete-light);
          margin-top: -1.25rem;
          margin-bottom: 2rem;
        }

        .section-subtitle-dark {
          text-align: center;
          font-size: 1.15rem;
          color: var(--muted);
          margin-top: -1.25rem;
          margin-bottom: 2rem;
        }

        /* Programs Overview */
        .programs-overview {
          padding: 3.25rem 2rem;
          background: var(--surface-alt);
        }

        .programs-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
        }

        @media (max-width: 1024px) {
          .programs-grid {
            grid-template-columns: repeat(2, 1fr);
            max-width: 900px;
          }
        }

        .program-card {
          background: white;
          padding: 1.75rem 2rem;
          border-radius: 16px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
          text-align: center;
          position: relative;
          transition: transform 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .program-card:hover {
        }

        .program-card .program-price {
          margin-top: auto;
        }

        .program-badge {
          position: absolute;
          top: -12px;
          right: 20px;
          background: var(--rally-orange);
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: bold;
        }

        .program-title {
          font-size: 1.5rem;
          color: var(--baseline-navy);
          margin-bottom: 0.5rem;
        }

        .program-headline {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--ink);
          margin-bottom: 1rem;
        }

        .program-description {
          color: var(--muted);
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }

        .program-price {
          margin-bottom: 1.5rem;
        }

        .price-amount {
          font-size: 2.5rem;
          font-weight: bold;
          color: var(--baseline-navy);
        }

        .price-period {
          display: block;
          color: var(--muted);
          font-size: 0.95rem;
        }

        .program-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          align-self: center;
          background: var(--concrete);
          color: white;
          padding: 0.75rem 2rem;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
          font-weight: 600;
          font-size: 1rem;
          font-family: inherit;
          line-height: 1.5;
          cursor: pointer;
          transition: background 0.3s;
        }

        .program-cta:hover {
          background: var(--baseline-navy);
        }

        .program-cta-pill {
          border-radius: 999px;
          padding: 0.75rem 2.25rem;
        }

        /* Beginner Section */
        .beginner-section {
          padding: 3.25rem 2rem;
          background: var(--baseline-navy);
          color: white;
        }

        .section-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Curriculum */
        .curriculum {
          margin-bottom: 2.5rem;
        }

        .curriculum-title {
          text-align: center;
          font-size: 1.4rem;
          margin-bottom: 1.25rem;
          color: var(--concrete-light);
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
          color: var(--baseline-navy);
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
          color: var(--concrete-light);
        }

        /* Selling Points */
        .selling-points {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.25rem;
          margin-bottom: 2.5rem;
        }

        .selling-point {
          text-align: center;
        }

        .selling-point strong {
          display: block;
          margin-bottom: 0.25rem;
        }

        .selling-point p {
          font-size: 0.85rem;
          color: var(--concrete-light);
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
          color: var(--concrete-light);
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
          color: var(--rally-orange);
          font-weight: bold;
        }

        .price-box-cta {
          background: white;
          color: var(--baseline-navy);
          padding: 1rem 2rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          transition: all 0.3s ease;
        }

        .price-box-cta:hover {
          background: var(--concrete-light);
        }

        /* Performance Section */
        .performance-section {
          padding: 3.25rem 2rem;
          background: var(--surface-alt);
        }

        .schedule-box-dark {
          background: rgba(255, 255, 255, 0.15);
          padding: 1.25rem 3rem;
          border-radius: 16px;
          text-align: center;
          backdrop-filter: blur(5px);
          max-width: 300px;
          margin: 0 auto 2rem;
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
          color: var(--concrete-light);
          font-size: 0.95rem;
        }

        .included-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
          margin-bottom: 2rem;
        }

        .included-item {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
        }

        .included-item h4 {
          color: var(--baseline-navy);
          margin-bottom: 0.5rem;
        }

        .included-item p {
          color: var(--muted);
          font-size: 0.95rem;
        }

        .performance-points {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          flex-wrap: wrap;
        }

        .perf-point {
          background: white;
          padding: 0.75rem 1.5rem;
          border-radius: 30px;
          box-shadow: 0 3px 10px rgba(0,0,0,0.1);
          font-weight: 500;
        }

        /* Why Train With Us */
        .why-train {
          padding: 3.25rem 2rem;
          background: white;
        }

        .why-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .why-item {
          text-align: center;
          padding: 1rem;
        }

        .why-item h4 {
          color: var(--baseline-navy);
          margin-bottom: 0.5rem;
        }

        .why-item p {
          color: var(--muted);
          font-size: 0.95rem;
        }

        /* FAQ Section */
        .faq-section {
          padding: 3.25rem 2rem;
          background: var(--baseline-navy);
          color: white;
        }

        .faq-grid {
          max-width: 1100px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 3rem;
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
          color: var(--concrete-light);
          line-height: 1.6;
        }

        /* Final CTA */
        .final-cta {
          padding: 3.25rem 2rem;
          background: var(--baseline-navy);
          text-align: center;
          color: white;
        }

        .cta-content {
          max-width: 960px;
          margin: 0 auto;
        }

        .cta-content h2 {
          font-size: 2.25rem;
          margin-bottom: 0.75rem;
        }

        .cta-reassurance {
          font-size: 1.15rem;
          color: var(--concrete-light);
          margin-bottom: 1.5rem;
        }

        .cta-buttons {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          justify-content: center;
          gap: 1rem;
          max-width: 900px;
          margin: 0 auto;
        }

        .cta-button {
          padding: 0.85rem 1.25rem;
          border-radius: 8px;
          border: 2px solid transparent;
          text-decoration: none;
          font-weight: bold;
          font-size: 1rem;
          font-family: inherit;
          line-height: 1.3;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 0.15rem;
          text-align: center;
        }
        .cta-label {
          font-size: 1.05rem;
          font-weight: bold;
          line-height: 1.2;
        }
        .cta-sublabel {
          font-size: 0.85rem;
          font-weight: 500;
          opacity: 0.78;
          line-height: 1.2;
        }

        .cta-button.primary {
          background: white;
          color: var(--baseline-navy);
        }

        .cta-button.primary:hover {
          background: var(--concrete-light);
        }

        .cta-button-pill {
          border-radius: 999px;
        }

        /* Responsive */
        @media (max-width: 768px) {
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

          .signup-box-header {
            flex-direction: column;
            text-align: center;
            gap: 1rem;
          }

          .instructions-list li {
            white-space: normal;
          }

          .included-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .performance-points {
            flex-direction: column;
            align-items: center;
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
            grid-template-columns: 1fr;
          }

          .academy-hero-cta {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
