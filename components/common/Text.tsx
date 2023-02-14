import styled from 'styled-components'
import { theme } from 'styles/theme'

const common = {
  'font-style': 'normal',
  'font-size': theme.size.default,
  'line-height': '1',
  'white-space': 'pre-wrap',
}

export const BaseText = styled.span<{
  color?: string
}>`
  ${common}
  ${(p) => p.color && `color: ${p.color};`}
  font-weight: ${(p) => p.theme.weight.medium};
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
