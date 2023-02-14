import React from 'react'
import { Column, Row } from 'components/common/Layout'
import { PostItem } from 'components/home/PostItem'
import styled from 'styled-components'

export const PostList: React.FC<{ data: string[] }> = ({ data }) => {
  const list: string[][] = [[], []]
  let count = 0
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (count === 2) count = 0
    list[count].push(item)
    count++
  }
  return (
    <Main>
      {list.map((data, index) => (
        <Column key={index} style={{ gap: 40 }}>
          {data.map((item, idx) => (
            <PostItem key={idx} item={item} />
          ))}
        </Column>
      ))}
    </Main>
  )
}

const Main = styled(Row)`
  padding: 40px 80px;
`
