// import React from 'react'
// import { GetServerSideProps, NextPage } from 'next'
// import { Preview } from 'components/common/editor'

// const Posts: NextPage<{ data: any }> = ({ data }) => {
//   console.log(data)
//   return <Preview source={data} />
// }

// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await fetch('http://localhost:3000/posts/2021년 회고.md')
//     .then((res) => res.text())
//     .then((text) => text)
//   return {
//     props: { data },
//   }
// }

// export default Posts

import { NextPage } from 'next'
import React from 'react'

const Posts: NextPage = () => {
  return <div>Posts</div>
}

export default Posts
