// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  app: {
    baseURL: '/portfolio/',
    head: {
      titleTemplate: '%s - portfolio',
      title: 'portfolio',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/portfolio/mylogoCircle.png',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap',
        },
      ],
    },
  },

  ssr: false,

  css: [
    'vuetify/styles',
    '@mdi/font/css/materialdesignicons.css',
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    '~/assets/main.css',
  ],

  build: {
    transpile: ['vuetify'],
  },

  modules: ['@nuxt/eslint'],

  vite: {
    ssr: {
      noExternal: ['vuetify'],
    },
  },
})
