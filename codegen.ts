
import type { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql',
  documents: 'graphql/operations/**/*.graphql',
  generates: {
    'generated/graphql/resolver-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        contextType: '../../graphql/context#Context',
      },
    },
    'generated/graphql/react.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        reactApolloVersion: 3,
      },
    },
    'generated/graphql/sdk.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-graphql-request'],
    },
  },
}

export default config
