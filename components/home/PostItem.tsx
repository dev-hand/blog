import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Column } from 'components/common/Layout'
import { H5Text } from 'components/common/Text'
import { layoutFormat, thumbnailFormat } from 'utils/format'
import { prefix } from 'infra/config'

export const PostItem: React.FC<{ item: string }> = ({ item }) => {
  const title = layoutFormat('title', item)
  const thumbnail = thumbnailFormat(item)
  return (
    <Link href={`${prefix}/posts/${title}`}>
      <Main>
        <Image
          src={`/images/${thumbnail}`}
          alt={thumbnail}
          width={300}
          height={200}
          layout='responsive'
          objectFit='cover'
          priority
        />
        <H5Title>{title}</H5Title>
      </Main>
    </Link>
  )
}

const Main = styled(Column)`
  gap: 16px;
  transition: 500ms;
  cursor: pointer;
  :hover {
    opacity: 0.4;
  }
`

const H5Title = styled(H5Text)`
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.regular};
`
