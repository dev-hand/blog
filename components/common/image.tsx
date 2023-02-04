import styled from 'styled-components'
import { prefix } from 'infra/config'
import { Column } from 'components/common/layout'

export const BackgroundContainer = styled(Column)`
  :hover .backgroundWrapper {
    opacity: 0.2;
  }
  background-color: ${(p) => p.theme.color.black};
`

export const BackgroundWrapper = styled(Column).attrs(() => ({
  className: 'backgroundWrapper',
}))`
  position: absolute;
  opacity: 0.6;
  transition: 0.5s;
  cursor: pointer;
`

export const BackgroundImage = styled.div<{ src: string }>`
  background-image: url(${(p) => prefix + p.src});
  background-size: cover;
  background-position: center;
`
