/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      // Luxury Premium Color Palette
      colors: {
        // Primary: Refined Champagne Gold
        gold: {
          50:  '#FDF9F3',
          100: '#FAF0E1',
          200: '#F5E1C3',
          300: '#E8C896',
          400: '#D4A855',
          500: '#C9A227', // Signature gold - replaces harsh #ffcc00
          600: '#B08D1E',
          700: '#8F7318',
          800: '#6E5912',
          900: '#4D3F0D',
        },
        // Secondary: Deep Navy
        navy: {
          50:  '#E8EEF4',
          100: '#C5D3E3',
          200: '#9DB5CE',
          300: '#6B8EAD',
          400: '#456B8A',
          500: '#0D4A73',
          600: '#083B66', // Original dark blue
          700: '#062D4F',
          800: '#041F38',
          900: '#021121',
        },
        // Neutral: Warm Luxury Grays
        neutral: {
          50:  '#FAFAF9',
          100: '#F5F4F2',
          200: '#E8E6E3',
          300: '#D4D1CC',
          400: '#A8A29E',
          500: '#78716C',
          600: '#57534E',
          700: '#44403C',
          800: '#292524',
          900: '#1C1917',
        },
        // Accent Colors
        cream: '#F5F0E8',
        ivory: '#FFFEF9',
        // WhatsApp brand color
        whatsapp: {
          DEFAULT: '#25D366',
          hover: '#1EBE57',
        },
      },

      // Luxury Typography
      fontFamily: {
        'display': ['"Playfair Display"', 'Georgia', 'serif'],
        'heading': ['"Cormorant Garamond"', 'Georgia', 'serif'],
        'body': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },

      // Custom Font Sizes
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },

      // Extended Spacing
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        'section': '5rem',
        'section-lg': '6rem',
        'section-mobile': '3rem',
        'touch': '44px',
        'touch-lg': '48px',
      },

      // Minimum dimensions for touch targets
      minHeight: {
        'touch': '44px',
        'touch-lg': '48px',
      },
      minWidth: {
        'touch': '44px',
        'touch-lg': '48px',
      },

      // Luxury Shadow System
      boxShadow: {
        'luxury-sm': '0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)',
        'luxury-md': '0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        'luxury-lg': '0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05)',
        'luxury-xl': '0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04)',
        'luxury-2xl': '0 25px 50px rgba(0, 0, 0, 0.25)',
        // Gold Glow Effects
        'gold-sm': '0 2px 8px rgba(201, 162, 39, 0.25)',
        'gold-md': '0 4px 14px rgba(201, 162, 39, 0.35)',
        'gold-lg': '0 8px 25px rgba(201, 162, 39, 0.4)',
        // Navy depth
        'navy': '0 4px 20px rgba(8, 59, 102, 0.4)',
      },

      // Refined Border Radius
      borderRadius: {
        'luxury-sm': '0.25rem',
        'luxury': '0.5rem',
        'luxury-lg': '0.75rem',
        'luxury-xl': '1rem',
        'luxury-2xl': '1.5rem',
      },

      // Luxury Gradients
      backgroundImage: {
        'gradient-gold-shimmer': 'linear-gradient(135deg, #C9A227 0%, #D4A855 50%, #C9A227 100%)',
        'gradient-gold-radial': 'radial-gradient(circle, #D4A855 0%, #C9A227 70%, #B08D1E 100%)',
        'gradient-navy-gold': 'linear-gradient(135deg, #041F38 0%, #0D4A73 50%, #C9A227 100%)',
        'gradient-dark-overlay': 'linear-gradient(180deg, rgba(4, 31, 56, 0.95) 0%, rgba(2, 17, 33, 0.85) 100%)',
        'gradient-hero': 'linear-gradient(180deg, rgba(2, 17, 33, 0.7) 0%, rgba(4, 31, 56, 0.9) 100%)',
        'gradient-metallic': 'linear-gradient(135deg, #C9A227 0%, #F5E1C3 25%, #C9A227 50%, #F5E1C3 75%, #C9A227 100%)',
      },

      // Smooth Transitions
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.1, 0.25, 1)',
        'luxury-bounce': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
      },

      // Custom Animations
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'gold-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(201, 162, 39, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(201, 162, 39, 0)' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
        'gold-pulse': 'gold-pulse 2s ease-in-out infinite',
        'bounce-subtle': 'bounce-subtle 2s ease-in-out infinite',
      },

      // Backdrop blur for glass effect
      backdropBlur: {
        'xs': '2px',
        'luxury': '12px',
      },

      // Container max widths
      maxWidth: {
        'content': '1280px',
        'narrow': '800px',
        'wide': '1440px',
      },

      // Custom screens
      screens: {
        'xs': '375px',
        'sm': '480px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
