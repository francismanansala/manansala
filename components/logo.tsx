'use client'

import Typography from '@mui/material/Typography'
import { ButtonProps } from '@mui/material/Button'
import Link from 'next/link'
import AppBarLink from './mui/styled/app-bar-link'
import LogoIcon from './logo-icon'

interface IProps extends ButtonProps {
  size?: 'medium' | 'large'
}

export default function Logo({ size = 'medium', ...props }: IProps): React.ReactElement {
  return <AppBarLink href={'/'} LinkComponent={Link} {...props}>
    <LogoIcon sx={{
      fontSize: {
        sm : size === 'medium' ? 30 : 40,
        xs : size === 'medium' ? 28 : 32,
      },
      transition: 'font-size 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', 
    }}/>
    <Typography ml={2} sx={{
      fontSize: {
        sm: size === 'medium' ? 24 : 32, 
        xs : size === 'medium' ? 20 : 24,
      },
      transition: 'font-size 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms', 
    }}>Manansala</Typography>
  </AppBarLink>
  
}