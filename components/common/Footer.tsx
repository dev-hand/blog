import React from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/Layout'
import { BoldText } from 'components/common/Text'
import { ThemeColor } from 'infra/type'

export const Footer: React.FC<{ backgroundColor: ThemeColor }> = ({
  backgroundColor,
}) => {
  return (
    <Main backgroundColor={backgroundColor}>
      <FooterText>Contact By</FooterText>
      <FooterText>Resume</FooterText>
      <FooterText>Velog</FooterText>
      <FooterText>Email</FooterText>
      <FooterText className='date'>@DevShon</FooterText>
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

const Main = styled(Row)<{ backgroundColor: ThemeColor }>`
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
  color: ${(p) => p.theme.color.white};
  background-color: ${(p) =>
    p.backgroundColor === ThemeColor.W
      ? p.theme.color.white
      : p.theme.color.primary};
  span {
    ${(p) =>
      p.backgroundColor === ThemeColor.W && `color: ${p.theme.color.black}`}
  }
`
