import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { H1Text, H5Text } from 'components/common/Text'

export const AboutExperience: React.FC = () => {
  return (
    <Main>
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Works</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>스타트업 채용 서비스</H5Title>
          <H5Title>차량 개인정보 보호 & 도난신고 서비스</H5Title>
          <H5Title>그룹웨어 메신저 어플리케이션</H5Title>
          <H5Title>그룹웨어 협업PC 툴</H5Title>
        </ContentWrapper>
      </WorkContainer>
      <Line />
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Project</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>포트폴리오 홈페이지 프로젝트</H5Title>
          <H5Title>숨고 클론 프로젝트</H5Title>
          <H5Title>당근마켓 클론 프로젝트</H5Title>
          <H5Title>학원정보 제공 서비스 프로젝트</H5Title>
          <H5Title>스타벅스 클론 프로젝트</H5Title>
        </ContentWrapper>
      </WorkContainer>
      <Line />
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Techniques</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>NextJS 프레임워크 구축, SSR, CSR를 통한 SEO 최적화</H5Title>
          <H5Title>
            TypeScript 명시적인 정적 타입으로 명확하게 코드 기술{' '}
          </H5Title>
          <H5Title>
            Styled-components 스타일 컴포넌트화 하여 통일성, 재활용성 개선
          </H5Title>
          <H5Title>
            MobX, Context API, Recoil 전역 상태변수로 관리, 전역 렌더링 최소화
          </H5Title>
        </ContentWrapper>
      </WorkContainer>
    </Main>
  )
}

const H5Title = styled(H5Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  font-weight: ${(p) => p.theme.weight.regular};
  color: ${(p) => p.theme.color.gray2};
`

const H1Title = styled(H1Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h3};
  }
  font-weight: ${(p) => p.theme.weight.bold};
`
const Line = styled.hr``

const Main = styled(Column)`
  @media ${(p) => p.theme.media.mobile} {
    padding: 40px 20px;
  }
  padding: 100px 80px;
  gap: 40px;
`

const WorkContainer = styled(Row)`
  @media ${(p) => p.theme.media.mobile} {
    flex-direction: column;
    gap: 20px;
  }
  gap: 40px;
`

const TitleWrapper = styled(Column)`
  @media ${(p) => p.theme.media.desktop} {
    width: 400px;
    align-items: center;
    justify-content: center;
  }
`

const ContentWrapper = styled(Column)`
  gap: 20px;
`
