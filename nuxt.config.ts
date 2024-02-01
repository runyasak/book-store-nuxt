// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxt/image', '@nuxtjs/apollo'],
  tailwindcss: {
    exposeConfig: true,
  },
  apollo: {
    clients: {
      default: {
        httpEndpoint: 'https://library-api.alab.in/graphql/',
      },
    },
  },
  build: {
    transpile: [
      '@apollo/client',
      'ts-invariant/process',
    ],
  },
})
