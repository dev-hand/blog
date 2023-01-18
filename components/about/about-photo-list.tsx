import React from 'react'
import styled from 'styled-components'
import { Column, Grid } from 'components/common/layout'
import Image from 'next/image'

const images = [
  '/images/item-1.jpeg',
  '/images/item-2.jpeg',
  '/images/item-3.jpeg',
  '/images/item-4.jpeg',
  '/images/item-5.jpeg',
  '/images/item-6.jpeg',
]
export const AboutPhotoList: React.FC = () => {
  return (
    <Container>
      <ImageContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <Image
              src={image}
              alt='image'
              width={0}
              height={0}
              layout='responsive'
              objectFit='cover'
            />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </Container>
  )
}

const Container = styled(Column)`
  ${(p) => p.theme.media.desktop} {
    padding: 60px;
  }
  background-color: ${(p) => p.theme.color.primary};
`

const ImageWrapper = styled(Column)`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageContainer = styled(Grid)`
  ${(p) => p.theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  ${(p) => p.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
