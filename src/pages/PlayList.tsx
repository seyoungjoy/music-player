import { Suspense } from 'react';

import { MusicList } from '../components';

const PlayList = () => {
  return (
    <Suspense
      fallback={<div style={{ color: '#ffffff' }}>list loading...</div>}
    >
      <MusicList />
    </Suspense>
  );
};

export default PlayList;
