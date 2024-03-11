// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: "Jolan - Web Developer",
    },
  },

  modules: [
    "@nuxt/ui",
    "@vueuse/nuxt",
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Raleway: true,
        },
      },
    ],
  ],

  colorMode: {
    preference: "dark",
  },

  css: ["~/assets/main.css"],

  typescript: {
    strict: true,
    shim: false,
  },
});
