
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns:{
        "custom":"2fr 3fr 2fr"
      },
      screens: {
        "cRes":{"max":"819px"},
      },
      cursor:{
        "custom":"url(/mail.png),pointer",
        "twitter":"url(/twitters.png),pointer",
        "doc":"url(/docs.png),pointer"
      },
      padding:{
      "custom": "80%"
      },
      spacing:{
        "90p":"90%",
        "80p":"80%"
      }

    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
}


