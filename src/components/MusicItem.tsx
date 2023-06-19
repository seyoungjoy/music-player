import styled from '@emotion/styled';

import { Audio } from '../hooks/useAudio';
import { Music } from '../types/music';

import PlayToggleButton from './PlayToggleButton';

const S = {
  MusicItem: styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 20px;
    border: 1px solid #000;
    border-radius: 5px;
    color: #000;
  `,
  MusicItemPlayToggle: styled.div`
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    & > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      height: 80%;
    }
  `,
  MusicItemTitle: styled.span`
    margin-left: 20px;
  `,
  MusicItemMood: styled.span``,
  MusicItemGenre: styled.span`
    margin-left: 30px;
  `,
  MusicItemDate: styled.span`
    margin-left: 30px;
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
  `,
};
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
