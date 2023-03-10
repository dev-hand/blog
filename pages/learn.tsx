// Option 1: Import the entire three.js core library.
import { Frame } from 'components/common/Frame'
import { ThemeColor } from 'infra/type'
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Cube = dynamic(() => import('../components/misc/Cube'), { ssr: false })

const Learn: NextPage = () => {
  return (
    <Frame backgroundColor={ThemeColor.B2}>
      <Cube />
    </Frame>
  )
}

export default Learn
