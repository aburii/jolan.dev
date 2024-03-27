import type { Config } from "tailwindcss";

export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./nuxt.config.ts",
    "./app.vue",
  ],
  theme: {
    screens: {
      "2xl": "1480px",
    },
    extend: {
      colors: {
        "cod-gray": {
          "50": "#f6f6f6",
          "100": "#e7e7e7",
          "200": "#d1d1d1",
          "300": "#b0b0b0",
          "400": "#888888",
          "500": "#6d6d6d",
          "600": "#5d5d5d",
          "700": "#4f4f4f",
          "800": "#454545",
          "900": "#3d3d3d",
          "950": "#121212",
        },
      },
      fontFamily: {
        sans: "var(--font-family)",
        brand: "var(--font-brand)",
      },
    },
  },
} satisfies Config;
