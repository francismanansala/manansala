'use client'

import useWindowDimensions from '@/hooks/use-window-dimensions'
import React from 'react'
import MuiCarousel from 'react-material-ui-carousel'

export default function Carousel(props: React.ComponentProps<typeof MuiCarousel>): React.ReactElement {
  const { width } = useWindowDimensions()
  return <MuiCarousel {...props} navButtonsAlwaysVisible={width > 600} />
}