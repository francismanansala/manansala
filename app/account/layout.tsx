import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import Typography from '@/components/mui/typography'
import { unstable_getServerSession } from 'next-auth/next'
import { authOptions } from 'pages/api/auth/[...nextauth]'
import { redirect } from 'next/navigation'

interface IProps {
  children: React.ReactNode
}

async function AccountLayout({ children }: IProps): Promise<React.ReactElement> {
  const session = await unstable_getServerSession(authOptions)

  if (!session?.user) redirect('login')
  return (
    <Container>
      <Toolbar />
      <Typography variant='h2'>Hello</Typography>
      {children}
    </Container>
  )
}

export default AccountLayout