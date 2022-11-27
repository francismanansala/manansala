'use client'

import React from 'react'
import MuiAssuredWorkload from '@mui/icons-material/AssuredWorkload'

type TProps = React.ComponentProps<typeof MuiAssuredWorkload>

export default function AssuredWorkloadIcon(props: TProps): React.ReactElement {
  return <MuiAssuredWorkload {...props} />
}