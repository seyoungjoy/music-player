/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import React from 'react';

import { TEXT } from '../../constants/color';

const cardListTitleCss = css({
  marginBottom: '20px',
  fontWeight: 'bold',
  fontSize: '20px',
  color: TEXT.PRIMARY,
});

type Props = {
  title: string;
};

const CardListTitle = ({ title }: Props) => {
  return <h1 css={cardListTitleCss}>{title}</h1>;
};

export default React.memo(CardListTitle);
