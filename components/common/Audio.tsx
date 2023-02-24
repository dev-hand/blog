import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Modal } from 'components/common/Modal'
import { H1Text, H5Text } from 'components/common/Text'
import { Column, Row } from 'components/common/Layout'
import { isDev, prefix } from 'infra/config'
import { useRouter } from 'next/router'
import { setSessionStorage, getSessionStorage } from 'utils/handler'

const AUDIO_KEY = 'SHOW_AUDIO'

export const Audio: React.FC = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(true)
  const [showAudio, setShowAudio] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCloseBefore, setIsCloseBefore] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (!getSessionStorage(AUDIO_KEY)) setShowAudio(true)
    }, 5000)
  }, [])

  const close = () => {
    setIsCloseBefore(true)
    setSessionStorage(AUDIO_KEY, 'false')
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  const play = () => {
    const openUrl = `${prefix}/${
      isDev ? router.asPath : router.asPath.slice(6)
    }`
    if (!getSessionStorage(AUDIO_KEY)) {
      setSessionStorage(AUDIO_KEY, 'false')
      window.open(openUrl, '_blank')
    }
    setIsPlaying(true)
  }

  if (!showAudio) return null

  return (
    <Main>
      <Modal isVisible={isVisible} disableBackgroundClose>
        <Content isCloseBefore={isCloseBefore}>
          <H1MainTitle>{`Aether - Tender`}</H1MainTitle>
          <AudioContainer>
            {isPlaying && (
              <RhythmContainer>
                <Rhythm />
                <Rhythm />
                <Rhythm />
                <Rhythm />
              </RhythmContainer>
            )}
            <DescTitle>Play the music</DescTitle>
            <audio id='player' controls loop onPlay={play}>
              <source
                src={`${prefix}/music/AetherTender.mp3`}
                type='audio/mp3'
              />
            </audio>
          </AudioContainer>
          <CloseText onClick={close}>{`No, I won't`}</CloseText>
        </Content>
      </Modal>
    </Main>
  )
}

const RhythmContainer = styled(Row)`
  gap: 4px;
  height: 24px;
  align-items: end;
`

const Rhythm = styled.div`
  width: 4px;
  height: 24px;
  background-color: ${(p) => p.theme.color.white};
  @keyframes audioRhythm {
    0% {
      height: 0px;
    }
    20% {
      height: 8px;
    }
    40% {
      height: 16px;
    }
    60% {
      height: 24px;
    }
    80% {
      height: 16px;
    }
    100% {
      height: 0px;
    }
  }
  :nth-child(1) {
    animation: audioRhythm 1400ms infinite;
  }
  :nth-child(2) {
    animation: audioRhythm 2000ms infinite;
  }
  :nth-child(3) {
    animation: audioRhythm 1800ms infinite;
  }
  :nth-child(4) {
    animation: audioRhythm 1600ms infinite;
  }
`

const Main = styled.div`
  @media ${(p) => p.theme.media.mobile} {
    display: none;
  }
`

const AudioContainer = styled(Column)`
  gap: 10px;
  align-items: center;
`

const DescTitle = styled(H5Text)`
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
  color: ${(p) => p.theme.color.gray3};
`

const CloseText = styled(H5Text)`
  text-decoration: underline;
  cursor: pointer;
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.default};
  }
`

const H1MainTitle = styled(H1Text)`
  text-align: center;
  @media ${(p) => p.theme.media.mobile} {
    font-size: ${(p) => p.theme.size.h4};
  }
  font-weight: ${(p) => p.theme.weight.extraBold};
`

const Content = styled(Column)<{ isCloseBefore?: boolean }>`
  @keyframes comeUpAudio {
    0% {
      top: 40%;
      opacity: 1;
    }
    20% {
      top: 50%;
      opacity: 1;
    }
    100% {
      top: 0%;
      opacity: 0;
    }
  }
  ${(p) => p.isCloseBefore && `animation: comeUpAudio 2000ms 1 ease`};
  gap: 50px;
  top: 40%;
  position: absolute;
  align-items: center;
  color: ${(p) => p.theme.color.white};
`
