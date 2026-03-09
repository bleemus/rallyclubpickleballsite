# Rally Club Pickleball Website

Official website for Rally Club Pickleball - Glen Carbon's premier 24/7 indoor pickleball facility.

🌐 **Live Site**: [https://www.rallyclubpickleball.com/](https://www.rallyclubpickleball.com/)

## Overview

This is a Next.js-based website that showcases Rally Club Pickleball's facility, membership options, court reservations, and Honcho Pickleball League registration. The site features a modern design with video hero section, responsive layouts, and optimized performance.

## Features

- 🎥 **Video Hero Section** - Reversed and optimized club interior footage as background
- 💳 **Membership Tiers** - A-List ($35/mo or $350/year) and Rally Reserve (free) with integrated Square checkout
- 🏆 **Honcho League Integration** - Dedicated page for Honcho Pickleball League with exclusive Hawkes discount code
- 🎯 **Rally Experiences** - Corporate team building and private event packages with guided pickleball experiences
- 🛍️ **Merchandise Shop** - Embedded Square Shop for Rally Club apparel and gear
- 🏐 **Facility Overview** - Interactive image gallery with lightbox modal
- 📅 **Booking Integration** - Direct links to PicklePlanner 24/7 booking system
- 📍 **Location & Hours** - Google Maps integration with facility information
- 🎓 **Rally Academy** - Training programs for beginners and intermediate players
- 🔍 **SEO Optimized** - Meta tags, Open Graph, Twitter Card, sitemap, and robots.txt
- 📱 **Fully Responsive** - Mobile-optimized design with breakpoints at 768px and 480px

## Technology Stack

- **Framework**: Next.js 15.1.6 with React 19
- **Styling**: Styled JSX (inline component-scoped styles)
- **Deployment**: Azure Static Web Apps
- **Build**: Static export for optimal performance
- **Video Optimization**: ffmpeg (H.264, CRF 28, faststart)
- **Booking System**: PicklePlanner integration
- **Payments**: Square checkout integration

## Getting Started

### Prerequisites

- Node.js (latest LTS version recommended)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/rallyclubpickleballsite.git
cd rallyclubpickleballsite
```

2. Navigate to the site directory:
```bash
cd site
```

3. Install dependencies:
```bash
npm install
```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### Building for Production

Build the static site:
```bash
npm run build
```

The build output will be generated in the `out/` directory.

Start the production server:
```bash
npm run start
```

## Project Structure

```
site/
├── pages/
│   ├── index.js             # Main landing page with video hero
│   ├── honcho.js            # Honcho Pickleball League details
│   ├── rally-experiences.js # Corporate team building & private events
│   ├── rally-academy.js     # Training programs (Beginners Clinics & Performance Training)
│   ├── merch.js             # Merchandise shop (embedded Square)
│   ├── _app.js              # App wrapper
│   └── _document.js         # HTML document structure
├── public/                  # Static assets
│   ├── club_interior_reversed_optimized.mp4  # Hero video (6MB)
│   ├── *.jpg, *.png         # Facility images and logos
│   ├── robots.txt           # SEO
│   └── sitemap.xml          # SEO
├── styles/
│   ├── globals.css          # Global styles
│   ├── Home.module.css      # Module styles
│   └── Index.module.css     # Index page styles
└── out/                     # Build output (gitignored)
```

## Key Sections

### Hero Section
Full-width reversed video background (`club_interior_reversed_optimized.mp4`) with dark overlay and centered text featuring the main value proposition and primary call-to-action button.

**Video Optimization:**
```bash
ffmpeg -i club_interior.mp4 \
  -vf "reverse,scale=1920:1080:flags=lanczos" \
  -c:v libx264 -preset slow -crf 28 \
  -movflags +faststart -an \
  club_interior_reversed_optimized.mp4
```
Result: 71MB → 6MB (91% reduction)

### Membership Benefits
Three-column grid showcasing flexibility, competitive pricing, and member perks.

### Membership Tiers
- **A-List ($35/month or $350/year)**: Reserve 10 days in advance, $8/hr base rate (Midnight–4 PM Mon–Fri), $16/hr prime rate (weekday evenings + weekends)
- **Rally Reserve (Free)**: Reserve 5 days in advance, $28/hr standard rate, $16/hr off-peak (Midnight–4 PM Mon–Fri)

### Honcho Pickleball League
Dedicated page (`/honcho`) featuring:
- Two competition formats: Doubles League and Ladder League
- Registration information with dates and early bird pricing
- Community benefits and season structure
- Discount code: **Hawkes** for Rally Club members

### Rally Experiences
Dedicated page (`/rally-experiences`) for corporate team building and private events:
- Three package tiers: Starter Rally ($450), Pro Rally ($750), Ultimate Rally ($1,200)
- Professional facilitation and guided gameplay
- Custom photo and video packages
- Group sizes from 8-24 participants
- Turnkey event management

### Merchandise Shop
Full-page embedded Square Shop (`/merch`) featuring:
- Rally Club branded apparel and accessories
- Minimal header with "Back to Rally Club" navigation
- Direct integration with Square Shop for checkout and payment
- Seamless shopping experience

### Facility Overview
Interactive image gallery with lightbox modal displaying court layouts and facility exteriors.

### Booking Process
Four-step process guide for court reservations with PicklePlanner integration.

## Deployment

The site is automatically deployed to Azure Static Web Apps via GitHub Actions when changes are pushed to the `main` branch.

**Live URL**: [https://www.rallyclubpickleball.com/](https://www.rallyclubpickleball.com/)

## Configuration

### Environment Variables
No environment variables required for basic functionality.

### External Integrations
- **PicklePlanner**: Court booking system (https://rallyclub.pickleplanner.com)
- **Honcho Pickleball**: League registration (https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-early-spring-26/) - Use code: **Hawkes**
- **Square**: Payment processing for A-List membership and merchandise shop
- **Square Shop**: Embedded merchandise store (https://the-rally-club-llc.square.site)
- **Google Maps**: Location and directions
- **Google Fonts**: Bebas Neue font family
- **Facebook**: Social media integration

## SEO & Analytics

The site includes comprehensive SEO optimization:
- Meta descriptions and keywords
- Open Graph tags for social media sharing
- Twitter Card support
- Canonical URLs
- XML sitemap
- Robots.txt

Google Analytics is integrated for visitor tracking and site performance monitoring.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## License

This project is proprietary software owned by Rally Club Pickleball.

## Contact

For questions about the website or facility:
- **General Inquiries**: rally.club618@gmail.com
- **Corporate Events & Rally Experiences**: rental@rallyclubpickleball.com
- **Phone**: (618) 931-0015
- **Facebook**: [Rally Club Pickleball](https://www.facebook.com/profile.php?id=61572523900750)
- **Website**: [www.rallyclubpickleball.com](https://www.rallyclubpickleball.com/)

---

**Rally Club Pickleball** - *Glen Carbon's Premier Indoor Pickleball Facility*