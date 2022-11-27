'use client'

import React from 'react'
import { ButtonProps } from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import HeroButton from './hero-button'

const HeroButtonStyled = styled(HeroButton)(() => ({
  color: 'white',
  border: '1px solid white',
  '&:hover': {
    border: '1px solid grey',
    background: 'rgba(128,128,128,0.3)',
  },
}))

export default function HeroButtonOutlined({ children, ...props }: ButtonProps): React.ReactElement {
  return (
    <HeroButtonStyled
      variant='outlined'
      {...props}
    >
      {children}
    </HeroButtonStyled>
  )
}