import { PrismaClient, Role, User } from '@/generated/prisma-client'
import { getToken } from 'next-auth/jwt'
import prisma from '@/lib/prisma'
import { NextApiRequest, NextApiResponse } from 'next'

    
export type Context = {
  prisma: PrismaClient
  user: User | null
}

interface IMicroServerParams {
  req: NextApiRequest
  res: NextApiResponse
}

export async function createContext({ req }: IMicroServerParams): Promise<Context> {
  const token = await getToken({ req })
  const isApolloStudioSandbox = req.headers.origin === 'https://studio.apollographql.com'
  let user: User | null = null

  if (token?.iat && token?.exp) {
    const now = new Date()
    const isTokenValid = new Date(token.iat as number * 1000) < now
      && new Date(token.exp as number * 1000) > now

    if (isTokenValid && token?.email) {
      user = await prisma.user.findUnique({ 
        where: { email: token.email },
      })
    }
  }

  if (isApolloStudioSandbox && process.env.NODE_ENV === 'development') {
    user = {
      id: 'db3fd38f-4739-48e2-8e84-18fa371a296b',
      name: 'given_name',
      lastName: 'last_name',
      email: '',
      role: Role.ADMIN,
      emailVerified: null,
      image: 'no image',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
  }

  return {
    prisma,
    user,
  }
}