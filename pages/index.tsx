import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/frame'
import { prefix } from 'infra/config'
import { posts } from 'public/posts'

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
  console.log(data)
  return <Frame>Home</Frame>
}

export default Home
