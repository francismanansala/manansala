'use client'

import React from 'react'
import MuiBox, { BoxProps } from '@mui/material/Box'

export default function Box(props: BoxProps): React.ReactElement {
  return <MuiBox {...props} />
}