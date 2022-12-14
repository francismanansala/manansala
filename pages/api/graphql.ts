import { ApolloServer } from 'apollo-server-micro'
import { schema } from '@/graphql/schema'
import { resolvers } from '@/graphql/resolvers'
import { createContext } from '@/graphql/context'
import { applyMiddleware } from 'graphql-middleware'
import { adminMiddleware } from '@/graphql/middleware'
import Cors from 'micro-cors'

const cors = Cors()
const apolloServer = new ApolloServer({
  context: createContext,
  resolvers,
  schema: applyMiddleware(schema, adminMiddleware),
})
const startServer = apolloServer.start()

export default cors(async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false,
  },
}