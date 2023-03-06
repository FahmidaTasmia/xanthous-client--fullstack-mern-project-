/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui:{
    themes:[
      {
        mytheme:{
          primary:'#b89d4f',
          secondary:'#212121',
          accent: "#818181",
          neutral: "#f2f2f2",
          "base-100": "#FFFFFF",

        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}
