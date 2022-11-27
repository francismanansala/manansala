'use client'

import React from 'react'
import MuiAvatar, { AvatarProps } from '@mui/material/Avatar'

export default function Avatar(props: AvatarProps): React.ReactElement {
  return <MuiAvatar {...props} />
}