// Option 1: Import the entire three.js core library.
import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Cube = dynamic(() => import('../components/misc/Cube'), { ssr: false })

const Learn: NextPage = () => {
  return <Cube />
}

export default Learn
