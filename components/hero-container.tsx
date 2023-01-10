'use client'

import React from 'react'
import Container from '@mui/material/Container'
import Box from './mui/box'

interface IProps {
  children: React.ReactNode
}

export default function HeroContainer({ children }: IProps): React.ReactElement {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Box
        alignContent='center'
        sx={{
          m: 'auto 0',
          position: 'relative',
          pb: 3,
        }}
      >
        {children}
      </Box>
    </Container>
  )
}