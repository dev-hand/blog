import React from 'react'
import styled from 'styled-components'
import { NextPage } from 'next'
import { Column, Grid, Row } from 'styles/components/common/layout'
import {
  DescText,
  H2Text,
  H4Text,
  LargeText,
} from 'styles/components/common/text'
import { theme } from 'styles/theme'
import { FiMenu } from 'react-icons/fi'
import { BackgroundImage } from 'styles/components/home/image'

const About: NextPage = () => {
  return (
    <Column>
      <Header>
        <HeaderText>Nostalgic.</HeaderText>
        <FiMenu size={32} color={theme.color.white} />
      </Header>
      <IntroSection>
        <MainText>숲을보는,</MainText>
        <Row style={{ alignItems: 'center', gap: 50 }}>
          <MainText>개발자.</MainText>
          <Grid style={{ gridTemplateColumns: 'repeat(4, 1fr)', gap: 10 }}>
            <H4Text color={theme.color.white}>#캠핑</H4Text>
            <H4Text color={theme.color.white}>#운동</H4Text>
            <H4Text color={theme.color.white}>#코딩</H4Text>
            <H4Text color={theme.color.white}>#여행</H4Text>
            <H4Text color={theme.color.white}>#전시</H4Text>
            <H4Text color={theme.color.white}>#사진</H4Text>
          </Grid>
        </Row>
      </IntroSection>
      <SelfInfoSection>
        <BackgroundImage
          url='/images/item-3.jpeg'
          style={{ width: '100%', height: 700, flex: 1 }}
        />
        <Column style={{ flex: 1, gap: 30, paddingTop: 50 }}>
          <H2Text style={{ fontWeight: theme.weight.bold, padding: '0 100px' }}>
            숲을보는 개발자.
          </H2Text>
          <DescText
            style={{ padding: '0 100px' }}
          >{`안녕하세요, React로 다양한 프로젝트를 해온 개발자 손성호 입니다.\n첫 개발 경험은 2년전 자바, 스프링으로 시작해서 실무에서 1년동안 리액트를 사용하였고 지금까지도 주특기로 사용하고 있습니다.\n고립되지 않는 개발환경과 배움이 있는 멤버들과 같이 일을 하는것이 저의 목표입니다.\n그 이유는 제가 해왔던 방식이 맞는지 확인하고 싶고 틀린부분이 있다면 바꿔 나가고 싶습니다.\n\n돈보다 가치를 따릅니다.\n멋진 사람들과 멋진 작품을 만들때 저는 성장합니다.\n그렇기 때문에 눈 앞에 돈이 아닌 눈 앞에 가치있는 일을 따라가는 것이 숲을 보는 인생이라고 생각합니다.\n가까운 목표가 있다면 PM 이 되어서 고객과 기획, 개발자 사이에서 솔루션을 유연하게 대처할 수 있는 소프트웨어 엔지니어가 되고, 이런 경험을 많은 사람들에게 전파하고 도움이 되고 싶습니다.\n좋은 영향을 풍기는 사람은 주변에 좋은 사람들이 모인다고 생각합니다.\n저는 사람을 좋아하고, 서로간의 좋은 영향을 주고 받는 것이 좋습니다.\n좋은 영향을 받고싶고 주고싶어서 주의 깊게 듣고 긍정적인 대답하는 법을 매일 실천하려 합니다.`}</DescText>
        </Column>
      </SelfInfoSection>
    </Column>
  )
}

const SelfInfoSection = styled(Row)`
  background-color: ${(p) => p.theme.color.background1};
`

const Header = styled(Row)`
  padding: 20px 40px;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) => p.theme.color.black};
`

const HeaderText = styled(H2Text)`
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.bold};
  cursor: pointer;
`

const IntroSection = styled(Column)`
  height: 700px;
  align-items: center;
  justify-content: center;
  background-color: ${(p) => p.theme.color.black};
`

const MainText = styled(LargeText)`
  color: ${(p) => p.theme.color.white};
  font-weight: ${(p) => p.theme.weight.bold};
`

export default About
