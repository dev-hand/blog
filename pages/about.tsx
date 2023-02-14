import React from 'react'
import { NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { AboutMain } from 'components/about/AboutMain'
import { AboutIntro } from 'components/about/AboutIntro'
import { AboutPhotos } from 'components/about/AboutPhotos'

const About: NextPage = () => {
  return (
    <Frame>
      <AboutMain />
      <AboutIntro />
      <AboutPhotos />
    </Frame>
  )
}

export default About
