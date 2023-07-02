import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'infra/context'
import { PREFIX } from 'infra/config'
import { Audio } from 'components/common/Audio'
import { analytics } from 'infra/analytics'

const MyApp = ({ Component, pageProps }: AppProps) => {
  analytics.init()
  return (
    <>
      <Head>
        <title>Many things</title>
      </Head>
      <PortfolioProvider value={PREFIX}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Audio />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
