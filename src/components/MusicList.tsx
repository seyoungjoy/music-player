import MusicItem from './MusicItem';
import styled from '@emotion/styled';

const S = {
  MusicList: styled.div`
    display: grid;
    gap: 15px;
    margin: 20px 0;
  `,
};

const MusicList = () => {
  return (
    <S.MusicList>
      <MusicItem />
      <MusicItem />
      <MusicItem />
    </S.MusicList>
  );
};

export default MusicList;
