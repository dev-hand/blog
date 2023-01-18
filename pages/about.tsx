import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/frame'
import { AboutIntro } from 'components/about/about-intro'
import { AboutMySelf } from 'components/about/about-my-self'
import { prefix } from 'infra/config'
import { AboutPhotoList } from 'components/about/about-photo-list'
import { posts } from 'public/posts'

// export const getStaticProps: GetStaticProps = async () => {
//   const data = await fetch(
//     decodeURI(`${prefix}/posts/리더란 정원사다.md`),
//   ).then((res) => res.text())

//   return {
//     props: { data },
//   }
// }

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

const About: NextPage<{ data: string[] }> = ({ data }) => {
  return (
    <Frame>
      <AboutIntro />
      <AboutMySelf data={data[1]} />
      <AboutPhotoList />
    </Frame>
  )
}

export default About
