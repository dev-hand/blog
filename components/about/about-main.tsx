import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/layout'
import { ExtraBoldText, H4Text } from 'components/common/text'
import { FiLoader } from 'react-icons/fi'

export const AboutMain: React.FC = () => {
  return (
    <Main>
      <Column>
        <HeaderWrapper>
          <HeaderText>Flexible Developer</HeaderText>
          <LoadingIcon />
        </HeaderWrapper>
        <Row>
          <HeaderText>In Korea.</HeaderText>
          <HashTagContainer>
            <HashTagContent>
              <HashTagText>#NextJS</HashTagText>
              <HashTagText>#SWR</HashTagText>
              <HashTagText>#MobX</HashTagText>
            </HashTagContent>
            <HashTagContent>
              <HashTagText>#NodeJS</HashTagText>
              <HashTagText>#Prisma</HashTagText>
              <HashTagText>#MySQL</HashTagText>
            </HashTagContent>
          </HashTagContainer>
        </Row>
      </Column>
    </Main>
  )
}

const HeaderWrapper = styled(Row)`
  gap: 10px;
`
const HashTagContent = styled(Column)`
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
  animation: spin infinite 2s ease-in-out;
`

const Main = styled(Row)`
  height: 600px;
  align-items: center;
  padding: 0 80px;
`

const HashTagContainer = styled(Row)`
  padding-top: 50px;
  padding-left: 50px;
  gap: 20px;
`

const HashTagText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
`

const HeaderText = styled(ExtraBoldText)`
  font-size: 4.5rem;
`
