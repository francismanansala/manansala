'use client'

import React, { useEffect, useState, useRef } from 'react'
import Collapse, { CollapseProps } from '@mui/material/Collapse'
import Fade, { FadeProps } from '@mui/material/Fade'
import Grow, { GrowProps } from '@mui/material/Grow'
import Slide, { SlideProps } from '@mui/material/Slide'
import Zoom, { ZoomProps } from '@mui/material/Zoom'
import Box, { BoxProps } from '@mui/material/Box'

interface IProps extends BoxProps {
  children: React.ReactElement
  collapse?: Omit<CollapseProps, 'children'>
  disableFade?: boolean
  disableSlide?: boolean
  /** Collapse transition can also be enabled by just using the prop collapse */
  enableCollapse?: boolean
  /** Grow transition can also be enabled by just using the prop grow */
  enableGrow?: boolean
  /** Zoom transition can also be enabled by just using the prop zoom */
  enableZoom?: boolean
  fade?: Omit<FadeProps, 'children'>
  grow?: Omit<GrowProps, 'children'>
  repeat?: boolean
  slide?: Omit<SlideProps, 'children'>
  zoom?: Omit<ZoomProps, 'children'>
}


export default function Reveal({
  children,
  collapse,
  disableFade = false,
  disableSlide = false,
  enableCollapse = false,
  enableGrow = false,
  enableZoom = false,
  fade,
  grow,
  repeat = false, 
  slide,
  zoom,
  ...props
}: IProps): React.ReactElement {
  const [isVisible, setVisible] = useState(false)
  const domRef = useRef<HTMLDivElement>(null)
  useEffect((): (() => void) | void => {
    if (domRef.current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          setVisible(entry.isIntersecting)

          const removeEventListener = entry.isIntersecting && !repeat && domRef.current
          if (removeEventListener) observer.unobserve(domRef.current)
        })
      })
      observer.observe(domRef.current)
      // eslint-disable-next-line react-hooks/exhaustive-deps
      return () => domRef.current && observer.unobserve(domRef.current)
    }
  }, [domRef, repeat])
  
  const FadePlaceholder = ({ children }: {children: React.ReactElement}): React.ReactElement => (
    disableFade ?
      <>
        {children}
      </>
      : <Fade
        in={disableFade || isVisible}
        appear={!disableFade}
        timeout={1500}
        {...fade}
      >
        <div>
          {children}
        </div>
      </Fade>
  )

  const SlidePlaceholder = ({ children }: {children: React.ReactElement}): React.ReactElement => (
    disableFade ?
      <>
        {children}
      </>
      : <Slide
        in={disableSlide || isVisible}
        appear={!disableSlide}
        direction='right'
        timeout={500}
        {...slide}
      >
        <div>
          {children}
        </div>
      </Slide>
  )

  const CollapsePlaceholder = ({ children }: {children: React.ReactElement}): React.ReactElement => {
    const isCollapseEnabled = enableCollapse || collapse !== undefined
    return (
      !isCollapseEnabled ?
        <>
          {children}
        </>
        : <Collapse
          in={!isCollapseEnabled || isVisible}
          appear={isCollapseEnabled}
          {...collapse}
        >
          <div>
            {children}
          </div>
        </Collapse>
    )
  }

  const GrowPlaceholder = ({ children }: {children: React.ReactElement}): React.ReactElement => {
    const isGrowEnabled = enableGrow || grow !== undefined
    return (
      !isGrowEnabled ?
        <>
          {children}
        </>
        : <Grow
          timeout={800}
          in={!isGrowEnabled || isVisible}
          appear={isGrowEnabled}
          {...grow}
        >
          <div>
            {children}
          </div>
        </Grow>
    )
  }

  const ZoomPlaceholder = ({ children }: {children: React.ReactElement}): React.ReactElement => {
    const isZoomEnabled = enableZoom || zoom !== undefined
    return (
      !isZoomEnabled ?
        <>
          {children}
        </>
        : <Zoom
          in={!isZoomEnabled || isVisible}
          appear={isZoomEnabled}
          timeout={800}
          {...zoom}
        >
          <div>
            {children}
          </div>
        </Zoom>
    )
  }

  return (
    <Box ref={domRef} display='inline-block' {...props}>
      <FadePlaceholder>
        <SlidePlaceholder>
          <CollapsePlaceholder>
            <GrowPlaceholder>
              <ZoomPlaceholder>
                {children}
              </ZoomPlaceholder>
            </GrowPlaceholder>
          </CollapsePlaceholder>
        </SlidePlaceholder>
      </FadePlaceholder>
    </Box>
  )
}