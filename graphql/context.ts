import { PrismaClient, User } from '@/generated/prisma-client'
import prisma from '@/lib/prisma'
    
export type Context = {
  prisma: PrismaClient
  user: User | null
}

export async function createContext(): Promise<Context> {
  let user: User | null

  if (process.env.NODE_ENV === 'production') {
    user = await prisma.user.findUnique({ 
      where: { id: '37a3ef43-cb63-4d13-ac73-7b8fa68f4a20' },
    })
  } else {
    user = await prisma.user.findUnique({ 
      where: { email: 'f.manansala@gmail.com' },
    })
  }

  return {
    prisma,
    user,
  }
}