// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    modules: ["@nuxtjs/tailwindcss"],
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
            }
        }
    }
})