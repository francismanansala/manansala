import NextAuth, { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@next-auth/prisma-adapter'
import GoogleProvider from 'next-auth/providers/google'
import FacebookProvider from 'next-auth/providers/facebook'
import GithubProvider from 'next-auth/providers/github'
import GitlabProvider from 'next-auth/providers/gitlab'
import prisma from '@/lib/prisma'

export const authOptions: AuthOptions = {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
    GitlabProvider({
      clientId: '9ee8e41b3f3bf830328cc00555efb1386acc54ea921485245aaaa0e207df6904',
      clientSecret: '4dfeac9de7cfc3903ea835b941895705c7d6e05dbe82de1549c4ea2c1bec0b30',
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  theme: {
    colorScheme: 'light',
  },
  pages: {
    signIn: '/login',
  },
  session: {
    strategy: 'jwt',
  },
}

export default NextAuth(authOptions)