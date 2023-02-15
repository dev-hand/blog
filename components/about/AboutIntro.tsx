import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { BackgroundImage } from 'components/common/Image'
import { DescText, H2Text } from 'components/common/Text'

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
        <IntroImage src='/images/universe.jpeg' />
      </ImageWrapper>
      <IntroContainer ref={observingTarget}>
        {isVisible && (
          <>
            <IntroTitleText>
              저의 블로그를 방문해주셔서 감사합니다.
            </IntroTitleText>
            <Column>
              <IntroSubText className='intro'>
                제 블로그 many things는 말 그대로 많은 것들을 저장하는
                공간입니다.
              </IntroSubText>
              <IntroSubText className='intro'>
                개발, 회고, 사진 등의 경험을 작성해두는 공간입니다.
              </IntroSubText>
              <IntroSubText className='intro'>
                개발은 저에게 취미이자 일이고 지금 보시는 사이트는 직접 코드로
                만들어 배포했습니다.
              </IntroSubText>
              <br />
              <IntroSubText className='howToWork'>
                지금까지 일을 하면서 프로젝트 성공을 위한 모든 과정에
                참여했습니다.
              </IntroSubText>
              <IntroSubText className='howToWork'>
                기획, 사용자의 니즈를 탐색하여 문제를 정의하고 솔루션을 기획으로
                만듭니다.
              </IntroSubText>
              <IntroSubText className='howToWork'>
                설계, 필요한 도구를 모으고 모델 설계와 개발 공수를 산정하여
                타임라인을 만듭니다.
              </IntroSubText>
              <IntroSubText className='howToWork'>
                디자인, 사용자 경험에 집중한 심플한 초기 모델을 디자인 합니다.
              </IntroSubText>
              <IntroSubText className='howToWork'>
                개발, 일관성있는 코드를 사용하고 종속성 낮추고 가독성/독립성
                높은 코드를 만듭니다.
              </IntroSubText>
              <IntroSubText className='howToWork'>
                테스트, 사용자 데이터를 측정해서 찾아낸 문제점 기반으로
                이터레이션 합니다.
              </IntroSubText>
            </Column>
          </>
        )}
      </IntroContainer>
    </Main>
  )
}

const IntroImage = styled(BackgroundImage)`
  @media ${(p) => p.theme.media.mobile} {
    height: 300px;
  }
  height: 800px;
  width: 100%;
`

const IntroTitleText = styled(H2Text)`
  @media ${(p) => p.theme.media.desktop} {
    padding: 0 80px;
  }
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h5};
  }
  color: ${(p) => p.theme.color.white};
  animation: introTitleTextFadeIn 3s 1 ease;
  @keyframes introTitleTextFadeIn {
    0% {
      opacity: 0;
    }
    30% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

const IntroSubText = styled(DescText)`
  @media ${(p) => p.theme.media.desktop} {
    padding: 0 80px;
    font-size: ${(p) => p.theme.size.h5};
  }
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  &.intro {
    animation: IntroSubTextFadeIn 5s 1 ease;
  }
  &.howToWork {
    animation: IntroSubTextFadeIn 10s 1 ease;
  }
  color: ${(p) => p.theme.color.white};
  @keyframes IntroSubTextFadeIn {
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
`

const Main = styled(Row)`
  @media ${(p) => p.theme.media.desktop} {
    height: 800px;
  }
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
  background-color: ${(p) => p.theme.color.background2};
`

const ImageWrapper = styled(Column)`
  flex: 1;
`

const IntroContainer = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 20px;
  }
  flex: 1;
  gap: 20px;
  padding: 40px 0;
`
