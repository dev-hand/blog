import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { Preview } from 'components/common/Preview'
import { contentFormat } from 'utils/format'
import Image from 'next/image'

export const AboutMySelf: React.FC<{ data: string }> = ({ data }) => {
  const content = contentFormat(data)
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={'/images/item-16.jpeg'}
          alt='image'
          width={0}
          height={0}
          layout='responsive'
          objectFit='cover'
          priority
        />
      </ImageWrapper>
      <PreviewContainer>
        <PreviewWrapper>
          <Preview source={content} />
        </PreviewWrapper>
      </PreviewContainer>
    </Container>
  )
}

const PreviewWrapper = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    padding: 60px 80px 0;
  }
  @media ${(p) => p.theme.media.mobile} {
    padding: 60px 0px 50px;
  }
`

const PreviewContainer = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
  }
  flex: 1;
`

const Container = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
  }
  background-color: ${(p) => p.theme.color.background1};
`

const ImageWrapper = styled.div`
  @media ${(p) => p.theme.media.desktop} {
    flex: 1;
    width: 100%;
    height: 100%;
  }
  overflow: hidden;
`
