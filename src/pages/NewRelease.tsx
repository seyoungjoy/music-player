import { Suspense } from 'react';

import { MusicList, CardListTitle } from '../components';
import RetryErrorBoundary from '../shared/RetryErrorBoundary';

const NewRelease = () => {
  return (
    <div>
      <CardListTitle title="New Music" />
      <RetryErrorBoundary>
        <Suspense
          fallback={<div style={{ color: '#ffffff' }}>list loading...</div>}
        >
          <MusicList />
        </Suspense>
      </RetryErrorBoundary>
    </div>
  );
};

export default NewRelease;
