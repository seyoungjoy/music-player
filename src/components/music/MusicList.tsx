import { css } from '@emotion/react';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { useAudio } from '../../hooks';
import { queryKeys } from '../../hooks/constant/query';
import { fetchPlaylist } from '../../services';
import { CardListTitle, MusicItem, MusicPlayer } from '../index';

const musicListCss = css({
  display: 'flex',
  flexDirection: 'column',
  margin: 0,
});

const MusicList = () => {
  const params = useParams();
  const playlistId = params.id ?? '';
  const { data, isError } = useQuery(
    [queryKeys.PLAYLIST, playlistId],
    () => fetchPlaylist(playlistId),
    {
      enabled: !!playlistId,
      retry: 0,
      useErrorBoundary: false,
    },
  );

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
      <CardListTitle title="New Music" />
      {isError && <div>존재하지 않는 플레이리스트 입니다.</div>}
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

export default React.memo(MusicList);
