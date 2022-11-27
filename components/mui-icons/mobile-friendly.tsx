'use client'

import React from 'react'
import MuiMobileFriendlyIcon from '@mui/icons-material/MobileFriendly'

type TProps = React.ComponentProps<typeof MuiMobileFriendlyIcon>

export default function MobileFriendlyIcon(props: TProps): React.ReactElement {
  return <MuiMobileFriendlyIcon {...props} />
}