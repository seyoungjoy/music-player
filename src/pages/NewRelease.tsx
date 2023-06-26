import { Suspense } from 'react';

import { MusicList, CardListTitle } from '../components';

import S from './Home.styled';

const NewRelease = () => {
  return (
    <S.Container>
      <CardListTitle title="New Music" />
      <Suspense fallback={<div>list loading...</div>}>
        <MusicList />
      </Suspense>
    </S.Container>
  );
};

export default NewRelease;
