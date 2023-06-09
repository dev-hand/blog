// Option 1: Import the entire three.js core library.
import { Frame } from 'components/common/Frame'
import { ThemeColor } from 'infra/type'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Three = dynamic(() => import('../components/misc/Three'), { ssr: false })

const Learn: NextPage = () => {
  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <Three />
    </Frame>
  )
}

export default Learn
