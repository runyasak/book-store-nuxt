import { ApolloClient, InMemoryCache } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  const apolloClient = new ApolloClient({
    cache: new InMemoryCache(),
    uri: 'https://library-api.alab.in/graphql/',
  })
  nuxtApp.vueApp.provide(DefaultApolloClient, apolloClient)
})
