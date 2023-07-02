/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { PropsWithChildren, ReactNode } from 'react';
import { Link } from 'react-router-dom';

const linkCss = css({
  display: 'block',
  '&:hover': {
    textDecoration: 'underline',
  },
});

type Props = { path: string; children: PropsWithChildren<ReactNode> };

const SideNavigationLink = ({ path, children }: Props) => {
  return (
    <Link to={path} css={linkCss}>
      {children}
    </Link>
  );
};

export default SideNavigationLink;
