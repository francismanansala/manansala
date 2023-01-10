'use client'

import React from 'react'
import AppThemeProvider from './theme'
import { ApolloProvider } from '@apollo/client'
import { SessionProvider } from 'next-auth/react'
import client from '@/lib/apollo-client'
import { ThemeProvider } from 'next-themes'


export default function Providers(props: { children: React.ReactNode }): React.ReactElement {
  const { children } = props
  return  <ThemeProvider>
    <AppThemeProvider>
      <ApolloProvider client={client}>
        <SessionProvider>
          {children}
        </SessionProvider>
      </ApolloProvider>
    </AppThemeProvider>
  </ThemeProvider>
}