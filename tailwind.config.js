/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/assets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        color: {
          blue: "#8075FF",
          violet: "#6320EE",
          kidnapper: "#EEF2E5",
          grey: "#8D9E8D",
          greyLight: "#CAD5CA",
          black: "#211A1D",
          pink: "#FF758E",
        },
      },
      fontFamily: {
        poppins: "var(--font-poppins)",
        trap: "var(--font-trap)",
      },
      transitionDuration: {
        DEFAULT: "200ms",
      },
      transitionTimingFunction: {
        DEFAULT: "linear",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      borderWidth: {
        DEFAULT: "0.0625rem",
      },
      backgroundImage: {
        "benefit-card-1": "url(assets/benefits/card-1.svg)",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-[32px] md:px-[96px] lg:px-[128px] xl:max-w-[87.5rem] xl:mx-auto xl:px-0":
            {},
        },
        ".h1": {
          "@apply font-trap font-black text-[48px] lg:text-[64px]": {},
        },
        ".h2": {
          "@apply font-trap font-black text-[32px]": {},
        },
        ".body-1": {
          "@apply font-poppins text-[16px] leading-none": {},
        },
        ".body-2": {
          "@apply font-poppins text-[16px] leading-[1.2em]": {},
        },
      });
    }),
  ],
  compilerOptions: {
    baseUrl: ".",
    paths: {
      "@/*": ["./src/*"],
    },
  },
};