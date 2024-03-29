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
        lightBlue:"hsl(223, 64%, 98%)"
      },
      fontFamily: {
        Kumbh: "Kumbh Sans"
      },
      fontWeight:{
        400: "400",
        700: "700"
      },
      height:{
        160: "160%",
        120: "120%",
        130: "130%",
        140: "140%",
        150: "150%"
      },
      width:{
        95 : "95%",
        600: "600px",
        550: "550px"
      }
    },
  },
  plugins: [
  ],
}

