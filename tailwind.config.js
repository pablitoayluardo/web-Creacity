/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        crea: {
          bg: "#0B0F17",
          black: "#000000",
          surface: "#161F30",
          primary: "#FDB813",
          accent: "#16E535",
          text: "#FFFFFF",
          muted: "#D1D5DB",
          dtf: "#38BDF8",
          sublimacion: "#FB7185",
          laser: "#A855F7",
        },
      },
      fontFamily: {
        sans: ["Poppins", "system-ui", "sans-serif"],
        script: ["Caveat", "cursive"],
      },
    },
  },
  plugins: [],
}
