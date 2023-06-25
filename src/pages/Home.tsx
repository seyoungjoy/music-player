import { PageTitle } from '../components/common';
import MusicCardItem from '../components/music/MusicCardItem';
import MusicCardList from '../components/music/MusicCardList';

import { S } from './Home.styled';

const Home = () => {
  return (
    <S.Container>
      <PageTitle title="최신 음악" />
      <MusicCardList>
        <MusicCardItem />
      </MusicCardList>
    </S.Container>
  );
};

export default Home;
