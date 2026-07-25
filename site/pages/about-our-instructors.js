import { useState } from 'react';
import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
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
        <SiteHeader active="academy" />

        {/* Hero */}
        <section className="instructors-hero">
          <div className="instructors-hero-content">
            <h1 className="instructors-hero-title">About Our Instructors</h1>
            <p className="instructors-hero-subtitle">
              Meet the coaches behind Rally Academy.
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

        <SiteFooter />
      </div>

      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        .container {
          font-family: var(--font-body);
          line-height: 1.6;
          color: var(--ink);
        }

        /* Hero */
        .instructors-hero {
          margin-top: 62px;
          padding: 3.25rem 2rem;
          background: linear-gradient(135deg, var(--baseline-navy) 0%, var(--concrete) 100%);
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
          color: var(--concrete-light);
        }

        /* Instructor Grid */
        .instructors-grid-section {
          padding: 3.25rem 2rem;
          background: var(--surface-alt);
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
          background: var(--concrete-light);
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
          background: linear-gradient(135deg, var(--baseline-navy) 0%, var(--concrete) 100%);
          color: white;
          font-size: 3rem;
          font-weight: bold;
          letter-spacing: 0.05em;
        }

        .coach-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: var(--baseline-navy);
          margin-bottom: 1rem;
        }

        .coach-bio {
          color: var(--baseline-navy);
          line-height: 1.65;
        }
        .coach-bio p {
          margin-bottom: 0.85rem;
        }
        .coach-bio p:last-child { margin-bottom: 0; }

        /* Final CTA */
        .final-cta {
          padding: 3.25rem 2rem;
          background: linear-gradient(135deg, var(--baseline-navy) 0%, var(--concrete) 100%);
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
          color: var(--concrete-light);
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
          color: var(--baseline-navy);
        }
        .cta-button.primary:hover {
          background: var(--concrete-light);
        }
        .cta-button.secondary {
          background: transparent;
          color: white;
          border-color: rgba(255, 255, 255, 0.7);
        }
        .cta-button.secondary:hover {
          background: rgba(255, 255, 255, 0.12);
          border-color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .instructors-hero-title { font-size: 2.25rem; }
          .instructors-hero-subtitle { font-size: 1.05rem; }
          .instructors-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .coach-photo { width: 140px; height: 140px; }
          .cta-buttons { flex-direction: column; }
        }
        @media (max-width: 480px) {
          .instructors-hero-title { font-size: 1.85rem; }
        }
      `}</style>
    </>
  );
}
