// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {enabled: true},
  modules: ["@nuxtjs/tailwindcss", '@nuxtjs/seo'],
  css: ['/app.css'],
  ssr: true,

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
              { rel: 'icon', type: 'image/svg+xml', href: '/JCI - Czech Republic.svg' }
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