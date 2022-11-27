import LoginButtons from '@/components/google-auth/login-buttons'
import Box from '@/components/mui/box'
import Card from '@/components/mui/card'
import CardContent from '@/components/mui/card-content'
import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import Typography from '@/components/mui/typography'

async function LoginPage(): Promise<React.ReactElement> {
  return (
    <Container>
      <Toolbar />
      <Box p={2}>
        <Card variant='outlined' sx={{ maxWidth:500, mx: 'auto', textAlign: 'center' }} >
          <CardContent>
            <Typography variant='h3' fontWeight={500}>Log in</Typography>
            <LoginButtons />
          </CardContent>
        </Card>
      </Box>
    </Container>
  )
}

export default LoginPage