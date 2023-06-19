import { MusicList, MusicPlayer, Title } from '../components';
import { useAudio, useMusic } from '../hooks';

import { S } from './Main.styled';

const Main = () => {
  const { data, isLoading, error } = useMusic();
  const audioState = useAudio();

  if (!data || isLoading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>error...</div>;
  }

  return (
    <S.Container>
      <Title />
      <MusicList items={data.items} audioState={audioState} />
      <MusicPlayer audioState={audioState} />
    </S.Container>
  );
};

export default Main;
