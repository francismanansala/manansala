'use client'

import { useState, useEffect } from 'react'

type TWindowDimensions = {
  height: number,
  width: number,
}

function getWindowDimensions(): TWindowDimensions {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions(): TWindowDimensions {
  const [windowDimensions, setWindowDimensions] = useState<TWindowDimensions>({
    width: -1,
    height: -1,
  })

  useEffect(() => {
    function handleResize(): void {
      setWindowDimensions(getWindowDimensions())
    }

    setWindowDimensions(getWindowDimensions())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}