'use client'

import { signIn } from 'next-auth/react'

import Button from '../mui/button'
import GoogleSvg from '@/public/images/google.svg'
import FacebookSvg from '@/public/images/facebook-dark.svg'
import GithubSvg from '@/public/images/github-dark.svg'
import Image from 'next/image'
import Box from '../mui/box'


export default function LoginButtons(): React.ReactElement {
  return (<>
    <Box m={2}>
      <Button onClick={(): void => {signIn('google')}} variant='outlined' sx={{ maxWidth: 250 }}>
        <Image src={GoogleSvg} style={{ marginRight: 5, height: 24 }} alt='Google Logo' />
        Log in with Google
      </Button>
    </Box >
    <Box m={2}>
      <Button onClick={(): void => {signIn('facebook')}} variant='contained' sx={{ maxWidth: 250 }}>
        <Image src={FacebookSvg} style={{ marginRight: 5, height: 24 }} alt='Facebook Logo' />
        Log in with Facebook
      </Button>
    </Box>
    <Box m={2}>
      <Button onClick={(): void => {signIn('github')}} variant='contained' sx={{ maxWidth: 250, bgcolor: '#2f3337', '&:hover': { backgroundColor: 'black' } }}>
        <Image src={GithubSvg} style={{ marginRight: 5, height: 24 }} alt='Facebook Logo' />
        Log in with GitHub
      </Button>
    </Box>
  </>)
}