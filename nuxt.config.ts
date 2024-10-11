// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  app: {
    pageTransition: { name: 'page', mode: 'out-in', appear: true },

    head: {
      title: 'Jolan - Web Developer',
    },
  },

  nitro: {
    preset: 'bun'
  },

  modules: [
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/icon',
  ],

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  css: ['~/assets/main.css'],

  typescript: {
    strict: true,
    shim: false,
  },

  compatibilityDate: '2024-10-10',
})
