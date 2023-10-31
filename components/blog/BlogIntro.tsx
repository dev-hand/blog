import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { Column, Row } from 'components/common/Layout'
import { ExtraBoldText, H1Text, H5Text } from 'components/common/Text'
import { PREFIX } from 'infra/config'
import { BlogTags } from 'components/blog/BlogTags'
import { FadeInFromHalf } from 'components/common/Keyframes'

export const BlogIntro: React.FC = () => (
  <Main>
    <IntroTitleContainer>
      <TitleWrapper>
        <UltraTitle className='ultraTitle'>{`Hi I'm Son`}</UltraTitle>
        <H1Title className='h1Title'>{`Home`}</H1Title>
      </TitleWrapper>
      <AboutTitleWrapper>
        <Column style={{ gap: 15 }}>
          <Column style={{ gap: 5 }}>
            <H5Title>Technical Blogs, Book Report and Memoirs.</H5Title>
            <H5Title>
              You can see{' '}
              <H5Text>
                <Link href={`${PREFIX}/about/`}>About Me.</Link>
              </H5Text>
            </H5Title>
          </Column>
          <BlogTags />
        </Column>
      </AboutTitleWrapper>
    </IntroTitleContainer>
  </Main>
)

const TitleWrapper = styled(Column)`
  flex: 1;
  .h1Title {
    animation: ${FadeInFromHalf} 2500ms 1 ease;
  }
  .ultraTitle {
    animation: ${FadeInFromHalf} 5000ms 1 ease;
  }
`

const H5Title = styled(H5Text)`
  font-weight: ${(p) => p.theme.weight.light};
`

const AboutTitleWrapper = styled(Column)`
  flex: 1;
  gap: 20px;
  animation: ${FadeInFromHalf} 7000ms 1 ease;
`

const IntroTitleContainer = styled(Row)`
  @media ${(p) => p.theme.media.desktop} {
    align-items: center;
  }
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
  }
  gap: 40px;
  justify-content: space-between;
`

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
  }
  padding: 0 80px;
  span {
    color: ${(p) => p.theme.color.white};
  }
  a {
    text-decoration: underline;
  }
`
const UltraTitle = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: 48px;
  }
  font-size: 58px;
`

const H1Title = styled(H1Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h2};
  }
`
