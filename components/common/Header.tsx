import React, { useState } from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/Layout'
import { FiMenu } from 'react-icons/fi'
import { H4Text } from 'components/common/Text'
import { Menu } from 'components/common/Menu'
import { theme } from 'styles/theme'
import { useRouter } from 'next/router'
import { prefix } from 'infra/config'

export const Header: React.FC<{ backgroundColor: 'white' | 'black' }> = ({
  backgroundColor,
}) => {
  const router = useRouter()
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <Main backgroundColor={backgroundColor}>
      <HeaderText onClick={() => router.push(`${prefix}/`)}>
        Many things
      </HeaderText>
      <FiMenu
        size={24}
        color={
          backgroundColor === 'white' ? theme.color.black : theme.color.white
        }
        style={{ cursor: 'pointer' }}
        onClick={() => setOpenMenu(true)}
      />
      {openMenu && <Menu onMenuClick={() => setOpenMenu(false)} />}
    </Main>
  )
}

const Main = styled(Row)<{ backgroundColor: 'white' | 'black' }>`
  @media ${(p) => p.theme.media.mobile} {
    padding: 20px;
  }
  ${(p) =>
    p.backgroundColor === 'black' &&
    `background: linear-gradient(0.25turn, #e66465, #9198e5);`}
  padding: 40px 80px;
  align-items: center;
  justify-content: space-between;
  span {
    ${(p) => p.backgroundColor === 'black' && `color: ${p.theme.color.white};`}
  }
`

const HeaderText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
  cursor: pointer;
`
