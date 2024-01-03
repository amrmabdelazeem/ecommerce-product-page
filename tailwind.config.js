/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors:{
        primary: "hsl(26, 100%, 55%)",
        secondary:"hsl(25, 100%, 94%)",
      },
      fontFamily: {
        Kumbh: "Kumbh"
      },
      fontSize:{
        400: "400",
        700: "700"
      }
    },
  },
  plugins: [
  ],
}

