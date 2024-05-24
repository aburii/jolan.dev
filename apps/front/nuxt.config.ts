// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Jolan - Web Developer",
    },
  },

  modules: ["@nuxt/ui", "@vueuse/nuxt", "@nuxt/fonts", "@nuxt/image"],

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

  typescript: {
    strict: true,
    shim: false,
  },
});
