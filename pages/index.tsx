import React from 'react'
import styled from 'styled-components'
import type { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { PREFIX } from 'infra/config'
import { posts } from 'public/posts'
import { HomeList } from 'components/home/HomeList'
import { ThemeColor } from 'infra/type'
import { HomeIntro } from 'components/home/HomeIntro'
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

const Home: NextPage<{ data: string[] }> = ({ data }) => {
  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <Main>
        <HomeIntro />
        <HomeList data={data} />
      </Main>
    </Frame>
  )
}

const Main = styled(Column)`
  gap: 100px;
  padding: 100px 0;
`

export default Home
