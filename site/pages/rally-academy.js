import { useState, useEffect, useCallback, useRef } from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import RequestTrainingModal from '../components/RequestTrainingModal';
import RallyStartWaitlistModal from '../components/RallyStartWaitlistModal';
import instructors from '../data/instructors.json';

// Rally Labs sessions are posted weekly, so the per-session PicklePlanner event
// URL changes every week. Always link to the joinable-events list instead — a
// hardcoded session link goes stale within days.
const PICKLEPLANNER_JOINABLE_URL = 'https://rallyclub.pickleplanner.com/dashboard/reservation/joinable';

// TODO: replace with the real Rally Skills Punch Card purchase URL once it
// exists. While this is empty the CTA renders disabled instead of linking out.
const PUNCH_CARD_URL = '';

const LABS = [
  {
    name: 'Rally Labs with Steve Horrell',
    day: 'Wednesdays',
    time: '1:00–2:30 PM',
    who: 'For beginner and intermediate players looking for targeted reps.'
  },
  {
    name: 'Advanced Clinic',
    day: 'Tuesdays',
    time: '1:00–2:30 PM',
    who: 'For 3.5+ players looking to sharpen their game.'
  }
];

function initialsFor(name) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .map(part => part[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}

export default function RallyAcademy() {
  const [openBeginnerFaq, setOpenBeginnerFaq] = useState(null);
  const [openLabsFaq, setOpenLabsFaq] = useState(null);
  const [personalModalOpen, setPersonalModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const dialogScrollRef = useRef(null);

  const toggleBeginnerFaq = (index) => {
    setOpenBeginnerFaq(openBeginnerFaq === index ? null : index);
  };

  const toggleLabsFaq = (index) => {
    setOpenLabsFaq(openLabsFaq === index ? null : index);
  };

  // Sorted on the displayed name, so the order matches what a reader scanning
  // the tiles actually sees. .filter() already copied, so the import isn't mutated.
  const activeInstructors = instructors
    .filter(i => i && i.active !== false)
    .sort((a, b) => a.name.localeCompare(b.name));

  const coachCount = activeInstructors.length;
  const activeCoach = activeIndex === null ? null : activeInstructors[activeIndex];

  const closeCoach = useCallback(() => setActiveIndex(null), []);
  const stepCoach = useCallback(
    direction => setActiveIndex(i => (i === null ? i : (i + direction + coachCount) % coachCount)),
    [coachCount]
  );

  // Arrow keys walk the roster without reaching for the mouse; ESC and the
  // scroll lock match how RequestTrainingModal behaves on this same page.
  useEffect(() => {
    if (activeIndex === null) return undefined;
    const onKeyDown = e => {
      if (e.key === 'Escape') closeCoach();
      else if (e.key === 'ArrowLeft') stepCoach(-1);
      else if (e.key === 'ArrowRight') stepCoach(1);
    };
    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, closeCoach, stepCoach]);

  // Paging keeps the same scroll container mounted, so without this the next
  // coach opens at the previous coach's scroll offset — their name scrolled
  // off the top. Runs on open too, which is already 0 and harmless.
  useEffect(() => {
    if (dialogScrollRef.current) dialogScrollRef.current.scrollTop = 0;
  }, [activeIndex]);

  const beginnersFaqData = [
    {
      question: "Do I need any experience?",
      answer: "No experience needed! Rally Start is designed for complete beginners and players rated 2.5-3.0. We'll teach you everything from grip basics to game strategy."
    },
    {
      question: "What paddle should I bring?",
      answer: "Bring any paddle you have! If you don't own one yet, we have loaner paddles available. Our coaches can also help you choose the right paddle for your playing style."
    },
    {
      question: "When does the next group start?",
      answer: "There's no fixed schedule — we start a group once enough people have joined the waitlist. When you sign up you tell us which days and times work for you, and we build the schedule around what the group has in common."
    },
    {
      question: "Does joining the waitlist commit me to anything?",
      answer: "Not at all. It just tells us you're interested and when you're free. We'll email you with the dates and details once a group forms, and you can decide then."
    },
    {
      question: <>{"Is it "}<i>really</i>{" beginner-friendly?"}</>,
      answer: "Absolutely! Rally Start is taught by coaches who create a supportive, zero-pressure environment. You'll learn alongside other beginners, and we focus on making improvement fun. No judgment, just pickleball!"
    }
  ];

  const labsFaqData = [
    {
      question: "Which lab should I join?",
      answer: "Rally Labs on Wednesdays is built for beginner and intermediate players who want targeted reps. The Advanced Clinic on Tuesdays is for 3.5+ players sharpening a game they already have."
    },
    {
      question: "How do I sign up?",
      answer: "Both labs are booked through Joinable Events in PicklePlanner. Sessions are posted a week at a time, so open the joinable events page to find the current week's session — there's no standing registration to sign up for."
    },
    {
      question: "What does a session look like?",
      answer: "90 minutes built around repetition and structure: focused drills, live-ball reps, and coaching from Steve Horrell aimed at habits that hold up in a real game."
    }
  ];

  return (
    <>
      <Head>
        <title>Rally Academy | Pickleball Training Programs | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Pickleball training at Rally Club in Glen Carbon, IL. Rally Start beginner groups, Rally Labs drill sessions with Steve Horrell, and 1-on-1 personal training."
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
          content="Rally Start beginner groups & Rally Labs drill sessions. Join Rally Academy at Rally Club Pickleball."
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/rally-academy" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Academy | Pickleball Training" />
        <meta
          name="twitter:description"
          content="Rally Start beginner groups and Rally Labs drill sessions. Train with Rally Club Pickleball."
        />
        <meta name="twitter:image" content="/logo-transparent.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              "name": "Rally Academy Pickleball Training Programs",
              "description": "Pickleball training at Rally Club. Rally Start beginner groups and Rally Labs drill sessions with Steve Horrell.",
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
                  "name": "Rally Start",
                  "description": "Small-group beginner pickleball program. Groups form from a waitlist; schedule is set once a group fills.",
                  "courseMode": "onsite"
                },
                {
                  "@type": "CourseInstance",
                  "name": "Rally Labs with Steve Horrell",
                  "description": "90-minute drill session for beginner and intermediate players looking for targeted reps. Wednesdays 1:00-2:30 PM.",
                  "courseMode": "onsite"
                },
                {
                  "@type": "CourseInstance",
                  "name": "Advanced Clinic",
                  "description": "90-minute drill session for 3.5+ players looking to sharpen their game. Tuesdays 1:00-2:30 PM.",
                  "courseMode": "onsite"
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
                <a href="#beginner" className="academy-cta-button">Rally Start</a>
                <a href="#labs" className="academy-cta-button">Rally Labs</a>
              </div>
              <button
                type="button"
                className="academy-cta-button academy-cta-button-pill"
                onClick={() => setPersonalModalOpen(true)}
              >
                Request Personal Training
              </button>
            </div>
            <a href="#coaches" className="academy-hero-meet">Meet our coaches &rarr;</a>
          </div>
        </section>

        {/* Why Train With Us */}
        <section className="why-train">
          <h2 className="section-title">Why Train With Us?</h2>
          <div className="why-grid">
            <div className="why-item">
              <h4>Proven Methodology</h4>
              <p>Structured curriculum designed for measurable improvement</p>
            </div>
            <div className="why-item">
              <h4>Track Progress</h4>
              <p>Clear milestones and skill development tracking</p>
            </div>
            <div className="why-item">
              <h4>Fun Atmosphere</h4>
              <p>Improvement doesn't have to be boring – we keep it enjoyable</p>
            </div>
            <div className="why-item">
              <h4>Community</h4>
              <p>Join a supportive group of players committed to getting better</p>
            </div>
          </div>
        </section>

        {/* Coach Gallery — tiles only; bios open in the lightbox at the end of
            this page. Absorbed from the former /about-our-instructors page.
            Sits directly under "Why Train With Us?" — the coaches are part of
            that answer, so the two read as one thought. */}
        <section id="coaches" className="coaches-section">
          <h2 className="section-title">Meet Your Coaches</h2>
          <p className="section-subtitle-dark">PPR-certified pros teaching every level, from first paddle to tournament play</p>
          <div className="coach-gallery">
            {activeInstructors.map((coach, i) => (
              <button
                key={coach.id}
                type="button"
                className="coach-tile"
                onClick={() => setActiveIndex(i)}
                aria-haspopup="dialog"
              >
                {/* alt="" — the button's own text already names the coach, so a
                    described image would just repeat it to a screen reader. */}
                <span className="coach-photo">
                  {coach.photo ? (
                    <img src={coach.photo} alt="" />
                  ) : (
                    <span className="coach-photo-fallback">{initialsFor(coach.name)}</span>
                  )}
                </span>
                <span className="coach-tile-name">{coach.name}</span>
                <span className="coach-tile-hint">Read bio</span>
              </button>
            ))}
          </div>
        </section>

        {/* Program Cards Section */}
        <section className="programs-overview">
          <h2 className="section-title">Choose Your Path</h2>
          <div className="programs-grid">
            {/* Beginner Card */}
            <div className="program-card">
              <div className="program-badge">Forming Now</div>
              <h3 className="program-title">Rally Start</h3>
              <p className="program-headline">From First Paddle to Confident Player</p>
              <p className="program-description">
                Small-group coaching for brand-new players. Join the waitlist and we&rsquo;ll
                build the next group around everyone&rsquo;s availability.
              </p>
              <div className="program-price">
                <span className="price-amount">Waitlist</span>
                <span className="price-period">we&rsquo;ll be in touch</span>
              </div>
              <button
                type="button"
                className="program-cta program-cta-pill"
                onClick={() => setWaitlistModalOpen(true)}
              >
                Join the Waitlist
              </button>
            </div>

            {/* Rally Labs Card */}
            <div className="program-card">
              <h3 className="program-title">Rally Labs</h3>
              <p className="program-headline">Reps, Structure, Better Habits</p>
              <p className="program-description">
                90-minute drill sessions with Steve Horrell. Two weekly labs — one for
                beginner and intermediate players, one for 3.5+.
              </p>
              <div className="program-price">
                <span className="price-amount">Weekly</span>
                <span className="price-period">Tuesdays &amp; Wednesdays</span>
              </div>
              <a href="#labs" className="program-cta">Learn More</a>
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

        {/* Rally Start — waitlist only. No schedule, price, or session detail:
            a group forms once enough beginners sign up, so this section exists
            to gather interest, not to sell a specific class. */}
        <section id="beginner" className="beginner-section">
          <div className="section-content">
            <h2 className="section-title-light">Rally Start</h2>
            <p className="section-subtitle">Our beginner program — from first paddle to confident player</p>

            <p className="beginner-lede">
              Rally Start is small-group coaching for people brand new to pickleball. We form
              a group once enough players have signed up, then build the schedule around
              everyone&rsquo;s availability. Add your name and we&rsquo;ll be in touch when the next
              group comes together.
            </p>

            <button
              type="button"
              className="beginner-waitlist-cta"
              onClick={() => setWaitlistModalOpen(true)}
            >
              Join the Waitlist
            </button>
          </div>
        </section>

        {/* Rally Labs */}
        <section id="labs" className="labs-section">
          <div className="section-content">
            <h2 className="section-title">Rally Labs</h2>
            <p className="section-subtitle-dark">
              90-minute drill sessions built around repetition, structure, and better habits on the court
            </p>

            <div className="labs-grid">
              {LABS.map(lab => (
                <div key={lab.name} className="lab-card">
                  <h3 className="lab-name">{lab.name}</h3>
                  <p className="lab-when">
                    <span className="lab-day">{lab.day}</span>
                    <span className="lab-time">{lab.time}</span>
                  </p>
                  <p className="lab-who">{lab.who}</p>
                  <a
                    href={PICKLEPLANNER_JOINABLE_URL}
                    className="lab-cta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Find This Week&rsquo;s Session
                  </a>
                </div>
              ))}
            </div>

            <p className="labs-note">
              Both labs are led by Steve Horrell and booked through Joinable Events in
              PicklePlanner. Sessions are posted a week at a time, so open the joinable
              events page to find the current week&rsquo;s session and reserve your spot.
            </p>

            <div className="labs-secondary">
              {PUNCH_CARD_URL ? (
                <a
                  href={PUNCH_CARD_URL}
                  className="labs-punch-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Purchase a Rally Skills Punch Card
                </a>
              ) : (
                /* Rendered disabled rather than as a dead href, so nobody clicks
                   through to nothing. Fill in PUNCH_CARD_URL to activate it. */
                <button type="button" className="labs-punch-cta" disabled>
                  Purchase a Rally Skills Punch Card
                  <span className="labs-punch-soon">Coming soon</span>
                </button>
              )}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq-section">
          <h2 className="section-title-light">Frequently Asked Questions</h2>
          <div className="faq-grid">
            <div className="faq-column">
              <h3 className="faq-column-title">Rally Start</h3>
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
              <h3 className="faq-column-title">Rally Labs</h3>
              <div className="faq-container">
                {labsFaqData.map((faq, index) => (
                  <div key={index} className={`faq-item ${openLabsFaq === index ? 'open' : ''}`}>
                    <button className="faq-question" onClick={() => toggleLabsFaq(index)}>
                      <span>{faq.question}</span>
                      <span className="faq-toggle">{openLabsFaq === index ? '−' : '+'}</span>
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
              <button
                type="button"
                className="cta-button primary cta-button-pill"
                onClick={() => setWaitlistModalOpen(true)}
              >
                <span className="cta-label">Rally Start</span>
                <span className="cta-sublabel">Join the waitlist</span>
              </button>
              <a
                href={PICKLEPLANNER_JOINABLE_URL}
                className="cta-button primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="cta-label">Rally Labs</span>
                <span className="cta-sublabel">Find this week&rsquo;s session</span>
              </a>
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

        <RallyStartWaitlistModal
          open={waitlistModalOpen}
          onClose={() => setWaitlistModalOpen(false)}
        />

        {/* Coach bio lightbox */}
        {activeCoach && (
          <div className="coach-overlay" onClick={closeCoach}>
            <div
              className="coach-dialog"
              role="dialog"
              aria-modal="true"
              aria-labelledby="coach-dialog-name"
              onClick={e => e.stopPropagation()}
            >
              <button
                type="button"
                className="coach-dialog-close"
                onClick={closeCoach}
                aria-label="Close"
              >
                &times;
              </button>
              {/* Only this region scrolls, so the close button and the pager
                  stay reachable no matter how long a bio runs. */}
              <div className="coach-dialog-scroll" ref={dialogScrollRef}>
              <div className="coach-dialog-body">
                <span className="coach-photo">
                  {activeCoach.photo ? (
                    <img src={activeCoach.photo} alt={`${activeCoach.name} headshot`} />
                  ) : (
                    <span className="coach-photo-fallback">{initialsFor(activeCoach.name)}</span>
                  )}
                </span>
                <div className="coach-dialog-text">
                  <h2 id="coach-dialog-name" className="coach-name">{activeCoach.name}</h2>
                  <div className="coach-bio">
                    {activeCoach.bio.map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Rates and availability are optional per coach — a coach without
                  them simply shows the bio, rather than an empty panel. */}
              {(activeCoach.rates?.length > 0 || activeCoach.availability?.length > 0) && (
                <div className="coach-details">
                  {activeCoach.rates?.length > 0 && (
                    <div className="coach-panel">
                      <h3 className="coach-panel-title">Lesson Rates</h3>
                      <ul className="coach-rates">
                        {activeCoach.rates.map(rate => (
                          <li key={rate.people}>
                            <span className="coach-rate-price">${rate.price}</span>
                            <span className="coach-rate-unit">
                              / hour for {rate.people} {rate.people === 1 ? 'person' : 'people'}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="coach-panel-note">Rates include court fees.</p>
                    </div>
                  )}
                  {activeCoach.availability?.length > 0 && (
                    <div className="coach-panel">
                      <h3 className="coach-panel-title">General Availability</h3>
                      <dl className="coach-availability">
                        {activeCoach.availability.map(slot => (
                          <div key={slot.day} className="coach-avail-row">
                            <dt>{slot.day}</dt>
                            <dd>
                              {slot.times.length > 0 ? (
                                slot.times.map(time => <span key={time}>{time}</span>)
                              ) : (
                                <span className="coach-avail-none">Not available</span>
                              )}
                            </dd>
                          </div>
                        ))}
                      </dl>
                      <p className="coach-panel-note">A general guide — confirm exact times when you book.</p>
                    </div>
                  )}
                </div>
              )}
              </div>
              {coachCount > 1 && (
                <div className="coach-dialog-nav">
                  <button type="button" onClick={() => stepCoach(-1)} aria-label="Previous coach">
                    &lsaquo;
                  </button>
                  <span className="coach-dialog-count">{activeIndex + 1} / {coachCount}</span>
                  <button type="button" onClick={() => stepCoach(1)} aria-label="Next coach">
                    &rsaquo;
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

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

        /* Rally Start Section */
        .beginner-section {
          padding: 3.25rem 2rem;
          background: var(--baseline-navy);
          color: white;
          text-align: center;
        }

        .section-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        /* Narrower than .section-content so the paragraph keeps a readable
           measure now that it is the only body copy in the section. */
        .beginner-lede {
          max-width: 640px;
          margin: 0 auto 2rem;
          color: var(--concrete-light);
          font-size: 1.05rem;
          line-height: 1.7;
        }

        .beginner-waitlist-cta {
          background: white;
          color: var(--baseline-navy);
          border: 0;
          padding: 1rem 2.5rem;
          border-radius: 999px;
          font-family: inherit;
          font-size: 1rem;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .beginner-waitlist-cta:hover {
          background: var(--concrete-light);
        }

        /* Rally Labs Section */
        .labs-section {
          padding: 3.25rem 2rem;
          background: var(--surface-alt);
        }

        .labs-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1.5rem;
          max-width: 800px;
          margin: 0 auto 2rem;
        }

        .lab-card {
          background: white;
          padding: 1.75rem;
          border-radius: 12px;
          text-align: center;
          box-shadow: 0 5px 15px rgba(0,0,0,0.08);
          display: flex;
          flex-direction: column;
        }

        .lab-name {
          color: var(--baseline-navy);
          font-size: 1.2rem;
          margin-bottom: 0.75rem;
        }

        /* Day and time stack rather than sharing a line — a pipe separator
           breaks awkwardly at the card's narrow width. */
        .lab-when {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          margin-bottom: 0.75rem;
        }
        .lab-day {
          font-weight: 600;
          color: var(--baseline-navy);
        }
        .lab-time {
          color: var(--accent-ink);
          font-weight: 600;
          font-size: 0.95rem;
        }

        .lab-who {
          color: var(--muted);
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          /* Pushes the CTA to the bottom so both cards' buttons line up even
             when one description wraps to more lines. */
          flex-grow: 1;
        }

        .lab-cta {
          align-self: center;
          background: var(--baseline-navy);
          color: white;
          padding: 0.75rem 1.75rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: bold;
          font-size: 0.95rem;
          transition: background 0.3s ease;
        }
        .lab-cta:hover {
          background: var(--concrete);
        }

        .labs-note {
          max-width: 640px;
          margin: 0 auto 1.75rem;
          text-align: center;
          color: var(--muted);
          font-size: 0.95rem;
          line-height: 1.7;
        }

        .labs-secondary {
          text-align: center;
        }
        .labs-punch-cta {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          gap: 0.15rem;
          background: transparent;
          color: var(--baseline-navy);
          border: 2px solid var(--baseline-navy);
          padding: 0.7rem 1.75rem;
          border-radius: 8px;
          text-decoration: none;
          font-family: inherit;
          font-size: 0.95rem;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .labs-punch-cta:hover:not(:disabled) {
          background: var(--baseline-navy);
          color: white;
        }
        .labs-punch-cta:disabled {
          border-color: var(--border);
          color: var(--muted);
          cursor: not-allowed;
        }
        .labs-punch-soon {
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
        }

        /* Coach Gallery */
        /* Shares the white background with .why-train directly above it, so a
           hairline rule keeps the two headings from reading as one section. */
        .coaches-section {
          padding: 3.25rem 2rem;
          background: white;
          border-top: 1px solid var(--border);
        }

        /* Gallery of photo tiles. The bios are the tall part of this roster, so
           they live in the lightbox and the tiles stay on one screen. */
        .coach-gallery {
          max-width: 1000px;
          margin: 2rem auto 0;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 1.5rem;
        }

        .coach-tile {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.7rem;
          background: none;
          border: 0;
          padding: 0.5rem;
          border-radius: 12px;
          font-family: inherit;
          cursor: pointer;
          transition: transform 0.2s ease;
        }
        .coach-tile:hover { transform: translateY(-4px); }
        .coach-tile:hover .coach-photo { box-shadow: 0 12px 26px rgba(0,0,0,0.2); }
        .coach-tile:hover .coach-tile-hint { color: var(--accent-ink); }
        .coach-tile:focus-visible {
          outline: 2px solid var(--rally-orange);
          outline-offset: 3px;
        }

        .coach-tile-name {
          font-size: 1.05rem;
          font-weight: bold;
          color: var(--baseline-navy);
          line-height: 1.3;
          text-align: center;
        }
        .coach-tile-hint {
          font-size: 0.78rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--muted);
          transition: color 0.2s ease;
        }

        .coach-photo {
          display: block;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          overflow: hidden;
          background: var(--concrete-light);
          flex-shrink: 0;
          transition: box-shadow 0.2s ease;
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
          background: var(--baseline-navy);
          color: white;
          font-size: 2.5rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }

        /* Bio lightbox */
        .coach-overlay {
          position: fixed;
          inset: 0;
          z-index: 1000;
          background: rgba(24, 39, 65, 0.82);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        /* Column layout so the dialog is only ever as tall as its content, up
           to the viewport: the middle scrolls, the chrome stays put. dvh (not
           vh) so a phone's collapsing address bar doesn't clip the pager. */
        .coach-dialog {
          position: relative;
          display: flex;
          flex-direction: column;
          width: 100%;
          max-width: 820px;
          max-height: calc(100vh - 3rem);
          max-height: calc(100dvh - 3rem);
          overflow: hidden;
          background: white;
          border-radius: 16px;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }
        .coach-dialog-scroll {
          overflow-y: auto;
          padding: 2rem;
          /* Keeps the heading clear of the close button. */
          padding-right: 3rem;
        }
        .coach-dialog-close {
          position: absolute;
          top: 0.6rem;
          right: 0.85rem;
          z-index: 1;
          background: none;
          border: 0;
          padding: 0.25rem;
          font-size: 1.9rem;
          line-height: 1;
          color: var(--muted);
          cursor: pointer;
        }
        .coach-dialog-close:hover { color: var(--baseline-navy); }

        .coach-dialog-body {
          display: flex;
          align-items: flex-start;
          gap: 1.5rem;
        }
        /* Descendant selector, not a modifier class — it has to outrank the
           .coach-photo sizes set inside the breakpoints further down. */
        .coach-dialog .coach-photo { width: 150px; height: 150px; }
        .coach-dialog-text { min-width: 0; }

        .coach-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--baseline-navy);
          margin-bottom: 0.75rem;
        }
        .coach-bio {
          color: var(--baseline-navy);
          line-height: 1.65;
        }
        .coach-bio p { margin-bottom: 0.85rem; }
        .coach-bio p:last-child { margin-bottom: 0; }

        /* Rates + availability sit below the bio at full dialog width, so the
           two panels can run side by side instead of squeezing beside the photo. */
        .coach-details {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }
        .coach-panel {
          background: var(--surface-alt);
          border-radius: 6px;
          padding: 1.1rem 1.25rem;
        }
        .coach-panel-title {
          font-size: 1rem;
          font-weight: bold;
          color: var(--baseline-navy);
          margin-bottom: 0.75rem;
        }
        .coach-panel-note {
          margin-top: 0.8rem;
          padding-top: 0.6rem;
          border-top: 1px solid var(--border);
          font-size: 0.78rem;
          line-height: 1.45;
          color: var(--muted);
        }

        .coach-rates { list-style: none; }
        .coach-rates li {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 0.35rem;
          margin-bottom: 0.45rem;
        }
        .coach-rates li:last-child { margin-bottom: 0; }
        .coach-rate-price {
          font-size: 1.05rem;
          font-weight: bold;
          color: var(--baseline-navy);
        }
        .coach-rate-unit {
          font-size: 0.88rem;
          color: var(--muted);
        }

        .coach-avail-row {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
        }
        .coach-avail-row:last-child { margin-bottom: 0; }
        .coach-avail-row dt {
          flex-shrink: 0;
          min-width: 2.3rem;
          padding-top: 0.12rem;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--baseline-navy);
        }
        /* Column, not a comma list — a coach with a morning and an evening
           window reads as two distinct blocks, the way a schedule should. */
        .coach-avail-row dd {
          display: flex;
          flex-direction: column;
          gap: 0.1rem;
          font-size: 0.88rem;
          color: var(--ink);
        }
        .coach-avail-none { color: var(--muted); }

        /* Pinned below the scroll area — you can always page without first
           scrolling to the bottom of a long bio. */
        .coach-dialog-nav {
          flex-shrink: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 1.25rem;
          padding: 0.85rem 2rem;
          border-top: 1px solid var(--border);
          background: white;
        }
        .coach-dialog-nav button {
          width: 40px;
          height: 40px;
          border: 0;
          border-radius: 50%;
          background: var(--surface-alt);
          color: var(--baseline-navy);
          font-size: 1.5rem;
          line-height: 1;
          font-family: inherit;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        .coach-dialog-nav button:hover { background: var(--border); }
        .coach-dialog-count {
          font-size: 0.9rem;
          color: var(--muted);
        }

        /* Coach responsive — the tile count per row steps down; tiles never
           become full-width rows, which keeps the roster short on a phone.
           Kept beside the coach rules rather than split across the page-wide
           breakpoints below, since nothing else depends on these widths. */
        @media (max-width: 1024px) {
          .coach-gallery {
            grid-template-columns: repeat(3, 1fr);
            max-width: 620px;
          }
        }
        @media (max-width: 768px) {
          .coaches-section { padding: 2.5rem 1.25rem; }
          .coach-photo { width: 120px; height: 120px; }
          .coach-photo-fallback { font-size: 2.1rem; }
        }
        @media (max-width: 560px) {
          .coach-gallery {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.25rem;
            max-width: 400px;
          }
          .coach-photo { width: 110px; height: 110px; }
          .coach-dialog-scroll { padding: 1.5rem; padding-right: 2.5rem; }
          .coach-dialog-nav { padding: 0.75rem 1.5rem; }
          .coach-dialog-body {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .coach-dialog .coach-photo { width: 120px; height: 120px; }
          /* Side-by-side panels get too narrow for a time range to stay on
             one line, so stack them once the dialog does. */
          .coach-details { grid-template-columns: 1fr; }
        }
        @media (max-width: 480px) {
          .coach-tile-name { font-size: 0.98rem; }
          .coach-name { font-size: 1.3rem; }
        }

        /* Short viewport (a laptop with a half-height window, landscape phone):
           the headshot is the least essential thing on screen, so it yields
           space before the bio and panels have to scroll. */
        @media (max-height: 700px) {
          .coach-dialog .coach-photo { width: 100px; height: 100px; }
          .coach-dialog-scroll { padding: 1.5rem; padding-right: 2.5rem; }
        }
        @media (max-height: 560px) {
          .coach-dialog .coach-photo { width: 76px; height: 76px; }
          .coach-dialog-body { gap: 1rem; }
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

          .labs-grid {
            grid-template-columns: 1fr;
            max-width: 420px;
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
