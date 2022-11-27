'use client'

import { signOut } from 'next-auth/react'

import Button, { ButtonProps } from '@mui/material/Button'


export default function GoogleLoginButton(props: ButtonProps): React.ReactElement {
  return (<><Button onClick={(): void => {signOut()}} {...props}>Sign Out</Button>{}</>)
}