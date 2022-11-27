'use client'

import React from 'react'
import MuiCard, { CardProps } from '@mui/material/Card'

export default function Card(props: CardProps): React.ReactElement {
  return <MuiCard {...props} />
}