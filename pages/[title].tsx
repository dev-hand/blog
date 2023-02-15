import React from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/Preview'
import { prefix } from 'infra/config'
import { contentFormat, layoutFormat } from 'utils/format'
import { Frame } from 'components/common/Frame'
import { Column, Media } from 'components/common/Layout'
import { BaseText, ExtraBoldText } from 'components/common/Text'
import { theme } from 'styles/theme'
import { posts } from 'public/posts'

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.map((post) => {
    return {
      params: {
        title: post,
      },
    }
  })
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const title = context.params?.title as string
  const data = await fetch(decodeURI(`${prefix}/posts/${title}.md`)).then(
    (res) => res.text(),
  )

  return {
    props: { data },
  }
}

const Posts: NextPage<{ data: string }> = ({ data }) => {
  const title = layoutFormat('title', data)
  const content = contentFormat(data)
  const date = layoutFormat('date', data)
  return (
    <Frame>
      <Column>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center', gap: 10 }}>
              <MainTitle>{title}</MainTitle>
              <SmallDateText>
                {moment(date).format('M월 D일, YYYY')}
              </SmallDateText>
            </Column>
            <Column>
              <Preview source={content} />
            </Column>
          </Column>
        </Media>
      </Column>
    </Frame>
  )
}

const MainTitle = styled(ExtraBoldText)`
  font-size: 72px;
`
const SmallDateText = styled(BaseText)`
  color: ${(p) => p.theme.color.gray1};
`
export default Posts
