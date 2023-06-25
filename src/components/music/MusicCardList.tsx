import { PropsWithChildren, ReactNode } from 'react';

import S from './MusicCardList.styled';

const MusicCardList = ({ children }: PropsWithChildren<ReactNode>) => {
  return <S.Wrapper>{children}</S.Wrapper>;
};

export default MusicCardList;
