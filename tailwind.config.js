/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#236B9E"
        },
        primaryLight: {
          DEFAULT: "#E9E8F2"
        }
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}

