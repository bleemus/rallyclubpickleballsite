# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js website for Rally Club Pickleball, a premier indoor pickleball facility in Glen Carbon, IL. The site provides information about the facility, membership options, Honcho Pickleball League registration, and includes functionality for court reservations and community features.

## Development Commands
All development work is in the `site/` directory.

```bash
cd site          # Navigate to the project directory
npm run dev      # Start development server (http://localhost:3000)
npm run build    # Build for production
npm run start    # Start production server (serves from /out directory)
```

## Architecture
- **Framework**: Next.js 15.1.6 with React 19
- **Build Configuration**: Static export mode (`output: 'export'`)
- **Images**: Unoptimized for static hosting compatibility
- **Dependencies**: Minimal dependencies (only Next.js, React, React-DOM)

### Project Structure
```
site/                    # Main project directory
├── pages/               # Next.js pages
│   ├── index.js         # Main landing page with video hero
│   ├── honcho.js        # Honcho Pickleball League details
│   ├── rally-experiences.js # Corporate team building & private events
│   ├── merch.js         # Merchandise shop (embedded Square)
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
│   ├── Home.module.css  # Module styles
│   └── Index.module.css # Index page styles
├── package.json         # Dependencies and scripts
├── next.config.js       # Next.js configuration
└── out/                 # Build output directory (gitignored)
```

### Key Components

#### Main Landing Page (`pages/index.js`)
- **Hero Section**: Reversed video background (`club_interior_reversed_optimized.mp4`)
- **Membership Tiers**: A-List ($35/mo or $350/year) and Rally Reserve (free) with pricing details
- **Honcho League Section**: Registration CTA with discount code Hawkes
- **Rally Experiences Section**: Link to corporate team building and private events
- **Facility Overview**: Interactive image gallery with lightbox
- **Booking Process**: 4-step process visualization
- **Location Section**: Google Maps integration
- **FAQ Section**: Collapsible questions

#### Honcho League Page (`pages/honcho.js`)
- Detailed information about Honcho Pickleball League
- Two competition formats: Doubles and Ladder League
- Registration information with discount code Hawkes
- External registration link: https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-early-spring-26/

#### Rally Experiences Page (`pages/rally-experiences.js`)
- Corporate team building and private event packages
- Three pricing tiers: Starter Rally ($450), Pro Rally ($750), Ultimate Rally ($1,200)
- Professional facilitation and guided gameplay
- Group sizes from 8-24 participants

#### Merchandise Page (`pages/merch.js`)
- Embedded Square Shop for branded merchandise
- Minimal header with "Back to Rally Club" navigation

### Styling Approach
- Inline JSX styles (`<style jsx>`) and CSS Modules
- Green gradient (#2D5A27 to #3E7B3E) for Honcho League
- Teal gradient (#2A9BC0 to #38B5D6) for Rally Experiences
- Slate gradient (#475569 to #64748B) for Rally Academy
- Responsive breakpoints: 768px and 480px

### Video Optimization
Hero video (`club_interior_reversed_optimized.mp4`) optimized via ffmpeg: reversed playback, H.264/CRF 28, faststart, no audio. Reduced from 71MB to 6MB.

## External Integrations
- **PicklePlanner**: Court reservation system (https://rallyclub.pickleplanner.com)
- **Honcho Pickleball**: League registration (https://honchopickleball.com/product/glen-carbon-il-the-rally-club-wednesdays-early-spring-26/)
- **Square**: Payment processing for A-List membership and merchandise shop
- **Square Shop**: Embedded merchandise store (https://the-rally-club-llc.square.site)
- **Google Maps**: Location and directions
- **Facebook**: Social media presence

## Deployment
- **Platform**: Azure Static Web Apps via GitHub Actions on push to `main`
- **URL**: https://www.rallyclubpickleball.com/
- **Build Output**: Static HTML/CSS/JS exported to `site/out/`

## SEO Configuration
Meta descriptions, Open Graph/Twitter cards, canonical URLs, sitemap, and robots.txt configured for all pages.

## Important Notes
- All players must be registered with PicklePlanner before playing
- Discount code for Honcho League: **Hawkes**
- Rally Experiences contact: rental@rallyclubpickleball.com or (618) 931-0015
- General inquiries: rally.club618@gmail.com
- Video files in `site/public/` are large - ensure they're optimized before committing
- The `.claude/` directory is gitignored
- No testing or linting frameworks currently configured