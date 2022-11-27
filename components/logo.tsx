'use client'

import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo-white.png'

export default function Logo(): React.ReactElement {
  return <Button href={'/'} LinkComponent={Link}>
    <Image src={logo} height={30} alt="Computer screen with code" /><Typography variant="h6" color='white' ml={2}>Manansala</Typography>
  </Button>
  
}