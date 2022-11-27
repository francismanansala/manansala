import { responsePathAsArray, GraphQLResolveInfo } from 'graphql'

export default function formatGraphqlPath(path: GraphQLResolveInfo['path']): string {
  const paths = responsePathAsArray(path)
  let formattedPath = ''
  paths.forEach((path, index) => {
    if (typeof path === 'string') {
      formattedPath += path
      if (index !== paths.length - 1) formattedPath += '.'
    }
    if (typeof path === 'number') formattedPath +=`[${path}]`
  })

  return formattedPath
}