import React from 'react'
import styled from 'styled-components'
import { Column, Row } from 'components/common/Layout'
import { H1Text, DescText } from 'components/common/Text'

export const AboutExperience: React.FC = () => {
  return (
    <Main>
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Works</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>
            2022.06 투자받은 초기 스타트업과 개발자의 채용을 연결해주는 스타트업
            채용 서비스 개발
          </H5Title>
          <H5Title>
            2022.05 차량 개인정보 보호와 도난 방지를 위한 차량용 서비스 개발
          </H5Title>
          <H5Title>2021.08 그룹웨어(B2B) 메신저 애플리케이션 개발</H5Title>
          <H5Title>
            2020.10 그룹웨어(B2B) 협업 지원 서비스 PC용 도구 개발
          </H5Title>
        </ContentWrapper>
      </WorkContainer>
      <Line />
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Project</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>2023.02 개인용 포트폴리오 홈페이지 프로젝트</H5Title>
          <H5Title>
            2022.04 중고 직거래 사이트 당근마켓 웹 클론 프로젝트
          </H5Title>
          <H5Title>
            2022.03 내주변 숨은 고수 찾기 서비스 숨고 웹 클론 프로젝트
          </H5Title>
          <H5Title>2022.03 스타벅스 웹 클론 프로젝트</H5Title>
          <H5Title>2020.06 학원 정보 제공과 중계 서비스 프로젝트</H5Title>
        </ContentWrapper>
      </WorkContainer>
      <Line />
      <WorkContainer>
        <TitleWrapper>
          <H1Title>Techniques</H1Title>
        </TitleWrapper>
        <ContentWrapper>
          <H5Title>
            {`NextJS 효율적으로 SSR를 사용하여 검색 엔진 최적화를 높히고\n간단한 배포로 애플리케이션을 모니터링합니다.`}
          </H5Title>
          <H5Title>
            {`TypeScript 명확한 정적 타입 사용으로 오류를 줄이고\n코드의 신뢰성을 향상시킵니다.`}
          </H5Title>
          <H5Title>
            {`StyledComponents 캡슐화 하여 재사용성을 늘리고\nJS로 스타일 관련 코드를 더욱 직관적으로 작성합니다.`}
          </H5Title>
          <H5Title>
            {`MobX, Context API, Recoil 전역 상태 관리로 렌더링을 최소화 시키고\n여러 컴포넌트간 공유하는 상태를 효율적으로 관리합니다.`}
          </H5Title>
          <H5Title>
            {`NodeJS, 서버를 배포하고 MVC패턴을 사용하여 MySQL로 CRUD를 할 수 있습니다.\n또한 NoSQL을 다를줄 알아 빠르게 애플리케이션 개발을 할 수 있습니다.`}
          </H5Title>
        </ContentWrapper>
      </WorkContainer>
    </Main>
  )
}

const H5Title = styled(DescText)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  font-weight: ${(p) => p.theme.weight.regular};
  font-size: ${(p) => p.theme.size.h5};
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
  flex: 1;
  gap: 20px;
`
