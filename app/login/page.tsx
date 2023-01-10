import { redirect } from 'next/navigation'
import { unstable_getServerSession } from 'next-auth/next'

import LoginCard from '@/components/login-card'
import Box from '@/components/mui/box'
import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import MainContainer from '@/components/main-container'


async function LoginPage(): Promise<React.ReactElement> {
  const session = await unstable_getServerSession(authOptions)

  if (session?.user) redirect('/account')

  return (
    <Container sx={{ height: '100%' }}>
      <Toolbar />
      <Box className='test' p={2} sx={{ margin: 'auto' }}>
        <LoginCard />
      </Box>
    </Container>
  )
}

export default LoginPage