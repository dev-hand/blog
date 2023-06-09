import React from 'react'
import styled from 'styled-components'
import { BoldText } from 'components/common/Text'
import { Column } from 'components/common/Layout'
import { FiMenu } from 'react-icons/fi'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'
import { PREFIX } from 'infra/config'

export const Menu: React.FC<{ onMenuClick: () => void }> = ({
  onMenuClick,
}) => {
  const router = useRouter()
  return (
    <Main>
      <FiMenu
        size={24}
        color={theme.color.white}
        style={{ cursor: 'pointer' }}
        onClick={onMenuClick}
      />
      <BoldText
        className={router.pathname === '/about' ? 'selected' : ''}
        onClick={() => router.push(`${PREFIX}/about/`)}
      >
        about
      </BoldText>
      <BoldText
        className={router.pathname === '/' ? 'selected' : ''}
        onClick={() => router.push(`${PREFIX}/`)}
      >
        blog
      </BoldText>
      <BoldText
        className={router.pathname === '/learn' ? 'selected' : ''}
        onClick={() => router.push(`${PREFIX}/learn/`)}
        // style={{ textDecoration: 'line-through', cursor: 'default' }}
      >
        learn
      </BoldText>
    </Main>
  )
}

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 20px;
  }
  z-index: 100;
  top: 0px;
  right: 0px;
  width: 100%;
  height: 100%;
  position: fixed;
  padding: 40px 80px;
  align-items: end;
  opacity: 0.9;
  gap: 40px;
  animation: menuFadeIn 600ms 1 ease;
  background-color: ${(p) => p.theme.color.background2};
  span {
    @media ${(p) => p.theme.media.mobile} {
      font-size: 82px;
    }
    font-size: 122px;
    color: ${(p) => p.theme.color.white};
    cursor: pointer;
    &.selected {
      color: ${(p) => p.theme.color.primary};
    }
  }
  @keyframes menuFadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 0.9;
    }
  }
`
