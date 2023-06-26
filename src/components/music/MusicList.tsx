import { memo } from 'react';

import { useAudio, useMusic } from '../../hooks';
import { MusicItem, MusicPlayer } from '../index';

import S from './MusicList.styled';

const MusicList = () => {
  const { data } = useMusic();
  const audioState = useAudio();
  const {
    playing,
    loading,
    playingMusic,
    loadAndPlayMusic,
    playAudio,
    pauseAudio,
  } = audioState;
  return (
    <>
      <S.MusicList>
        {data?.items.map((item) => (
          <MusicItem
            key={item.id}
            item={item}
            playing={playing}
            loading={loading}
            playingMusic={playingMusic}
            loadAndPlayMusic={loadAndPlayMusic}
            playAudio={playAudio}
            pauseAudio={pauseAudio}
          />
        ))}
      </S.MusicList>
      <MusicPlayer {...audioState} />
    </>
  );
};

export default memo(MusicList);
