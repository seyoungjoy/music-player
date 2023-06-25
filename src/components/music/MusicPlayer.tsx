import { AudioPlayer } from '../../hooks/useAudio';
import { HiddenLabel } from '../../styles/common/common';
import { formatSecondsToTime } from '../../utils';

import { S } from './MusicPlayer.styled';
import PlayToggleButton from './PlayToggleButton';

type Props = AudioPlayer;

const MusicPlayer = ({
  audioRef,
  playerVisible,
  playing,
  loading,
  playingMusic,
  currentTime,
  handleRangeChange,
  togglePlayPause,
}: Props) => {
  return (
    <S.MusicPlayerWrapper visible={playerVisible}>
      <S.MusicPlayerControl>
        <PlayToggleButton
          playing={playing}
          onClick={togglePlayPause}
          loading={loading}
        />

        <S.MusicPlayerTitle>{playingMusic.title}</S.MusicPlayerTitle>

        <S.MusicPlayerProgressBar>
          <S.MusicPlayerCurrentTime>
            {formatSecondsToTime(audioRef.current?.currentTime)}
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
            {formatSecondsToTime(audioRef.current?.duration)}
          </S.MusicPlayerDuration>
        </S.MusicPlayerProgressBar>

        <audio ref={audioRef} />
      </S.MusicPlayerControl>
    </S.MusicPlayerWrapper>
  );
};

export default MusicPlayer;
