import { css } from '@emotion/react';
import { PropsWithChildren, ReactNode } from 'react';

const musicCardListCss = css({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(130px, auto))',
  gap: '10px',
});

const MusicCardList = ({ children }: PropsWithChildren<ReactNode>) => {
  return <ul css={musicCardListCss}>{children}</ul>;
};

export default MusicCardList;
