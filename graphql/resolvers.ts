import { User } from '@prisma/client'


export const resolvers = {
  Query: {
    users: (_, args, ctx): Promise<User[]> => ctx.prisma.user.findMany(),
  },
}