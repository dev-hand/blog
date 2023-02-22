import React, { useEffect } from 'react'
import styled from 'styled-components'
import moment from 'moment'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { Preview } from 'components/common/Preview'
import { prefix } from 'infra/config'
import { contentFormat, layoutFormat } from 'utils/format'
import { Frame } from 'components/common/Frame'
import { Column, Media } from 'components/common/Layout'
import { BaseText, ExtraBoldText } from 'components/common/Text'
import { posts } from 'public/posts'
import { useRouter } from 'next/router'
import { ThemeColor } from 'infra/type'
import { theme } from 'styles/theme'

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

const Post: NextPage<{ data: string }> = ({ data }) => {
  const router = useRouter()
  const title = layoutFormat('title', data)
  const writer = layoutFormat('writer', data)
  const content = contentFormat(data)
  const date = layoutFormat('date', data)
  useEffect(() => {
    router.beforePopState((state) => {
      state.options.scroll = false
      return true
    })
  }, [router])
  return (
    <Frame backgroundColor={ThemeColor.B1}>
      <Main>
        <Media>
          <Content>
            <TitleWrapper>
              <MainTitle>{title}</MainTitle>
              {writer && <SmallText>{writer}</SmallText>}
            </TitleWrapper>
            <Column>
              <Preview
                source={content}
                style={{
                  backgroundColor: theme.color.background1,
                  color: theme.color.background2,
                }}
              />
            </Column>
            <ItalicTitle>{moment(date).format('M월 D일, YYYY')}</ItalicTitle>
          </Content>
        </Media>
      </Main>
    </Frame>
  )
}

const Content = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    gap: 60px;
  }
  gap: 100px;
`

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 60px 0;
  }
  padding: 100px 0;
`

const TitleWrapper = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    align-items: start;
  }
  align-items: center;
  gap: 20px;
`

const MainTitle = styled(ExtraBoldText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h1};
  }
  font-size: 60px;
  color: ${(p) => p.theme.color.background2};
`

const SmallText = styled(BaseText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.small};
  }
  font-weight: ${(p) => p.theme.weight.regular};
  color: ${(p) => p.theme.color.gray1};
`

const ItalicTitle = styled(SmallText)`
  font-style: italic;
  text-align: end;
`

export default Post
