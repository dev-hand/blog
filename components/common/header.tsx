import React from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/layout'
import { theme } from 'styles/theme'
import { FiMenu } from 'react-icons/fi'
import { H2Text } from 'components/common/text'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>Nostalgic.</HeaderText>
      <FiMenu size={32} color={theme.color.white} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Row)`
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.color.black};
`

const HeaderText = styled(H2Text)`
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.bold};
  cursor: pointer;
`
