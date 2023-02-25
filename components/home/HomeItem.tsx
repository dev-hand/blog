import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Column, Row } from 'components/common/Layout'
import { H5Text, SmallText } from 'components/common/Text'
import { layoutFormat, thumbnailFormat } from 'utils/format'
import { prefix } from 'infra/config'

export const HomeItem: React.FC<{ item: string }> = ({ item }) => {
  const title = layoutFormat('title', item)
  const date = layoutFormat('date', item)
  const thumbnail = thumbnailFormat(item)
  return (
    <Link href={`${prefix}/posts/${title}/`}>
      <Main>
        <div>
          <Image
            src={`/images/${thumbnail}`}
            alt={thumbnail}
            width={280}
            height={200}
            layout='responsive'
            priority
          />
        </div>
        <TitleWrapper>
          <H5Title>{title}</H5Title>
          <SmallTitle>{date}</SmallTitle>
        </TitleWrapper>
      </Main>
    </Link>
  )
}

const TitleWrapper = styled(Row)`
  justify-content: space-between;
  align-items: center;
`

const SmallTitle = styled(SmallText)`
  font-weight: ${(p) => p.theme.weight.light};
  color: ${(p) => p.theme.color.gray2};
`

const Main = styled(Column)`
  gap: 16px;
  transition: 500ms;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
  color: ${(p) => p.theme.color.white};
`

const H5Title = styled(H5Text)`
  font-weight: ${(p) => p.theme.weight.regular};
`
