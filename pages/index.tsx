import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { prefix } from 'infra/config'
import { posts } from 'public/posts'
import { PostList } from 'components/home/PostList'
import { ThemeColor } from 'infra/type'

export const getStaticProps: GetStaticProps = async () => {
  const data = await Promise.all(
    posts.map((post) => {
      return fetch(decodeURI(`${prefix}/posts/${post}.md`))
    }),
  ).then((res) => Promise.all(res.map((res) => res.text())))
  return {
    props: { data },
  }
}

const Home: NextPage<{ data: string[] }> = ({ data }) => {
  return (
    <Frame backgroundColor={ThemeColor.B}>
      <PostList data={data} />
    </Frame>
  )
}

export default Home
