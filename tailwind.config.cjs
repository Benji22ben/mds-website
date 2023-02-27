/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    colors: {
      mds: {
        blue: "#29B7C5",
        gray: "#A5A5A5",
        black: "#07052F",
        white: "#FFFFFF",
      }
    },
    extend: {
      fontFamily: {
        'anek-bangla': ['"Anek Bangla"'],
      },
    },
  },
  plugins: [],
}
