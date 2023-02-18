/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "./src/**/*.jsx"],
  theme: {
    extend: {
      borderColor:{
        "border-nav":"#00120B"
      },
      colors: {
        'banner-color': '#589D80',
        "text-color": "#00120B",
        "button-card" : "#F7FDB6",
        "footer": "#5F464B"
      }
    },
  },
  plugins: [],
}
