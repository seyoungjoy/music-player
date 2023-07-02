/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { PropsWithChildren, ReactNode } from 'react';

const containerCss = css({
  padding: '20px 20px',
});
const Container = ({ children }: PropsWithChildren<ReactNode>) => {
  return <div css={containerCss}>{children}</div>;
};

export default Container;
