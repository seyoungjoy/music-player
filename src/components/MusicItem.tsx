import React from 'react';
import styled from '@emotion/styled';
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

const MusicItem = () => {
  return (
    <S.MusicItem>
      <S.Row>
        <PlayToggleButton isPlaying={false} />
        <S.MusicItemTitle>Happy Days</S.MusicItemTitle>
      </S.Row>
      <S.Row>
        <S.MusicItemMood>#즐거운 #행복한</S.MusicItemMood>
        <S.MusicItemGenre>#재즈</S.MusicItemGenre>
        <S.MusicItemDate>2022.11.11</S.MusicItemDate>
      </S.Row>
    </S.MusicItem>
  );
};

export default MusicItem;
