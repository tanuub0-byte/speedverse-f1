/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'f1-red': '#E8002D',
        'f1-red-dark': '#B0001F',
        'f1-red-light': '#FF1744',
        'neon-red': '#FF0033',
        'neon-pink': '#FF006E',
        'dark-bg': '#050505',
        'dark-card': '#0D0D0D',
        'dark-border': '#1A1A1A',
        'dark-surface': '#111111',
        'glass': 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        'formula': ['Formula1', 'sans-serif'],
        'racing': ['Racing Sans One', 'cursive'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'pulse-neon': 'pulseNeon 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 25s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'race-line': 'raceLine 1.5s ease-in-out infinite',
      },
      keyframes: {
        pulseNeon: {
          '0%, 100%': { boxShadow: '0 0 5px #E8002D, 0 0 10px #E8002D, 0 0 20px #E8002D' },
          '50%': { boxShadow: '0 0 10px #E8002D, 0 0 25px #E8002D, 0 0 50px #E8002D' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        glow: {
          from: { textShadow: '0 0 10px #E8002D, 0 0 20px #E8002D' },
          to: { textShadow: '0 0 20px #E8002D, 0 0 40px #E8002D, 0 0 60px #E8002D' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        raceLine: {
          '0%': { width: '0%', opacity: '1' },
          '50%': { width: '100%', opacity: '1' },
          '100%': { width: '100%', opacity: '0' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #E8002D 0%, #FF6B6B 50%, #E8002D 100%)',
        'dark-gradient': 'linear-gradient(180deg, #050505 0%, #0D0D0D 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'neon': '0 0 10px #E8002D, 0 0 20px #E8002D, 0 0 40px rgba(232,0,45,0.3)',
        'neon-sm': '0 0 5px #E8002D, 0 0 10px rgba(232,0,45,0.5)',
        'glass': '0 8px 32px rgba(0,0,0,0.5)',
        'card': '0 4px 24px rgba(0,0,0,0.8)',
      }
    },
  },
  plugins: [],
};
