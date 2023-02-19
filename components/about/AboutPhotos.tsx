import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { ExtraBoldText } from 'components/common/Text'

const images = [
  '/images/item-16.jpeg',
  '/images/item-3.jpeg',
  '/images/item-15.jpeg',
  '/images/item-13.jpeg',
  '/images/item-14.jpeg',
  '/images/item-9.jpeg',
  '/images/item-2.jpeg',
  '/images/item-4.jpeg',
]

export const AboutPhotos: React.FC = () => {
  return (
    <Main>
      <MainText>My Photos</MainText>
      <ImageContainer>
        {images.map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={src}
            width={300}
            height={400}
            layout='responsive'
            objectFit='cover'
            priority
          />
        ))}
      </ImageContainer>
    </Main>
  )
}

const ImageContainer = styled(Grid)`
  @media ${(p) => p.theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 0 40px;
  }
  @media ${(p) => p.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`

const MainText = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: 32px;
  }
  font-size: 72px;
  text-align: center;
`

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 50px 0 0;
  }
  padding: 50px 0;
  gap: 40px;
  background-color: ${(p) => p.theme.color.white};
`
