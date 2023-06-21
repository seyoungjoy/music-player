import { Title, MusicList, MusicItem, MusicPlayer } from '../components';
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

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error</div>;
  }

  return (
    <S.Container>
      <Title title="YOUNGS MUSIC" />
      <MusicList>
        {data.items.map((item) => (
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
    </S.Container>
  );
};

export default Main;
