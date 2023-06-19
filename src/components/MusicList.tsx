import MusicItem from './MusicItem';
import styled from '@emotion/styled';
import { Music } from '../types/music';
import { Audio } from '../hooks/useAudio';

const S = {
  MusicList: styled.div`
    display: grid;
    gap: 15px;
    margin: 20px 0;
  `,
};

type Props = {
  items: Music[];
  audioState: Audio;
};
const MusicList = ({ items, audioState }: Props) => {
  return (
    <S.MusicList>
      {items.map((item) => (
        <MusicItem item={item} key={item.id} audioState={audioState} />
      ))}
    </S.MusicList>
  );
};

export default MusicList;
