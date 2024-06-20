// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  ssr: false,

  app: {
    head: {
      title: "Jolan - Web Developer",
    },
  },

  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "@nuxt/eslint"
  ],

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  ui: {
    icons: ["simple-icons"],
  },

  colorMode: {
    preference: "dark",
  },

  css: ["~/assets/main.css"],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  typescript: {
    strict: true,
    shim: false,
  },
});