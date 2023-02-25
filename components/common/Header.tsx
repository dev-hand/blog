import React, { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/Layout'
import { FiMenu } from 'react-icons/fi'
import { H4Text } from 'components/common/Text'
import { Menu } from 'components/common/Menu'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'
import { PREFIX } from 'infra/config'
import { ThemeColor } from 'infra/type'

export const Header: React.FC<{ backgroundColor: ThemeColor }> = ({
  backgroundColor,
}) => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Main backgroundColor={backgroundColor}>
      <HeaderText onClick={() => router.push(`${PREFIX}/`)}>
        Many things
      </HeaderText>
      <FiMenu
        size={24}
        color={
          backgroundColor === ThemeColor.W || backgroundColor === ThemeColor.B1
            ? theme.color.black
            : theme.color.white
        }
        style={{ cursor: 'pointer' }}
        onClick={() => setOpenMenu(true)}
      />
      {openMenu && <Menu onMenuClick={() => setOpenMenu(false)} />}
    </Main>
  )
}

const Main = styled(Row)<{ backgroundColor: ThemeColor }>`
  @media ${(p) => p.theme.media.mobile} {
    padding: 20px;
  }
  z-index: 100;
  padding: 40px 80px;
  align-items: center;
  justify-content: space-between;
  span {
    ${(p) =>
      p.backgroundColor === ThemeColor.B2 && `color: ${p.theme.color.white};`}
  }
`

const HeaderText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
  cursor: pointer;
`
