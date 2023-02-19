import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { Header } from 'components/common/Header'
import { Footer } from 'components/common/Footer'
import { Float } from 'components/common/Float'
import { ThemeColor } from 'infra/type'

export const Frame: React.FC<{
  children: React.ReactNode
  backgroundColor?: ThemeColor
}> = ({ children, backgroundColor = ThemeColor.W }) => {
  return (
    <Main backgroundColor={backgroundColor}>
      <Header backgroundColor={backgroundColor} />
      {children}
      <Footer />
      <Float />
    </Main>
  )
}

const Main = styled(Column)<{ backgroundColor: ThemeColor }>`
  min-height: 100vh;
  animation: frameFadeIn 2000ms 1 ease;
  background-color: ${(p) => p.theme.color[p.backgroundColor]};
  @keyframes frameFadeIn {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
