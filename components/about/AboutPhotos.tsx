import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { Column, Grid } from 'components/common/Layout'
import { DescText, ExtraBoldText } from 'components/common/Text'

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
        <H5DescTitle>
          {`제가 느끼는 시선의 분위기를 사진으로 남기는 것을 좋아합니다.\n아직 부족한 부분이 많지만 사이트에 있는 사진은 모두 제가 직접 찍었습니다.`}
        </H5DescTitle>
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

const H5DescTitle = styled(DescText)`
  @media ${(p) => p.theme.media.mobile} {
    white-space: normal;
  }
  font-weight: ${(p) => p.theme.weight.light};
  font-size: ${(p) => p.theme.size.h5};
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
