import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import Typography from '@/components/mui/typography'


async function AccountPage(): Promise<React.ReactElement> {
  return (
    <Container>
      <Toolbar />
      <Typography variant='h2'>Profile</Typography>
    </Container>
  )
}

export default AccountPage