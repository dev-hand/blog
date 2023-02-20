import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { PortfolioProvider } from 'infra/context'
import { prefix } from 'infra/config'

const Audio = dynamic(() => import('../components/common/Audio'), {
  ssr: false,
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Many things</title>
      </Head>
      <PortfolioProvider value={prefix}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
          <Audio />
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
