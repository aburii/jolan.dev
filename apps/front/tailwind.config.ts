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
    extend: {
      colors: {},
      fontFamily: {
        sans: "var(--font-family)",
      },
    },
  },
} satisfies Config;
