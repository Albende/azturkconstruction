# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Azturk Construction is a single-page website for a construction company based in Azerbaijan. The site uses Azerbaijani language throughout the UI.

## Commands

- `npm start` - Start development server
- `npm run build` - Production build (CI=false to ignore warnings as errors)
- `npm test` - Run tests in watch mode
- `npm test -- --watchAll=false` - Run tests once without watch mode

## Architecture

This is a Create React App (CRA) project using React 18.

### Component Structure

All page sections are in `src/components/`, each with a paired CSS file:
- **Navbar** - Fixed navigation with hamburger menu for mobile
- **Hero** - Landing section with background image
- **About** - Company information
- **Services** - Service offerings
- **Portfolio** - Project showcase
- **Testimonials** - Customer reviews
- **Contact** - Contact form/information
- **Footer** - Site footer with social links

### Styling

- Custom CSS per component (no CSS framework)
- FontAwesome for icons via `@fortawesome/react-fontawesome`
- AOS library available for scroll animations (currently imported but FadeInSection wrapper is commented out in App.js)
- FadeInSection component uses IntersectionObserver for visibility-triggered animations

### Navigation

Smooth scrolling to section anchors handled via `handleSmoothScroll` in Navbar.js using `scrollIntoView`.
