'use client'

import React from 'react'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

export default function Toolbar(props: ToolbarProps): React.ReactElement {
  return <MuiToolbar {...props} />
}