import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  const [modalImage, setModalImage] = useState(null);

  return (
    <>
      <Head>
        <title>Rally Club Pickleball</title>
        <meta
          name="description"
          content="Experience top‑notch pickleball courts, community events, and endless fun at Rally Club Pickleball!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="container">
        {/* Home Section */}
        <section
          id="home"
          className="section home-section"
          style={{ backgroundImage: "url('/home.jpg')" }}
        >
          <div className="home-content">
            <div className="logo-container">
              <Image
                src="/logo-transparent.png"
                alt="Rally Club Pickleball Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
            <h1 className="home-heading">RALLY CLUB PICKLEBALL</h1>
            <p className="home-paragraph">Your Court. Your Crew. Your Rally.</p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="section"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="glass-card">
            <h2 className="section-heading">Rally like a pro</h2>
            <p className="section-text">
              Welcome to Glen Carbon's premier indoor pickleball venue, designed for
              players who demand the best. Our 2 court facility offers premium lighting
              for better visibility, tournament-grade court surfaces for optimal play,
              spacious layouts for uninterrupted games, and the ability to play whenever
              you want. Every detail—from court spacing to acoustics—focuses on elevating
              your pickleball experience. This is a space dedicated entirely to the game,
              with no distractions—just get your crew and RALLY.
            </p>

            <h3 className="sub-heading">How To Rally</h3>

            <p className="section-text">
              <strong>Step 1</strong>
              <br />
              Go to{" "}
              <a
                href="https://rallyclub.pickleplanner.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                rallyclub.pickleplanner.com
              </a>{" "}
              and find the Rally tier that best suits you. Follow the instructions to set
              up your profile and start making reservations.
            </p>

            <p className="section-text">
              <strong>Step 2</strong>
              <br />
              Click &quot;reserve court&quot; and pick a court and time for your Rally.
            </p>

            <p className="section-text">
              <strong>Step 3</strong>
              <br />
              Pick your &quot;Rally crew&quot; from the drop down menu. All players MUST
              be registered with Pickleplanner &amp; Rally Club to play. See pricing
              options below for details.
            </p>

            <p className="section-text">
              <strong>Step 4</strong>
              <br />
              Complete the transaction and look for an email or text with the door code
              to enter the facility. Your code will work 20 minutes before your court is
              ready. Proceed to your assigned court and start your RALLY!
            </p>
          </div>
        </section>


        {/* Membership Section */}
        <section
          id="membership"
          className="section membership-section"
          style={{ backgroundImage: "url('/membership.jpg')" }}
        >

          <div className="membership-container">
            {/* The Rally "A" List Box */}
            <div className="glass-card membership-box beta-box">
              <h2 className="section-heading">The Rally "A" List</h2>
              <p className="section-text">
                $100 one-time payment for 3-month membership. Starting from your first rally!
              </p>
              <ul className="section-text">
                <li>No contract</li>
                <li>24 hour access</li>
                <li>Reserve 5 days in advance</li>
                <li>Minimum 1 hour reservation</li>
                <li>Base rate $20/hour ($5 per player)</li>
                <li>Prime rate $24/hour ($6 per player)</li>
                <li>Non Rally "A" List players add $10 per guest, per booking</li>
              </ul>

              {/* Make this paragraph bold & slightly larger */}
              <p className="section-text become-beta">To become a BETA member:</p>

              <ol className="section-text">
                <li>
                  Click on the <strong>Purchase Membership</strong> button and buy your
                  membership on Square.
                  <div className="button-container first-button-container">
                    <a
                      className="join-button"
                      href="https://square.link/u/LjZZkfht"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Purchase Rally A-List Membership
                    </a>
                  </div>
                </li>
                <li>
                  Come back here and click the <strong>Join Now</strong> button to get
                  access to the reservation site on Pickleplanner.
                  <div className="button-container">
                    <a
                      className="join-button"
                      href="https://rallyclub.pickleplanner.com/dashboard/membership/join"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Now
                    </a>
                  </div>
                </li>
              </ol>
            </div>

            {/* Rally Reserve (Guest acc) Box */}
            <div className="glass-card membership-box nonmember-box">
              <h2 className="section-heading">Rally Reserve (Guests)</h2>
              <p className="section-text">
                The Rally Reserve is a way for players to be part of the Rally Club without the commitment.
                This allows you to save your registration, signed waiver, and to participate in joinable events.
                Players on the Rally Reserve cannot make reservations but can be added to games by Rally "A" List members.
                Converting to the "A" List is simple!
              </p>
              <p className="section-text">
                <strong>Note:</strong> Each Reserve guest added to a reservation adds $10 to the court fees.
              </p>
              <div className="button-container">
                <a
                  className="join-button"
                  href="https://rallyclub.pickleplanner.com/dashboard/membership/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your FREE Rally Reserve Account
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Facility Gallery Section */}
        <section
          id="facility-gallery"
          className="section facility-section"
          style={{ backgroundImage: "url('/facility.jpg')" }}
        >
          <div className="facility-container">
            {/* Floor Plan Card */}
            <div
              className="glass-card facility-card"
              onClick={() => setModalImage('/facility-layout.jpg')}
            >
              <h2 className="section-heading">Floor Plan</h2>
              <div className="image-container">
                <Image
                  src="/facility-layout.jpg"
                  alt="Floor Plan"
                  width={500}
                  height={300}
                  style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                />
              </div>
              <p className="enlarge-text">click to enlarge</p>
            </div>
            {/* Outside Facility Card */}
            <div
              className="glass-card facility-card"
              onClick={() => setModalImage('/facility-outside.jpg')}
            >
              <h2 className="section-heading">Outside View</h2>
              <div className="image-container">
                <Image
                  src="/facility-outside.jpg"
                  alt="Outside of Facility"
                  width={500}
                  height={300}
                  style={{ width: '100%', height: 'auto', cursor: 'pointer' }}
                />
              </div>
              <p className="enlarge-text">click to enlarge</p>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section
          id="location"
          className="section location-section"
        >
          <div className="location-container">
            {/* Card 1: Map Card */}
            <div className="glass-card map-card">
              <h2 className="section-heading">Our Location</h2>
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3110.881133630271!2d-89.93912662344177!3d38.76643025442009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f97015a39d8b%3A0x3adb3ff7059d0e8d!2s1%20Cottonwood%20Industrial%20Pk%2C%20Glen%20Carbon%2C%20IL%2062034!5e0!3m2!1sen!2sus!4v1738436140332!5m2!1sen!2sus"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Card 2: Facebook Contact Card */}
            <div className="glass-card contact-card">
              <h3 className="section-heading">Need Assistance?</h3>
              <p className="section-text">
                Have questions or need help? <br />
                Reach out to us on{" "}
                <a
                  href="https://www.facebook.com/profile.php?id=61572523900750"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </a>
                !
              </p>
            </div>
          </div>
        </section>
      </div>

      {/* Modal for Enlarged Facility Image */}
      {modalImage && (
        <div className="modal" onClick={() => setModalImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-button" onClick={() => setModalImage(null)}>
              X
            </button>
            <Image
              src={modalImage}
              alt="Enlarged view"
              width={1000}
              height={600}
              style={{
                maxWidth: '90vw',
                maxHeight: '90vh',
                objectFit: 'contain',
              }}
            />
          </div>
        </div>
      )}

      <style jsx>{`
        /* Global box-sizing reset for consistent sizing */
        * {
          box-sizing: border-box;
        }
        .container {
          overflow-x: hidden;
        }
        .logo-container {
          position: relative;
          width: clamp(750px, 80vw, 1125px);
          height: 250px;
          margin: 0 auto;
        }
        .section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background-size: cover;
          background-position: center;
          background-attachment: fixed;
          padding: 2rem 1rem;
        }
        /* Disable fixed background on smaller screens */
        @media (max-width: 768px) {
          .section {
            background-attachment: scroll;
          }
        }
        .home-content {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        .home-heading {
          font-size: 4rem;
          margin: 0;
          font-family: 'Bebas Neue', sans-serif;
          color: #fff;
          font-stretch: expanded;
        }
        .home-paragraph {
          font-size: 1.5rem;
          margin-top: 20px;
          font-family: 'Bebas Neue', sans-serif;
          color: #fff;
          font-stretch: expanded;
        }
        /* Default glass-card styling (used in Home, About, and Location) */
        .glass-card {
          /* Note: This default absolute positioning is overridden in sections that need relative positioning */
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.5);
          padding: 3rem;
          border-radius: 12px;
          max-width: 800px;
          width: 90%;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-align: left;
        }
        /* Set the location card to 80% width on desktop */
        #location .glass-card {
          width: 80%;
        }
        /* Membership Section - Two Floating Boxes */
        /* Center the membership container vertically and horizontally */
        .membership-section {
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100vh;
          background-size: cover;
          background-position: center;
        }
        .membership-container {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          gap: 2rem;
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
        }
        .membership-box {
          flex: 1 1 45%;
          max-width: 45%;
          position: relative;
          top: auto;
          left: auto;
          transform: none;
          background: rgba(255, 255, 255, 0.5);
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-align: left;
        }
        .membership-box ol,
        .membership-box ul {
          margin-left: 0;   /* Remove indentation entirely */
          padding-left: 1rem; /* Or any smaller indentation */
        }
        li .join-button {
          display: block;
          margin: 0.5rem auto 0 auto; /* top and horizontal auto */
        }
        .become-beta {
          font-size: 1.2rem;   /* or any size that looks “slightly larger” to you */
          font-weight: bold;
          margin-bottom: 1rem; /* optional extra spacing below the line */
        }
        .first-button-container {
          margin-bottom: 1rem; /* adjust as needed (0.5rem, 1rem, etc.) */
        }
        .button-container {
          text-align: center; 
          margin-top: 0.5rem; /* spacing above the button */
        }
        .join-button {
          display: inline-block;  /* or block, both work with text-align: center on parent */
          background-color: #333;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
          width: fit-content;
        }
        .section-heading {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-family: 'Bebas Neue', sans-serif;
          color: #333;
        }
        .section-text {
          font-size: 1rem;
          margin-bottom: 1rem;
          font-family: 'Roboto', sans-serif;
          line-height: 1.6;
          color: #333;
        }
        .sub-heading {
          font-size: 1.75rem;
          margin-top: 1.5rem;
          margin-bottom: 0.5rem;
          font-family: 'Bebas Neue', sans-serif;
          color: #333;
        }
        /* LOCATION SECTION as a flex container for vertical & horizontal centering */
        .location-section {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 100vh; /* ensures there's enough height to center content */
          background: linear-gradient(to right, #a1c4fd, #c2e9fb);
          padding: 2rem 1rem; /* add some padding so the cards aren’t cramped */
        }

        /* LOCATION CONTAINER stacks cards vertically */
        .location-container {
          display: flex;
          flex-direction: column;  /* vertical stacking */
          align-items: center;
          gap: 2rem;               /* space between the two cards */
          width: 100%;
          max-width: 1200px;       /* optional max width */
          margin: 0 auto;          /* center container in the section (horizontal) */
        }

        /* OVERRIDE default .glass-card absolute positioning */
        .location-container .glass-card {
          position: relative;  /* override any absolute defaults */
          top: auto;
          left: auto;
          transform: none;
          width: 80%;          /* or whatever width you prefer for each card */
          max-width: 800px;    /* optional maximum width for each card */
          margin: 0 auto;      /* center horizontally if smaller than container width */
        }
        ul,
        ol {
          margin-left: 1.5rem;
          color: #333;
        }
        .map-container {
          margin-top: 1rem;
        }
        .facility-section .glass-card {
          position: relative;
          top: auto;
          left: auto;
          transform: none;
        }
        .facility-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 2rem;
          margin: 3rem auto;
          max-width: 1200px;
          width: 100%;
        }
        .facility-card {
          width: 80%;
          background: rgba(255, 255, 255, 0.5);
          padding: 3rem;
          border-radius: 12px;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          backdrop-filter: blur(8px);
          -webkit-backdrop-filter: blur(8px);
          text-align: center;
          cursor: pointer;
          margin: 0 auto;
        }
        .enlarge-text {
          font-size: 1rem;
          color: #333;
          margin-top: 0.5rem;
          font-style: italic;
        }
        .image-container {
          margin-top: 1rem;
        }
        /* Modal Styles */
        .modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
        }
        .modal-content {
          position: relative;
        }
        .close-button {
          position: absolute;
          top: 10px;
          right: 10px;
          font-size: 2rem;
          background: transparent;
          border: none;
          color: #fff;
          cursor: pointer;
          z-index: 10000;
        }
        /* Mobile adjustments: make membership section auto-height so cards fit inside */
        @media (max-width: 768px) {
          .membership-section {
            height: auto;
            padding: 2rem 1rem;
          }
          .membership-box,
          .facility-card {
            flex: 1 1 100%;
            max-width: 100%;
          }
          .home-heading {
            font-size: 2.5rem;
          }
          .home-paragraph {
            font-size: 1rem;
          }
          .glass-card,
          .center-card {
            position: relative;
            top: auto;
            left: auto;
            transform: none;
            margin: 2rem auto;
            width: calc(100% - 2rem);
          }
          .glass-card {
            padding: 1.5rem;
          }
          .section-heading {
            font-size: 2rem;
          }
          .section-text {
            font-size: 0.9rem;
          }
          .sub-heading {
            font-size: 1.5rem;
          }
          .center-card {
            padding: 1.5rem;
          }
        }
        @media (max-width: 480px) {
          .home-heading {
            font-size: 2rem;
          }
          .home-paragraph {
            font-size: 0.9rem;
          }
          .glass-card {
            padding: 1rem;
          }
          .section-heading {
            font-size: 1.75rem;
          }
          .section-text {
            font-size: 0.85rem;
          }
          .sub-heading {
            font-size: 1.25rem;
          }
          .center-card {
            padding: 1rem;
          }
          .membership-box {
            padding: 1.5rem;
          }
        }
      `}</style>
    </>
  );
}
