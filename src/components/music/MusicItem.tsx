import React from 'react';

import { Audio } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { formatDate } from '../../utils';
import { PlayToggleButton } from '../index';

import { S } from './MusicItem.styled';
import MusicMood from './MusicMood';

type Props = MusicItem & AudioItem;

type MusicItem = {
  item: Music;
};

type AudioItem = Pick<
  Audio,
  | 'playing'
  | 'loading'
  | 'currentMusic'
  | 'handlePlayToggleClick'
  | 'playAudio'
  | 'pauseAudio'
>;

const MusicItem = ({
  item,
  playing,
  loading,
  currentMusic,
  handlePlayToggleClick,
  playAudio,
  pauseAudio,
}: Props) => {
  const { id, title, moods, genre, public_date } = item;

  const playOtherMusic = () => {
    handlePlayToggleClick(id, title);
  };

  const playCurrentMusic = () => {
    playAudio();
  };

  const pauseCurrentMusic = () => {
    pauseAudio();
  };

  const renderToggleButton = () => {
    const currentPlayingItem = id === currentMusic.id;

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
    <S.MusicItem>
      <S.Row>
        {renderToggleButton()}
        <S.MusicItemTitle>{title}</S.MusicItemTitle>
      </S.Row>
      <S.Row>
        <S.MusicItemMood>
          {moods.map((mood) => {
            const key = `${mood}-${id}`;
            return <MusicMood key={key} mood={mood} />;
          })}
        </S.MusicItemMood>
        <S.MusicItemGenre>{genre}</S.MusicItemGenre>
        <S.MusicItemDate>{formatDate(public_date)}</S.MusicItemDate>
      </S.Row>
    </S.MusicItem>
  );
};

export default React.memo(MusicItem);
