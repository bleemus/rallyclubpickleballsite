import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function CorporateEvents() {
  return (
    <>
      <Head>
        <title>Rally Experiences | Corporate Team Building & Private Events | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Rally Experiences - Guided pickleball events for corporate teams and private groups. Professional facilitation, all equipment included, and turnkey event management."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/corporate-events" />
        <meta
          name="keywords"
          content="corporate events, team building, pickleball events, corporate team building, private events, glen carbon, rally club"
        />
        <meta property="og:title" content="Rally Experiences | Corporate Team Building" />
        <meta
          property="og:description"
          content="Where Teams Come to Play. Guided pickleball experiences for corporate teams and private events at Rally Club Pickleball."
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/corporate-events" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Experiences | Corporate Team Building" />
        <meta
          name="twitter:description"
          content="Guided pickleball experiences for corporate teams and private events. Professional facilitation included."
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
              <a href="/#booking" className="nav-link">Book a Court</a>
              <a href="/#membership" className="nav-link">Membership</a>
              <a href="/merch" className="nav-link">Merch</a>
              <a href="/#facility" className="nav-link">About us</a>
              <a href="/#contact" className="nav-link">Contact</a>
              <a href="/honcho" className="nav-link honcho-nav-link">Honcho League</a>
              <a href="/corporate-events" className="nav-link active">Corporate Events</a>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section className="events-hero">
          <div className="events-hero-content">
            <h1 className="events-hero-title">RALLY EXPERIENCES</h1>
            <p className="events-hero-tagline">Where Teams Come to Play.</p>
            <p className="events-hero-subtitle">
              Guided Pickleball Experiences for Corporate Teams and Private Events
            </p>
            <p className="events-hero-description">
              Rally Experiences is built on a simple but powerful idea: combine the fast-rising popularity of pickleball
              with the growing need for meaningful, energetic group events. Whether you're a company looking to enhance
              team cohesion or a group of friends organizing a birthday bash, Rally Experiences offers a fresh, engaging
              way to bring people together through play. It's not just a game—it's a guided experience designed for
              connection, movement, and a ton of laughter.
            </p>
            <div className="events-hero-cta">
              <a href="#packages" className="events-cta-button">View Packages</a>
              <a href="#contact-section" className="events-cta-button-secondary">Get a Quote</a>
            </div>
          </div>
        </section>

        {/* What Makes Us Unique */}
        <section className="unique-section">
          <h2 className="section-title">What Makes Rally Experiences Unique</h2>
          <div className="unique-content">
            <p className="unique-intro">
              Each Rally Experience includes all the essentials for a successful event. We provide the courts, paddles,
              balls, instruction, and energy. Events are guided from start to finish by experienced facilitators who
              handle everything—warmups, rules, gameplay coordination, and even awards at the end.
            </p>
            <div className="unique-grid">
              <div className="unique-card">
                <div className="unique-icon">🎯</div>
                <h3>Structured Yet Flexible</h3>
                <p>We blend instruction with gameplay in a way that makes even complete beginners feel confident. After an introductory clinic, teams rotate through fun and competitive matches.</p>
              </div>
              <div className="unique-card">
                <div className="unique-icon">🏆</div>
                <h3>Multiple Formats</h3>
                <p>Optional formats ranging from round-robin partner swaps to full-blown bracket-style tournaments. We close things out with awards, photo ops, and sometimes even a highlight reel.</p>
              </div>
              <div className="unique-card">
                <div className="unique-icon">📈</div>
                <h3>More Than a Trend</h3>
                <p>Pickleball is one of the fastest-growing sports in America. It's physical but not intimidating, competitive but always fun, and requires no prior skill.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits for Companies */}
        <section className="benefits-section">
          <h2 className="section-title">Benefits for Companies</h2>
          <p className="benefits-intro">
            Companies today are under more pressure than ever to find ways to strengthen their internal culture.
            Between remote work, fragmented teams, and post-pandemic burnout, creating authentic, energizing shared
            experiences is not just a perk—it's a necessity.
          </p>
          <div className="benefits-grid-events">
            <div className="benefit-card-events">
              <div className="benefit-icon-events">🤝</div>
              <h3>Promote Collaboration</h3>
              <p>
                Players must work together, problem-solve on the fly, and encourage one another, often outside their
                usual social or departmental silos. The informal, low-pressure atmosphere is ideal for building rapport
                among coworkers who may not interact regularly.
              </p>
            </div>
            <div className="benefit-card-events">
              <div className="benefit-icon-events">💪</div>
              <h3>Healthy Movement & Stress Relief</h3>
              <p>
                Instead of sitting around a conference table for another trust fall, participants get up and play.
                Pickleball is inclusive, accessible, and easy to learn. It provides a reset for the body and mind—boosting
                endorphins and sharpening focus long after the games are done.
              </p>
            </div>
            <div className="benefit-card-events">
              <div className="benefit-icon-events">🎉</div>
              <h3>Just Plain Fun</h3>
              <p>
                From clever team names to spontaneous on-court celebrations, Rally Experiences spark moments that get
                talked about long after the photos are shared. The blend of light competition, laughter, and structured
                activity delivers a memorable experience.
              </p>
            </div>
          </div>
        </section>

        {/* Why Rally Experiences */}
        <section className="why-rally-section">
          <h2 className="section-title">Why Rally Experiences?</h2>
          <div className="why-rally-content">
            <p className="why-rally-intro">
              Rally Experiences stands apart by combining professional-level event facilitation with the laid-back,
              welcoming vibe that makes pickleball so enjoyable. We don't just hand out paddles and hope for the best—we
              guide every step of the process to make sure participants feel comfortable, included, and engaged.
            </p>
            <div className="why-rally-features">
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <strong>Professional Content Creation</strong>
                  <p>Video recap for your internal newsletter, custom-branded photos for social channels, highlight reels for your company LinkedIn page</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <strong>Ultimate Flexibility</strong>
                  <p>Groups of 8 to 24, indoors or outdoors, on your turf or ours. Casual afternoon drop-in games or competitive bracketed showdowns</p>
                </div>
              </div>
              <div className="feature-item">
                <span className="feature-check">✓</span>
                <div>
                  <strong>Turnkey Solution</strong>
                  <p>You don't need to worry about planning, organizing, or managing anything—we do it all. Effortless to book, easy to love, impossible to forget</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services */}
        <section className="services-section">
          <h2 className="section-title">Our Services</h2>
          <div className="services-content">
            <div className="services-timeline">
              <h3>A Typical 2-Hour Rally Experience</h3>
              <div className="timeline-item">
                <div className="timeline-duration">30–45 minutes</div>
                <div className="timeline-description">Welcome and introduction to the game, including rules, technique, and light warm-up drills</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-duration">60–75 minutes</div>
                <div className="timeline-description">Facilitated round-robin gameplay with rotating teams</div>
              </div>
              <div className="timeline-item">
                <div className="timeline-duration">10–15 minutes</div>
                <div className="timeline-description">Awards ceremony and group photo</div>
              </div>
            </div>

            <div className="services-included">
              <h3>Every Rally Experience Includes:</h3>
              <ul className="included-list">
                <li>Professional facilitation and on-site instruction</li>
                <li>All paddles, balls, and equipment</li>
                <li>Two reserved indoor pickleball courts at The Rally Club in Glen Carbon, IL</li>
                <li>Structured, rotating gameplay</li>
                <li>Optional mini-tournaments:
                  <ul>
                    <li>Round-robin format with rotating partners and opponents, with individual points tracked across matches</li>
                    <li>Bracket-style tournament where players pick their own teams and team names—creativity encouraged!</li>
                  </ul>
                </li>
                <li>Setup and teardown handled by us</li>
                <li>Music, energy, and a fun, low-pressure environment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Package Options */}
        <section id="packages" className="packages-section">
          <h2 className="section-title">Package Options</h2>
          <div className="packages-grid">
            {/* Starter Rally */}
            <div className="package-card">
              <div className="package-header">
                <h3 className="package-name">Starter Rally</h3>
                <div className="package-price">$450</div>
                <div className="package-details">Up to 12 participants • 2 hours • 2 courts</div>
              </div>
              <ul className="package-features">
                <li>Basic instruction</li>
                <li>Guided play</li>
                <li>Paddles, balls, and setup included</li>
                <li>Light snacks and water station</li>
                <li>Group photo (standard)</li>
              </ul>
              <a href="#contact-section" className="package-button">Get Started</a>
            </div>

            {/* Pro Rally */}
            <div className="package-card package-featured">
              <div className="package-badge">Most Popular</div>
              <div className="package-header">
                <h3 className="package-name">Pro Rally</h3>
                <div className="package-price">$750</div>
                <div className="package-details">Up to 16 participants • 2.5 hours • 2 courts</div>
              </div>
              <ul className="package-features">
                <li>Includes Starter Rally features</li>
                <li>Extended play time</li>
                <li>Warm-up drills + mini tournament</li>
                <li>DSLR-quality team photo</li>
                <li>20+ edited event photos</li>
              </ul>
              <a href="#contact-section" className="package-button">Get Started</a>
            </div>

            {/* Ultimate Rally */}
            <div className="package-card">
              <div className="package-header">
                <h3 className="package-name">Ultimate Rally</h3>
                <div className="package-price">$1,200</div>
                <div className="package-details">Up to 24 participants • 3 hours • 2 courts</div>
              </div>
              <ul className="package-features">
                <li>Includes Pro Rally features</li>
                <li>Extended play time</li>
                <li>1-minute highlight video</li>
                <li>40+ edited photos</li>
                <li>Premium event experience</li>
              </ul>
              <a href="#contact-section" className="package-button">Get Started</a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="contact-section" className="cta-section">
          <h2 className="section-title">Let's Serve Something Fresh</h2>
          <div className="cta-content">
            <div className="cta-steps">
              <div className="cta-step">
                <div className="cta-step-number">1</div>
                <p>Pick a package or ask for a custom quote</p>
              </div>
              <div className="cta-step">
                <div className="cta-step-number">2</div>
                <p>Lock in your date (limited availability per month)</p>
              </div>
              <div className="cta-step">
                <div className="cta-step-number">3</div>
                <p>We'll handle the rest—from equipment to coordination</p>
              </div>
            </div>
            <p className="cta-tagline">Let's get your team on the court—and out of their comfort zone—in the best way possible.</p>
            <div className="cta-buttons">
              <a href="mailto:rental@rallyclubpickleball.com?subject=Rally%20Experiences%20Inquiry" className="cta-button-primary">Contact Us for Booking</a>
              <a href="tel:+16189310015" className="cta-button-secondary">Call: (618) 931-0015</a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="footer">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Contact Us</h3>
              <p>Email: rental@rallyclubpickleball.com</p>
              <p>Phone: (618) 931-0015</p>
            </div>
            <div className="footer-section">
              <h3>Location</h3>
              <p>137 N. Main Street<br />Glen Carbon, IL 62034</p>
            </div>
            <div className="footer-section">
              <h3>Quick Links</h3>
              <a href="/" className="footer-link">Home</a>
              <a href="/#membership" className="footer-link">Membership</a>
              <a href="/honcho" className="footer-link">Honcho League</a>
              <a href="/corporate-events" className="footer-link">Corporate Events</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Rally Club Pickleball. All rights reserved.</p>
          </div>
        </footer>
      </div>

      <style jsx>{`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #1a1a1a;
          color: #fff;
        }

        /* Header Styles */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: rgba(26, 26, 26, 0.95);
          backdrop-filter: blur(10px);
          z-index: 1000;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
          display: flex;
          align-items: center;
          font-size: 1.2rem;
          font-weight: 700;
          color: #C8F560;
        }

        .nav {
          display: flex;
          gap: 2rem;
        }

        .nav-link {
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 0.5rem 0;
        }

        .nav-link:hover {
          color: #C8F560;
        }

        .nav-link.active {
          color: #C8F560;
          border-bottom: 2px solid #C8F560;
        }

        .honcho-nav-link {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          padding: 0.5rem 1rem;
          border-radius: 4px;
        }

        /* Hero Section */
        .events-hero {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          padding: 8rem 2rem 4rem;
          text-align: center;
        }

        .events-hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .events-hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          margin-bottom: 1rem;
          letter-spacing: 2px;
          color: #C8F560;
        }

        .events-hero-tagline {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 1rem;
          color: #E8F5E8;
        }

        .events-hero-subtitle {
          font-size: 1.3rem;
          margin-bottom: 2rem;
          color: #E8F5E8;
          font-weight: 500;
        }

        .events-hero-description {
          font-size: 1.1rem;
          line-height: 1.8;
          margin-bottom: 2.5rem;
          color: #E8F5E8;
        }

        .events-hero-cta {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .events-cta-button {
          background: #C8F560;
          color: #1a1a1a;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .events-cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(200, 245, 96, 0.3);
        }

        .events-cta-button-secondary {
          background: transparent;
          color: #E8F5E8;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border: 2px solid #E8F5E8;
          transition: all 0.3s ease;
        }

        .events-cta-button-secondary:hover {
          background: rgba(232, 245, 232, 0.1);
          transform: translateY(-2px);
        }

        /* Section Styles */
        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 3rem;
          color: #C8F560;
        }

        /* Unique Section */
        .unique-section {
          padding: 4rem 2rem;
          background: #252525;
        }

        .unique-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .unique-intro {
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 3rem;
          color: #E8F5E8;
        }

        .unique-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .unique-card {
          background: #1a1a1a;
          padding: 2rem;
          border-radius: 12px;
          text-align: center;
          border: 1px solid rgba(200, 245, 96, 0.2);
          transition: all 0.3s ease;
        }

        .unique-card:hover {
          transform: translateY(-5px);
          border-color: #C8F560;
          box-shadow: 0 10px 30px rgba(200, 245, 96, 0.2);
        }

        .unique-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .unique-card h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #C8F560;
        }

        .unique-card p {
          line-height: 1.6;
          color: #E8F5E8;
        }

        /* Benefits Section */
        .benefits-section {
          padding: 4rem 2rem;
          background: #1a1a1a;
        }

        .benefits-intro {
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          max-width: 900px;
          margin: 0 auto 3rem;
          color: #E8F5E8;
        }

        .benefits-grid-events {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .benefit-card-events {
          background: #252525;
          padding: 2rem;
          border-radius: 12px;
          border: 1px solid rgba(200, 245, 96, 0.2);
          transition: all 0.3s ease;
        }

        .benefit-card-events:hover {
          transform: translateY(-5px);
          border-color: #C8F560;
          box-shadow: 0 10px 30px rgba(200, 245, 96, 0.2);
        }

        .benefit-icon-events {
          font-size: 3rem;
          margin-bottom: 1rem;
        }

        .benefit-card-events h3 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #C8F560;
        }

        .benefit-card-events p {
          line-height: 1.6;
          color: #E8F5E8;
        }

        /* Why Rally Section */
        .why-rally-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
        }

        .why-rally-content {
          max-width: 1000px;
          margin: 0 auto;
        }

        .why-rally-intro {
          font-size: 1.2rem;
          line-height: 1.8;
          text-align: center;
          margin-bottom: 3rem;
          color: #E8F5E8;
        }

        .why-rally-features {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .feature-item {
          display: flex;
          gap: 1.5rem;
          align-items: flex-start;
          background: rgba(0, 0, 0, 0.2);
          padding: 1.5rem;
          border-radius: 8px;
        }

        .feature-check {
          font-size: 2rem;
          color: #C8F560;
          flex-shrink: 0;
        }

        .feature-item strong {
          display: block;
          font-size: 1.2rem;
          margin-bottom: 0.5rem;
          color: #C8F560;
        }

        .feature-item p {
          line-height: 1.6;
          color: #E8F5E8;
        }

        /* Services Section */
        .services-section {
          padding: 4rem 2rem;
          background: #252525;
        }

        .services-content {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
        }

        .services-timeline h3,
        .services-included h3 {
          font-size: 1.8rem;
          margin-bottom: 2rem;
          color: #C8F560;
        }

        .timeline-item {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
          padding-bottom: 1.5rem;
          border-bottom: 1px solid rgba(200, 245, 96, 0.2);
        }

        .timeline-item:last-child {
          border-bottom: none;
        }

        .timeline-duration {
          font-weight: 700;
          color: #C8F560;
          flex-shrink: 0;
          font-size: 1.1rem;
        }

        .timeline-description {
          line-height: 1.6;
          color: #E8F5E8;
        }

        .included-list {
          list-style: none;
          padding: 0;
        }

        .included-list > li {
          margin-bottom: 1rem;
          padding-left: 2rem;
          position: relative;
          line-height: 1.6;
          color: #E8F5E8;
        }

        .included-list > li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: #C8F560;
          font-weight: 700;
          font-size: 1.2rem;
        }

        .included-list ul {
          margin-top: 0.5rem;
          padding-left: 1.5rem;
        }

        .included-list ul li {
          margin-bottom: 0.5rem;
          color: #E8F5E8;
        }

        /* Packages Section */
        .packages-section {
          padding: 4rem 2rem;
          background: #1a1a1a;
        }

        .packages-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .package-card {
          background: #252525;
          border-radius: 12px;
          padding: 2rem;
          border: 2px solid rgba(200, 245, 96, 0.2);
          transition: all 0.3s ease;
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .package-card:hover {
          transform: translateY(-5px);
          border-color: #C8F560;
          box-shadow: 0 15px 40px rgba(200, 245, 96, 0.2);
        }

        .package-featured {
          border-color: #C8F560;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
        }

        .package-badge {
          position: absolute;
          top: -12px;
          left: 50%;
          transform: translateX(-50%);
          background: #C8F560;
          color: #1a1a1a;
          padding: 0.3rem 1rem;
          border-radius: 20px;
          font-weight: 700;
          font-size: 0.9rem;
        }

        .package-header {
          text-align: center;
          margin-bottom: 2rem;
        }

        .package-name {
          font-size: 1.8rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: #C8F560;
        }

        .package-price {
          font-size: 3rem;
          font-weight: 900;
          color: #fff;
          margin-bottom: 0.5rem;
        }

        .package-details {
          color: #E8F5E8;
          font-size: 0.95rem;
        }

        .package-features {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
          flex-grow: 1;
        }

        .package-features li {
          padding: 0.75rem 0;
          border-bottom: 1px solid rgba(200, 245, 96, 0.1);
          color: #E8F5E8;
          line-height: 1.5;
        }

        .package-features li:last-child {
          border-bottom: none;
        }

        .package-button {
          display: block;
          background: #C8F560;
          color: #1a1a1a;
          padding: 1rem;
          border-radius: 8px;
          text-align: center;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.3s ease;
        }

        .package-button:hover {
          background: #D4FF70;
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(200, 245, 96, 0.3);
        }

        /* CTA Section */
        .cta-section {
          padding: 4rem 2rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
        }

        .cta-content {
          max-width: 900px;
          margin: 0 auto;
          text-align: center;
        }

        .cta-steps {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 3rem;
        }

        .cta-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
        }

        .cta-step-number {
          width: 60px;
          height: 60px;
          background: #C8F560;
          color: #1a1a1a;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.8rem;
          font-weight: 900;
        }

        .cta-step p {
          color: #E8F5E8;
          line-height: 1.6;
          font-size: 1.1rem;
        }

        .cta-tagline {
          font-size: 1.3rem;
          font-weight: 600;
          margin-bottom: 2rem;
          color: #E8F5E8;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .cta-button-primary {
          background: #C8F560;
          color: #1a1a1a;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          transition: all 0.3s ease;
        }

        .cta-button-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(200, 245, 96, 0.3);
        }

        .cta-button-secondary {
          background: transparent;
          color: #E8F5E8;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 700;
          font-size: 1.1rem;
          border: 2px solid #E8F5E8;
          transition: all 0.3s ease;
        }

        .cta-button-secondary:hover {
          background: rgba(232, 245, 232, 0.1);
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: #0a0a0a;
          padding: 3rem 2rem 1rem;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-section h3 {
          color: #C8F560;
          margin-bottom: 1rem;
          font-size: 1.2rem;
        }

        .footer-section p,
        .footer-link {
          color: #E8F5E8;
          margin-bottom: 0.5rem;
          line-height: 1.6;
        }

        .footer-link {
          display: block;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer-link:hover {
          color: #C8F560;
        }

        .footer-bottom {
          text-align: center;
          padding-top: 2rem;
          border-top: 1px solid rgba(200, 245, 96, 0.2);
          color: #999;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .events-hero-title {
            font-size: 2.5rem;
          }

          .events-hero-tagline {
            font-size: 1.5rem;
          }

          .events-hero-subtitle {
            font-size: 1.1rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .services-content {
            grid-template-columns: 1fr;
            gap: 3rem;
          }

          .packages-grid {
            grid-template-columns: 1fr;
          }

          .cta-steps {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
