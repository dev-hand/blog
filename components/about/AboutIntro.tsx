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
        <IntroWrapper>
          {isVisible && (
            <>
              <IntroTitleText>Welcome!</IntroTitleText>
              <Column>
                <IntroSubText className='one'>
                  {`My blog is a space that contains a lot of things.`}
                </IntroSubText>
                <IntroSubText className='one'>
                  {`You can check development, retrospect, hobbies, etc.`}
                </IntroSubText>
                <br />
                <IntroSubText className='two'>
                  {`I've participated in all the processes for project success while working so far.`}
                </IntroSubText>
                <br />
                <IntroSubText className='three'>
                  {`Planning, Explore users' needs, define problems, and create solutions.`}
                </IntroSubText>
                <IntroSubText className='three'>
                  {`Design, Gather the necessary tools and calculate the design and development man-hours of the model to create a timeline.`}
                </IntroSubText>
                <IntroSubText className='three'>
                  {`Design, Design simple early models that focus on user experience.`}
                </IntroSubText>
                <IntroSubText className='three'>
                  {`Development, Use consistent code, reduce dependencies, and create highly readable and independent code.`}
                </IntroSubText>
                <IntroSubText className='three'>
                  {`Test, repeat based on the problem found by measuring the user's data..`}
                </IntroSubText>
              </Column>
            </>
          )}
        </IntroWrapper>
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
  &.one {
    animation: IntroSubTextFadeIn 5s 1 ease;
  }
  &.two {
    animation: IntroSubTextFadeIn 8s 1 ease;
  }
  &.three {
    animation: IntroSubTextFadeIn 11s 1 ease;
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
    min-height: 800px;
  }
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
  }
  background-color: ${(p) => p.theme.color.background2};
`

const ImageWrapper = styled(Column)`
  flex: 1;
`

const IntroContainer = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px 20px;
  }
  flex: 1;
  padding: 40px 0;
`
