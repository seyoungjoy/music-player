import { Link } from 'react-router-dom';

import { MusicCardItem, MusicCardList, CardListTitle } from '../components';
import { ROUTER_PATH } from '../router/router';

const Home = () => {
  return (
    <div>
      <CardListTitle title="최신 음악" />
      {/*TODO: Mock data 교체*/}
      <MusicCardList>
        <Link to={ROUTER_PATH.NEW_RELEASE}>
          <MusicCardItem />
        </Link>
      </MusicCardList>
    </div>
  );
};

export default Home;
