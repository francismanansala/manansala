'use client'

import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function HeroHeader({ children, sx, ...props }: TypographyProps): React.ReactElement {
  return (
    <Typography
      variant='body1'
      color='white'
      fontWeight={600}
      sx={{
        fontSize: { sm: '60px', xs: '32px' },
        textShadow: '3px 3px 4px black',
        lineHeight: { sm: '70px', xs: '40px' },
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  )
}