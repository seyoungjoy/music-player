import React from 'react';

import { S } from './CardListTitle.styled';
type Props = {
  title: string;
};
const CardListTitle = ({ title }: Props) => {
  return <S.H1>{title}</S.H1>;
};

export default React.memo(CardListTitle);
