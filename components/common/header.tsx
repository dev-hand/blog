import React from 'react'
import styled from 'styled-components'
import { Row } from 'components/common/layout'
import { FiMenu } from 'react-icons/fi'
import { H4Text } from 'components/common/text'

export const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderText>Many things</HeaderText>
      <FiMenu size={24} style={{ cursor: 'pointer' }} />
    </HeaderContainer>
  )
}

const HeaderContainer = styled(Row)`
  padding: 40px 80px;
  align-items: center;
  justify-content: space-between;
`

const HeaderText = styled(H4Text)`
  font-weight: ${(p) => p.theme.weight.bold};
`
