import { Title } from './components';
import MusicList from './components/MusicList';
import MusicPlayer from './components/MusicPlayer';
import styled from '@emotion/styled';

const S = {
  App: styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 80px;
  `,
};

function App() {
  return (
    <S.App>
      <Title />
      <MusicList />
      <MusicPlayer />
    </S.App>
  );
}

export default App;
