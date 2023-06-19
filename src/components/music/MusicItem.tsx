import { Audio } from '../../hooks/useAudio';
import { Music } from '../../types/music';
import { PlayToggleButton } from '../index';

import { S } from './MusicItem.styled';

type Props = {
  item: Music;
  audioState: Audio;
};

const MusicItem = ({ item, audioState }: Props) => {
  const { id, title, moods, genre, public_date } = item;

  const play = () => {
    if (audioState.handleItemToggleClick) {
      audioState.handleItemToggleClick(id, title);
    }
  };

  const pause = () => {
    if (audioState.handlePauseClick) {
      audioState.handlePauseClick();
    }
  };
  const btn = () => {
    if (id !== audioState.music.id) {
      return <PlayToggleButton isPlaying={false} onClick={play} />;
    }
    if (id === audioState.music.id) {
      if (audioState.playing) {
        return (
          <PlayToggleButton isPlaying={audioState.playing} onClick={pause} />
        );
      } else {
        return (
          <PlayToggleButton
            isPlaying={audioState.playing}
            onClick={play}
            loading={audioState.loading}
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

export default MusicItem;
