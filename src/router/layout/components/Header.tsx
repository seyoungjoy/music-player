/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { TEXT } from '../../../constants/color';

const headerCss = {
  header: css({
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: TEXT.SECONDARY,
    fontSize: '15px',
  }),
  nav: css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
  }),
  logo: css({
    marginLeft: '10px',
  }),
};

const Header = () => {
  return (
    <header css={headerCss.header}>
      <nav css={headerCss.nav}>
        <div css={headerCss.logo}>Youngs Music</div>
      </nav>
    </header>
  );
};

export default Header;
