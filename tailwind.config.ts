import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-delay-1': 'fadeIn 0.5s ease-out 0.1s',
        'fade-in-delay-2': 'fadeIn 0.5s ease-out 0.2s',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-up-delay-1': 'slideUp 0.5s ease-out 0.1s',
        'slide-up-delay-2': 'slideUp 0.5s ease-out 0.2s',
        'slide-up-delay-3': 'slideUp 0.5s ease-out 0.3s',
        'scale-in': 'scaleIn 0.3s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },

      colors: {
      ink: 'var(--ink)',
      plum: 'var(--plum)',
      'plum-deep': 'var(--plum-deep)',
      'plum-tint': 'var(--plum-tint)',
      bone: 'var(--bone)',
      surface: 'var(--surface)',
      amber: 'var(--amber)',
      'amber-tint': 'var(--amber-tint)',
      sage: 'var(--sage)',
      slate: 'var(--slate)',
      line: 'var(--line)',
      signal: 'var(--signal)',
    },
    fontFamily: {
      display: ['var(--font-display)'],
      body: ['var(--font-body)'],
      mono: ['var(--font-mono)'],
    },
    },
  },
  plugins: [],
};

export default config;
