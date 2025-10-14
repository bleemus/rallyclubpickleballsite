# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js website for Rally Club Pickleball, a premier indoor pickleball facility in Glen Carbon, IL. The site provides information about the facility, membership options, Honcho Pickleball League registration, and includes functionality for court reservations and community features.

## Development Commands
All development work is in the root directory (the repository was restructured from `/site`).

```bash
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server (serves from /out directory)
```

## Architecture
- **Framework**: Next.js 15.1.6 with React 19
- **Build Configuration**: Static export mode (`output: 'standalone'`)
- **Styling**: Inline JSX styles (styled-jsx)
- **Images**: Unoptimized for static hosting compatibility
- **Video**: Optimized MP4 with web-friendly settings (H.264, faststart)
- **Deployment**: Azure Static Web Apps with GitHub Actions

### Project Structure
```
├── pages/               # Next.js pages
│   ├── index.js         # Main landing page with video hero
│   ├── honcho.js        # Honcho Pickleball League details
│   ├── faq.js           # FAQ page
│   ├── _app.js          # App wrapper
│   └── _document.js     # HTML document structure
├── public/              # Static assets
│   ├── club_interior_reversed_optimized.mp4  # Hero video (6MB, optimized)
│   ├── *.jpg, *.png     # Images
│   ├── robots.txt       # SEO
│   └── sitemap.xml      # SEO
├── styles/              # CSS files
│   ├── globals.css      # Global styles
│   └── Home.module.css  # Module styles
└── out/                 # Build output directory (gitignored)
```

### Key Components

#### Main Landing Page (`pages/index.js`)
- **Hero Section**: Reversed video background (`club_interior_reversed_optimized.mp4`)
- **Membership Tiers**: A-List ($35/mo) and Rally Reserve (free) with pricing details
- **Honcho League Section**: Registration CTA with discount code RALLYCLUB
- **Facility Overview**: Interactive image gallery with lightbox
- **Booking Process**: 4-step process visualization
- **Location Section**: Google Maps integration
- **FAQ Section**: Collapsible questions

#### Honcho League Page (`pages/honcho.js`)
- Detailed information about Honcho Pickleball League
- Two competition formats: Doubles and Ladder League
- Registration information with discount code RALLYCLUB
- External registration link: https://honchopickleball.com/register/

### Styling Approach
- Inline JSX styles using `<style jsx>` for component-scoped CSS
- Gradient backgrounds for Honcho League sections (#2D5A27 to #3E7B3E)
- Responsive design with mobile breakpoints at 768px and 480px
- Video background with dark overlay for text readability

### Video Optimization
Hero video was optimized using ffmpeg:
- Reversed playback for visual effect
- H.264 codec with CRF 28 for web compatibility
- Faststart flag for progressive loading
- Audio removed (not needed for background)
- Size reduced from 71MB to 6MB (91% reduction)

## External Integrations
- **PicklePlanner**: Court reservation system (https://rallyclub.pickleplanner.com)
- **Honcho Pickleball**: League registration (https://honchopickleball.com/register/)
- **Square**: Payment processing for A-List membership
- **Google Maps**: Location and directions
- **Facebook**: Social media presence

## Deployment
- **Platform**: Azure Static Web Apps
- **Build**: Automatic via GitHub Actions on push to `main`
- **URL**: https://www.rallyclubpickleball.com/
- **Build Output**: Static HTML/CSS/JS exported to `/out` directory

The site uses static export for optimal performance and hosting compatibility. All assets are stored in `/public/` and referenced with relative paths.

## SEO Configuration
The site includes comprehensive SEO setup with:
- Meta descriptions and keywords for each page
- Open Graph tags for social sharing
- Twitter Card support
- Canonical URLs
- Sitemap and robots.txt
- Structured semantic HTML

## Important Notes
- All players must be registered with PicklePlanner before playing
- Discount code for Honcho League: **RALLYCLUB**
- Video files in `/public/` are large - ensure they're optimized before committing
- The `.claude/` directory is gitignored (contains Claude Code workspace data)