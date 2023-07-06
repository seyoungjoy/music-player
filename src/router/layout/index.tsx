import { css } from '@emotion/react';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { BACKGROUND } from '../../constants/color';
import { Header, SideNavigation, Container } from '../components';

const layoutCss = {
  layout: css({
    display: 'flex',
    gap: '15px',
    margin: '15px',
  }),
  main: css({
    flex: '1 1 auto',
    borderRadius: '8px',
    backgroundColor: BACKGROUND.SECONDARY,
  }),
};

const Layout = () => {
  return (
    <div css={layoutCss.layout}>
      <SideNavigation />
      <main css={layoutCss.main}>
        <Header />
        <Container>
          <Suspense fallback={<div>loading...</div>}>
            <Outlet />
          </Suspense>
        </Container>
      </main>
    </div>
  );
};

export default Layout;
