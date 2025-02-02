// pages/index.js
import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
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
            <h2 className="section-heading">About Our Court</h2>
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
            <ul>
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
          <div className="glass-card membership-card">
            <h2 className="section-heading">Membership Information</h2>
            <p className="section-text">$40 per month or $360 annually</p>

            <h3 className="sub-heading">
              To become a MONTHLY member: <a href="https://square.link/u/ARDYg1em">CLICK HERE</a>
            </h3>
            
            <h3 className="sub-heading">
              To become an ANNUAL member: <a href="https://square.link/u/qVTr6dLI">CLICK HERE</a>
            </h3>

            <h3 className="sub-heading">Members can:</h3>
            <ul>
              <li>Reserve courts 5 days in advance, starting at 7:00 am</li>
              <li>Unlimited reservations per week</li>
              <li>Guest fee (per day): $10</li>
            </ul>

            <h3 className="sub-heading">Court Hourly Rates:</h3>
            <ul>
              <li>Base rate: $30</li>
              <li>Su, Sa (5:30 am - 11:00 am): $40</li>
              <li>M, T, W, R, F (4:30 pm - 8:30 pm): $40</li>
            </ul>

            <h3 className="sub-heading">
              Already a member? <a href="https://rallyclub.pickleplanner.com">Reserve your court here!</a>
            </h3>
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
          max-width: 600px;
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
        .glass-card {
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
        /* Allow membership card content to flow naturally */
        .membership-section .membership-card {
          position: relative;
          top: auto;
          left: auto;
          transform: none;
          margin: 3rem auto;
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
        .center-card {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: rgba(255, 255, 255, 0.85);
          padding: 2rem;
          border-radius: 8px;
          max-width: 80%;
          text-align: center;
        }
        /* Responsive adjustments for tablets and mobile devices */
        @media (max-width: 768px) {
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
