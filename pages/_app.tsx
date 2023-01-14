import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'infra/context'
import { prefix } from 'infra/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dev, note, daily</title>
        <meta name='description' content='dev, note, daily' />
        <link rel='icon' href={`${prefix}/images/icon.png`} />
      </Head>
      <PortfolioProvider value={prefix}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
