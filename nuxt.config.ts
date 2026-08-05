// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ['@nuxtjs/seo'],
  css: ['/app.css'],
  ssr: true,

  vite: {
    plugins: [tailwindcss()],
  },

  runtimeConfig: {
      public: {
          strapiApi: 'http://localhost:1337', // can be overridden by NUXT_PUBLIC_STRAPI_API environment variable
      }
  },

  app: {
      head: {
          htmlAttrs: {
              lang: 'cs'
          },
          link: [
              { rel: 'icon', type: 'image/svg+xml', href: '/JCI - Czech Republic.svg' },
              { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
              { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap' }
          ]
      }
  },

  site: {
      url: 'https://jcicr.cz',
      name: 'JCI Czech Republic',
      description: 'Junior Chamber International Czech Republic - globální leadershipová organizace rozvíjející mladé lídry ve více než 120 zemích světa.',
      defaultLocale: 'cs',
  },


  compatibilityDate: '2024-09-30',
})