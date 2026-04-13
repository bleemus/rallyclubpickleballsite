import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/Index.module.css';

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [insideIndex, setInsideIndex] = useState(0);
  const [outsideIndex, setOutsideIndex] = useState(0);

  const insideImages = ['/inside1.jpg', '/inside2.jpg', '/inside3.jpg'];
  const outsideImages = ['/outside1.jpg', '/outside2.jpg'];

  useEffect(() => {
    const timer = setInterval(() => {
      setInsideIndex((prev) => (prev + 1) % insideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setOutsideIndex((prev) => (prev + 1) % outsideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const openLightbox = (imageSrc, imageAlt, heading, caption, type = 'image', gallery = null) => {
    const galleryIndex = gallery ? gallery.indexOf(imageSrc) : 0;
    setLightboxImage({ src: imageSrc, alt: imageAlt, heading, caption, type, gallery, galleryIndex });
  };

  const lightboxNav = (direction) => {
    if (!lightboxImage?.gallery) return;
    const { gallery, alt, heading, caption, type } = lightboxImage;
    const newIndex = (lightboxImage.galleryIndex + direction + gallery.length) % gallery.length;
    setLightboxImage({ ...lightboxImage, src: gallery[newIndex], galleryIndex: newIndex });
  };

  const closeLightbox = () => {
    setLightboxImage(null);
  };

  return (
    <>
      <Head>
        <title>Rally Club Pickleball | Metro East Premier Indoor Pickleball Club</title>
        <meta
          name="description"
          content="Play pickleball anytime at Rally Club Pickleball in Glen Carbon, IL. Enjoy 24-hour facility access, top-notch courts, and fun community events."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/" />
        <meta
          name="keywords"
          content="pickleball, indoor courts, Glen Carbon IL, membership, rally club, sports facility"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rally Club Pickleball" />
        <meta
          property="og:description"
          content="Join Glen Carbon's premier 24/7 indoor pickleball facility. Reserve courts, play with friends, and be part of the Rally Club community!"
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Club Pickleball" />
        <meta
          name="twitter:description"
          content="Your Court. Your Crew. Your Rally. Discover the best indoor pickleball experience in Glen Carbon, IL."
        />
        <meta name="twitter:image" content="/logo-transparent.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SportsActivityLocation",
              "name": "Rally Club Pickleball",
              "description": "Premier indoor pickleball facility in Glen Carbon, IL with 24/7 access",
              "url": "https://www.rallyclubpickleball.com",
              "telephone": "(618) 931-0015",
              "email": "rally.club618@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "1 Cottonwood Industrial Park",
                "addressLocality": "Glen Carbon",
                "addressRegion": "IL",
                "postalCode": "62034",
                "addressCountry": "US"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.7615,
                "longitude": -89.9580
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.facebook.com/profile.php?id=61572523900750"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Do I need a membership to book?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "No. A-List members get the best rate and earlier booking windows. Rally Reserve guests can still book and play pay-as-you-go."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How does the door code work?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "After checkout you'll receive a unique code via email/text. It activates 20 minutes before your reservation."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the pricing for members vs guests?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Pricing varies by membership tier and time of day. Guests pay Rally Reserve rates. See our membership section for full details."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can I bring friends who aren't registered?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "All players must be registered with PicklePlanner & Rally Club before playing."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How do I cancel or reschedule?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Manage your booking in PicklePlanner. Policies may apply based on timing."
                  }
                }
              ]
            })
          }}
        />
      </Head>

      <div>
        {/* Header */}
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <a href="/" className={styles.logo}>
              <Image
                src="/logo-transparent.png"
                alt="Rally Club Pickleball Logo"
                width={40}
                height={40}
                style={{ marginRight: '0.5rem', objectFit: 'contain' }}
              />
              Rally Club Pickleball
            </a>
            <nav className={styles.nav}>
              <a href="#booking" className={styles.navLink}>Book a Court</a>
              <a href="#membership" className={styles.navLink}>Membership</a>
              <a href="/merch" className={styles.navLink}>Merch</a>
              <a href="/honcho" className={`${styles.navLink} ${styles.honchoNavLink}`}>Honcho League</a>
              <a href="/rally-academy" className={`${styles.navLink} ${styles.academyNavLink}`}>Rally Academy</a>
              <a href="/rally-experiences" className={`${styles.navLink} ${styles.rallyNavLink}`}>Rally Experiences</a>
            </nav>
            <button
              className={styles.mobileMenuButton}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ""}`}>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ""}`}>
          <nav className={styles.mobileNav}>
            <a href="#booking" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Book a Court</a>
            <a href="#membership" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Membership</a>
            <a href="/merch" className={styles.mobileNavLink} onClick={() => setMobileMenuOpen(false)}>Merch</a>
            <a href="/honcho" className={`${styles.mobileNavLink} ${styles.honchoLink}`} onClick={() => setMobileMenuOpen(false)}>Honcho League</a>
            <a href="/rally-academy" className={`${styles.mobileNavLink} ${styles.academyLink}`} onClick={() => setMobileMenuOpen(false)}>Rally Academy</a>
            <a href="/rally-experiences" className={`${styles.mobileNavLink} ${styles.rallyLink}`} onClick={() => setMobileMenuOpen(false)}>Rally Experiences</a>
          </nav>
        </div>

        {/* Hero Section */}
        <section className={styles.hero}>
          <video
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          >
            <source src="/club_interior_reversed_optimized.mp4" type="video/mp4" />
          </video>
          <div className={styles.heroContent}>
            <h1 className={styles.heroTitle}>Play When You Want, with Who You Want &mdash; Anytime.</h1>
            <p className={styles.heroSubtitle}>Glen Carbon's exclusive indoor pickleball hub &mdash; no contracts, 24/7 access, tournament grade courts.</p>
            <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/make" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
              Book Your First Rally in 60 Seconds
            </a>
          </div>
        </section>

        {/* Membership Benefits */}
        <section id="benefits" className={styles.benefits}>
          <h2 className={styles.sectionTitle}>Membership Benefits</h2>
          <div className={styles.benefitsGrid}>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>⚡</div>
              <h3>Flexibility</h3>
              <p>24/7 access to courts when you want to play</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>💰</div>
              <h3>Pricing</h3>
              <p>Competitive rates with member discounts</p>
            </div>
            <div className={styles.benefitItem}>
              <div className={styles.benefitIcon}>👥</div>
              <h3>Perks</h3>
              <p>Member events and community access</p>
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section id="membership" className={styles.membership}>
          <h2 className={styles.sectionTitle}>Membership Tiers</h2>
          <div className={styles.membershipGrid}>
            <div className={`${styles.membershipCard} ${styles.featured}`}>
              <div className={styles.bestValueBadge}>BEST VALUE</div>
              <h3 className={styles.membershipTitle}>A-List</h3>
              <div className={styles.membershipPrice}>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Monthly</div>
                    <div className={styles.tooltip} data-tip="$20 one-time sign-up fee">
                      <span className={styles.price}>$35</span>
                      <span className={styles.period}>/mo*</span>
                    </div>
                  </div>
                  <div style={{ height: '5rem', width: '1px', background: '#ddd', alignSelf: 'center' }}></div>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}><span style={{ color: '#666' }}>Annual</span> <span style={{ color: '#4CAF50' }}>&middot; Save 17%</span></div>
                    <div className={styles.tooltip} data-tip="$20 one-time sign-up fee">
                      <span className={styles.price}>$350</span>
                      <span className={styles.period}>/yr*</span>
                    </div>
                  </div>
                </div>
                <div className={styles.signupFeeNote}>*$20 one-time sign-up fee</div>
              </div>
              <p className={styles.membershipSummary}>Reserve 10 days in advance.</p>
              <div className={styles.membershipCta}>
                <a href="https://square.link/u/oybkGt7O" className={styles.membershipButton} target="_blank" rel="noopener noreferrer">Join A-List</a>
              </div>
              <div className={styles.pricingDetails}>
                <h4>Court Rates:</h4>
                <div className={styles.rateItem}>
                  <span className={styles.rateTime}>Mon–Fri, Midnight – 4 PM</span>
                  <span className={styles.ratePrice}>$8/hr</span>
                </div>
                <div className={`${styles.rateItem} ${styles.baseRate}`}>
                  <span className={styles.rateTime}>All Other Times<br /><span className={styles.rateTimeDetail}>Weekday Evenings &amp; Weekends</span></span>
                  <span className={styles.ratePrice}>$16/hr</span>
                </div>
              </div>
            </div>
            <div className={`${styles.membershipCard} ${styles.rallyReserve}`}>
              <div className={styles.noCommitmentBadge}>NO COMMITMENT</div>
              <h3 className={styles.membershipTitle}>Rally Reserve</h3>
              <div className={styles.membershipPrice}>
                <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'flex-end', flexWrap: 'wrap' }}>
                  <div style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '0.9rem', color: '#666', marginBottom: '0.25rem', textTransform: 'uppercase', fontWeight: '600' }}>Monthly</div>
                    <div>
                      <span className={styles.price}>$0</span>
                      <span className={styles.period}>/mo</span>
                    </div>
                  </div>
                </div>
              </div>
              <p className={styles.membershipSummary}>Reserve 5 days in advance.</p>
              <div className={styles.membershipCta}>
                <a href="https://rallyclub.pickleplanner.com/dashboard/membership/join" className={`${styles.membershipButton} ${styles.secondary}`} target="_blank" rel="noopener noreferrer">Join Rally Reserve</a>
              </div>
              <div className={styles.pricingDetails}>
                <h4>Court Rates:</h4>
                <div className={styles.rateItem}>
                  <span className={styles.rateTime}>Mon–Fri, Midnight – 4 PM</span>
                  <span className={styles.ratePrice}>$16/hr</span>
                </div>
                <div className={`${styles.rateItem} ${styles.baseRate}`}>
                  <span className={styles.rateTime}>All Other Times<br /><span className={styles.rateTimeDetail}>Weekday Evenings &amp; Weekends</span></span>
                  <span className={styles.ratePrice}>$28/hr</span>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.pricingNote}>
            <div className={styles.pricingHighlights}>
              <div className={`${styles.highlightBox} ${styles.registration}`}>
                <p>All Players must register an account with <strong>PicklePlanner</strong> and sign waivers. Unregistered guests are <span className={styles.notPermitted}>NOT</span> permitted</p>
              </div>
              <div className={`${styles.highlightBox} ${styles.mixedPlay}`}>
                <p>Mix & match <strong>A-List</strong> members and <strong>Rally Reserve</strong> players - the court rate is set by the membership tier</p>
              </div>
              <div className={`${styles.highlightBox} ${styles.payment}`}>
                <p>Reserving player pays court costs & fees up front, it is up to them how their playing partners reimburse them</p>
              </div>
            </div>
          </div>
        </section>

        {/* A-List Seniors */}
        <section className={styles.specialProgramsSection}>
          <h2 className={styles.sectionTitle}>A-List Seniors</h2>
          <div className={styles.specialProgramsIntro}>
            <p>Rally Club partners with Medicare and Medicaid programs to make pickleball accessible to more players. These special membership tiers require eligibility verification and admin approval.</p>
          </div>
          <div className={styles.specialProgramsPricing}>
            <h3>Pricing</h3>
            <p className={styles.membershipSummary}>A-List Seniors enjoy the same court rates as <a href="#membership" style={{ color: '#FF6600', textDecoration: 'none', fontWeight: '600' }}>A-List members</a>. The perk is that qualifying members pay no monthly or annual membership fee — your Medicare or Medicaid plan covers it.</p>
            <p className={styles.membershipSummary}>Courts can be reserved up to 7 days in advance, giving you priority access to book your preferred times.</p>
          </div>
          <div className={styles.seniorProgramsGrid}>
            <div className={styles.seniorProgramCard}>
              <div className={styles.seniorProgramLogo}>
                <Image
                  src="/silver_sneakers.png"
                  alt="Silver Sneakers Logo"
                  width={230}
                  height={80}
                  style={{ objectFit: 'contain', maxWidth: '160px', height: 'auto' }}
                />
              </div>
              <div className={styles.seniorProgramInfo}>
                <h3 className={styles.seniorProgramTitle}>A-List Silver</h3>
                <p className={styles.seniorProgramDesc}>For members using Silver Sneakers through their Medicare or Medicaid plan.</p>
              </div>
              <a href="https://tools.silversneakers.com/Eligibility/CheckEligibility" className={styles.membershipButton} target="_blank" rel="noopener noreferrer">Check Eligibility</a>
            </div>
            <div className={styles.seniorProgramCard}>
              <div className={styles.seniorProgramLogo}>
                <Image
                  src="/renew_active.svg"
                  alt="Renew Active Logo"
                  width={140}
                  height={45}
                  style={{ objectFit: 'contain', maxWidth: '160px', height: 'auto' }}
                />
              </div>
              <div className={styles.seniorProgramInfo}>
                <h3 className={styles.seniorProgramTitle}>A-List Active</h3>
                <p className={styles.seniorProgramDesc}>For members using Renew Active through qualifying United Health Care, Medicare, or Medicaid plans.</p>
              </div>
              <a href="https://www.uhcrenewactive.com/home" className={styles.membershipButton} target="_blank" rel="noopener noreferrer">Check Eligibility</a>
            </div>
          </div>
        </section>

        {/* Honcho Pickleball League */}
        <section id="honcho" className={styles.honchoLeague}>
          <div className={styles.honchoContent}>
            <div className={styles.honchoHeader}>
              <Image
                src="/honcho-logo-small.png"
                alt="Honcho Pickleball Logo"
                width={120}
                height={58}
                style={{ marginBottom: '1rem' }}
              />
              <h2 className={styles.honchoTitle}>Join the Honcho Pickleball League</h2>
              <p className={styles.honchoSubtitle}>The premier amateur pickleball community sweeping the nation</p>
            </div>

            <div className={styles.honchoSummary}>
              <p className={styles.honchoDescription}>
                Late Spring Season starts May 25th! 8-week same-partner doubles league with court costs included, a free $68 Centerline Athletics performance shirt, and a championship bundle worth ~$500!
              </p>

              <div className={styles.honchoHighlights}>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>👥</span>
                  <div>
                    <strong>Flexible Teams:</strong><br />
                    2-4 players, multiple skill divisions
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🏆</span>
                  <div>
                    <strong>Compete & Win:</strong><br />
                    ~$500 championship bundle
                  </div>
                </div>
                <div className={styles.highlightItem}>
                  <span className={styles.highlightIcon}>🎁</span>
                  <div>
                    <strong>Perks Included:</strong><br />
                    Free shirt, weekly giveaways
                  </div>
                </div>
              </div>

              <div className={styles.honchoCta}>
                <p style={{ color: '#C8F560', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>Early-bird registration is open! Use code RALLYCLUB for a discount.</p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a href="https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-late-spring-26/" className={styles.honchoButton} target="_blank" rel="noopener noreferrer">
                    Register Now
                  </a>
                  <a href="/honcho" className={styles.honchoButtonSecondary || styles.honchoButton} style={{ background: 'transparent', border: '2px solid white', color: 'white' }}>
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section - Rally Academy & Rally Experiences */}
        <section className={styles.programsSection}>
          <h2 className={styles.sectionTitle}>More Ways to Play</h2>
          <div className={styles.programsGrid}>
            {/* Rally Academy */}
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Rally Academy</h3>
              <p className={styles.programTagline}>Training Programs for All Levels</p>
              <p className={styles.programDescription}>
                From beginner foundations to competitive performance sessions. Structured coaching to take your game to the next level.
              </p>
              <div className={styles.programHighlights}>
                <span>Beginner Program</span>
                <span>3.5+ Sessions</span>
                <span>Expert Coaching</span>
              </div>
              <a href="/rally-academy" className={styles.programButtonSlate}>
                Explore Training Programs
              </a>
            </div>

            {/* Rally Experiences */}
            <div className={styles.programCard}>
              <h3 className={styles.programTitle}>Rally Experiences</h3>
              <p className={styles.programTagline}>Corporate Events & Private Parties</p>
              <p className={styles.programDescription}>
                Guided pickleball experiences for team building and celebrations. Professional facilitation, all equipment included.
              </p>
              <div className={styles.programHighlights}>
                <span>Team Building</span>
                <span>Private Events</span>
                <span>Turnkey Packages</span>
              </div>
              <a href="/rally-experiences" className={styles.programButtonOrange}>
                Plan Your Event
              </a>
            </div>
          </div>
        </section>

        {/* Facility Overview */}
        <section id="facility" className={styles.facility}>
          <h2 className={styles.sectionTitle}>Facility Overview</h2>
          <div className={styles.facilityGrid}>
            <div className={styles.facilityItem}>
              <div
                className={styles.slideshowContainer}
                onClick={() => openLightbox('/inside.mp4', 'Inside Tour', 'Inside View', 'Take a tour of our courts.', 'video')}
              >
                {insideImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Inside View ${i + 1}`}
                    className={`${styles.slideshowImage} ${i === insideIndex ? styles.slideshowActive : ''}`}
                  />
                ))}
              </div>
              <div className={styles.facilityCaption}>
                <h3>Inside View</h3>
                <p>Take a tour of our courts.</p>
              </div>
            </div>
            <div className={styles.facilityItem}>
              <div
                className={styles.slideshowContainer}
                onClick={() => openLightbox(outsideImages[outsideIndex], 'Facility Exterior', 'Outside View', 'Pull up. Walk in. Rally begins.', 'image', outsideImages)}
              >
                {outsideImages.map((src, i) => (
                  <img
                    key={src}
                    src={src}
                    alt={`Outside View ${i + 1}`}
                    className={`${styles.slideshowImage} ${i === outsideIndex ? styles.slideshowActive : ''}`}
                  />
                ))}
              </div>
              <div className={styles.facilityCaption}>
                <h3>Outside View</h3>
                <p>Pull up. Walk in. Rally begins.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Process */}
        <section id="booking" className={styles.booking}>
          <h2 className={styles.sectionTitle}>Booking Process</h2>
          <div className={styles.bookingSteps}>
            <div className={styles.step}>
              <div className={styles.stepNumber}>1</div>
              <h3>Select Court</h3>
              <p>Instant door code, 20 minutes before play</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>2</div>
              <h3>Choose Time</h3>
              <p>Flexible slots available</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>3</div>
              <h3>Confirm Booking</h3>
              <p>No contracts, pay as you go</p>
            </div>
            <div className={styles.step}>
              <div className={styles.stepNumber}>4</div>
              <h3>Play</h3>
              <p>24/7 access</p>
            </div>
          </div>
          <div className={styles.bookingCta}>
            <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/make" className={styles.ctaButton} target="_blank" rel="noopener noreferrer">
              Book Your Court Now
            </a>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className={styles.location}>
          <h2 className={styles.sectionTitle}>Our Location</h2>
          <div className={styles.locationContent}>
            <div className={styles.locationInfo}>
              <div className={styles.address}>
                <h3>Visit Us</h3>
                <p>1 Cottonwood Industrial Park<br />Glen Carbon, IL 62034</p>
                <p>Conveniently located a short drive from the intersection of IL-159 and Cottonwood Rd.</p>
              </div>
              <div className={styles.hours}>
                <h3>Our Hours</h3>
                <p><strong>Available 24 hours per day with <a href="https://rallyclub.pickleplanner.com/dashboard/reservation/make" target="_blank" rel="noopener noreferrer">reservation</a>!</strong></p>
              </div>
            </div>
            <div className={styles.mapContainer}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d799.5860377841626!2d-89.93756610367085!3d38.76633662956965!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8875f9f92112c085%3A0x4217965f56847a5e!2sThe%20Rally%20Club!5e0!3m2!1sen!2sus!4v1746223485153!5m2!1sen!2sus"
                width="100%"
                height="400"
                style={{ border: 0, borderRadius: '12px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className={styles.faq}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqList}>
            <div className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(0)}
              >
                Do I need a membership to book?
                <span className={styles.faqArrow}>{openFaq === 0 ? '−' : '+'}</span>
              </button>
              {openFaq === 0 && (
                <div className={styles.faqAnswer}>
                  No. A-List members get the best rate and earlier booking windows. Rally Reserve guests can still book and play pay-as-you-go.
                </div>
              )}
            </div>
            <div className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(1)}
              >
                How does the door code work?
                <span className={styles.faqArrow}>{openFaq === 1 ? '−' : '+'}</span>
              </button>
              {openFaq === 1 && (
                <div className={styles.faqAnswer}>
                  After checkout you'll receive a unique code via email/text. It activates 20 minutes before your reservation.
                </div>
              )}
            </div>
            <div className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(2)}
              >
                What's the pricing for members vs guests?
                <span className={styles.faqArrow}>{openFaq === 2 ? '−' : '+'}</span>
              </button>
              {openFaq === 2 && (
                <div className={styles.faqAnswer}>
                  Pricing varies by membership tier and time of day. Guests pay Rally Reserve rates. <a href="#membership" className={styles.faqLink}>See our membership section</a> for full details.
                </div>
              )}
            </div>
            <div className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(3)}
              >
                Can I bring friends who aren't registered?
                <span className={styles.faqArrow}>{openFaq === 3 ? '−' : '+'}</span>
              </button>
              {openFaq === 3 && (
                <div className={styles.faqAnswer}>
                  All players must be registered with PicklePlanner & Rally Club before playing.
                </div>
              )}
            </div>
            <div className={styles.faqItem}>
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(4)}
              >
                How do I cancel or reschedule?
                <span className={styles.faqArrow}>{openFaq === 4 ? '−' : '+'}</span>
              </button>
              {openFaq === 4 && (
                <div className={styles.faqAnswer}>
                  Manage your booking in PicklePlanner. Policies may apply based on timing.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className={styles.contact}>
          <h2 className={styles.contactTitle}>Have more questions?</h2>
          <a href="mailto:rally.club618@gmail.com" className={styles.contactButton}>Contact Us</a>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.footerContent}>
            <p>© 2025 Rally Club Pickleball. All rights reserved.</p>
            <div className={styles.footerLinks}>
              <a href="https://www.facebook.com/profile.php?id=61572523900750" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
        </footer>

        {/* Lightbox Modal */}
        {lightboxImage && (
          <div className={styles.lightboxOverlay} onClick={closeLightbox}>
            <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
              <button className={styles.lightboxClose} onClick={closeLightbox}>&times;</button>
              <div className={styles.lightboxHeader}>
                <h3 className={styles.lightboxHeading}>{lightboxImage.heading}</h3>
              </div>
              {lightboxImage.type === 'video' ? (
                <video
                  controls
                  autoPlay
                  playsInline
                  style={{ maxWidth: '90vw', maxHeight: '70vh', borderRadius: '8px' }}
                >
                  <source src={lightboxImage.src} type="video/mp4" />
                </video>
              ) : (
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <Image
                    src={lightboxImage.src}
                    alt={lightboxImage.alt}
                    width={1200}
                    height={800}
                    style={{ maxWidth: '90vw', maxHeight: '70vh', objectFit: 'contain' }}
                  />
                  {lightboxImage.gallery && lightboxImage.gallery.length > 1 && (
                    <>
                      <button className={styles.lightboxArrow} style={{ left: '10px' }} onClick={() => lightboxNav(-1)}>&lsaquo;</button>
                      <button className={styles.lightboxArrow} style={{ right: '10px' }} onClick={() => lightboxNav(1)}>&rsaquo;</button>
                    </>
                  )}
                </div>
              )}
              <div className={styles.lightboxFooter}>
                <p className={styles.lightboxCaption}>{lightboxImage.caption}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
