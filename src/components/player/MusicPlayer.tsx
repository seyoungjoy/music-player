/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { BACKGROUND, COLOR, TEXT } from '../../constants/color';
import { AudioPlayer } from '../../hooks/useAudio';
import { HiddenLabel } from '../../styles/common/common';
import { formatSecondsToTime } from '../../utils';
import PlayToggleButton from '../music/PlayToggleButton';

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
  const musicPlayerCss = {
    wrapper: css({
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '80px',
      backgroundColor: BACKGROUND.SECONDARY,
      borderTop: `1px solid ${COLOR.BORDER}`,
      transform: playerVisible ? 'translate3D(0,0,0)' : 'translate3D(0,100%,0)',
      transition: 'transform 200ms ease',
      color: TEXT.PRIMARY,
    }),
    control: css({
      maxWidth: '1020px',
      height: '100%',
      margin: '0 auto',
      padding: '0 80px',
      display: 'flex',
      alignItems: 'center',
    }),
    title: css({
      margin: '0 40px',
    }),
    progressBar: css({
      display: 'flex',
      alignItems: 'center',
    }),
    slider: css({
      margin: '0 10px',
    }),
  };

  return (
    <div css={musicPlayerCss.wrapper}>
      <div css={musicPlayerCss.control}>
        <PlayToggleButton
          playing={playing}
          onClick={togglePlayPause}
          loading={loading}
          size="md"
        />

        <div css={musicPlayerCss.title}>{playingMusic.title}</div>
        <div css={musicPlayerCss.progressBar}>
          <span>{formatSecondsToTime(audioRef.current?.currentTime)}</span>
          <div css={musicPlayerCss.slider}>
            <HiddenLabel htmlFor="range">progress bar</HiddenLabel>
            <input
              type="range"
              id="range"
              max={audioRef.current?.duration || 0}
              value={currentTime}
              onChange={handleRangeChange}
            />
          </div>
          <span>{formatSecondsToTime(audioRef.current?.duration)}</span>
        </div>

        <audio ref={audioRef} />
      </div>
    </div>
  );
};

export default MusicPlayer;
