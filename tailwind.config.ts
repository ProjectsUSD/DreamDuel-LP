import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#0f0f12',
          darker: '#08080a',
        },
        neon: {
          pink: '#ff006e',
          violet: '#b794f6',
          crimson: '#e63946',
          magenta: '#ff0a78',
          purple: '#c77dff',
        },
        accent: {
          purple: '#d946ef',
          blue: '#818cf8',
          red: '#fb5607',
        }
      },
      fontFamily: {
        sans: ['Outfit', 'Nunito', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #ff006e 0%, #b794f6 50%, #c77dff 100%)',
        'purple-gradient': 'linear-gradient(135deg, #d946ef 0%, #818cf8 100%)',
        'erotic-gradient': 'linear-gradient(135deg, #ff0a78 0%, #e63946 50%, #c77dff 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px #ec4899, 0 0 10px #ec4899' },
          '100%': { boxShadow: '0 0 20px #ec4899, 0 0 30px #8b5cf6' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
