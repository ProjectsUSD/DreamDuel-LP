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
        'bg-deep': '#000A0F',
        'bg-card': '#1A2332',
        primary: {
          DEFAULT: '#0099FF',
          glow: '#4FC3F7',
        },
        'accent-hot': '#FF6E40',
        'text-main': '#FFFFFF',
        'text-muted': '#B3B3B3',
        'neon-pink': '#ec4899',
        'neon-violet': '#8b5cf6',
      },
      fontFamily: {
        sans: ['Outfit', 'Nunito', 'Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'primary-gradient': 'linear-gradient(135deg, #0099FF 0%, #4FC3F7 100%)',
        'hero-gradient': 'linear-gradient(to bottom, #000A0F 0%, #1A2332 100%)',
        'neon-gradient': 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
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
