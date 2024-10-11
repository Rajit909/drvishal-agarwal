// tailwind.config.js
module.exports = {
  darkMode: 'class', // or 'media' for system-based
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // make sure Tailwind scans your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        'doctor': ['"Playfair Display"', 'serif'],
      },
    },
  },
  plugins: [],
};
