import { rule, shield } from 'graphql-shield'
import { Context } from '@/graphql/context'
import { PermissionsSchema } from './types'
import { NotAdminError } from '../errors/not-admin'
import formatGraphqlPath from '@/util/format-graphql-path'
import { IShieldContext } from 'graphql-shield/typings/types'
import { Role } from '@/generated/prisma-client'

const isAdmin = rule({ cache: 'contextual' })((_parent, _args, ctx: Context) => {
  return Boolean(ctx.user?.role === 'ADMIN')
})

const rules: PermissionsSchema = {
  Query: {
    users: isAdmin,
  },
}

export const adminMiddleware = shield<unknown, Context, unknown>(rules, {
  fallbackError: async (_err, _parent, _args, ctx: Context & IShieldContext, info) =>
    new NotAdminError(`Unauthorized! User has role ${ctx.user?.role}.` +
      ` Must be an ${Role.ADMIN} to access ${formatGraphqlPath(info.path)}.`),
})