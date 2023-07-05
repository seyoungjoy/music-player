import { css } from '@emotion/react';

import { useAlbum } from '../../hooks';
import { MusicCardItem } from '../index';

const musicCardListCss = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, auto))',
  gap: '10px',
});

const MusicCardList = () => {
  const { data } = useAlbum();
  return (
    <ul css={musicCardListCss}>
      {data?.items.map((item) => (
        <MusicCardItem key={item.id} {...item} />
      ))}
    </ul>
  );
};

export default MusicCardList;
