import React from 'react'
import styled from 'styled-components'
import { Column, Grid } from 'components/common/Layout'
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
              priority
            />
          </ImageWrapper>
        ))}
      </ImageContainer>
    </Container>
  )
}

const Container = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    padding: 60px;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`

const ImageContainer = styled(Grid)`
  @media ${(p) => p.theme.media.desktop} {
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
  }
  @media ${(p) => p.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`
