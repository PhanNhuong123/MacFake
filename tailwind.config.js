/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-light": "url('assets/img/background/light-mode.jpg')",
        "desktop-dark": "url('assets/img/background/dark-mode.png')",
      },
      width: {
        "mac-screen": "1440px",
      },
      height: {
        "mac-screen": "900px",
      },
      colors: {
        "system-Blue": "#007AFF",
        "dock-colors": "#F4F5F5BF"
      },
    },
  },
  plugins: [],
};
