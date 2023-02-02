import React from 'react'
import { NextPage } from 'next'
import { Frame } from 'components/common/frame'
import { AboutIntro } from 'components/about/about-intro'

const About: NextPage = () => {
  return (
    <Frame>
      <AboutIntro />
    </Frame>
  )
}

export default About
