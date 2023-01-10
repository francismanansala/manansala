import React from 'react'

import HeroSection from './hero-section'
import PitchSection from './pitch-section'

import Container from '@/components/mui/container'
import Toolbar from '@/components/mui/toolbar'
import Box from '@/components/mui/box'

function HomePage(): React.ReactElement {
  return (<Container>
    <HeroSection />
    <Toolbar />
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PitchSection />
    </Container>
  </Container>
  )
}

export default HomePage