/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "system-Blue": "#007AFF",
    },
    extend: {
      backgroundImage: {
        "desktop-light": "url('assets/img/light-mode.jpg')",
      },
    },
  },
  plugins: [],
};
