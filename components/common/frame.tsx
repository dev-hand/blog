import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/layout'
import { Header } from 'components/common/header'
import { Footer } from 'components/common/footer'

export const Frame: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => (
  <Main>
    <Header />
    {children}
    <Footer />
  </Main>
)

const Main = styled(Column)`
  min-height: 100vh;
  @keyframes frameFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: frameFadeIn 1s 1 ease;
`
