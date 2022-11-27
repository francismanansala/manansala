import { GraphQLClient } from 'graphql-request'
import getTime from 'date-fns/getTime'
import { getSdk, SdkFunctionWrapper } from '@/generated/graphql/sdk'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHQL_URL)
const clientTimingWrapper: SdkFunctionWrapper = async <T>(action: () => Promise<T>): Promise<T> => {
  const startTime = getTime(new Date())
  const result = await action()
  console.log('request duration (ms)', getTime(new Date()) - startTime)
  return result
}
 
export const sdk = getSdk(client, clientTimingWrapper)