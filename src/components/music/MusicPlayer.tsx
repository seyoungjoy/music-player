import { Audio } from '../../hooks/useAudio';
import { HiddenLabel } from '../../styles/common/common';
import { formatTime } from '../../utils';
import PlayToggleButton from '../common/PlayToggleButton';

import { S } from './MusicPlayer.styled';

type Props = {
  audioState: Audio;
};

const MusicPlayer = ({ audioState }: Props) => {
  return (
    <S.MusicPlayerWrapper visible={audioState.playerVisible}>
      <S.MusicPlayerControl>
        <PlayToggleButton
          isPlaying={audioState.playing}
          onClick={audioState.handleToggleClick}
          loading={audioState.loading}
        />

        <S.MusicPlayerTitle>{audioState.music.title}</S.MusicPlayerTitle>

        <S.MusicPlayerProgressBar>
          <S.MusicPlayerCurrentTime>
            {formatTime(audioState.audioRef.current?.currentTime)}
          </S.MusicPlayerCurrentTime>

          <S.MusicPlayerSlider>
            <HiddenLabel htmlFor="range">progress bar</HiddenLabel>
            <input
              type="range"
              id="range"
              max={audioState.audioRef.current?.duration}
              value={audioState.currentTime}
              onChange={audioState.handleRangeChange}
            />
          </S.MusicPlayerSlider>
          <S.MusicPlayerDuration>
            {formatTime(audioState.audioRef.current?.duration)}
          </S.MusicPlayerDuration>
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
