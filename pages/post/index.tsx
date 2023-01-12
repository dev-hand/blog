import React, { useEffect } from 'react'
import { GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/editor'
import { isDev, prefix } from 'infra/config'

const Posts: NextPage<{ data: string }> = ({ data }) => {
  useEffect(() => {
    // eslint-disable-next-line no-debugger
    debugger
    fetch(`${prefix}/posts/${decodeURI('2021년 회고')}${isDev ? '.md' : ''}`)
      .then((res) => {
        console.log(res)
        return res.text()
      })
      .then((text) => text)
  }, [])
  return <Preview source={data} />
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch(
    `${prefix}/posts/${decodeURI('2021년 회고')}${isDev ? '.md' : ''}`,
  )
    .then((res) => res.text())
    .then((text) => text)
  return {
    props: { data },
  }
}

export default Posts

// import { NextPage } from 'next'
// import React from 'react'

// const Posts: NextPage = () => {
//   return <div>Posts</div>
// }

// export default Posts
