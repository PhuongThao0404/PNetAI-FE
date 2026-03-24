/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: "#FAF7F2",
        "accent-caramel": "#C4913A",
        "accent-forest": "#3D5A3E",
        "text-ink": "#2C2418",
      },
      fontFamily: {
        serif: ["Fraunces", "serif"],
        sans: ["DM Sans", "sans-serif"],
      },
      borderRadius: {
        '2xl': '20px',
        '3xl': '32px',
        'full': '50px',
      }
    },
  },
  plugins: [],
}
