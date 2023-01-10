import React from 'react'
import '@fontsource/poppins/300.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import '@fontsource/poppins/700.css'

import Providers from '@/components/context-providers'
import ResponsiveAppBar from '@/components/nav-bar'
import MainContainer from '@/components/main-container'
import Footer from './footer'

interface IProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IProps): React.ReactElement => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
        <Providers>
          <ResponsiveAppBar />
          <MainContainer>
            {children}
          </MainContainer>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout