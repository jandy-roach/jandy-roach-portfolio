/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Include all your components/pages
    "./public/index.html"         // ✅ Optional: if you use anything in public
  ],
  theme: {
    extend: {
      colors: {
        darkbg: "#020817",
      },
      backdropBlur: {
        xs: '2px', // ✅ Add custom backdrop blur
      },
    },
  },
  plugins: [],
};

