// tailwind.config.js

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      flicker: 'flicker 1s infinite'
    },
    keyframes: {
      flicker: {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.5 },
      }
    }
  },
  variants: {},
  plugins: []
};
