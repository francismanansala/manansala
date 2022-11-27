import { ApolloClient, InMemoryCache } from '@apollo/client'
import { BatchHttpLink } from '@apollo/client/link/batch-http'

const client = new ApolloClient({
  link: new BatchHttpLink({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_URL,
    batchMax: 5,
    batchInterval: 20,
  }),
  cache: new InMemoryCache(),
})

export default client