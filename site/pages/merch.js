import Head from 'next/head';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

export default function Merch() {
  return (
    <>
      <Head>
        <title>Merchandise | Rally Club Pickleball</title>
        <meta
          name="description"
          content="Shop Rally Club Pickleball merchandise - apparel, accessories, and gear for pickleball enthusiasts."
        />
        <meta name="keywords" content="rally club merchandise, rally club apparel, rally club pickleball, pickleball clothing" />
        <link rel="canonical" href="https://www.rallyclubpickleball.com/merch" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Rally Club Pickleball Merchandise" />
        <meta
          property="og:description"
          content="Shop Rally Club Pickleball merchandise - apparel, accessories, and gear."
        />
        <meta property="og:image" content="https://www.rallyclubpickleball.com/logo-transparent.png" />
        <meta property="og:url" content="https://www.rallyclubpickleball.com/merch" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Rally Club Pickleball Merchandise" />
        <meta name="twitter:description" content="Shop official Rally Club Pickleball merchandise and apparel." />
        <meta name="twitter:image" content="https://www.rallyclubpickleball.com/logo-transparent.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.rallyclubpickleball.com/" },
                { "@type": "ListItem", "position": 2, "name": "Merchandise" }
              ]
            })
          }}
        />
      </Head>

      <div className="container">
        <SiteHeader active="merch" />

        <section className="merch-landing">
          <div className="content">
            <h1>Rally Club Merchandise</h1>
            <p className="description">
              Apparel, accessories, and paddle gear, all branded Rally Club. The shop runs on Square Online.
            </p>
            <a
              href="https://the-rally-club-llc.square.site/shop/merchandise/S6E5BHMRFA7LJHU5OU7WM6RH"
              target="_blank"
              rel="noopener noreferrer"
              className="shop-button"
            >
              Visit the shop
              <span className="arrow">→</span>
            </a>
            <p className="note">Opens our Square Online store in a new tab</p>
          </div>
        </section>

        <SiteFooter />
      </div>

      <style jsx>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .container { font-family: var(--font-body); line-height: 1.6; color: var(--ink); }

        .merch-landing {
          min-height: calc(100vh - 180px);
          margin-top: 62px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--surface-alt);
          padding: 4rem 2rem;
        }
        .content {
          text-align: center;
          max-width: 620px;
          background: var(--court-white);
          padding: 3rem 2rem;
          border-radius: 10px;
          border: 1px solid var(--border);
        }
        h1 {
          font-size: 2.5rem;
          color: var(--baseline-navy);
          margin-bottom: 1rem;
          text-transform: uppercase;
        }
        .description {
          font-size: 1.125rem;
          color: var(--muted);
          line-height: 1.7;
          margin-bottom: 2rem;
        }
        .shop-button {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: var(--rally-orange);
          color: var(--baseline-navy);
          text-decoration: none;
          padding: 0.95rem 2.25rem;
          font-family: var(--font-display);
          font-size: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.02em;
          transition: background 0.2s, color 0.2s;
        }
        .shop-button:hover { background: var(--orange-ink); color: var(--court-white); }
        .arrow { font-size: 1.2rem; transition: transform 0.2s ease; }
        .shop-button:hover .arrow { transform: translateX(4px); }
        .note { margin-top: 1.5rem; font-size: 0.85rem; color: var(--muted); font-family: var(--font-mono); }

        @media (max-width: 768px) {
          h1 { font-size: 2rem; }
          .description { font-size: 1rem; }
          .content { padding: 2rem 1.5rem; }
        }
      `}</style>
    </>
  );
}
