import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'gmarket': ['GmarketSans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;