import React from 'react';
import styled from '@emotion/styled';
import PlayToggleButton from './PlayToggleButton';
import { Music } from '../types/music';
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
type Props = Music;

const MusicItem = ({ id, title, moods, genre, public_date }: Props) => {
  return (
    <S.MusicItem>
      <S.Row>
        <PlayToggleButton isPlaying={false} />
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
