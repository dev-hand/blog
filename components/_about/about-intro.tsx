import React from 'react'
import styled from 'styled-components'
import { Column, Grid, Row } from 'components/common/Layout'
import { H1Text, H4Text } from 'components/common/Text'
import { theme } from 'styles/theme'

export const AboutIntro: React.FC = () => {
  return (
    <Container>
      <MainText>숲을보는,</MainText>
      <TextContainer>
        <MainText>개발자.</MainText>
        <Grid style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
          <H4Text color={theme.color.white}>#캠핑</H4Text>
          <H4Text color={theme.color.white}>#운동</H4Text>
          <H4Text color={theme.color.white}>#코딩</H4Text>
          <H4Text color={theme.color.white}>#여행</H4Text>
          <H4Text color={theme.color.white}>#전시</H4Text>
          <H4Text color={theme.color.white}>#사진</H4Text>
        </Grid>
      </TextContainer>
    </Container>
  )
}

const TextContainer = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
    align-items: flex-start;
  }
  gap: 50px;
  align-items: center;
`

const Container = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    height: calc(100vh - 85px);
    align-items: center;
  }
  @media ${(p) => p.theme.media.mobile} {
    padding: 60px 20px;
    align-items: flex-start;
  }
  justify-content: center;
  background-color: ${(p) => p.theme.color.black};
`

const MainText = styled(H1Text)`
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.bold};
`
