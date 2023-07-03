import { css } from '@emotion/react';
import React from 'react';

import { BACKGROUND, TEXT } from '../../constants/color';
import { AudioPlayer } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { formatStringDateToDottedType } from '../../utils';
import { MusicMood, PlayToggleButton } from '../index';

const musicItemCss = {
  wrapper: css({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '5px 10px 5px 5px',
    borderRadius: '5px',
    color: TEXT.PRIMARY,
    fontSize: '16px',
    '&:hover': {
      backgroundColor: BACKGROUND.THIRD,
    },
  }),
  row: css({
    display: 'flex',
    alignItems: 'center',
  }),
  title: css({
    marginLeft: '20px',
  }),
  genre: css({
    display: 'inline-block',
    minWidth: '80px',
    marginLeft: '30px',
    textAlign: 'center',
  }),
  date: css({
    marginLeft: '30px',
  }),
};
type Props = MusicItem & AudioPlayerPick;

type MusicItem = {
  item: Music;
};

type AudioPlayerPick = Pick<
  AudioPlayer,
  | 'playing'
  | 'loading'
  | 'playingMusic'
  | 'loadAndPlayMusic'
  | 'playAudio'
  | 'pauseAudio'
>;

const MusicItem = ({
  item,
  playing,
  loading,
  playingMusic,
  loadAndPlayMusic,
  playAudio,
  pauseAudio,
}: Props) => {
  const { id, title, moods, genre, public_date } = item;

  const playOtherMusic = () => {
    loadAndPlayMusic(id, title);
  };

  const playCurrentMusic = () => {
    playAudio();
  };

  const pauseCurrentMusic = () => {
    pauseAudio();
  };

  const renderToggleButton = () => {
    const currentPlayingItem = id === playingMusic.id;

    if (!currentPlayingItem) {
      return (
        <PlayToggleButton
          playing={false}
          onClick={playOtherMusic}
          disabled={loading}
        />
      );
    }

    if (playing) {
      return <PlayToggleButton playing={playing} onClick={pauseCurrentMusic} />;
    }

    if (!playing) {
      return (
        <PlayToggleButton
          playing={playing}
          onClick={playCurrentMusic}
          loading={loading}
        />
      );
    }
  };

  return (
    <li css={musicItemCss.wrapper}>
      <div css={musicItemCss.row}>
        {renderToggleButton()}
        <span css={musicItemCss.title}>{title}</span>
      </div>
      <div css={musicItemCss.row}>
        <span>
          {moods.map((mood) => {
            const key = `${mood}-${id}`;
            return <MusicMood key={key} mood={mood} />;
          })}
        </span>
        <span css={musicItemCss.genre}>{genre}</span>
        <span css={musicItemCss.date}>
          {formatStringDateToDottedType(public_date)}
        </span>
      </div>
    </li>
  );
};

export default React.memo(MusicItem);
