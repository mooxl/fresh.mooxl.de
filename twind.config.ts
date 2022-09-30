import { Options } from "$fresh/plugins/twind.ts";
import { apply } from "twind";

export default {
  selfURL: import.meta.url,
  theme: {
    fontSize: {
      html: "62.5%",
      sm: "1.6rem",
      md: "2.1rem",
      lg: "3rem",
      xl: "5rem",
    },
    fontWeight: {
      bold: "700",
    },
    screens: {
      lg: { max: "1040px" },
      md: { max: "768px" },
      sm: { max: "640px" },
    },
    fontFamily: {
      plex: ["Plex", "sans-serif"],
    },
    maxWidth: {
      xl: "1000px",
      experience: "550px",
    },
    extend: {
      colors: {
        gray: {
          DEFAULT: "#111111",
          light: "#888888",
          dark: "#222222",
        },
      },
      gridTemplateColumns: {
        desktop: "min-content auto",
      },
      spacing: {
        0: "0",
        0.1: "0.1rem",
        0.2: "0.2rem",
        0.3: "0.3rem",
        0.4: "0.4rem",
        0.5: "0.5rem",
        0.6: "0.6rem",
        0.7: "0.7rem",
        0.8: "0.8rem",
        0.9: "0.9rem",
        1: "1rem",
        1.5: "1.5rem",
        2: "2rem",
        2.1: "2.1rem",
        3: "3rem",
        4: "4rem",
        5: "5rem",
        5.5: "5.5rem",
        6: "6rem",
        7: "7rem",
        7.5: "7.5rem",
        8: "8rem",
        9: "9rem",
        10: "10rem",
        12: "12rem",
        15: "15rem",
        16: "16rem",
        20: "20rem",
        25: "25rem",
        30: "30rem",
        38: "38rem",
        40: "40rem",
        50: "50rem",
        60: "60rem",
        70: "70rem",
        80: "80rem",
        90: "90rem",
        100: "100rem",
      },
    },
  },
  preflight: {
    "@font-face": [
      {
        fontFamily: "Plex",
        src: 'url(/fonts/Plex-Regular.woff2) format("woff2")',
      },
      {
        fontFamily: "Plex",
        fontWeight: "bold",
        src: 'url(/fonts/Plex-Bold.woff2) format("woff2")',
      },
    ],
    html: apply`text-html bg-gray`,
    body: {
      body: apply`text-sm text-white font-plex leading-none tracking-wide`,
      h1: apply`text-xl leading-none font-bold sm:text-lg`,
      h2: apply`text-lg font-bold text-gray-light sm:text-md`,
      h3:
        apply`text-right uppercase text-md font-bold text-gray-light lg:mt-6 lg:mb-2 md:mt-4 lg:text-left`,
      h4: apply`text-white font-bold text-md  mb-1.5 lg:mb-1 md:mb-0.8`,
      h5: apply`text-gray-light leading-snug`,
      ul: apply`list-disc list-inside`,
      li: apply`text-gray-light leading-normal`,
      a: apply`text-gray-light leading-normal`,
      p: apply`text-gray-light leading-snug`,
      label: apply`text-gray-light leading-snug`,
    },
  },
} as Options;
