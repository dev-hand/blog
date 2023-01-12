import React from 'react'
import { Column, Row } from 'styles/components/common/layout'
import { PostItem } from 'components/home/post-item'

export const PostList: React.FC<{ data: string[] }> = ({ data }) => {
  const list: string[][] = [[], [], []]
  let count = 0
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    if (count === 3) count = 0
    list[count].push(item)
    count++
  }
  return (
    <Row style={{ justifyContent: 'space-between' }}>
      {list.map((data, index) => (
        <Column key={index} style={{ gap: 40 }}>
          {data.map((item) => (
            <PostItem key={item} item={item} />
          ))}
        </Column>
      ))}
    </Row>
  )
}
