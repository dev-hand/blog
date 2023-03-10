import React from 'react'
import { NextPage } from 'next'
import { Frame } from 'components/common/Frame'
import { AboutMain } from 'components/about/AboutMain'
import { AboutIntro } from 'components/about/AboutIntro'
import { AboutPhotos } from 'components/about/AboutPhotos'
import { AboutCareer } from 'components/about/career/Index'
import dynamic from 'next/dynamic'

const Cube = dynamic(() => import('../components/misc/Cube'), { ssr: false })

const About: NextPage = () => {
  return (
    <Frame>
      <AboutMain />
      <AboutIntro />
      <AboutCareer />
      <Cube />
      <AboutPhotos />
    </Frame>
  )
}

export default About
