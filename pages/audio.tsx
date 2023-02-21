import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { H2Text } from 'components/common/Text'
import { NextPage } from 'next'

const Audio: NextPage = () => (
  <Main>
    <H2Title>
      {`깃허브 페이지는\nSSR을 지원하지 않아서\n음성 스트리밍을 유지할 수 없습니다.`}
    </H2Title>
    <H2Title>새로 열린 탭으로 봐주세요.</H2Title>
  </Main>
)

const H2Title = styled(H2Text)`
  @media ${(p) => p.theme.media.desktop} {
    white-space: normal;
  }
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h4};
  }
`
const Main = styled(Column)`
  height: 100vh;
  padding: 20px;
  gap: 10px;
  text-align: center;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) => p.theme.color.background2};
`
export default Audio
