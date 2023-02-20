import 'styles/reset.css'
import 'styles/global.css'
import React, { Suspense } from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'infra/context'
import { prefix } from 'infra/config'
import { Audio } from 'components/common/Audio'

function MyApp({ Component, pageProps }: AppProps) {
  console.log(1)
  return (
    <>
      <Head>
        <title>Many things</title>
      </Head>
      <PortfolioProvider value={prefix}>
        <ThemeProvider theme={theme}>
          <Suspense>
            <Component {...pageProps} />
          </Suspense>
          <Audio />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
