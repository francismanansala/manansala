import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

export async function redirectGuest(): Promise<void> {
  const session = await unstable_getServerSession(authOptions)

  if (!session?.user) redirect('login')
}