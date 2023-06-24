import { Title, MusicList, MusicItem, MusicPlayer } from '../components';
import MusicErrorBoundary from '../components/MusicErrorBoundary';
import MusicSuspense from '../components/MusicSuspense';
import { useAudio, useMusic } from '../hooks';

import { S } from './Main.styled';

const Main = () => {
  const { data, isLoading, error } = useMusic();
  const audioState = useAudio();
  const {
    playing,
    loading,
    currentMusic,
    handlePlayToggleClick,
    handlePauseToggleClick,
  } = audioState;

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
          <MusicPlayer {...audioState} />
        </MusicSuspense>
      </MusicErrorBoundary>
    </S.Container>
  );
};

export default Main;
