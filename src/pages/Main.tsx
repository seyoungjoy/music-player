import { useEffect, useState } from 'react';

import { Title, MusicList, MusicItem, MusicPlayer } from '../components';
import MusicErrorBoundary from '../components/MusicErrorBoundary';
import MusicSuspense from '../components/MusicSuspense';
import { useAudio } from '../hooks';
import { ErrorResponse, fetchMusicList, MusicsResponse } from '../services';

import { S } from './Main.styled';

export type ErrorType = {
  isError: boolean;
  errorInfo?: ErrorResponse;
};

const Main = () => {
  const [data, setData] = useState<MusicsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>({ isError: false });

  const audioState = useAudio();
  const {
    playing,
    loading,
    currentMusic,
    handlePlayToggleClick,
    handlePauseToggleClick,
  } = audioState;

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      setIsLoading(true);
      const [error, data] = await fetchMusicList();

      if (isCancelled) {
        return;
      }

      if (error) {
        setIsLoading(false);
        setError({ isError: true, errorInfo: error });
        return;
      }

      setData(data);
      setIsLoading(false);
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <S.Container>
      <Title title="YOUNGS MUSIC" />

      <MusicErrorBoundary error={error}>
        <MusicSuspense loading={isLoading}>
          <MusicList>
            {data?.items.map((item) => (
              <MusicItem
                key={item.id}
                item={item}
                playing={playing}
                loading={loading}
                currentMusic={currentMusic}
                handlePlayToggleClick={handlePlayToggleClick}
                handlePauseToggleClick={handlePauseToggleClick}
              />
            ))}
          </MusicList>
        </MusicSuspense>
      </MusicErrorBoundary>

      <MusicPlayer {...audioState} />
    </S.Container>
  );
};

export default Main;
