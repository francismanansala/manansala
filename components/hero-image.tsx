'use client'

import React from 'react'
import Image, { ImageProps } from 'next/image'

export default function HeroImage({ style, ...props }: ImageProps): React.ReactElement {
  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      priority
      style={{
        filter: 'brightness(60%)',
        objectFit: 'cover',
        objectPosition: 'center',
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        ...style, 
      }}
      {...props}
    />
  )
}