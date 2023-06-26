import {
  MusicItem,
  MusicList,
  MusicPlayer,
  CardListTitle,
} from '../components';
import ErrorBoundary from '../components/ErrorBoundary';
import Suspense from '../components/Suspense';
import { useAudio, useMusic } from '../hooks';

import S from './Home.styled';

const NewRelease = () => {
  const { data, isLoading, error } = useMusic();
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
    <S.Container>
      <CardListTitle title="New Music" />

      <ErrorBoundary error={error}>
        <Suspense loading={isLoading}>
          <MusicList>
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
          </MusicList>
          <MusicPlayer {...audioState} />
        </Suspense>
      </ErrorBoundary>
    </S.Container>
  );
};

export default NewRelease;
