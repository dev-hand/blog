import React from 'react'
import { NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { AboutMain } from 'components/about/AboutMain'
import { AboutIntro } from 'components/about/AboutIntro'
import { AboutPhotos } from 'components/about/AboutPhotos'
import { AboutCareer } from 'components/about/career/Index'
import { analytics } from 'infra/analytics'

const About: NextPage = () => {
  analytics.traffic('page_about')
  return (
    <Frame>
      <AboutMain />
      <AboutIntro />
      <AboutCareer />
      <AboutPhotos />
    </Frame>
  )
}

export default About
