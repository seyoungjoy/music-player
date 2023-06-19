import styled from '@emotion/styled';
import PlayToggleButton from './PlayToggleButton';
import { HiddenLabel } from '../styles/common/common';
import { Audio } from '../hooks/useAudio';

const S = {
  MusicPlayerWrapper: styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    border-top: 1px solid #000;
  `,
  MusicPlayerControl: styled.div`
    max-width: 1020px;
    height: 100%;
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    align-items: center;
  `,
  MusicPlayerTitle: styled.div`
    margin: 0 40px;
  `,
  MusicPlayerProgressBar: styled.div`
    display: flex;
    align-items: center;
  `,
  MusicPlayerSlider: styled.div`
    margin: 0 10px;
  `,
  MusicPlayerCurrentTime: styled.span``,
  MusicPlayerDuration: styled.span``,
};
type Props = {
  audioState: Audio;
};
const MusicPlayer = ({ audioState }: Props) => {
  return (
    <S.MusicPlayerWrapper>
      <S.MusicPlayerControl>
        <PlayToggleButton
          isPlaying={audioState.playing}
          onClick={audioState.handleToggleClick}
          loading={audioState.loading}
        />

        <S.MusicPlayerTitle>타이틀</S.MusicPlayerTitle>

        <S.MusicPlayerProgressBar>
          <S.MusicPlayerCurrentTime>00:00</S.MusicPlayerCurrentTime>
          <S.MusicPlayerSlider>
            <HiddenLabel htmlFor="range">progress bar</HiddenLabel>
            <input type="range" id="range" />
          </S.MusicPlayerSlider>
          <S.MusicPlayerDuration>00:00</S.MusicPlayerDuration>
        </S.MusicPlayerProgressBar>

        <audio
          src="https://cdn.pozalabs.com/recruit/musics/0.mp3"
          ref={audioState.audioRef}
        />
      </S.MusicPlayerControl>
    </S.MusicPlayerWrapper>
  );
};

export default MusicPlayer;
