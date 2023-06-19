import { Audio } from '../../hooks/useAudio';
import { Music } from '../../types/music';

import MusicItem from './MusicItem';
import { S } from './MusicList.styled';

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
