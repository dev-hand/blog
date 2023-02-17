import React from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/Layout'
import { BoldText } from 'components/common/Text'

export const Footer: React.FC = () => {
  return (
    <Main>
      <FooterText>Contact By</FooterText>
      <FooterText>Resume</FooterText>
      <FooterText>Velog</FooterText>
      <FooterText>Email</FooterText>
      <FooterText className='date'>@2023</FooterText>
    </Main>
  )
}

const FooterText = styled(BoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.small};
  }
  &.date {
    @media ${(p) => p.theme.media.desktop} {
      flex: 1;
      text-align: end;
    }
    font-weight: ${(p) => p.theme.weight.light};
  }
`

const Main = styled(Row)`
  @media ${(p) => p.theme.media.desktop} {
    gap: 100px;
  }
  @media ${(p) => p.theme.media.mobile} {
    justify-content: space-between;
    padding: 0 20px;
  }
  height: 80px;
  align-items: center;
  padding: 0 80px;
  background-color: ${(p) => p.theme.color.white};
`
