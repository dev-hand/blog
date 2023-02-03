import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Row } from 'components/common/layout'

export const AboutIntro: React.FC = () => {
  return (
    <Main>
      <ImageContainer>
        <Image
          src='/images/item-1.jpeg'
          width={729}
          height={800}
          alt='universe'
        />
      </ImageContainer>
      <IntroContainer></IntroContainer>
    </Main>
  )
}

const Main = styled(Row)`
  height: 800px;
`

const ImageContainer = styled(Column)`
  flex: 1;
`
const IntroContainer = styled(Column)`
  flex: 1;
  padding: 40px 80px;
  background-color: ${(p) => p.theme.color.black};
`
