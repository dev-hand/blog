import 'styles/reset.css'
import 'styles/global.css'
import React from 'react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { theme } from 'styles/theme'
import { BackgroundImage } from 'styles/components/home/image'
import { PortfolioProvider } from 'infra/context'
import { prefix } from 'infra/config'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>dev, note, daily</title>
        <meta name='description' content='eow' />
        <link rel='icon' href={`${prefix}/images/profile.png`} />
      </Head>
      <PortfolioProvider value={prefix}>
        <ThemeProvider theme={theme}>
          <BackgroundImage
            url='/images/black-cover-1.jpeg'
            style={{ backgroundSize: 'contain' }}
          >
            <Component {...pageProps} />
          </BackgroundImage>
        </ThemeProvider>
      </PortfolioProvider>
    </>
  )
}

export default MyApp
