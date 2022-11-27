'use client'

import React from 'react'
import { ThemeProvider, createTheme, Palette, ThemeOptions } from '@mui/material/styles'
import { grey } from '@mui/material/colors'
import { NextAppDirEmotionCacheProvider } from 'tss-react/next'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import client from '@/lib/apollo-client'

const getDesignTokens = (mode: Palette['mode']): ThemeOptions => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // primary: {
        //   main: '#0a1929',
        // },
        background: {
          default: grey[100],
        },
      }
      : { // dark mode
        text: {
          primary: '#fff',
          secondary: grey[500],
        },
      }),
  },
})

const innerTheme = createTheme(getDesignTokens('light'))

export default function AppThemeProvider(props: { children: React.ReactNode }): React.ReactElement {
  const { children } = props
  return <>
    <NextAppDirEmotionCacheProvider options={{ key: 'css' }}>
      <ThemeProvider theme={innerTheme}>
        <ApolloProvider client={client}>
          <SessionProvider>
            {children}
          </SessionProvider>
        </ApolloProvider>
      </ThemeProvider>
    </NextAppDirEmotionCacheProvider>
  </>
}