import React from 'react'
import {
  BackgroundContainer,
  BackgroundImage,
  BackgroundWrapper,
} from 'components/common/Image'
import { Column } from 'components/common/Layout'
import { DescText, H1Text } from 'components/common/Text'
import { theme } from 'styles/theme'

interface MainItemProps {
  url: string
  title: string
  subject: string
}

export const MainImage: React.FC<MainItemProps> = ({ url, title, subject }) => {
  return (
    <BackgroundContainer style={{ width: 660, height: 500 }}>
      <Column style={{ padding: 20, height: '100%', justifyContent: 'end' }}>
        <H1Text
          style={{
            zIndex: 1,
            color: theme.color.white,
            fontWeight: theme.weight.bold,
          }}
        >
          {title}
        </H1Text>
        <DescText style={{ color: theme.color.white, fontSize: theme.size.h3 }}>
          {subject}
        </DescText>
      </Column>
      <BackgroundWrapper>
        <BackgroundImage src={url} style={{ width: 660, height: 500 }} />
      </BackgroundWrapper>
    </BackgroundContainer>
  )
}
