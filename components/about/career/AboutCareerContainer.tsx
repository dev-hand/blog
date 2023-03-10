import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { H1Text, DescText } from 'components/common/Text'

export const AboutCareerContainer: React.FC<{
  data: string[]
  title: string
}> = ({ data, title }) => {
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
    <Container height={data.length * 50} ref={observingTarget}>
      {isVisible && (
        <>
          <TitleWrapper>
            <H1Title>{title}</H1Title>
          </TitleWrapper>
          <ContentWrapper>
            {data.map((item) => (
              <H5Title key={item}>{item}</H5Title>
            ))}
          </ContentWrapper>
        </>
      )}
    </Container>
  )
}

const H5Title = styled(DescText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  white-space: pre-wrap;
  font-weight: ${(p) => p.theme.weight.regular};
  font-size: ${(p) => p.theme.size.h5};
  color: ${(p) => p.theme.color.gray3};

  @media ${(p) => p.theme.media.desktop} {
    @keyframes aboutContainerTextWrap {
      0% {
        white-space: nowrap;
      }
      100% {
        white-space: nowrap;
      }
    }
    animation: aboutContainerTextWrap 3000ms 1 ease-out;
  }
`

const H1Title = styled(H1Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h3};
  }
  font-weight: ${(p) => p.theme.weight.bold};
`

const Container = styled(Row)<{ height: number }>`
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
  @media ${(p) => p.theme.media.desktop} {
    height: ${(p) => p.height}px;
  }
  gap: 40px;
  position: relative;
`

const TitleWrapper = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    width: 400px;
    align-items: flex-start;
    justify-content: center;
    padding-left: 80px;
  }
`

const ContentWrapper = styled(Column)`
  flex: 1;
  gap: 20px;
  @media ${(p) => p.theme.media.desktop} {
    position: absolute;
    left: 400px;
    @keyframes aboutContainerFadeSlideLeft {
      0% {
        left: 1800px;
        opacity: 0;
      }
      40% {
        opacity: 0;
      }
      100% {
        left: 400px;
        opacity: 1;
      }
    }
    animation: aboutContainerFadeSlideLeft 3000ms 1;
  }
`
