import React from 'react'
import { Grid, Row } from 'components/common/Layout'
import { PostItem } from 'components/home/PostItem'
import styled from 'styled-components'

export const PostList: React.FC<{ data: string[] }> = ({ data }) => {
  return (
    <Main>
      <PostContainer>
        {data.map((item, index) => (
          <PostItem key={index} item={item} />
        ))}
      </PostContainer>
    </Main>
  )
}

const Main = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px 20px;
  }
  padding: 100px 40px;
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
