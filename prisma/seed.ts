import { PrismaClient } from '../generated/prisma-client'
import { USERS } from './data/users'

const prisma = new PrismaClient()

async function main(): Promise<void> {
  const alice = await prisma.user.upsert({
    where: { email: 'alice@prisma.io' },
    update: {},
    create: {
      email: USERS[0].email,
    },
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })