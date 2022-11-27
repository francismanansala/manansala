'use client'

import React from 'react'
import MuiPaper, { PaperProps } from '@mui/material/Paper'

export default function Paper(props: PaperProps): React.ReactElement {
  return <MuiPaper {...props} />
}