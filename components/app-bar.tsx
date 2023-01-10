'use client'

import React from 'react'
import { alpha, styled } from '@mui/system'
import AppBarMui, { AppBarProps } from '@mui/material/AppBar'
import useScrollTrigger from '@mui/material/useScrollTrigger'

type TAppBarProps = React.ComponentProps<typeof AppBarMui>

const AppBarStyled = styled(AppBarMui)<TAppBarProps>(({ theme }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return {
    height: !trigger ? '100px' : '64px',
    fontWeight: trigger ?  400 : 500,
    justifyContent: 'center',
    backdropFilter: trigger ? 'blur(8px)' : undefined,
    background: trigger ? alpha(theme.palette.background.paper, 0.6): 'transparent',
    borderBottom: trigger ? undefined : '1px solid #121212',
    transition: 'box-shadow ease-in 300ms, background ease-in 300ms, height ease-in 300ms, font-weight ease-in 300ms',
  }
})


export default function AppBar(props: AppBarProps): React.ReactElement {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return (<AppBarStyled {...props} elevation={trigger ? 4 : 0} />)
}
