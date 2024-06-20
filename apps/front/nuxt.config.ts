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

  modules: [
    '@nuxt/ui',
    '@vueuse/nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@pinia/nuxt',
  ],

  fonts: {
    experimental: {
      processCSSVariables: true,
    },
  },

  ui: {
    icons: ['simple-icons'],
  },

  colorMode: {
    preference: 'dark',
  },

  css: ['~/assets/main.css'],

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
})
