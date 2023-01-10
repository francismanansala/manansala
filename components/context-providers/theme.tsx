'use client'

import React, { useEffect, useState } from 'react'
import { ThemeProvider, createTheme, PaletteOptions } from '@mui/material/styles'
import { teal, grey } from '@mui/material/colors'
import { useTheme } from 'next-themes'

import RootStyleRegistry from './root-style-registry'
import { createColor } from '@/util/create-color'

const sharedPalette: PaletteOptions = {
  gitlabOrange: createColor('#e24329'),
  githubBlack: createColor('#161b22'),
  google: createColor('#1a73e8'),
  facebookBlue: createColor('#006aff'),
  whiteButton: createColor('#FFFFFF'),
}

/**
 * Pick colors from https://mui.com/material-ui/customization/color
 */
const lightTheme = createTheme({
  typography: {
    fontFamily: 'poppins, sans-serif',
  },
  palette: {
    mode: 'light',
    background: {
      default: grey[50],
      paper: grey[100],
    },
    primary: createColor(teal[400]),
    ...sharedPalette,
  },
})

const darkTheme = createTheme({
  typography: {
    fontFamily: 'poppins, sans-serif',
  },
  palette: {
    mode: 'dark',
    background: {
      default: grey[900],
      paper: grey[800],
    },
    primary: createColor(teal[300]),
    ...sharedPalette,
  },
})


export default function AppThemeProvider(props: { children: React.ReactNode }): React.ReactElement {
  const { resolvedTheme } = useTheme()
  const [muiTheme, setMuiTheme] = useState(lightTheme)
  
  useEffect(() => {
    setMuiTheme(resolvedTheme === 'light' ? lightTheme : darkTheme)
  }, [resolvedTheme])
  const { children } = props
  return <RootStyleRegistry>
    <ThemeProvider theme={muiTheme}>
      {children}
    </ThemeProvider>
  </RootStyleRegistry>
}