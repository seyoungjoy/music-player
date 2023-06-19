import { MusicList, MusicPlayer, Title } from '../components';
import MusicItem from '../components/music/MusicItem';
import { useAudio, useMusic } from '../hooks';

import { S } from './Main.styled';

const Main = () => {
  const { data, isLoading, error } = useMusic();
  const audioState = useAudio();
  const { handleItemToggleClick, handlePauseClick, music, playing, loading } =
    audioState;

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <S.Container>
      <Title />
      <MusicList>
        {data.items.map((item) => (
          <MusicItem
            key={item.id}
            item={item}
            playing={playing}
            loading={loading}
            music={music}
            handlePauseClick={handlePauseClick}
            handleItemToggleClick={handleItemToggleClick}
          />
        ))}
      </MusicList>
      <MusicPlayer {...audioState} />
    </S.Container>
  );
};

export default Main;
