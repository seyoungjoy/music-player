import styled from '@emotion/styled';

import { BACKGROUND, TEXT } from '../../constants/color';

const S = {
  Wrapper: styled.li`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px 5px 5px;
    border-radius: 5px;
    color: ${TEXT.PRIMARY};
    font-size: 16px;
    &:hover {
      background-color: ${BACKGROUND.THIRD};
    }
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
    display: inline-block;
    min-width: 80px;
    margin-left: 30px;
    text-align: center;
  `,
  MusicItemDate: styled.span`
    margin-left: 30px;
  `,
  Row: styled.div`
    display: flex;
    align-items: center;
  `,
};

export default S;
