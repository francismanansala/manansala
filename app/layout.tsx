import React from 'react'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import Providers from '@/components/theme-provider'
import ResponsiveAppBar from '@/components/app-bar'
import MainContainer from '@/components/main-container'

interface IProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: IProps): React.ReactElement => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <Providers>
          <ResponsiveAppBar />
          <MainContainer>
            {children}
          </MainContainer>
        </Providers>
      </body>
    </html>
  )
}

export default RootLayout