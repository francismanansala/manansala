'use client'
//NOTE: MUI doesn't yet put "use client" in their component there is need for a wrapper
//See: https://beta.nextjs.org/docs/rendering/server-and-client-components#third-party-packages

import MuiButton, { ButtonProps } from '@mui/material/Button'

export default function Button(props: ButtonProps): React.ReactElement {
  return (
    <MuiButton {...props} />
  )
}