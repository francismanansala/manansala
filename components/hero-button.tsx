'use client'

import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

export default function HeroButton({ children, sx, ...props }: ButtonProps): React.ReactElement {
  return (
    <Button
      size='large'
      variant='contained'
      sx={{
        borderRadius: '30px',
        height: '60px',
        mx: 1,
        ...sx,
      }}
      {...props}
    >
      {children}
    </Button>
  )
}