import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { ExtraBoldText, H5Text } from 'components/common/Text'

const images = [
  '/images/item-16.jpeg',
  '/images/item-3.jpeg',
  '/images/item-15.jpeg',
  '/images/item-13.jpeg',
  '/images/item-14.jpeg',
  '/images/item-8.jpeg',
  '/images/item-2.jpeg',
  '/images/item-4.jpeg',
]

export const AboutPhotos: React.FC = () => {
  return (
    <Main>
      <TitleContainer>
        <MainText>Photos</MainText>
        <Column style={{ gap: 10 }}>
          <H5DescTitle>
            I like taking pictures. Because I can take pictures of the
            atmosphere that I see.
          </H5DescTitle>
          <H5DescTitle>
            I still lack a lot, but I took all the pictures on the site myself.
          </H5DescTitle>
        </Column>
      </TitleContainer>
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

const H5DescTitle = styled(H5Text)`
  font-weight: ${(p) => p.theme.weight.light};
`

const TitleContainer = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
    gap: 20px;
  }
  padding: 0 80px;
  gap: 40px;
`

const ImageContainer = styled(Grid)`
  @media ${(p) => p.theme.media.desktop} {
    grid-template-columns: repeat(4, 1fr);
    gap: 40px;
    padding: 0 80px;
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
`

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 50px 0 0;
  }
  padding: 50px 0;
  gap: 40px;
`
