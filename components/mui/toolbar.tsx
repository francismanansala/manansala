'use client'

import React from 'react'
import MuiToolbar, { ToolbarProps } from '@mui/material/Toolbar'

export default function Toolbar({ sx, ...props }: ToolbarProps): React.ReactElement {
  return <MuiToolbar sx={{ height: 100, ...sx }} {...props} />
}