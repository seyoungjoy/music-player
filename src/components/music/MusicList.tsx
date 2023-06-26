import React, { PropsWithChildren, ReactNode } from 'react';

import S from './MusicList.styled';

const MusicList = ({ children }: PropsWithChildren<ReactNode>) => {
  return <S.MusicList>{children}</S.MusicList>;
};

export default React.memo(MusicList);
