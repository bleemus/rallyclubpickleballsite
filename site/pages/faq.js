// pages/faq.js
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

export default function FAQ() {
  const [showPricingModal, setShowPricingModal] = useState(false);

  // Closes the modal when the user clicks outside the table or the close button
  const handleCloseModal = () => setShowPricingModal(false);

  return (
    <>

      <Head>
        <title>Rally Club Pickleball - FAQ</title>
        <meta name="description" content="Frequently Asked Questions about Rally Club Pickleball" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="faq-container">
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
              <div className="faq-question">
                <br />
                A: Pricing depends on your membership tier:
                <br />
                <ul>
                  <li><strong>A-List Members:</strong> $20/hr base rate ($5/player),
                  $24/hr prime rate ($6/player)</li>
                  <li><strong>Rally Reserve Members:</strong> $40/hr base rate
                  ($10/player), $50/hr prime rate ($12.50/player)</li>
                </ul>
              </div>
              <button className="pricing-btn" onClick={() => setShowPricingModal(true)}>
                View Pricing Table
              </button>
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

      {/* Modal for Pricing Table */}
      {
        showPricingModal && (
          <div className="modal-overlay" onClick={handleCloseModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()} // prevents closing when clicking inside
            >
              <button className="close-button" onClick={handleCloseModal}>
                X
              </button>

              <h2 className="modal-heading">Pricing Table</h2>
              <table className="pricing-table">
                <thead>
                  <tr>
                    <th className="blank-header"></th>
                    <th>Rally Reserve<br />pay as you go</th>
                    <th>A-List<br />$100 / 3 month</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Booking Flexibility</th>
                    <td>Reserve 2 days in advance</td>
                    <td>Reserve 5 days in advance</td>
                  </tr>
                  <tr>
                    <th>Court Availability</th>
                    <td>Prime &amp; non‑Prime hours</td>
                    <td>24/7 &amp; member only times</td>
                  </tr>
                  <tr>
                    <th>Reservation Minimum</th>
                    <td>1 hour</td>
                    <td>1 hour</td>
                  </tr>
                  <tr>
                    <th>Prime court rate</th>
                    <td>$50/hr ($12.50/player)</td>
                    <td>$24/hr ($6/player)</td>
                  </tr>
                  <tr>
                    <th>Non‑Prime Court Rate</th>
                    <td>$40/hr ($10/player)</td>
                    <td>$20/hr ($5/player)</td>
                  </tr>
                  <tr>
                    <th>Lessons &amp; Clinics</th>
                    <td>Full Price</td>
                    <td>Discounted</td>
                  </tr>
                  <tr>
                    <th>Leagues</th>
                    <td>Full Price</td>
                    <td>Discounted</td>
                  </tr>
                  <tr>
                    <th>Ball Machine Rental</th>
                    <td>$20/hr (plus court fees)</td>
                    <td>Free (plus court fees)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )
      }

      {/* Link at the bottom to go back to Main Page (optional) */}
      <div className="bottom-link">
        <Link href="/">Back to Main Page</Link>
      </div>

      <style jsx>
        {
          `

      /* Container and Card for FAQ layout */
      .faq-container {
        background-image: url("/about.jpg");
        /* Single background */
        background-size: cover;
        background-position: center;
        background-attachment: fixed;
        padding: 2rem 1rem;
        display: flex;
        justify-content: center;
      }

      .faq-card {
        width: 100%;
        max-width: 900px;
        background: rgba(255, 255, 255, 0.7);
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border-radius: 12px;
        padding: 2rem;
        margin: 0 auto;
      }

      .faq-heading {
        font-size: 2rem;
        margin-bottom: 1rem;
        text-align: center;
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

      .pricing-btn {
        font-family: "Bebas Neue", sans-serif;
        font-size: 1rem;
        background-color: #005b9f;
        color: #fff;
        padding: 0.5rem 1rem;
        border: none;
        border-radius: 4px;
        cursor: pointer;
      }

      .pricing-btn:hover {
        background-color: #004a85;
      }

      /* Modal overlay + content */
      .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
      }

      .modal-content {
        position: relative;
        background: #fff;
        padding: 2rem;
        border-radius: 8px;
        width: 90%;
        max-width: 800px;
      }

      .close-button {
        position: absolute;
        top: 10px;
        right: 10px;
        font-size: 1.2rem;
        background: transparent;
        border: none;
        cursor: pointer;
      }

      .modal-heading {
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.5rem;
        margin-bottom: 1rem;
        color: #333;
      }

      .pricing-table {
        width: 100%;
        border-collapse: collapse;
      }

      .pricing-table th,
      .pricing-table td {
        border: 1px solid #ccc;
        padding: 0.75rem;
        text-align: left;
        vertical-align: middle;
        font-family: "Roboto", sans-serif;
        font-size: 0.95rem;
      }

      .pricing-table thead th {
        background-color: #005b9f;
        color: #fff;
      }

      .pricing-table thead th.blank-header {
        background-color: transparent !important;
        color: transparent !important;
        border: none !important;
        width: 1px !important;
        min-width: 1px !important;
        max-width: 1px !important;
        padding: 0 !important;
        margin: 0 !important;
        text-indent: -9999px;
        overflow: hidden;
        pointer-events: none;
      }

      .pricing-table tbody tr:nth-child(even) {
        background-color: #f7f7f7;
      }

      /* Bottom link to main page */
      .bottom-link {
        text-align: center;
        margin: 1rem 0 2rem;
      }

      .bottom-link a {
        color: #333;
        text-decoration: underline;
        font-family: "Bebas Neue", sans-serif;
        font-size: 1.2rem;
      }

      @media (max-width: 768px) {
        .faq-container {
          background-attachment: scroll;
        }

        .faq-card {
          padding: 1rem;
        }

        .modal-content {
          padding: 1rem;
        }

        .pricing-table th,
        .pricing-table td {
          font-size: 0.85rem;
        }
      }

      `
        }
      </style>
    </>
  );
}