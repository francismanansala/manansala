import { makeSchema, connectionPlugin } from 'nexus'
import { join } from 'path'
import * as types from './types'

export const schema = makeSchema({
  types,
  plugins: [connectionPlugin()],
  contextType: {
    export: 'Context',
    module: join(process.cwd(), 'graphql', 'context.ts'),
  },
  outputs: {
    schema: join(process.cwd(), 'generated', 'graphql', 'schema.graphql'),
    typegen: join(process.cwd(), 'generated', 'graphql', 'nexus', 'index.d.ts'),
  },
})

