'use client'

import React from 'react'
import MuiContainer, { ContainerProps } from '@mui/material/Container'

export default function Container(props: ContainerProps): React.ReactElement {
  return <MuiContainer {...props} />
}