import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      // From Small to big
      xs: "375px",
      ...defaultTheme.screens,
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "primary-purple": "#381DDB",
        "theme-black": "#222222",
        "theme-border": "#A3A3A3",
      },
      fontFamily: {
        montserrat: "var(--font-montserrat)",
        raleway: "var(--font-raleway)",
      },
      textShadow: {
        default: "0px 2px 0px rgba(34, 34, 34, 0.10)",
      },
    },
    plugins: [
      function ({ addUtilities }: any) {
        const newUtilities = {
          ".text-shadow": {
            textShadow: "0px 2px 0px rgba(34, 34, 34, 0.10)",
          },
        };
        addUtilities(newUtilities, ["responsive", "hover"]);
      },
    ],
  },
};
export default config;
