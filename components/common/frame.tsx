import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { Header } from 'components/common/Header'
import { Footer } from 'components/common/Footer'

export const Frame: React.FC<{
  children: React.ReactNode
  backgroundColor?: 'white' | 'black'
}> = ({ children, backgroundColor = 'white' }) => (
  <Main backgroundColor={backgroundColor}>
    <Header backgroundColor={backgroundColor} />
    {children}
    <Footer backgroundColor={backgroundColor} />
  </Main>
)

const Main = styled(Column)<{ backgroundColor: 'white' | 'black' }>`
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
  background-color: ${(p) =>
    p.backgroundColor === 'white'
      ? p.theme.color.white
      : p.theme.color.background2};
`
