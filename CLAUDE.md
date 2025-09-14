# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js website for Rally Club Pickleball, a premier indoor pickleball facility in Glen Carbon, IL. The site provides information about the facility, membership options, and includes functionality for court reservations and community features.

## Development Commands
All development work should be done in the `/site` directory.

```bash
cd site
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server (serves from /out directory)
```

## Architecture
- **Framework**: Next.js 15.1.6 with React 19
- **Build Configuration**: Static export mode (`output: 'standalone'`)
- **Styling**: CSS modules and global CSS
- **Images**: Unoptimized for static hosting compatibility
- **Deployment**: Azure Static Web Apps with GitHub Actions

### Project Structure
```
site/
├── pages/           # Next.js pages
│   ├── index.js     # Main landing page with sections
│   ├── faq.js       # FAQ page
│   ├── _app.js      # App wrapper
│   └── _document.js # HTML document structure
├── public/          # Static assets (images, robots.txt, sitemap.xml)
├── styles/          # CSS files
│   ├── globals.css  # Global styles
│   └── Home.module.css # Home page specific styles
└── out/             # Build output directory
```

### Key Components
- **Main Landing Page** (`pages/index.js`): Single-page application with multiple sections including home, about, membership, facility info, and contact
- **FAQ Page** (`pages/faq.js`): Dedicated page for frequently asked questions
- **Global Layout** (`pages/_document.js`): Includes Google Fonts (Bebas Neue) configuration

### Styling Approach
- Uses CSS modules for component-specific styles
- Global styles for site-wide formatting
- Background images and responsive design for facility showcase
- Modal functionality for image galleries

## Deployment
- **Platform**: Azure Static Web Apps
- **Source**: `/site` directory
- **Build**: Automatic via GitHub Actions on push to `main`
- **URL**: https://www.rallyclubpickleball.com/

The site uses static export for optimal performance and hosting compatibility. All images are stored in `/site/public/` and referenced with relative paths.

## SEO Configuration
The site includes comprehensive SEO setup with:
- Meta descriptions and keywords
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Sitemap and robots.txt