// pages/index.js
import Head from 'next/head';

export default function Home() {
  // Common inline style for full-screen sections
  const sectionStyle = {
    position: 'relative',
    height: '100vh',
    width: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };

  // Home section content style (centered text)
  const homeContentStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  };

  // Home section text styles using Bebas Neue with expanded stretch
  const homeHeadingStyle = {
    fontSize: '4rem',
    margin: '0',
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#fff',
    fontStretch: 'expanded',
  };

  const homeParagraphStyle = {
    fontSize: '1.5rem',
    marginTop: '20px',
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#fff',
    fontStretch: 'expanded',
  };

  // Glassmorphic card style for About and Membership sections
  const glassCardStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: 'rgba(255, 255, 255, 0.5)',
    padding: '3rem',
    borderRadius: '12px',
    maxWidth: '800px',
    width: '90%',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(8px)',
    WebkitBackdropFilter: 'blur(8px)',
    textAlign: 'left',
  };

  // About section text styles
  const aboutHeadingStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#333',
  };

  const aboutParagraphStyle = {
    fontSize: '1rem',
    marginBottom: '1rem',
    fontFamily: 'Roboto, sans-serif',
    lineHeight: 1.6,
    color: '#333',
  };

  const aboutSubHeadingStyle = {
    fontSize: '1.75rem',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
    fontFamily: '"Bebas Neue", sans-serif',
    color: '#333',
  };

  const listStyle = {
    marginLeft: '1.5rem',
    color: '#333',
  };

  const membershipSectionStyle = {
    ...sectionStyle,
    backgroundImage: "url('/membership.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  // Location section background (you can customize the gradient colors as needed)
  const locationSectionStyle = {
    ...sectionStyle,
    background: 'linear-gradient(to right, #a1c4fd, #c2e9fb)',
  };

  return (
    <>
      <Head>
        <title>Rally Club Pickleball</title>
        <meta
          name="description"
          content="Experience top‑notch pickleball courts, community events, and endless fun at Rally Club Pickleball!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div style={{ overflowX: 'hidden' }}>
        {/* Home Section */}
        <section
          id="home"
          style={{
            ...sectionStyle,
            backgroundImage: "url('/home.jpg')",
          }}
        >
          <div style={homeContentStyle}>
            {/* Transparent Logo */}
            <img
              src="/logo-transparent.png"
              alt="Logo"
              style={{ maxWidth: '300px', marginBottom: '20px' }}
            />
            {/* Home Section Text */}
            <h1 style={homeHeadingStyle}>RALLY CLUB PICKLEBALL</h1>
            <p style={homeParagraphStyle}>
              Where pickleball never sleeps!
            </p>
          </div>
        </section>

{/* About Section */}
        <section
          id="about"
          style={{
            ...sectionStyle,
            backgroundImage: "url('/R-6.png')",
          }}
        >
          <div style={glassCardStyle}>
            <h2 style={aboutHeadingStyle}>About Our Court</h2>
            <p style={aboutParagraphStyle}>
              2 professionally painted concrete courts with semi-permanent nets.
            </p>
            <p style={aboutParagraphStyle}>
              Enjoy round-the-clock access to two indoor, temperature-controlled courts built
              to official regulation standards with top-quality surfaces for the ultimate
              playing experience.
            </p>
            <p style={aboutParagraphStyle}>
              Rally Club is a state-of-the-art indoor pickleball facility located in Glen Carbon,
              offering two high-quality courts available for rent 24 hours a day, 365 days a year.
              Our mission is to provide pickleball enthusiasts with a premier playing experience in
              a convenient and accessible environment.
            </p>
            <h3 style={aboutSubHeadingStyle}>Facility Overview</h3>
            <p style={aboutParagraphStyle}>
              Location: Centrally located, easily accessible building in Glen Carbon, IL.
            </p>
            <h3 style={aboutSubHeadingStyle}>Features:</h3>
            <ul style={listStyle}>
              <li>Two indoor, regulation-size pickleball courts.</li>
              <li>Temperature-controlled environment.</li>
              <li>High-tech court reservation system.</li>
              <li>Secure access system allowing 24/7 entry.</li>
              <li>Additional Amenities: Spectator seating, restrooms, and vending machines.</li>
            </ul>
          </div>
        </section>

        {/* Membership Section */}
        <section id="membership" style={membershipSectionStyle}>
          <div style={glassCardStyle}>
            <h2 style={aboutHeadingStyle}>Becoming a Member</h2>
            <p style={aboutParagraphStyle}>
              Becoming a member of The Rally Club is your gateway to 24/7 access to premier indoor
              pickleball courts, exclusive amenities, and a welcoming community of passionate
              players. Whether you’re a casual enthusiast or a competitive player, our membership
              options make it simple to join the fun and elevate your game.
            </p>
            <h3 style={aboutSubHeadingStyle}>Membership Plans</h3>
            <p style={aboutParagraphStyle}>
              With flexible plans tailored to your playing style, signing up is quick and hassle-free.
              From online registration to reserving your first court with our high-tech PicklePlanner
              system, we’ve made every step straightforward. Start enjoying priority booking,
              discounted rates, and the ultimate pickleball experience in no time!
            </p>
            <h3 style={aboutSubHeadingStyle}>Standard Member (Single Booking Member)</h3>
            <ul style={listStyle}>
              <li>$10 per month / $50 activation (charged through Square)</li>
              <li>$30 month minimum charge (charged through PP)</li>
              <li>$40 per hour (prime) charged to booking member with PP</li>
              <li>$30 per hour (non-prime) charged to booking member with PP</li>
              <li>Book 5 days in advance</li>
            </ul>
            <h3 style={aboutSubHeadingStyle}>Premium Member</h3>
            <ul style={listStyle}>
              <li>$1,200 annual, prepaid (charged through Square)</li>
              <li>No activation</li>
              <li>No minimum</li>
              <li>2-person membership</li>
              <li>
                2 free hours of prime per month ($80) – no rollover, must be used by paying member (credit
                on PP)
              </li>
              <li>$10/hr non-prime drop-in (open courts, not reserved)</li>
              <li>12 month commitment (charged through PP)</li>
              <li>Book courts 10 days in advance</li>
            </ul>
            <h3 style={aboutSubHeadingStyle}>Founder Member</h3>
            <ul style={listStyle}>
              <li>$2,500 annual</li>
              <li>No court fees, 1 hour of prime per day reservation</li>
              <li>Unlimited use during non-booked time</li>
            </ul>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" style={locationSectionStyle}>
          <div style={glassCardStyle}>
            <h2 style={aboutHeadingStyle}>Our Location</h2>
            <div style={{ marginTop: '1rem' }}>
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

        {/* Services Section */}
        <section
          id="services"
          style={{
            ...sectionStyle,
            backgroundImage: "url('/services.jpg')",
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255, 255, 255, 0.85)',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            <h2>Our Offerings</h2>
            <p>
              From memberships to private lessons and court rentals, we have everything you need
              to enjoy your pickleball game.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          style={{
            ...sectionStyle,
            backgroundImage: "url('/contact.jpg')",
          }}
        >
          <div
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'rgba(255, 255, 255, 0.85)',
              padding: '2rem',
              borderRadius: '8px',
              maxWidth: '80%',
              textAlign: 'center',
            }}
          >
            <h2>Contact Us</h2>
            <p>
              Ready to play? Get in touch to book a court or learn more about our programs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
