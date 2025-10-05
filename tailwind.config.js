/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        nucleus: '#1e3a8a',
        membrane: '#fb7185',
        cytoplasm: '#fef3c7',
        mitochondria: '#a855f7',
        ribosome: '#065f46',
        chloroplast: '#22c55e',
        vacuole: '#60a5fa',
        wall: '#a16207',
        capsule: '#d1d5db',
        flagellum: '#0ea5e9'
      },
      boxShadow: {
        glow: '0 0 0 4px rgba(255,255,255,0.4), 0 10px 25px rgba(0,0,0,0.15)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(6px)' },
          '100%': { transform: 'translateX(0)' },
        },
        glow: {
          '0%, 100%': { filter: 'drop-shadow(0 0 0 rgba(59,130,246,0))' },
          '50%': { filter: 'drop-shadow(0 0 12px rgba(59,130,246,0.6))' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.75 },
        },
        zoomIn: {
          '0%': { opacity: 0, transform: 'scale(0.96)' },
          '100%': { opacity: 1, transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: 1, transform: 'scale(1)' },
          '100%': { opacity: 0, transform: 'scale(0.96)' },
        }
      },
      animation: {
        float: 'float 4s ease-in-out infinite',
        wave: 'wave 3s ease-in-out infinite',
        glow: 'glow 3s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 2s ease-in-out infinite',
        'zoom-in': 'zoomIn 250ms ease-out both',
        'zoom-out': 'zoomOut 200ms ease-in both'
      }
    }
  },
  plugins: [],
};


