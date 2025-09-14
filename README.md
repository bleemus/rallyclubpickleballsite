# Rally Club Pickleball Website

A modern, responsive website for Rally Club Pickleball, Glen Carbon's premier indoor pickleball facility.

## Overview

This is a Next.js-based website that showcases Rally Club Pickleball's facility, membership options, and booking system. The site features a clean, modern design with responsive layouts optimized for all devices.

## Features

- **Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Hero Section** - Full-width background image with overlaid text and call-to-action
- **Membership Tiers** - A-List and Rally Reserve options with integrated Square checkout
- **Facility Overview** - Image gallery showcasing courts and amenities
- **Booking Integration** - Direct links to PicklePlanner booking system
- **FAQ Section** - Interactive accordion-style frequently asked questions
- **SEO optimized** - Meta tags, Open Graph, and Twitter Card support

## Technology Stack

- **Framework**: Next.js 15.1.6 with React 19
- **Styling**: CSS-in-JS with CSS modules
- **Deployment**: Azure Static Web Apps
- **Build**: Static export for optimal performance
- **Booking System**: Integration with PicklePlanner
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
│   ├── index.js          # Main landing page
│   ├── faq.js           # FAQ page
│   ├── _app.js          # App wrapper
│   └── _document.js     # HTML document structure
├── public/              # Static assets
│   ├── images/          # Facility images
│   ├── logo-transparent.png
│   ├── robots.txt
│   └── sitemap.xml
├── styles/
│   ├── globals.css      # Global styles
│   └── Home.module.css  # Component-specific styles
└── out/                 # Build output (generated)
```

## Key Sections

### Hero Section
Full-width background image with centered text overlay featuring the main value proposition and primary call-to-action button.

### Membership Benefits
Three-column grid showcasing flexibility, pricing, and member perks.

### Membership Tiers
- **A-List ($99/month)**: Unlimited access with premium features
- **Rally Reserve ($49/month)**: Limited access with standard features

### Facility Overview
Image gallery displaying court layouts and facility exteriors.

### Booking Process
Four-step process guide for court reservations.

## Deployment

The site is automatically deployed to Azure Static Web Apps via GitHub Actions when changes are pushed to the `main` branch.

**Live URL**: [https://www.rallyclubpickleball.com/](https://www.rallyclubpickleball.com/)

## Configuration

### Environment Variables
No environment variables required for basic functionality.

### External Integrations
- **PicklePlanner**: Court booking system
- **Square**: Payment processing for memberships
- **Google Analytics**: Site tracking and analytics
- **Google Fonts**: Bebas Neue font family

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
- Email: rally.club618@gmail.com
- Facebook: [Rally Club Pickleball](https://www.facebook.com/profile.php?id=61572523900750)
- Website: [www.rallyclubpickleball.com](https://www.rallyclubpickleball.com/)

---

**Rally Club Pickleball** - *Glen Carbon's Premier Indoor Pickleball Facility*