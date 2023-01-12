import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Column } from 'styles/components/common/layout'
import { AiOutlineArrowUp } from 'react-icons/ai'
import { theme } from 'styles/theme'

export const Float: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  useEffect(() => {
    setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleScroll = () => setScrollY(window.scrollY)

  return (
    <Main
      style={{ display: scrollY < 700 ? 'none' : '' }}
      onClick={() =>
        window.scroll({
          top: 0,
          left: 0,
          behavior: 'smooth',
        })
      }
    >
      <AiOutlineArrowUp size='24' />
    </Main>
  )
}

const Main = styled(Column)`
  z-index: 100;
  width: 55px;
  height: 55px;
  right: 40px;
  bottom: 40px;
  position: fixed;
  border-radius: 100%;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  box-shadow: 0px 2px 8px 0px #14141485;
  background-color: ${(p) => p.theme.color.white};
  cursor: pointer;
  @keyframes comeUpFloat {
    0% {
      opacity: 0;
      bottom: 0px;
    }
    100% {
      opacity: 1;
      bottom: 40px;
    }
  }
  animation: comeUpFloat 0.8s;
  :hover {
    background-color: ${(p) => p.theme.color.white}88;
  }
  :active {
    background-color: ${(p) => p.theme.color.white}00;
  }
`
