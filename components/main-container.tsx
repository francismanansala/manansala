'use client'

import React from 'react'
import Container from '@mui/material/Container'

interface IProps {
  children: React.ReactNode
}

export default function MainContainer({ children }: IProps): React.ReactElement {
  return (
    <Container maxWidth="lg" sx={{ p: { xs: 0 } }}>
      {children}
    </Container>
  )
}