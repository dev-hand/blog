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
      <a
        href='https://github.com/made-by-sean'
        target='_blank'
        rel='noreferrer'
      >
        <FooterText>Github</FooterText>
      </a>
      <a
        href='https://www.notion.so/made-by-sean/85ae96c1bfd54adf920e45d44e71560c?pvs=4'
        target='_blank'
        rel='noreferrer'
      >
        <FooterText>Resume</FooterText>
      </a>
      <FooterText className='date'>made by sean</FooterText>
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
