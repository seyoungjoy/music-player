import { css } from '@emotion/react';
import { memo } from 'react';

import { useAudio, useMusic } from '../../hooks';
import { MusicItem, MusicPlayer } from '../index';

const musicListCss = css({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
});

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
      <ul css={musicListCss}>
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
      </ul>
      <MusicPlayer {...audioState} />
    </>
  );
};

export default memo(MusicList);
