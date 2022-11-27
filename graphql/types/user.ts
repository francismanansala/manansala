import { objectType, extendType, arg, nonNull, enumType } from 'nexus'
import { Prisma } from '@/generated/prisma-client'
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection'
import sortOrder from './sort-order'

const {
  id,
  email,
  role,
  createdAt,
  updatedAt,
} = Prisma.UserScalarFieldEnum
export const User = objectType({
  name: 'User',
  definition(type) {
    type.uuid(id)
    type.string(email)
    type.string(role)
    type.dateTime(createdAt)
    type.dateTime(updatedAt)
  },
})

const orderBy = arg({
  type: nonNull(enumType({
    name: 'OrderUsersBy',
    members: [email, role, createdAt, updatedAt],
    description: `Order Users by field. Default: ${createdAt}`,
  })),
  default: createdAt,
})

export const UserQuery = extendType({
  type: 'Query',
  definition(type) {
    type.connectionField('users', {
      type: User,
      additionalArgs: { orderBy, sortOrder },
      resolve: async (_, { orderBy, sortOrder, ...args }, ctx) => {
        return await findManyCursorConnection(
          (args) => ctx.prisma.user.findMany({
            ...args,
            orderBy: { [orderBy]: sortOrder }, 
          }),
          () => ctx.prisma.user.count(),
          args,
        )
      },
    })
  },
})