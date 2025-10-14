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
        {/* Small Header */}
        <header className="small-header">
          <a href="/" className="back-link">
            <span className="back-arrow">←</span> Back to Rally Club
          </a>
        </header>

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

        /* Small Header */
        .small-header {
          background: #333;
          padding: 0.75rem 1.5rem;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          box-shadow: 0 2px 5px rgba(0,0,0,0.1);
        }

        .back-link {
          color: white;
          text-decoration: none;
          font-size: 0.95rem;
          font-weight: 500;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: opacity 0.3s;
        }

        .back-link:hover {
          opacity: 0.8;
        }

        .back-arrow {
          font-size: 1.2rem;
          line-height: 1;
        }

        /* Shop Section */
        .merch-shop {
          width: 100%;
          height: calc(100vh - 50px);
          margin-top: 50px;
          padding: 0;
        }

        .merch-shop iframe {
          display: block;
          width: 100%;
          height: 100%;
        }

      `}</style>
    </>
  );
}
