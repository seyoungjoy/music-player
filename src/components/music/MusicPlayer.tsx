import { Audio } from '../../hooks/useAudio';
import { HiddenLabel } from '../../styles/common/common';
import { formatTime } from '../../utils';
import PlayToggleButton from '../common/PlayToggleButton';

import { S } from './MusicPlayer.styled';

type Props = Audio;

const MusicPlayer = ({
  audioRef,
  playerVisible,
  playing,
  loading,
  currentMusic,
  currentTime,
  handleRangeChange,
  handleToggleClick,
}: Props) => {
  return (
    <S.MusicPlayerWrapper visible={playerVisible}>
      <S.MusicPlayerControl>
        <PlayToggleButton
          playing={playing}
          onClick={handleToggleClick}
          loading={loading}
        />

        <S.MusicPlayerTitle>{currentMusic.title}</S.MusicPlayerTitle>

        <S.MusicPlayerProgressBar>
          <S.MusicPlayerCurrentTime>
            {formatTime(audioRef.current?.currentTime)}
          </S.MusicPlayerCurrentTime>

          <S.MusicPlayerSlider>
            <HiddenLabel htmlFor="range">progress bar</HiddenLabel>
            <input
              type="range"
              id="range"
              max={audioRef.current?.duration || 0}
              value={currentTime}
              onChange={handleRangeChange}
            />
          </S.MusicPlayerSlider>
          <S.MusicPlayerDuration>
            {formatTime(audioRef.current?.duration)}
          </S.MusicPlayerDuration>
        </S.MusicPlayerProgressBar>

        <audio ref={audioRef} />
      </S.MusicPlayerControl>
    </S.MusicPlayerWrapper>
  );
};

export default MusicPlayer;
