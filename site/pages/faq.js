// pages/faq.js
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  return (
    <>
      <Head>
        <title>Rally Club Pickleball - FAQ</title>
        <meta
          name="description"
          content="Frequently Asked Questions about Rally Club Pickleball"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Single background container */}
      <div className="faq-container">
        {/* Glass-style card with FAQ content */}
        <div className="faq-card">
          <h1 className="faq-heading">Frequently Asked Questions</h1>

          {/* --- GENERAL QUESTIONS --- */}
          <div className="faq-category">
            <h2>General Questions</h2>

            <div className="faq-question">
              <h3>Q: What is Rally Club?</h3>
              <p>
                A: Rally Club is a 24/7 indoor pickleball facility where members
                can reserve courts, join games, and play whenever it fits their
                schedule. Every person who plays at Rally Club must be either an
                A-List member or a Rally Reserve member.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: How do I access the courts?</h3>
              <p>
                A: Members receive secure access to the facility through our
                entry system, available 24/7.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: How do I reserve a court?</h3>
              <p>
                A: All court reservations are made through PicklePlanner, our
                online booking system.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: Can I bring guests?</h3>
              <p>
                A: Yes! Guest policies and fees depend on the membership tier.
                Only guests who are playing need to register a Rally Reserve
                account. Non-playing guests and spectators are always welcome.
              </p>
            </div>
          </div>

          {/* --- MEMBERSHIP TIERS --- */}
          <div className="faq-category">
            <h2>Membership Tiers</h2>

            <div className="faq-question">
              <h3>Q: What is the A-List membership?</h3>
              <p>
                A: The A-List membership is a 3-month commitment for $100,
                offering discounted court rates, 24/7 access, and the ability to
                reserve courts 5 days in advance.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: What is the Rally Reserve membership?</h3>
              <p>
                A: Rally Reserve is a pay-as-you-go option with no upfront fee,
                allowing players to book courts 2 days in advance and
                participate in joinable events.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: Can Rally Reserve members be added to games?</h3>
              <p>
                A: Yes! A-List members can add Rally Reserve members to their
                reservations, and PicklePlanner calculates the cost per player.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: How do I upgrade from Rally Reserve to A-List?</h3>
              <p>
                A: Simply pay the $100 fee, and your 3-month A-List membership
                will begin.
              </p>
            </div>
          </div>

          {/* --- COURT RESERVATIONS & PRICING --- */}
          <div className="faq-category">
            <h2>Court Reservations &amp; Pricing</h2>

            <div className="faq-question">
              <h3>Q: How much does it cost to play?</h3>
              <p>
                A: Pricing depends on your membership tier:
                <br />
                <strong>A-List Members:</strong> $20/hr base rate ($5/player),
                $24/hr prime rate ($6/player)
                <br />
                <strong>Rally Reserve Members:</strong> $40/hr base rate
                ($10/player), $50/hr prime rate ($12.50/player)
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: What are prime and non-prime hours?</h3>
              <p>
                A: Prime hours are weekdays from 5 PM – 7 PM and weekends from
                8 AM – 8 PM. All other times are non-prime.
              </p>
            </div>

            <div className="faq-question">
              <h3>Q: What is the minimum reservation time?</h3>
              <p>A: All reservations must be at least 1 hour.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Link at the bottom to go back to Main Page */}
      <div className="bottom-link">
        <Link href="/">Back to Main Page</Link>
      </div>

      <style jsx>{`
        /* Container with a single background image */
        .faq-container {
          background-image: url("/about.jpg");
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          /* Remove large empty space at top: remove min-height or large padding */
          padding: 2rem 1rem;
          display: flex;
          justify-content: center;
        }

        /* The card that holds your FAQ text */
        .faq-card {
          width: 100%;
          max-width: 900px;
          background: rgba(255, 255, 255, 0.7); /* glassy effect if desired */
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          border-radius: 12px;
          padding: 2rem;
          margin: 0 auto; /* center horizontally */
        }

        .faq-heading {
          font-size: 2rem;
          margin-bottom: 1rem;
          text-align: center;
          font-family: "Bebas Neue", sans-serif;
          color: #333;
        }

        .faq-category h2 {
          font-size: 1.75rem;
          margin: 2rem 0 1rem;
          font-family: "Bebas Neue", sans-serif;
          color: #333;
        }

        .faq-question h3 {
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.2rem;
          margin: 1rem 0 0.25rem;
          color: #444;
        }

        .faq-question p {
          font-family: "Roboto", sans-serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #333;
          margin-bottom: 1rem;
        }

        .bottom-link {
          text-align: center;
          margin: 1rem 0 2rem;
        }

        .bottom-link a {
          color: #333;
          text-decoration: underline;
          font-family: "Bebas Neue", sans-serif;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
        }
          
        @media (max-width: 768px) {
          .faq-container {
            background-attachment: scroll;
          }
        }
      `}</style>
    </>
  );
}
