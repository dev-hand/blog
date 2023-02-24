import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { ExtraBoldText } from 'components/common/Text'
import { FiLoader } from 'react-icons/fi'
import { prefix } from 'infra/config'

export const AboutMain: React.FC = () => (
  <Main>
    <Container>
      <HeaderWrapper>
        <HeaderText>
          Simplicity <span className='desktop'>is the</span>
        </HeaderText>
        <LoadingIcon />
      </HeaderWrapper>
      <HeaderText>
        <span className='mobile'>is the</span>
      </HeaderText>
      <BottomWrapper>
        <HeaderText>Ultimate Sophistication</HeaderText>
      </BottomWrapper>
    </Container>
  </Main>
)

const BottomWrapper = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
  }
  gap: 20px;
`

const Container = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    top: 100px;
    animation: mobileAboutMainFadeIn 2s 1 ease;
  }
  top: 200px;
  position: absolute;
  animation: aboutMainFadeIn 2s 1 ease;
  @keyframes aboutMainFadeIn {
    0% {
      top: 300px;
      opacity: 0;
    }
    20% {
      top: 300px;
      opacity: 0;
    }
    100% {
      top: 200px;
      opacity: 1;
    }
  }
  @keyframes mobileAboutMainFadeIn {
    0% {
      top: 200px;
      opacity: 0;
    }
    20% {
      top: 200px;
      opacity: 0;
    }
    100% {
      top: 100px;
      opacity: 1;
    }
  }
`

const HeaderWrapper = styled(Row)`
  gap: 10px;
  align-items: flex-start;
`

const LoadingIcon = styled(FiLoader).attrs({ size: 24 })`
  @keyframes loadingIconSpin {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: loadingIconSpin infinite 1.5s linear;
`

const Main = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
    height: 450px;
  }
  height: 700px;
  position: relative;
  align-items: center;
  padding: 0 80px;
`

const HeaderText = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h1};
    .desktop {
      display: none;
    }
  }
  @media ${(p) => p.theme.media.desktop} {
    background: url(${prefix + '/images/item-19.jpg'});
    background-size: cover;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    .mobile {
      display: none;
    }
  }
  font-size: 102px;
`
