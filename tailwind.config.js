/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        input: "rgb(250,250,250)",
        lightblue: "rgb(76,181,249)",
        darkblue:"rgb(0,149,246)",
        line:"rgb(219,219,219)",
      },
      screens: {
        '3xl': '1537px',
        '3lg': "1025px",
        '3md': "769px",
        '3sm': "426px",
        "3ssm": "376px",
        "3sssm":"321px",
      },
    },
  },
  plugins: [require("daisyui")],
}


