// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,

  modules: [
    '@nuxt/ui',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/content',
    '@nuxtjs/seo',
  ],

  css: ['~/assets/css/main.css'],

  colorMode: {
    preference: 'dark',
    fallback: 'dark'
  },

  future: {
    compatibilityVersion: 4
  },

  experimental: {
    viewTransition: true,
  },

  content: {
    renderer: {
      anchorLinks: { h1: true, h2: true, h3: true, h4: true, h5: true }
    },
    build: {
      markdown: {
        toc: {
          depth: 5,
          searchDepth: 3
        }
      },
    },
    preview: {
      api: 'https://api.nuxt.studio'
    }
  },

  app: {
    head: {
      titleTemplate: '%s'
    }
  },

  fonts: {
    families: [
      { name: 'ClashGrotesk-Variable', provider: 'local' }
    ]
  },

  site: {
    name: 'jolan.dev',
    indexable: true,
    defaultLocale: 'en',
    url: 'https://jolan.dev',
  },

  compatibilityDate: '2024-11-27'
})