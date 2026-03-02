import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

function FAQItem({ question, children }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item">
      <button className="faq-question" onClick={() => setOpen(!open)} aria-expanded={open}>
        <span>{question}</span>
        <span className={`faq-arrow ${open ? 'open' : ''}`}>&#9660;</span>
      </button>
      {open && <div className="faq-answer">{children}</div>}
      <style jsx>{`
        .faq-item {
          border-bottom: 1px solid #e0e0e0;
        }
        .faq-question {
          width: 100%;
          text-align: left;
          padding: 1.25rem 1.5rem;
          background: none;
          border: none;
          font-size: 1.1rem;
          font-weight: 600;
          color: #2D5A27;
          cursor: pointer;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 1rem;
          transition: background 0.2s;
          font-family: inherit;
        }
        .faq-question:hover {
          background: rgba(45, 90, 39, 0.05);
        }
        .faq-arrow {
          font-size: 0.8rem;
          transition: transform 0.3s;
          flex-shrink: 0;
          color: #3E7B3E;
        }
        .faq-arrow.open {
          transform: rotate(180deg);
        }
        .faq-answer {
          padding: 0 1.5rem 1.5rem;
          color: #555;
          line-height: 1.7;
          font-size: 0.95rem;
        }
      `}</style>
    </div>
  );
}

export default function HonchoFAQ() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('preseason');

  const sections = [
    { id: 'preseason', label: 'Pre-Season & Registration' },
    { id: 'regular', label: 'Regular Season' },
    { id: 'playoffs', label: 'Playoffs' },
  ];

  return (
    <>
      <Head>
        <title>Honcho League FAQ | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Frequently asked questions about the Honcho Pickleball League at Rally Club Pickleball. Learn about registration, match day protocols, DUPR integration, playoffs, and more."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/honcho-faq" />
        <meta
          name="keywords"
          content="honcho pickleball faq, honcho league rules, honcho registration, honcho playoffs, DUPR pickleball, pickleball league faq"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Honcho League FAQ | Rally Club Pickleball" />
        <meta
          property="og:description"
          content="Everything you need to know about playing in the Honcho Pickleball League at Rally Club."
        />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/honcho-faq" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Honcho League FAQ | Rally Club Pickleball" />
        <meta
          name="twitter:description"
          content="Everything you need to know about playing in the Honcho Pickleball League at Rally Club."
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
        <section className="faq-hero">
          <div className="faq-hero-content">
            <a href="/honcho" className="back-link">&larr; Back to Honcho League</a>
            <h1 className="faq-hero-title">Honcho League FAQ</h1>
            <p className="faq-hero-subtitle">Everything you need to know about playing in the Honcho Pickleball League at Rally Club</p>
          </div>
        </section>

        {/* Section Tabs */}
        <div className="section-tabs">
          {sections.map(s => (
            <button
              key={s.id}
              className={`section-tab ${activeSection === s.id ? 'active' : ''}`}
              onClick={() => setActiveSection(s.id)}
            >
              {s.label}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <section className="faq-content">
          <div className="faq-container">

            {/* Pre-Season & Registration */}
            {activeSection === 'preseason' && (
              <div className="faq-section">
                <FAQItem question="League Overview">
                  <h4>Match Format & Timing</h4>
                  <p>Each team will play a match for 60 minutes. A match is three games. Each game is played to 11 points, win by 2.</p>

                  <h4>League Structure & Divisions</h4>
                  <p>For details on skill divisions and other league-specific requirements, check each league registration page. As of 2025, Honcho leagues no longer have gender requirements.</p>
                  <p>Leagues may run with a minimum of 4 teams, depending on the location and division. Depending on league size, you may have a doubleheader, a bye week, or face the same team more than once — or not at all!</p>
                  <p><strong>Note:</strong> DUPR helps shape our divisions, but we don&apos;t strictly enforce rating ranges. We rely on player honesty to keep competition fair and fun for everyone.</p>

                  <h4>Team Requirements & Playtime Rules</h4>
                  <ul>
                    <li>Minimum of two players per team, no more than four on the roster.</li>
                    <li>No restrictions on rotation — teams may choose to play with two players all night or rotate in their third or fourth player as they see fit.</li>
                    <li>Players must be 18+, or 16–17 with parent/guardian consent. If under 18, email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> for manual registration.</li>
                  </ul>

                  <h4>What&apos;s Included in Your Registration</h4>
                  <ul>
                    <li>6 weeks of regular season play + 2-week single-elimination playoff</li>
                    <li>Weekly court costs included — just show up and play</li>
                    <li>Exclusive Honcho-branded gear each season (varies by market)</li>
                    <li>Head Honcho Champions Package with cash, sponsor gear, and next-season entry</li>
                    <li>Access to League Social Hours including end-of-season social</li>
                    <li>Exclusive Honcho discounts on tournaments and events</li>
                  </ul>

                  <h4>Opponent Contact Policy & Player Privacy</h4>
                  <p>Honcho does not share opponent contact info. Leagues are fully administered — no need to coordinate with other teams or reschedule matches. You&apos;re welcome to swap contact info with other players in person.</p>

                  <h4>Playoff Eligibility</h4>
                  <p>All teams qualify for playoffs unless they have two or more no-shows, two forfeits, or one of each during the season.</p>

                  <h4>Honcho Policies</h4>
                  <ul>
                    <li><strong>Division Changes:</strong> Teams may change divisions before registration closes. After the deadline, no changes will be permitted.</li>
                    <li><strong>Refund Policy:</strong> League fees are refundable until the end of the registration period. After that, no refunds or rollovers will be granted.</li>
                    <li><strong>League Adjustments:</strong> Honcho reserves the right to adjust schedules, court assignments, skill divisions, and venue locations.</li>
                    <li><strong>Code of Conduct:</strong> 2-strike policy for inappropriate behavior. After a second issue, the team will be removed without refund.</li>
                    <li><strong>DUPR Integration:</strong> By joining, you&apos;re automatically opted in to DUPR. Players submit match results weekly via a form.</li>
                  </ul>
                </FAQItem>

                <FAQItem question="Honcho Registration Instructions">
                  <h4>Create an Account</h4>
                  <ol>
                    <li>Go to <a href="https://honchopickleball.com" target="_blank" rel="noopener noreferrer">Honcho Registration</a>.</li>
                    <li>Click &quot;Sign Up&quot; (if new) or &quot;Sign In&quot; (if returning).</li>
                    <li>Complete the LeagueApps Account Creation Form.</li>
                  </ol>

                  <h4>Find Your City League Options</h4>
                  <ol>
                    <li>Click &quot;Leagues&quot; in the main navigation bar.</li>
                    <li>Select your city or market to view available leagues.</li>
                    <li>Use filters to narrow by Skill Division or Match Days.</li>
                    <li>Click &quot;View Details&quot; for full league information.</li>
                  </ol>

                  <h4>Complete Your League Registration</h4>
                  <p><strong>Registration Types:</strong></p>
                  <ul>
                    <li><strong>Team Registration</strong> – Create a team and invite players. You can pay for the entire team or have each player cover their portion.</li>
                    <li><strong>Waitlist</strong> – Join if leagues are full; full refunds if no spots open.</li>
                  </ul>
                  <p>Don&apos;t have a partner? Try Honcho&apos;s Rotating Partner Ladder Leagues, built for individual players.</p>

                  <h4>Registration Steps</h4>
                  <ol>
                    <li>Complete the team setup form and click &quot;Next&quot;.</li>
                    <li>Accept the Honcho Waiver and click &quot;Next&quot;.</li>
                    <li>Process payment via direct bank transfer or credit card.</li>
                  </ol>

                  <h4>Invite Players to Join Your Team</h4>
                  <ol>
                    <li>Go to your Honcho Dashboard.</li>
                    <li>Click &quot;Manage or Add Players&quot;.</li>
                    <li>Select &quot;Invite Players&quot;.</li>
                    <li>Enter player emails & send invites.</li>
                  </ol>
                  <p>Teams are not confirmed until at least two players have registered and paid.</p>

                  <h4>Common Registration Questions</h4>
                  <ul>
                    <li><strong>Registration deadline?</strong> Deadlines vary per season. Check your specific league page for dates.</li>
                    <li><strong>Multiple teams?</strong> Yes, but only in the same skill division on different nights or locations.</li>
                    <li><strong>League is full?</strong> Join the Waitlist. Full refund if we can&apos;t place you.</li>
                    <li><strong>Multiple discount codes?</strong> Only one code per registration — they cannot be combined or stacked.</li>
                    <li><strong>Change divisions after registering?</strong> Yes, before registration closes. No changes after.</li>
                    <li><strong>Age limit?</strong> 18+, or 16–17 with parent/guardian consent.</li>
                  </ul>
                </FAQItem>

                <FAQItem question="How to Cancel Your Honcho League Registration">
                  <h4>Before the Season Starts</h4>
                  <p>League fees are fully refundable until the end of the registration period. To cancel:</p>
                  <ol>
                    <li><strong>Email Support</strong> – Contact <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> with the email you registered with.</li>
                    <li><strong>Receive Confirmation</strong> – You&apos;ll get an email once your cancellation is processed.</li>
                    <li><strong>Refund Issued</strong> – Full refund to your original payment method within 5-7 business days.</li>
                  </ol>

                  <h4>After Registration Period Has Closed</h4>
                  <p>No refunds or rollovers after the registration deadline. However, you can <strong>transfer your registration</strong> to another player:</p>
                  <ol>
                    <li><strong>Find a Replacement</strong> – You are responsible for finding another player.</li>
                    <li><strong>Arrange Payment</strong> – The replacement player can pay you directly.</li>
                    <li><strong>Notify Honcho</strong> – Email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> with the replacement&apos;s name and contact details.</li>
                  </ol>
                </FAQItem>

                <FAQItem question="Player Invite Instructions">
                  <h4>Before Inviting Players</h4>
                  <ul>
                    <li>Honcho leagues no longer have gender requirements as of 2025.</li>
                    <li>Invited players must complete registration, sign the waiver, and pay their fees.</li>
                    <li><strong>Adding players after the deadline?</strong> Email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> with their full name, email, T-shirt size, gender, and DUPR ID.</li>
                  </ul>

                  <h4>Steps to Invite Players</h4>
                  <ol>
                    <li>Log into your Honcho Account and click &quot;Dashboard&quot;.</li>
                    <li>Find your registered team under &quot;My Registered Activities&quot;.</li>
                    <li>Click the 3 dots under &quot;Actions&quot; on the far right.</li>
                    <li>Click &quot;Manage or add players&quot;.</li>
                    <li>Select &quot;Invite Players&quot; from the dropdown menu.</li>
                    <li>Enter your teammate&apos;s email address.</li>
                    <li>(Optional) Add a personalized message.</li>
                    <li>Click &quot;Send Invites&quot;.</li>
                  </ol>

                  <h4>Confirm Your Team</h4>
                  <p>Invited players must accept the invite, complete registration, sign the waiver, and submit payment. Once all players are registered, your team is officially confirmed!</p>
                </FAQItem>

                <FAQItem question="How to Update Your Player Name / Team Name">
                  <h4>Update Your Team Name in LeagueApps</h4>
                  <ol>
                    <li>Log into your Honcho Account and select &quot;Dashboard&quot;.</li>
                    <li>Click your current team name under the Role / Team section.</li>
                    <li>Select &quot;Edit Profile&quot; in the left-hand column.</li>
                    <li>Update your team name and click &quot;Update Team Profile&quot;.</li>
                  </ol>
                  <p><strong>Changing after registration closed?</strong> Email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> so they can update the backend.</p>
                  <p><strong>Note:</strong> Only Team Captains can change the team name.</p>
                </FAQItem>

                <FAQItem question="DUPR Integration: What You Need to Know">
                  <p><strong>Do I need a DUPR Account?</strong> No! You do not need a DUPR account to play in Honcho.</p>
                  <ul>
                    <li>Honcho will automatically connect your registration email to DUPR.</li>
                    <li>If you already have a DUPR account, your results will be linked to it.</li>
                    <li>If you don&apos;t have one, they&apos;ll create one for you.</li>
                  </ul>
                  <p>If your Honcho email differs from your DUPR email, send your DUPR Player ID to <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> before the season starts.</p>

                  <h4>DUPR Integration Agreement</h4>
                  <p>By joining, you&apos;re automatically opted in to DUPR. Players submit match results via a weekly form, which Honcho uploads to DUPR.</p>

                  <h4>Opt-Out Option</h4>
                  <p>If you don&apos;t want results submitted to DUPR, email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> before the season starts. Requests after the season begins will not be honored. Opt-outs apply to the full season.</p>
                  <p><strong>Note:</strong> Matches with substitute players or against teams who opted out of DUPR will not be submitted.</p>
                </FAQItem>
              </div>
            )}

            {/* Regular Season */}
            {activeSection === 'regular' && (
              <div className="faq-section">
                <FAQItem question="Player Match Day Protocols">
                  <h4>Before Your Match</h4>
                  <ul>
                    <li><strong>Review Your Schedule</strong> – Confirm match time, court location, and opponent.</li>
                    <li><strong>Weather Updates (Outdoor Venues Only)</strong> – Honcho monitors weather and notifies players at least 2 hours before match time if needed. If 1 or more full games are completed, results stand.</li>
                    <li><strong>Confirm Opponent Availability</strong> – Honcho will notify you via email if your opponent cancels.</li>
                    <li><strong>Bring Your Equipment</strong> – Courts and nets are provided, but players must bring their own paddles and balls.</li>
                  </ul>
                  <p><strong>Reminder:</strong> Teams are allowed only one forfeit per season. A second forfeit results in disqualification from the regular season and playoffs.</p>

                  <h4>After Your Match</h4>
                  <ul>
                    <li>The <strong>winning team</strong> should submit scores through their Honcho account as soon as possible.</li>
                    <li>The winning team should also submit scores via the <strong>DUPR Submission Form</strong>.</li>
                    <li>Have time left after your 3 games? The court is yours for the full time slot!</li>
                  </ul>

                  <h4>What to Do When a Sub Played</h4>
                  <ul>
                    <li>Play the match as scheduled — matches with subs still count toward standings.</li>
                    <li>Log your match results as normal.</li>
                    <li>Do <strong>NOT</strong> submit a DUPR form for games that subs participated in.</li>
                  </ul>
                </FAQItem>

                <FAQItem question="Access Your Honcho Schedule">
                  <p>Your schedule will be published a few days after registration closes.</p>

                  <h4>Match Info You&apos;ll See</h4>
                  <ul>
                    <li>Match Date</li>
                    <li>Start Time (varies weekly within your league&apos;s 2–4 hour time block)</li>
                    <li>Match Location (specific court at your venue)</li>
                    <li>Match Opponent</li>
                  </ul>

                  <h4>How to Access</h4>
                  <ol>
                    <li>Log into your Honcho Account.</li>
                    <li>Click &quot;Dashboard&quot; in the top-right corner.</li>
                    <li>Select &quot;My Schedules&quot; on the right side of the page.</li>
                  </ol>
                  <p><strong>Tip:</strong> Use List View for match-by-match breakdown, or Calendar View for the full season at a glance. Click &quot;Subscribe to Calendar&quot; to sync with your calendar app.</p>
                </FAQItem>

                <FAQItem question="Honcho Season Schedule Details">
                  <h4>Scheduling Basics</h4>
                  <ul>
                    <li>Match start times are assigned using the LeagueApps random scheduler.</li>
                    <li>Some teams may receive similar times more often, but the system is designed to be fair.</li>
                    <li>Honcho does not accommodate requested start times.</li>
                  </ul>

                  <h4>Can&apos;t Make Your Match?</h4>
                  <p>While Honcho doesn&apos;t offer reschedules (court times are locked in), you have options:</p>
                  <ul>
                    <li><strong>Bring a sub</strong> – Find someone around your skill level to step in.</li>
                    <li><strong>Show up early</strong> – Arrive 15–20 minutes early and see if someone can sub.</li>
                    <li><strong>Forfeit</strong> – If you truly can&apos;t make it and can&apos;t find a sub, submit a forfeit form.</li>
                  </ul>

                  <h4>Bye Weeks</h4>
                  <p>Each league includes 6 regular season matches. Bye weeks help balance the schedule and ensure all teams get 6 matches total, even if you don&apos;t play every single week.</p>
                </FAQItem>

                <FAQItem question="Difference Between Match Scores and DUPR">
                  <h4>Match Scores (LeagueApps)</h4>
                  <p>Logged into LeagueApps to track league standings. The score reflects the number of <strong>games won</strong>, not individual point totals.</p>

                  <h4>DUPR Scores</h4>
                  <p>Records more detailed game results, including <strong>actual point totals</strong> for each game. These help determine a player&apos;s skill rating over time.</p>

                  <h4>Key Difference</h4>
                  <ul>
                    <li><strong>LeagueApps:</strong> Tracks overall match outcomes for league standings.</li>
                    <li><strong>DUPR:</strong> Tracks individual game results and point differentials for player ratings.</li>
                  </ul>
                  <p>If your Honcho registration email matches an existing DUPR account, results sync automatically. If not, DUPR will create a new profile using your Honcho email.</p>
                </FAQItem>

                <FAQItem question="How to Input Honcho Match Results">
                  <p>Winning teams are responsible for reporting match results through the LeagueApps Dashboard after each match.</p>

                  <h4>Match Reporting Guidelines</h4>
                  <ul>
                    <li>Teams play 3 games per match.</li>
                    <li>If only 1-2 games completed (weather, time), the match is recorded with games completed.</li>
                    <li>If a game is cut short but one team reaches 6+, it can count as the full game.</li>
                  </ul>

                  <h4>Valid Score Entries</h4>
                  <p>3-0 | 2-0 | 2-1 | 1-2 | 0-2 | 0-3 | 1-1</p>

                  <h4>Submission Deadlines</h4>
                  <ul>
                    <li><strong>Regular season:</strong> Report within 6 days.</li>
                    <li><strong>Final match & playoffs:</strong> Report within 2 days.</li>
                  </ul>

                  <h4>Steps to Submit</h4>
                  <ol>
                    <li>Log into your Honcho Account. Click &quot;Dashboard&quot; &gt; &quot;My Schedule&quot;.</li>
                    <li>Navigate to List View and click on the match, then &quot;View Game Details&quot;.</li>
                    <li>Click &quot;Edit Scores&quot; to make the fields editable.</li>
                    <li>Adjust each team&apos;s number of games won (0, 1, 2, or 3).</li>
                    <li>Click &quot;Save&quot; to finalize.</li>
                  </ol>
                </FAQItem>

                <FAQItem question="How to Submit My Match Score to DUPR">
                  <h4>Who Submits Scores?</h4>
                  <ul>
                    <li>Any one player from the winning team submits match results.</li>
                    <li>Matches with substitute players will <strong>not</strong> be submitted.</li>
                    <li>Matches against teams who opted out of DUPR will not be submitted.</li>
                  </ul>

                  <h4>How to Submit</h4>
                  <ol>
                    <li>Log into your Honcho Account. Click &quot;Dashboard&quot;, then select your Team Name.</li>
                    <li>Find &quot;Important Form Links&quot; and select &quot;DUPR Result Submission Form&quot;.</li>
                    <li>Complete the form: Team names, player names, opponent names, match date, and scores for each game.</li>
                    <li>Submit. Results are batched weekly, so there may be a delay before they appear in DUPR.</li>
                  </ol>
                  <p><strong>Corrections:</strong> If you notice errors, email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> with the DUPR Match ID.</p>
                </FAQItem>

                <FAQItem question="How to Edit or Delete a DUPR Match">
                  <p>If DUPR scores were entered incorrectly or there are duplicate entries:</p>
                  <ol>
                    <li><strong>Email Support</strong> – Contact <a href="mailto:support@honchopickle.com">support@honchopickle.com</a>.</li>
                    <li><strong>Provide the DUPR Match ID</strong> – Include the specific Match ID.</li>
                    <li><strong>Provide the market</strong> – Include the city where the match was played.</li>
                    <li><strong>Specify the corrections</strong> – Clearly state what needs to change.</li>
                  </ol>
                </FAQItem>

                <FAQItem question="How to Notify Honcho You Can't Make a Match">
                  <p>If you can&apos;t attend and can&apos;t find a substitute, notify Honcho <strong>at least 2 days in advance</strong> via the Match Issue Form on your Schedule Page.</p>

                  <h4>What Happens After You Forfeit</h4>
                  <ul>
                    <li>Your opponent is automatically awarded the win.</li>
                    <li>Your team receives a loss for that match.</li>
                    <li>The present team is awarded a match win for standings, but game scores will not be assumed.</li>
                  </ul>

                  <h4>How to Submit</h4>
                  <ol>
                    <li>Log into your Honcho Account. Click &quot;Dashboard&quot;, then select your Team Name.</li>
                    <li>Find &quot;Important Form Links&quot; and select &quot;Match Issue Form&quot;.</li>
                    <li>Complete the form with accurate details and submit.</li>
                  </ol>
                  <p><strong>Warning:</strong> 2 forfeits or no-shows in a season = disqualification from the rest of the season and playoffs (no refund).</p>
                </FAQItem>

                <FAQItem question="Our Opponents Didn't Show Up">
                  <p>If your opponents didn&apos;t show and you didn&apos;t receive a forfeit email:</p>
                  <ol>
                    <li>Allow a <strong>10-minute grace period</strong> after scheduled match time.</li>
                    <li>Check your inbox and spam folder for a forfeit notification.</li>
                    <li>If confirmed no-show, fill out the <strong>Match Issues Form</strong> and mark the team as &quot;no-show&quot;.</li>
                  </ol>

                  <h4>What Happens Next</h4>
                  <ul>
                    <li>The present team is awarded the win.</li>
                    <li>Game scores will not be assumed — only the match win is recorded.</li>
                    <li>The present team is encouraged to use the court time to practice or play!</li>
                  </ul>
                  <p>Teams with 2 no-shows or forfeits will be disqualified from the season and playoffs. No refunds.</p>
                </FAQItem>

                <FAQItem question="Regular Season Substitution Policy">
                  <h4>Substitution Guidelines</h4>
                  <ul>
                    <li>Subs are allowed if a rostered player can&apos;t attend.</li>
                    <li>Substitutes must align with the league&apos;s division requirements.</li>
                    <li>Honcho does not maintain a sub pool — it&apos;s the team&apos;s responsibility to find their own sub.</li>
                    <li>Honcho doesn&apos;t need to know about a sub beforehand, but players on the court should be made aware.</li>
                    <li>Subs are <strong>NOT</strong> allowed in playoff matches.</li>
                  </ul>

                  <h4>Important DUPR Note</h4>
                  <p>Matches with a substitute (non-rostered player) will <strong>not</strong> be submitted to DUPR. Only games with fully registered players are eligible.</p>

                  <h4>Avoiding Forfeits</h4>
                  <p>Using a sub is a great way to avoid a forfeit and stay active in standings. Teams that forfeit twice or have two no-shows will be disqualified from playoffs.</p>
                </FAQItem>

                <FAQItem question="Honcho League Rules & Policies">
                  <h4>Gameplay Rules</h4>
                  <ul>
                    <li><strong>Serving:</strong> Serve diagonally, clearing the kitchen. Each player serves until they fault. First service of the game: only one player serves before switching.</li>
                    <li><strong>Volleys:</strong> Allowed only after the ball has bounced once on each side. No volleys from within the kitchen.</li>
                    <li><strong>Double Bounce Rule:</strong> Both serve and return must bounce before volleying.</li>
                    <li><strong>The Kitchen:</strong> 7-foot area on both sides of the net. Cannot volley while touching the Non-Volley Zone.</li>
                    <li><strong>Scoring:</strong> Games to 11, win by 2. Only the serving team can score.</li>
                  </ul>

                  <h4>Season & Match Format</h4>
                  <ul>
                    <li>6 weeks regular season + 2 weeks playoffs</li>
                    <li>3-game series per match, first to 11 points win by 2</li>
                    <li>Weekly match on the same weekday, times may vary</li>
                  </ul>

                  <h4>League Conduct</h4>
                  <ul>
                    <li><strong>Match Start:</strong> Rock, paper, scissors for serve/side. Swap sides and serving order each game.</li>
                    <li><strong>Score Reporting:</strong> Winning teams report via LeagueApps. Valid entries: 3-0, 2-1, 1-2, 0-3, 1-1.</li>
                    <li><strong>Forfeits:</strong> 2 forfeits or no-shows = disqualification (no refund). Opponent late? After 10 min, it&apos;s a no-show.</li>
                  </ul>

                  <h4>Refund Policy</h4>
                  <p>Refundable only if you withdraw before the registration deadline and your team wasn&apos;t holding a confirmed spot in a sold-out league. No refunds after the deadline.</p>
                </FAQItem>

                <FAQItem question="Honcho Community Guidelines">
                  <p>At Honcho, community comes first. Here&apos;s what they ask from everyone:</p>
                  <ul>
                    <li><strong>Respect each other.</strong> Know the rules, play fair, and treat players, staff, and opponents with kindness.</li>
                    <li><strong>Compete the right way.</strong> Bring your best, but not at someone else&apos;s expense. Play hard, but play fair.</li>
                    <li><strong>Keep it good vibes only.</strong> Be the kind of teammate or opponent people look forward to seeing each week.</li>
                  </ul>
                  <p>Honcho has a <strong>two-strike policy</strong> for behavior that goes against the community vibe — to keep the league great for everyone.</p>
                </FAQItem>

                <FAQItem question="Final Week Details">
                  <h4>Crowning The Head Honchos! (Week 8)</h4>
                  <p>After the final match, the Championship Packages are awarded to the winning team!</p>

                  <h4>Prize Bags & Medals</h4>
                  <p>Each winning team receives 2 prize bags and 2 medals, regardless of roster size (2, 3, or 4 players).</p>

                  <h4>Cash Prize</h4>
                  <p>The team&apos;s cash prize will be emailed to the team captain within 5 business days of results being entered.</p>

                  <h4>Free Season</h4>
                  <p>Honcho will email the team captain within 2-5 business days with instructions on how to claim the team&apos;s free Honcho season.</p>
                </FAQItem>
              </div>
            )}

            {/* Playoffs */}
            {activeSection === 'playoffs' && (
              <div className="faq-section">
                <div className="discount-banner">
                  <p>Use Code <strong>&quot;Hawkes&quot;</strong> at checkout for an extra 5% off during Early Bird and 20% off after Early Bird ends.</p>
                </div>

                <FAQItem question="Player Eligibility">
                  <h4>Who Qualifies for Playoffs?</h4>
                  <p>All teams qualify unless they have:</p>
                  <ul>
                    <li>Two or more forfeits during the regular season</li>
                    <li>Two or more no-shows during the regular season</li>
                    <li>One forfeit and one no-show during the regular season</li>
                  </ul>
                  <p>Teams that qualify will receive their playoff schedule at the end of the regular season.</p>
                </FAQItem>

                <FAQItem question="Playoffs and Substitutions">
                  <h4>No Substitutions in Playoffs</h4>
                  <p>Substitutes are <strong>not allowed</strong> in the playoffs. All players must be officially registered on the team roster by the start of Week 5 to be eligible.</p>

                  <h4>What If a Team Needs a Sub?</h4>
                  <p>If a team can&apos;t field enough rostered players, the match is recorded as a loss/forfeit. However, teams are encouraged to still show up with subs and play for fun — it keeps the energy high and gives opponents a real game!</p>
                  <p>If using subs and unable to advance, let your opponent know ahead of time and email <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> after the match.</p>
                </FAQItem>

                <FAQItem question="Playoffs and Brackets">
                  <h4>Bracket Development</h4>
                  <p>The playoff bracket is developed 2 business days after the final regular season results are entered. Teams violating the no-show or forfeit policy will be removed.</p>

                  <h4>Playoff Match Format</h4>
                  <p>Matches are played on the same day and in the same time slots as regular season. Teams should be prepared to play multiple matches in one night depending on bracket progression.</p>

                  <h4>Playoff Duration</h4>
                  <p>Most playoffs last 2 weeks. Smaller divisions may complete in a single day.</p>

                  <h4>How to Access Your Bracket</h4>
                  <ol>
                    <li>Log into your Honcho Account.</li>
                    <li>Click &quot;Dashboard&quot; &gt; &quot;My Schedules&quot;.</li>
                    <li>Use <strong>List View</strong> for match times and court assignments.</li>
                    <li>Switch to <strong>Bracket View</strong> for the full playoff bracket.</li>
                  </ol>
                  <p><strong>Pro Tip:</strong> Use a browser instead of the app for the best bracket view.</p>

                  <h4>Playoff Seeding & Tiebreakers</h4>
                  <p>Seeding is based on overall match wins. Ties are broken by:</p>
                  <ol>
                    <li>Head-to-Head Result</li>
                    <li>Total Points Won</li>
                    <li>Point Differential (PSD)</li>
                  </ol>
                </FAQItem>

                <FAQItem question="How to Input Match Results for Playoffs">
                  <p>Winning teams report playoff scores in LeagueApps.</p>

                  <h4>Valid Score Entries</h4>
                  <p>3-0 | 2-1 | 2-0 | 1-1 | 0-2 (incomplete due to weather) | 1-2 | 0-3</p>

                  <h4>Submission Deadlines</h4>
                  <p>Playoff matches must be submitted within <strong>2 days</strong>.</p>

                  <h4>Steps to Submit</h4>
                  <ol>
                    <li>Log into your Honcho Account &gt; Dashboard &gt; My Schedules.</li>
                    <li>Find the match via calendar or list view, click &quot;View Game Details&quot;.</li>
                    <li>Click &quot;Edit Scores&quot; to make fields editable.</li>
                    <li>Enter each team&apos;s games won (0, 1, 2, or 3) and click &quot;Save&quot;.</li>
                  </ol>
                </FAQItem>

                <FAQItem question="Championship Prize Packages – Head Honcho!">
                  <h4>What Do Winners Receive?</h4>
                  <p>Each championship-winning team receives:</p>
                  <ul>
                    <li><strong>Cash prize</strong> – Sent digitally to the designated team captain</li>
                    <li><strong>Free entry</strong> to next season&apos;s league</li>
                    <li><strong>Two of everything</strong> – Regardless of having 3 or 4 players on the roster</li>
                    <li><strong>Prizes vary by season</strong> – Typically include medals and sponsorship items</li>
                  </ul>

                  <h4>Important Notes</h4>
                  <ul>
                    <li>Even with 3 or 4 players, the package includes only two of each item.</li>
                    <li>Exact prize contents may change each season.</li>
                  </ul>
                </FAQItem>
              </div>
            )}
          </div>
        </section>

        {/* Contact */}
        <section className="honcho-contact">
          <div className="honcho-contact-content">
            <p>Questions? Reach out to Honcho at <a href="mailto:support@honchopickle.com">support@honchopickle.com</a> — they&apos;ve got your back.</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2025 Rally Club Pickleball. All rights reserved.</p>
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
          overflow-x: hidden;
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

        .nav-link:hover {
          color: #FF6600;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover {
          color: #3E7B3E !important;
        }

        .academy-nav-link {
          color: #475569 !important;
          font-weight: 600;
        }

        .academy-nav-link:hover {
          color: #64748B !important;
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
          background: #2D5A27;
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
          background: rgba(231, 76, 60, 0.1);
          border-color: #FF6600;
          color: #FF6600;
        }

        .mobile-nav-link.honcho-link {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          border-color: #3E7B3E;
        }

        .mobile-nav-link.academy-link {
          background: linear-gradient(135deg, #475569 0%, #64748B 100%);
          color: white;
          border-color: #64748B;
        }

        .mobile-nav-link.rally-link {
          background: #FF6600;
          color: white !important;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-weight: 600;
        }

        /* Hero */
        .faq-hero {
          margin-top: 80px;
          padding: 3rem 2rem 2.5rem;
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          text-align: center;
          position: relative;
        }

        .faq-hero::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M 10 0 L 0 0 0 10" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/></pattern></defs><rect width="100" height="100" fill="url(%23grid)"/></svg>');
          opacity: 0.3;
        }

        .faq-hero-content {
          max-width: 800px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .back-link {
          color: #C8F560;
          text-decoration: none;
          font-weight: 500;
          font-size: 0.95rem;
          display: inline-block;
          margin-bottom: 1rem;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 0.8;
        }

        .faq-hero-title {
          font-size: 3rem;
          font-weight: bold;
          margin-bottom: 0.75rem;
          line-height: 1.2;
        }

        .faq-hero-subtitle {
          font-size: 1.15rem;
          color: #E8F5E8;
        }

        /* Section Tabs */
        .section-tabs {
          display: flex;
          justify-content: center;
          gap: 0;
          background: #f8f9fa;
          border-bottom: 2px solid #e0e0e0;
          position: sticky;
          top: 70px;
          z-index: 100;
        }

        .section-tab {
          padding: 1rem 2rem;
          background: none;
          border: none;
          font-size: 1rem;
          font-weight: 600;
          color: #666;
          cursor: pointer;
          border-bottom: 3px solid transparent;
          transition: all 0.3s;
          font-family: inherit;
        }

        .section-tab:hover {
          color: #2D5A27;
          background: rgba(45, 90, 39, 0.05);
        }

        .section-tab.active {
          color: #2D5A27;
          border-bottom-color: #C8F560;
          background: white;
        }

        /* FAQ Content */
        .faq-content {
          padding: 2rem;
          background: white;
        }

        .faq-container {
          max-width: 900px;
          margin: 0 auto;
        }

        .faq-section {
          background: white;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          overflow: hidden;
          border: 1px solid #e8e8e8;
        }

        .discount-banner {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          padding: 1rem 1.5rem;
          text-align: center;
          font-size: 1rem;
        }

        .discount-banner strong {
          color: #C8F560;
          font-size: 1.1rem;
        }

        /* FAQ answer inner styles */
        .faq-content h4 {
          color: #2D5A27;
          font-size: 1.05rem;
          margin: 1.25rem 0 0.5rem;
          font-weight: 600;
        }

        .faq-content h4:first-child {
          margin-top: 0;
        }

        .faq-content ul,
        .faq-content ol {
          padding-left: 1.5rem;
          margin: 0.5rem 0;
        }

        .faq-content li {
          margin-bottom: 0.35rem;
        }

        .faq-content p {
          margin: 0.5rem 0;
        }

        .faq-content a {
          color: #2D5A27;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }

        .faq-content a:hover {
          color: #3E7B3E;
          text-decoration: underline;
        }

        .faq-content strong {
          color: #333;
        }

        /* Contact */
        .honcho-contact {
          padding: 2rem;
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

          .mobile-menu-button {
            display: block;
          }

          .faq-hero-title {
            font-size: 2.2rem;
          }

          .section-tabs {
            top: 70px;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
          }

          .section-tab {
            padding: 0.85rem 1.25rem;
            font-size: 0.9rem;
            white-space: nowrap;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .faq-hero-title {
            font-size: 1.8rem;
          }

          .faq-hero-subtitle {
            font-size: 1rem;
          }

          .section-tab {
            padding: 0.75rem 1rem;
            font-size: 0.85rem;
          }
        }
      `}</style>
    </>
  );
}
