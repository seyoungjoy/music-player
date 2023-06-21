import React from 'react';

import { S } from './Title.styled';
type Props = {
  title: string;
};
const Title = ({ title }: Props) => {
  return <S.H1>{title}</S.H1>;
};

export default React.memo(Title);
