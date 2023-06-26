import React from 'react';

import { AudioPlayer } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { formatStringDateToDottedType } from '../../utils';
import { MusicMood, PlayToggleButton } from '../index';

import S from './MusicItem.styled';

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
    <S.Wrapper>
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
        <S.MusicItemDate>
          {formatStringDateToDottedType(public_date)}
        </S.MusicItemDate>
      </S.Row>
    </S.Wrapper>
  );
};

export default React.memo(MusicItem);
