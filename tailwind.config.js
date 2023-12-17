/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "darkcharcoal" : "#323232",
        "zucchini" : "#1A422B",
        "whitewash" : "#FFFFFD",
        "gingko" : "#A5C99C",
      },
      strokeWidth: {
        '1': '1px',
      },
    },
    fontFamily: {
      Judson: ["'Judson', serif"],
      Mulish: ["'Mulish', sans-serif"],
    },
  },
  plugins: [],
}

