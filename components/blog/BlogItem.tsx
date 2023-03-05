import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import Image from 'next/image'
import { Column, Row } from 'components/common/Layout'
import { H5Text, SmallText } from 'components/common/Text'
import { markdownLayoutFilter, getMarkdownThumbnail } from 'utils/format'
import { PREFIX, ROUTER_HISTORY_KEY } from 'infra/config'
import { getLocalStorage } from 'utils/handler'

const BlogItem: React.FC<{ item: string }> = ({ item }) => {
  const title = markdownLayoutFilter('title', item)
  const date = markdownLayoutFilter('date', item)
  const thumbnail = getMarkdownThumbnail(item)
  const history = Array.from(
    new Set(decodeURI(getLocalStorage(ROUTER_HISTORY_KEY) || '')?.split(',')),
  )
  const isViewed = history.includes(`/posts/${title}/`)
  return (
    <Link href={`${PREFIX}/posts/${title}/`}>
      <Main>
        <ImageWrapper isViewed={isViewed}>
          <Image
            src={`/images/${thumbnail}`}
            alt={thumbnail}
            width={280}
            height={200}
            layout='responsive'
            priority
          />
        </ImageWrapper>
        <TitleWrapper isViewed={isViewed}>
          <H5Title>{title}</H5Title>
          <SmallTitle>{date}</SmallTitle>
        </TitleWrapper>
      </Main>
    </Link>
  )
}

const ImageWrapper = styled.div<{ isViewed: boolean }>`
  opacity: ${(p) => (p.isViewed ? 0.4 : 1)};
`

const TitleWrapper = styled(Row)<{ isViewed: boolean }>`
  justify-content: space-between;
  align-items: center;
  opacity: ${(p) => (p.isViewed ? 0.4 : 1)};
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

export default BlogItem
