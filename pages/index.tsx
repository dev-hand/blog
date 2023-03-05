import React from 'react'
import styled from 'styled-components'
import type { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { PREFIX } from 'infra/config'
import { posts } from 'public/posts'
import { BlogList } from 'components/blog/BlogList'
import { ThemeColor } from 'infra/type'
import { BlogIntro } from 'components/blog/BlogIntro'
import { Column } from 'components/common/Layout'

export const getStaticProps: GetStaticProps = async () => {
  const data = await Promise.all(
    posts.map((post) => {
      return fetch(decodeURI(`${PREFIX}/posts/${post}.md`))
    }),
  ).then((res) => Promise.all(res.map((res) => res.text())))
  return {
    props: { data },
  }
}

const Blog: NextPage<{ data: string[] }> = ({ data }) => {
  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <Main>
        <BlogIntro />
        <BlogList data={data} />
      </Main>
    </Frame>
  )
}

const Main = styled(Column)`
  gap: 100px;
  padding: 100px 0;
`

export default Blog
