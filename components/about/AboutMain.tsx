import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { ExtraBoldText, H5Text } from 'components/common/Text'
import { FiLoader } from 'react-icons/fi'
import { prefix } from 'infra/config'

export const AboutMain: React.FC = () => (
  <Main>
    <Container>
      <HeaderWrapper>
        <HeaderText>Flexible Developer</HeaderText>
        <LoadingIcon />
      </HeaderWrapper>
      <Row>
        <HeaderText>In Korea.</HeaderText>
        <HashTagContainer>
          <HashTagContent>
            <HashTagText>#Typescript</HashTagText>
            <HashTagText>#NextJS</HashTagText>
            <HashTagText>#MobX</HashTagText>
            <HashTagText>#SWR</HashTagText>
            <HashTagText>#ReactNative</HashTagText>
          </HashTagContent>
          <HashTagContent>
            <HashTagText>#NodeJS</HashTagText>
            <HashTagText>#Prisma</HashTagText>
            <HashTagText>#MySQL</HashTagText>
            <HashTagText>#MongoDB</HashTagText>
            <HashTagText>#AWS</HashTagText>
          </HashTagContent>
          <HashTagContent>
            <HashTagText>#StyledComponent</HashTagText>
            <HashTagText>#SCSS</HashTagText>
            <HashTagText>#Figma</HashTagText>
            <HashTagText>#Notion</HashTagText>
          </HashTagContent>
        </HashTagContainer>
      </Row>
    </Container>
  </Main>
)

const Container = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    top: 150px;
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
      top: 250px;
      opacity: 0;
    }
    20% {
      top: 250px;
      opacity: 0;
    }
    100% {
      top: 150px;
      opacity: 1;
    }
  }
`

const HeaderWrapper = styled(Row)`
  gap: 10px;
`

const HashTagContent = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    :nth-child(3) {
      display: none;
    }
  }
  gap: 10px;
`

const LoadingIcon = styled(FiLoader).attrs({ size: 24 })`
  @keyframes spin {
    0% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  animation: spin infinite 1.5s linear;
`

const Main = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 40px;
    height: 450px;
  }
  height: 700px;
  position: relative;
  align-items: center;
  padding: 0 80px;
`

const HashTagContainer = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    padding-top: 20px;
    padding-left: 20px;
    gap: 20px;
  }
  padding-top: 50px;
  padding-left: 50px;
  gap: 40px;
`

const HashTagText = styled(H5Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.small};
  }
  font-weight: ${(p) => p.theme.weight.bold};
`

const HeaderText = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h2};
  }
  font-size: 102px;
  background: url(${prefix + '/images/universe.jpeg'});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`
