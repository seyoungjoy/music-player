import { Suspense } from 'react';

import { MusicList, CardListTitle } from '../components';
import RetryErrorBoundary from '../shared/RetryErrorBoundary';

import S from './Home.styled';

const NewRelease = () => {
  return (
    <S.Container>
      <CardListTitle title="New Music" />
      <RetryErrorBoundary>
        <Suspense
          fallback={<div style={{ color: '#ffffff' }}>list loading...</div>}
        >
          <MusicList />
        </Suspense>
      </RetryErrorBoundary>
    </S.Container>
  );
};

export default NewRelease;
