import { Suspense } from 'react';

import { MusicCardList, CardListTitle } from '../components';

const Home = () => {
  return (
    <div>
      <CardListTitle title="앨범 리스트" />
      <Suspense fallback={<div>loading...</div>}>
        <MusicCardList />
      </Suspense>
    </div>
  );
};

export default Home;
