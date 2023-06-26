import { Link } from 'react-router-dom';

import { MusicCardItem, MusicCardList, CardListTitle } from '../components';
import { ROUTER_PATH } from '../router';

import S from './Home.styled';

const Home = () => {
  return (
    <S.Container>
      <CardListTitle title="최신 음악" />
      {/*TODO: Mock data 교체*/}
      <MusicCardList>
        <Link to={ROUTER_PATH.NEW_RELEASE}>
          <MusicCardItem />
        </Link>
      </MusicCardList>
    </S.Container>
  );
};

export default Home;
