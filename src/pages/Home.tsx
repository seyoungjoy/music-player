import { PageTitle } from '../components/common';
import { MusicItem, MusicList, MusicPlayer } from '../components/music';
import MusicErrorBoundary from '../components/MusicErrorBoundary';
import MusicSuspense from '../components/MusicSuspense';
import { useAudio, useMusic } from '../hooks';

import { S } from './Home.styled';

const Home = () => {
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
      <PageTitle title="YOUNGS MUSIC" />

      <MusicErrorBoundary error={error}>
        <MusicSuspense loading={isLoading}>
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
        </MusicSuspense>
      </MusicErrorBoundary>
    </S.Container>
  );
};

export default Home;
