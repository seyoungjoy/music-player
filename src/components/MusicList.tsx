import MusicItem from './MusicItem';
import styled from '@emotion/styled';
import { Music } from '../types/music';

const S = {
  MusicList: styled.div`
    display: grid;
    gap: 15px;
    margin: 20px 0;
  `,
};

type Props = {
  items: Music[];
};
const MusicList = ({ items }: Props) => {
  return (
    <S.MusicList>
      {items.map((item) => (
        <MusicItem {...item} key={item.id} />
      ))}
    </S.MusicList>
  );
};

export default MusicList;
