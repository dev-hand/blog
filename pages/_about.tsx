import React from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Frame } from 'components/common/frame'
import { AboutIntro } from 'components/_about/about-intro'
import { AboutMySelf } from 'components/_about/about-my-self'
import { prefix } from 'infra/config'
import { AboutPhotoList } from 'components/_about/about-photo-list'

export const getStaticProps: GetStaticProps = async () => {
  const data = await new Promise((resolve) => {
    fetch(decodeURI(`${prefix}/posts/리더란 정원사다.md`)).then((response) =>
      resolve(response.text()),
    )
  })
  return {
    props: { data },
  }
}

const About: NextPage<{ data: string }> = ({ data }) => {
  return (
    <Frame>
      <AboutIntro />
      <AboutMySelf data={data} />
      <AboutPhotoList />
    </Frame>
  )
}

export default About
