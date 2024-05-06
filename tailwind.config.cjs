/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        lightblue: '#dff6ff',
        darkblue: '#3282B8',
        brown: '#1e1e1e',
        babyblue: '#BBE1FA'
      },
      spacing:{
        '25vh' : '25vh',
        '30vh' : '30vh',
        '35vh' : '35vh',
        '40vh' : '40vh',
        '45vh' : '45vh',
        '55vh' : '55vh'
      }

      
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require('flowbite/plugin')
],
};

