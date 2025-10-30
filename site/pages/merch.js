import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function Merch() {
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
            </nav>
          </div>
        </header>

        {/* Merch Landing Section */}
        <section className="merch-landing">
          <div className="content">
            <h1>Rally Club Merchandise</h1>
            <p className="description">
              Shop our collection of Rally Club branded apparel, accessories, and pickleball gear.
              All purchases support our growing pickleball community!
            </p>
            <a
              href="https://the-rally-club-llc.square.site/shop/merchandise/S6E5BHMRFA7LJHU5OU7WM6RH"
              target="_blank"
              rel="noopener noreferrer"
              className="shop-button"
            >
              Visit Our Shop
              <span className="arrow">→</span>
            </a>
            <p className="note">You'll be redirected to our secure Square Online store</p>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <p>© 2025 Rally Club Pickleball. All rights reserved.</p>
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

        .nav-link:hover,
        .nav-link.active {
          color: #e74c3c;
        }

        .honcho-nav-link {
          color: #2D5A27 !important;
          font-weight: 600;
        }

        .honcho-nav-link:hover {
          color: #3E7B3E !important;
        }

        /* Merch Landing Section */
        .merch-landing {
          min-height: calc(100vh - 200px);
          margin-top: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%);
          padding: 4rem 2rem;
        }

        .content {
          text-align: center;
          max-width: 600px;
          background: white;
          padding: 3rem 2rem;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        h1 {
          font-size: 2.5rem;
          color: #2D5A27;
          margin-bottom: 1rem;
          font-weight: 700;
        }

        .description {
          font-size: 1.125rem;
          color: #555;
          line-height: 1.8;
          margin-bottom: 2rem;
        }

        .shop-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: #2D5A27;
          color: white;
          text-decoration: none;
          padding: 1rem 2.5rem;
          border-radius: 8px;
          font-size: 1.125rem;
          font-weight: 600;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(45, 90, 39, 0.3);
        }

        .shop-button:hover {
          background: #3E7B3E;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(45, 90, 39, 0.4);
        }

        .arrow {
          font-size: 1.25rem;
          transition: transform 0.3s ease;
        }

        .shop-button:hover .arrow {
          transform: translateX(4px);
        }

        .note {
          margin-top: 1.5rem;
          font-size: 0.875rem;
          color: #888;
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
          transition: color 0.3s;
        }

        .footer-links a:hover {
          color: #e74c3c;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .nav {
            display: none;
          }

          h1 {
            font-size: 2rem;
          }

          .description {
            font-size: 1rem;
          }

          .content {
            padding: 2rem 1.5rem;
          }

          .shop-button {
            padding: 0.875rem 2rem;
            font-size: 1rem;
          }

          .footer-content {
            flex-direction: column;
            gap: 1rem;
          }
        }

      `}</style>
    </>
  );
}
