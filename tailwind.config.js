/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "system-Blue": "#007AFF",
    },
    width: {
      'mac-screen' : '1440px'
    },
    height: {
      'mac-screen' : '900px'
    },
    extend: {
      backgroundImage: {
        "desktop-light": "url('assets/img/background/light-mode.jpg')",
        "desktop-dark": "url('assets/img/background/dark-mode.png')",
      },

    },
  },
  plugins: [],
};
