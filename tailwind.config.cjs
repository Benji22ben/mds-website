/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'anek-bangla': ['"Anek Bangla"'],
      },
      colors: {
        mds: {
          blue: "#29B7C5",
          gray: "#A5A5A5",
          black: "#07052F",
          white: "#FFFFFF",
          midGray: "#686868",
          navyBlue: "#181B3F"
        }
      },
    },
  },
  plugins: [],
}
