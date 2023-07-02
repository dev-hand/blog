import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { DescText, H2Text } from 'components/common/Text'
import { FadeInFromHalf } from 'components/common/Keyframes'

export const AboutIntro: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const observingTarget = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!observingTarget.current) return
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !isVisible) setIsVisible(true)
    })
    observer.observe(observingTarget.current)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Main>
      <ImageWrapper>
        <IntroImage src='/images/item-20.jpeg' />
      </ImageWrapper>
      <IntroContainer ref={observingTarget}>
        {isVisible && (
          <IntroWrapper>
            <IntroTitleText>시작부터 끝까지!</IntroTitleText>
            <Column>
              <IntroSubText className='one'>
                {`지금까지 일하면서 프로젝트 성공을 위한 모든 과정을 함께했습니다.`}
              </IntroSubText>
              <br />
              <IntroSubText className='two'>
                {`기획, 사용자의 요구사항을 탐색하고, 문제현상을 정의하여 솔루션을 정합니다.`}
              </IntroSubText>
              <br />
              <IntroSubText className='three'>
                {`설계, 필요한 도구들을 수집하고 모델의 설계와 개발 공수를 측정하여 타임라인을 구축합니다.`}
              </IntroSubText>
              <br />
              <IntroSubText className='four'>
                {`디자인, 사용자 경험에 집중한 심플한 초기 모델을 디자인합니다.`}
              </IntroSubText>
              <br />
              <IntroSubText className='five'>
                {`개발, 애자일 방법을 추구합니다.\n커뮤니케이션과 PR문화를 중요하게 생각합니다.\n일관된 코드를 사용하고, 읽기 쉬운 코드를 짜기위해 고민합니다.`}
              </IntroSubText>
              <br />
              <IntroSubText className='six'>
                {`테스트, 배포 후 사용자 데이터를 측정하여 발견된 문제 현상을 기반으로 기획을 반복합니다.`}
              </IntroSubText>
            </Column>
          </IntroWrapper>
        )}
      </IntroContainer>
    </Main>
  )
}

const IntroWrapper = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    width: 400px;
    margin: auto;
  }
  @media ${(p) => p.theme.media.mobile} {
    align-items: 'center';
  }
  gap: 20px;
`

const IntroImage = styled(BackgroundImage)`
  @media ${(p) => p.theme.media.mobile} {
    min-height: 300px;
  }
  height: 100%;
  width: 100%;
`

const IntroTitleText = styled(H2Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h5};
  }
  color: ${(p) => p.theme.color.white};
  animation: introTitleTextFadeIn 3s 1 ease;
  @keyframes introTitleTextFadeIn {
    0% {
      opacity: 0;
    }
    10% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const IntroSubText = styled(DescText)`
  @media ${(p) => p.theme.media.desktop} {
    font-size: ${(p) => p.theme.size.h5};
  }
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  color: ${(p) => p.theme.color.white};
  @keyframes FadeInOne {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes FadeInSix {
    0% {
      opacity: 0;
    }
    70% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  &.one {
    animation: FadeInOne 3000ms 1 ease;
  }
  &.two {
    animation: ${FadeInFromHalf} 5000ms 1 ease;
  }
  &.three {
    animation: ${FadeInFromHalf} 7000ms 1 ease;
  }
  &.four {
    animation: FadeInSix 6500ms 1 ease;
  }
  &.five {
    animation: FadeInSix 8000ms 1 ease;
  }
  &.six {
    animation: FadeInSix 9500ms 1 ease;
  }
`

const Main = styled(Row)`
  @media ${(p) => p.theme.media.desktop} {
    min-height: 800px;
  }
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
  }
`

const ImageWrapper = styled(Column)`
  flex: 1;
`

const IntroContainer = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px 20px;
  }
  flex: 1;
  min-height: 500px;
  padding: 40px 0;
  background-color: ${(p) => p.theme.color.background2};
`
