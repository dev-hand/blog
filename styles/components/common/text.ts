import styled from 'styled-components'
import { theme } from 'styles/theme'

const common = {
  color: '#24273a',
  'font-size': theme.size.default,
  'white-space': 'pre-wrap',
}

enum FontFamilyType {
  P = 'Pretendard Variable',
  L = "'Libre Bodoni', serif",
}

export const BaseText = styled.span<{
  fontFamily?: 'P' | 'L'
  color?: string
}>`
  ${common}
  ${(p) => p.color && `color: ${p.color};`}
  font-weight: ${(p) => p.theme.weight.medium};
  font-family: ${(p) =>
    p.fontFamily ? FontFamilyType[p.fontFamily] : FontFamilyType.P};
`

export const DescText = styled.p`
  ${common}
  font-weight: ${(p) => p.theme.weight.regular};
  line-height: 1.8;
`

export const LightText = styled(BaseText)`
  font-weight: ${(p) => p.theme.weight.light};
`

export const RegularText = styled(BaseText)`
  font-weight: ${(p) => p.theme.weight.regular};
`

export const SemiBoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.weight.semiBold};
`

export const BoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.weight.bold};
`

export const ExtraBoldText = styled(BaseText)`
  font-weight: ${(p) => p.theme.weight.extraBold};
`

export const SmallText = styled(BaseText)`
  font-size: ${(p) => p.theme.size.small};
`

export const LargeText = styled(BaseText)`
  font-size: ${(p) => p.theme.size.large};
`

export const H1Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h1};
`

export const H2Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h2};
`

export const H3Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h3};
`

export const H4Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h4};
`

export const H5Text = styled(BaseText)`
  font-size: ${(p) => p.theme.size.h5};
`
