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
            <p className="home-paragraph">Where pickleball never sleeps!</p>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="section"
          style={{ backgroundImage: "url('/about.jpg')" }}
        >
          <div className="glass-card">
            <h2 className="section-heading">About Our Club</h2>
            <p className="section-text">
              2 professionally painted concrete courts with semi-permanent nets.
            </p>
            <p className="section-text">
              Enjoy round-the-clock access to two indoor, temperature-controlled courts built
              to official regulation standards with top-quality surfaces for the ultimate
              playing experience.
            </p>
            <p className="section-text">
              Rally Club is a state-of-the-art indoor pickleball facility located in Glen Carbon,
              offering two high-quality courts available for rent 24 hours a day, 365 days a year.
              Our mission is to provide pickleball enthusiasts with a premier playing experience in
              a convenient and accessible environment.
            </p>
            <h3 className="sub-heading">Facility Overview</h3>
            <p className="section-text">
              Location: Centrally located, easily accessible building in Glen Carbon, IL.
            </p>
            <h3 className="sub-heading">Features:</h3>
            <ul className="section-text">
              <li>Two indoor, regulation-size pickleball courts.</li>
              <li>Temperature-controlled environment.</li>
              <li>High-tech court reservation system.</li>
              <li>Secure access system allowing 24/7 entry.</li>
              <li>Additional Amenities: Spectator seating, restrooms, and vending machines.</li>
            </ul>
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
                <li>24 hour access*</li>
                <li>Reserve 5 days in advance</li>
                <li>Minimum 1 hour reservation</li>
                <li>Base rate $20/hour ($5 per player)</li>
                <li>Prime rate $24 ($6 per player)</li>
                <li>Non Rally "A" List players add $10 per guest, per booking</li>
              </ul>
              <p className="section-text">To become a BETA member:</p>
              <ol className="section-text">
                <li>
                  Purchase a membership on Square:{" "}
                  <a
                    href="https://rallyclub.pickleplanner.com/dashboard/membership/join"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CLICK HERE
                  </a>
                </li>
                <li>Come back to this page and click join button below</li>
              </ol>
              <p className="section-text">
                <a
                  className="join-button"
                  href="https://rallyclub.pickleplanner.com/dashboard/membership/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Join Now
                </a>
              </p>
            </div>

            {/* Rally Reserve (Guest acc) Box */}
            <div className="glass-card membership-box nonmember-box">
              <h2 className="section-heading">Rally Reserve (Guest acc)</h2>
              <p className="section-text">
                The Rally Reserve is a way for players to be part of the Rally Club without the commitment.
                This allows you to save your registration, signed waiver, and to participate in joinable events.
                Players on the Rally Reserve cannot make reservations but can be added to games by Rally "A" List members.
                Converting to the "A" List is simple!
              </p>
              <p className="section-text">
                <strong>Note:</strong> Each Reserve guest added to a reservation adds $10 to the court fees.
              </p>
              <p className="section-text">
                <a
                  className="join-button"
                  href="https://rallyclub.pickleplanner.com/dashboard/membership/join"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Get Your FREE Rally Reserve Account
                </a>
              </p>
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
          style={{ background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)' }}
        >
          <div className="glass-card">
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
          width: clamp(600px, 80vw, 900px);
          height: 200px;
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
        /* Override absolute positioning for membership boxes */
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
        .join-button {
          display: inline-block;
          background-color: #333;
          color: #fff;
          padding: 0.75rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          font-weight: bold;
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
        ul,
        ol {
          margin-left: 1.5rem;
          color: #333;
        }
        .map-container {
          margin-top: 1rem;
        }
        /* Facility Gallery Section - Stack facility cards vertically, make them wider, and override default glass-card positioning */
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
        }
      `}</style>
    </>
  );
}
