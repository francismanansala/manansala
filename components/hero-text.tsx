'use client'

import React from 'react'
import Typography, { TypographyProps } from '@mui/material/Typography'

export default function HeroText({ children, sx, ...props }: TypographyProps): React.ReactElement {
  return (
    <Typography
      variant='subtitle1'
      py={2}
      color='white'
      sx={{ textShadow: '2px 2px 3px black', ...sx }}
      {...props}
    >
      {children}
    </Typography>
  )
}