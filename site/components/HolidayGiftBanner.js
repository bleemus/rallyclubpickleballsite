import { useEffect, useState } from 'react';
import { GIFT_CARD_URL, HOLIDAY_GIFT_BANNER_END } from './giftCards';

// Slim seasonal strip rendered at the top of the fixed site header.
// While visible it sets --promo-banner-h on :root so pages that offset content
// below the fixed header (hero margin-tops, the mobile menu) grow by its height.
// Initial state is "shown" to match the static-export render; it hides client-side
// once HOLIDAY_GIFT_BANNER_END has passed.
export default function HolidayGiftBanner() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (Date.now() >= HOLIDAY_GIFT_BANNER_END.getTime()) setShow(false);
  }, []);

  if (!show) return null;

  return (
    <>
      <a className="gift-banner" href={GIFT_CARD_URL} target="_blank" rel="noopener noreferrer">
        <span className="gift-banner-long">Holiday gift cards are here. Give the gift of pickleball.</span>
        <span className="gift-banner-short">Holiday gift cards are here.</span>
        <span className="gift-banner-cta">Buy a gift card <span aria-hidden="true">→</span></span>
      </a>
      <style jsx global>{`
        :root { --promo-banner-h: 36px; }
      `}</style>
      <style jsx>{`
        .gift-banner { height: 36px; display: flex; align-items: center; justify-content: center; gap: 0.75rem; padding: 0 1rem; background: var(--baseline-navy); color: var(--court-white); text-decoration: none; font-size: 0.9rem; white-space: nowrap; overflow: hidden; }
        .gift-banner-cta { color: var(--rally-orange); font-weight: 700; }
        .gift-banner:hover .gift-banner-cta { text-decoration: underline; }
        .gift-banner-short { display: none; }
        @media (max-width: 600px) {
          .gift-banner { font-size: 0.85rem; gap: 0.5rem; }
          .gift-banner-long { display: none; }
          .gift-banner-short { display: inline; }
        }
      `}</style>
    </>
  );
}
