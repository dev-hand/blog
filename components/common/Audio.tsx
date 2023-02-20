import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Modal } from 'components/common/Modal'
import { H1Text, H5Text } from 'components/common/Text'
import { Column } from 'components/common/Layout'
import { prefix } from 'infra/config'

const Audio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true)
  const [isAudioPlay, setIsAudioPlay] = useState(false)
  const [isCloseBefore, setIsCloseBefore] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      if (!sessionStorage.getItem('audioPlay')) setIsAudioPlay(true)
    }, 5000)
  }, [])

  const close = () => {
    setIsCloseBefore(true)
    setTimeout(() => {
      setIsVisible(false)
    }, 2000)
  }

  if (!isAudioPlay) return null

  return (
    <Modal onClose={close} isVisible={isVisible} disableBackgroundClose>
      <Main isCloseBefore={isCloseBefore}>
        <H1MainTitle>{`Common Saints - Secret Song`}</H1MainTitle>
        <AudioContainer>
          <DescTitle>Play the music</DescTitle>
          <audio id='player' controls loop onPlay={close}>
            <source
              src={`${prefix}/music/CommonSaintsSecretSong.mp3`}
              type='audio/mp3'
            />
          </audio>
        </AudioContainer>
        <CloseText
          onClick={() => {
            close()
            sessionStorage.setItem('audioPlay', 'false')
          }}
        >{`No, I won't`}</CloseText>
      </Main>
    </Modal>
  )
}

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

const Main = styled(Column)<{ isCloseBefore: boolean }>`
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

export default Audio
