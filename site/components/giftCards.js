// Square eGift card order page. On-site CTAs link here directly; the short
// rallyclubpickleball.com/gift redirect (staticwebapp.config.json) points here too,
// for flyers and QR codes. Change both together if the Square link ever changes.
export const GIFT_CARD_URL = 'https://app.squareup.com/gift/MLRWNHWZVQE4S/order';

// The holiday gift-card banner hides itself on visitors' browsers from this moment
// (midnight Central, New Year's Day). Static export can't drop it at build time, so
// delete the <HolidayGiftBanner /> mount in SiteHeader after the season.
export const HOLIDAY_GIFT_BANNER_END = new Date('2027-01-01T00:00:00-06:00');
