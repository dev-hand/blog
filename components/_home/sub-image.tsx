import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'components/common/Image'
import { Column } from 'components/common/Layout'
import { DescText, H2Text } from 'components/common/Text'
import { theme } from 'styles/theme'

interface SubItemProps {
  url: string
  title: string
  subject: string
}

export const SubImage: React.FC<SubItemProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 400, height: 250 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <H2Text
          style={{
            zIndex: 1,
            color: theme.color.white,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </H2Text>
        <DescText style={{ color: theme.color.white, fontSize: theme.size.h5 }}>
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage src={url} style={{ width: 400, height: 250 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}
