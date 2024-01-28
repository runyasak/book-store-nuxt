import type { Config } from "tailwindcss";

// [TIPS] generate from: https://uicolors.app/create
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        purple: {
          50: "#f4f3ff",
          100: "#ece9fe",
          200: "#dbd5ff",
          300: "#c0b4fe",
          400: "#a189fc",
          500: "#7749f8",
          600: "#7337f0",
          700: "#6425dc",
          800: "#531eb9",
          900: "#471b97",
          950: "#2a0f66",
        },
      },
    },
  },
};
