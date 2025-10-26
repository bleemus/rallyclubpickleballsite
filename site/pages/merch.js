import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Merch() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Merchandise | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Shop Rally Club Pickleball merchandise - apparel, accessories, and gear for pickleball enthusiasts."
        />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/merch" />
        <meta property="og:title" content="Rally Club Pickleball Merchandise" />
        <meta
          property="og:description"
          content="Shop Rally Club Pickleball merchandise - apparel, accessories, and gear."
        />
        <meta property="og:image" content="/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/merch" />
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
              <a href="/merch" className="nav-link active">Merch</a>
              <a href="/#facility" className="nav-link">About us</a>
              <a href="/#contact" className="nav-link">Contact</a>
              <a href="/honcho" className="nav-link honcho-nav-link">Honcho League</a>
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
            <a href="/merch" className="mobile-nav-link active" onClick={() => setMobileMenuOpen(false)}>Merch</a>
            <a href="/#facility" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>About us</a>
            <a href="/#contact" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            <a href="/honcho" className="mobile-nav-link honcho-link" onClick={() => setMobileMenuOpen(false)}>Honcho League</a>
            <a href="/rally-experiences" className="mobile-nav-link rally-link" onClick={() => setMobileMenuOpen(false)}>Rally Experiences</a>
          </nav>
        </div>

        {/* Embedded Square Shop */}
        <section className="merch-shop">
          <iframe
            src="https://the-rally-club-llc.square.site/shop/merchandise/S6E5BHMRFA7LJHU5OU7WM6RH"
            width="100%"
            height="2000"
            frameBorder="0"
            title="Rally Club Merchandise Shop"
            style={{ border: 'none', minHeight: 'calc(100vh - 50px)' }}
          />
        </section>

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

        .nav-link:hover,
        .nav-link.active {
          color: #FF6600;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover {
          color: #3E7B3E !important;
        }

        .rally-nav-link {
          color: #FF6600 !important;
          font-weight: 600;
        }

        .rally-nav-link:hover {
          color: #E65100 !important;
        }

        .mobile-nav-link.rally-link {
          background: #FF6600;
          color: white !important;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          font-weight: 600;
        }

        .mobile-nav-link.rally-link:hover {
          background: #E65100;
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
          background: #FF6600;
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

        .mobile-nav-link.active {
          background: rgba(231, 76, 60, 0.2);
          border-color: #FF6600;
          color: #FF6600;
        }

        .mobile-nav-link.honcho-link {
          background: linear-gradient(135deg, #2D5A27 0%, #3E7B3E 100%);
          color: white;
          border-color: #3E7B3E;
        }

        /* Shop Section */
        .merch-shop {
          width: 100%;
          height: calc(100vh - 70px);
          margin-top: 70px;
          padding: 0;
        }

        .merch-shop iframe {
          display: block;
          width: 100%;
          height: 100%;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          .mobile-menu-button {
            display: block;
          }
        }

      `}</style>
    </>
  );
}
