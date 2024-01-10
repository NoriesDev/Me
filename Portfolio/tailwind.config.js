import { nextui } from "@nextui-org/react";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        danger: '#dd65d7',
        success: '#88c8db',
        olive: '#895c40',
        rosa: '#dd65d7',
        beige: '#88c8db',
        one: "#EEF1E4",
        two: "#080A05",
        three: "#C8D2AD",
        four: "#719D58",
        five: "#CC922E"
      },
      fontFamily: {
        special: ['Sacramento', 'cursive'],
        headlines: ['Paytone One', 'sans-serif'],
        paragraph: ['Amatic SC', 'sans-serif'],
        paragraph1: ['Comfortaa', 'sans-serif'],
        one: ['Caudex', 'serif'],
        two: ['Flavors', 'cursive'],
        three: ['Silkscreen', 'sans-serif'],
        four: ['Source Code Pro', 'monospace']

      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
  ],
};