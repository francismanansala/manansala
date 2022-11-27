import { arg, enumType, nonNull } from 'nexus'
import { Prisma } from '@/generated/prisma-client'

const { desc, asc } = Prisma.SortOrder
const sortOrder = arg({
  type: nonNull(enumType({
    name: 'SortOrder',
    members: [desc, asc],
    description: `Sort order can be descending or ascending. Default: ${desc}`,
  })),
  default: desc,
})

export default sortOrder