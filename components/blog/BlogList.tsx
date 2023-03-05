import React from 'react'
import styled from 'styled-components'
import dynamic from 'next/dynamic'
import { Grid, Row } from 'components/common/Layout'

const BlogItem = dynamic(() => import('./BlogItem'), {
  ssr: false,
})

export const BlogList: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Main>
      <PostContainer>
        {data.map((item, index) => (
          <BlogItem key={index} item={item} />
        ))}
      </PostContainer>
    </Main>
  )
}

const Main = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 0 20px;
  }
  padding: 0 80px;
`

const PostContainer = styled(Grid)`
  @media ${(p) => p.theme.media.mobile} {
    grid-template-columns: repeat(1, 1fr);
    gap: 40px;
  }
  gap: 40px;
  width: 100%;
  grid-template-columns: repeat(2, 1fr);
`
