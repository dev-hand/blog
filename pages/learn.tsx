// Option 1: Import the entire three.js core library.
import { Frame } from 'components/common/Frame'
import { analytics } from 'infra/analytics'
import { ThemeColor } from 'infra/type'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Three = dynamic(() => import('../components/misc/Three'), { ssr: false })

const Learn: NextPage = () => {
  analytics.traffic('page_learn')
  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <Three />
    </Frame>
  )
}

export default Learn
