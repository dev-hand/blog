import React from 'react'
import styled from 'styled-components'
import { Column } from 'components/common/Layout'
import { FadeIn } from './Keyframes'

export const Modal: React.FC<{
  children: React.ReactNode
  isVisible: boolean
  onClose?: () => void
  disableBackgroundClose?: boolean
}> = ({ children, isVisible, onClose, disableBackgroundClose }) => (
  <Background
    isVisible={isVisible}
    onClick={(e) => {
      if (!disableBackgroundClose) {
        e.stopPropagation()
        onClose?.()
      }
    }}
  >
    <Main>{children}</Main>
  </Background>
)

const Main = styled(Column)`
  height: 100%;
  justify-content: center;
  align-items: center;
  animation: ${FadeIn} 2500ms 1 ease;
`

const Background = styled.div<{ isVisible: boolean }>`
  display: ${(p) => (p.isVisible ? 'block' : 'none')};
  z-index: 100;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: ${(p) => p.theme.color.background2}e3;
`
