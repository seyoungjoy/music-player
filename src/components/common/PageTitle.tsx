import React from 'react';

import { S } from './PageTitle.styled';
type Props = {
  title: string;
};
const PageTitle = ({ title }: Props) => {
  return <S.H1>{title}</S.H1>;
};

export default React.memo(PageTitle);
