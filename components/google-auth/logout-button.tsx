'use client'

import { signOut } from 'next-auth/react'

import Button from '@mui/material/Button'
import { useRouter } from 'next/navigation'


export default function LogoutButton(): React.ReactElement {
  const router = useRouter()
  return (<><Button onClick={(): void => {signOut({ redirect: false });router.push('/login')}}>Sign Out</Button>{}</>)
}