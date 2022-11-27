import React from 'react'

import HeroSection from './hero-section'
import PitchSection from './pitch-section'

import Container from '@/components/mui/container'

function HomePage(): React.ReactElement {
  return (<>
    <HeroSection />
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <PitchSection />
    </Container>
  </>
  )
}

export default HomePage