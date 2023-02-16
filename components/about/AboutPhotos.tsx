import React from 'react'
import styled from 'styled-components'
import { Column, Grid } from 'components/common/Layout'
import { ExtraBoldText } from 'components/common/Text'
import Image from 'next/image'

const images = [
  '/images/item-16.jpeg',
  '/images/item-3.jpeg',
  '/images/item-15.jpeg',
  '/images/item-13.jpeg',
  '/images/item-14.jpeg',
  '/images/item-9.jpeg',
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
  background: linear-gradient(
      217deg,
      rgba(255, 0, 0, 0.8),
      rgba(255, 0, 0, 0) 70.71%
    ),
    linear-gradient(127deg, rgba(0, 255, 0, 0.8), rgba(0, 255, 0, 0) 70.71%),
    linear-gradient(336deg, rgba(0, 0, 255, 0.8), rgba(0, 0, 255, 0) 70.71%);
`
