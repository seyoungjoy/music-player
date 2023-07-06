import { css } from '@emotion/react';

import { useAlbum } from '../../hooks';
import { MusicCardItem } from '../index';

const musicCardListCss = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, auto))',
  gap: '10px',
});

const MusicCardList = () => {
  const { data, isError } = useAlbum();

  const renderMusicItem = () => {
    if (isError) {
      return <div>데이터 요청에 실패했습니다.</div>;
    } else {
      return data?.items.map((item) => (
        <MusicCardItem key={item.id} {...item} />
      ));
    }
  };

  return <ul css={musicCardListCss}>{renderMusicItem()}</ul>;
};

export default MusicCardList;
