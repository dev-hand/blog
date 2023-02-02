import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/preview'
import { prefix } from 'infra/config'
import { contentFormat, layoutFormat } from 'utils/format'
import { Frame } from 'components/common/frame'
import { Column } from 'components/common/layout'
import { BaseText, H1Text } from 'components/common/text'
import { Media } from 'components/common/layout'
import { theme } from 'styles/theme'
import moment from 'moment'
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
      <Column style={{ backgroundColor: theme.color.background1 }}>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center' }}>
              <H1Text>{title}</H1Text>
              <BaseText
                style={{
                  color: theme.color.gray3,
                  fontWeight: theme.weight.bold,
                }}
              >
                {moment(date).format('M월 D일, YYYY')}
              </BaseText>
              <BaseText
                style={{
                  color: theme.color.gray3,
                  fontWeight: theme.weight.bold,
                }}
              ></BaseText>
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

export default Posts
