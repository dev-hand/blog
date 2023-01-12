import React from 'react'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/editor'
import { prefix } from 'infra/config'
import { contentFormat, layoutFormat } from 'utils/format'
import { Frame } from 'components/common/frame'
import { Column } from 'styles/components/common/layout'
import { BaseText, HeaderText } from 'styles/components/common/text'
import { Media } from 'styles/components/common/layout'
import { theme } from 'styles/theme'
import moment from 'moment'

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const title = context.params?.title as string
  const data = await fetch(`${prefix}/posts/${decodeURI(title)}`)
    .then((res) => res.text())
    .then((text) => text)
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
      <Column style={{ backgroundColor: theme.color.background }}>
        <Media>
          <Column style={{ alignItems: 'center', gap: 40, padding: '40px 0' }}>
            <Column style={{ alignItems: 'center' }}>
              <HeaderText fontFamily='L'>{title}</HeaderText>
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
