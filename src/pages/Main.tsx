import styled from '@emotion/styled';
import { MusicList, MusicPlayer, Title } from '../components';
import useMusic from '../hooks/useMusic';
import useAudio from '../hooks/useAudio';

const S = {
  Main: styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 80px;
  `,
};

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
    <S.Main>
      <Title />
      <MusicList items={data.items} audioState={audioState} />
      <MusicPlayer audioState={audioState} />
    </S.Main>
  );
};

export default Main;
