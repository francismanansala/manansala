'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Image from 'next/image'
import { signIn, useSession } from 'next-auth/react'
import { OAuthProviderType } from 'next-auth/providers'
import CircularProgress from '@mui/material/CircularProgress'
import { amber, red } from '@mui/material/colors'

import Button from './mui/button'
import Box from './mui/box'
import Card from './mui/card'
import CardContent from './mui/card-content'
import Typography from './mui/typography'
import { getLoginErrorMessage, TLoginError } from '@/util/login-errors'

import GoogleSvg from '@/public/images/google.svg'
import FacebookSvg from '@/public/images/facebook-dark.svg'
import GitHubSvg from '@/public/images/github-dark.svg'
import GitLabSvg from '@/public/images/gitlab.svg'

export default function LoginCard(): React.ReactElement {
  const { data: session } = useSession()
  const params = useSearchParams()
  const error = params.get('error') as TLoginError
  const isLoading = !!session?.user


  function Buttons(): React.ReactElement {
    const [loggingIn, setLoggingIn] = useState<OAuthProviderType | 'none'>('none')

    const handleLogin = (provider: OAuthProviderType): void => {
      setLoggingIn(provider)
      signIn(provider)
    }

    return (<>
      <Box m={2}>
        <Button color='google' disabled={loggingIn !== 'none' && loggingIn !== 'google'} onClick={(): void => {handleLogin('google')}} variant='outlined'
          // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
          sx={{ maxWidth: 250 }}>
          {loggingIn !== 'google' ? 
            <Image src={GoogleSvg} style={{ marginRight: 5, height: 24 }} alt='Google Logo' />
            : <CircularProgress size={24} sx={{ mr: '10px', ml: '4px', color: '#1a73e8' }}/>
          }
          Log in with Google
        </Button>
      </Box >
      <Box m={2}>
        <Button color='facebookBlue' disabled={loggingIn !== 'none' && loggingIn !== 'facebook'} onClick={(): void => {handleLogin('facebook')}} variant='contained' sx={{ maxWidth: 250 }}>
          {loggingIn !== 'facebook' ? 
            <Image src={FacebookSvg} style={{ marginRight: 5, height: 24 }} alt='Facebook Logo' />
            : <CircularProgress size={24} sx={{ mr: '10px', ml: '4px', color: '#FFF' }}/>
          }
          Log in with Facebook
        </Button>
      </Box>
      <Box m={2}>
        <Button color='gitlabOrange' disabled={loggingIn !== 'none' && loggingIn !== 'gitlab'} onClick={(): void => {handleLogin('gitlab')}} variant='outlined' sx={{ maxWidth: 250 }}>
          {loggingIn !== 'gitlab' ? 
            <Image src={GitLabSvg} style={{ marginRight: 5, width: 32 }} alt='GitLab Logo' />
            : <CircularProgress size={24} sx={{ mr: '10px', ml: '4px', color: '#FC6D26' }}/>
          }
          Log in with GitLab
        </Button>
      </Box>
      <Box m={2}>
        <Button color='githubBlack' disabled={loggingIn !== 'none' && loggingIn !== 'github'} onClick={(): void => {handleLogin('github')}} variant='contained' sx={{ maxWidth: 250 }}>
          {loggingIn !== 'github' ? 
            <Image src={GitHubSvg} style={{ marginRight: 5, height: 24 }} alt='GitHub Logo' />
            : <CircularProgress size={24} sx={{ mr: '10px', ml: '4px', color: '#FFF' }}/>
          }
          Log in with GitHub
        </Button>
      </Box>
    </>)
  }

  function LoginErrorCard({ error }: {error: TLoginError}): React.ReactElement {
    return (<Card variant='outlined' sx={{
      bgcolor: error === 'OAuthAccountNotLinked' ? amber[100] : red[100],
      p: 1,
      m: 3,
    }}>
      <Typography variant='body2'>{getLoginErrorMessage(error)}</Typography>
    </Card>)
  }

  return (<>
    <Card variant='outlined' sx={{ maxWidth:500, mx: 'auto', textAlign: 'center' }} >
      <CardContent>
        <Typography variant='h3' fontWeight={500} pb={4}>Log in</Typography>
        {error && !isLoading && <LoginErrorCard error={error} />}
        {!isLoading ? <Buttons /> : <CircularProgress size={60} sx={{ m: 7 }} />}
      </CardContent>
    </Card>
  </>)
}