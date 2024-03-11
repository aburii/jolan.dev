// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Jolan - Web Developer",
    },
  },

  modules: ["@nuxt/ui"],

  css: ["~/assets/main.css"],

  typescript: {
    strict: true,
    shim: false,
  },
});
