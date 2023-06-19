import React from 'react';

import { Audio } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { PlayToggleButton } from '../index';

import { S } from './MusicItem.styled';

type Props = MusicItem & AudioItem;

type MusicItem = {
  item: Music;
};

type AudioItem = Pick<
  Audio,
  'handleItemToggleClick' | 'handlePauseClick' | 'music' | 'playing' | 'loading'
>;

const MusicItem = ({
  item,
  handleItemToggleClick,
  handlePauseClick,
  music,
  playing,
  loading,
}: Props) => {
  const { id, title, moods, genre, public_date } = item;

  const play = () => {
    if (handleItemToggleClick) {
      handleItemToggleClick(id, title);
    }
  };

  const pause = () => {
    if (handlePauseClick) {
      handlePauseClick();
    }
  };
  const IS_CURRENT_MUSIC = id === music.id;
  const IS_NOT_CURRENT_MUSIC = id !== music.id;
  const btn = () => {
    if (IS_NOT_CURRENT_MUSIC) {
      return <PlayToggleButton isPlaying={false} onClick={play} />;
    }

    if (IS_CURRENT_MUSIC) {
      if (playing) {
        return <PlayToggleButton isPlaying={playing} onClick={pause} />;
      } else {
        return (
          <PlayToggleButton
            isPlaying={playing}
            onClick={play}
            loading={loading}
          />
        );
      }
    }
  };

  return (
    <S.MusicItem>
      <S.Row>
        {btn()}
        <S.MusicItemTitle>{title}</S.MusicItemTitle>
      </S.Row>
      <S.Row>
        <S.MusicItemMood>{moods.map((mood) => '#' + mood)}</S.MusicItemMood>
        <S.MusicItemGenre>{genre}</S.MusicItemGenre>
        <S.MusicItemDate>{public_date}</S.MusicItemDate>
      </S.Row>
    </S.MusicItem>
  );
};

export default React.memo(MusicItem);
