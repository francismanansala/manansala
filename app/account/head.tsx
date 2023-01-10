import React from 'react'

import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'

export default async function AccountHead(): Promise<React.ReactElement> {
  const session = await unstable_getServerSession(authOptions)

  return (<>
    <title>{`Account - ${session?.user?.name}`}</title>
    <meta name="robots" content="noindex" />
  </>)
}