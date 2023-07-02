/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { BACKGROUND, TEXT } from '../../../constants/color';
import { ROUTER_PATH } from '../../router';

import SideNavigationLink from './SideNavigationLink';

const sideNavigationCss = {
  aside: css`
    flex: 0 0 200px;
    color: ${TEXT.PRIMARY};
  `,
  ul: css`
    padding: 10px 12px;
    border-radius: 8px;
    background-color: ${BACKGROUND.PRIMARY};
  `,
  li: css`
    padding: 10px 10px;
    font-size: 15px;
  `,
};

const SideNavigation = () => {
  return (
    <aside css={sideNavigationCss.aside}>
      <ul css={sideNavigationCss.ul}>
        <li css={sideNavigationCss.li}>
          <SideNavigationLink path={ROUTER_PATH.HOME}>홈</SideNavigationLink>
        </li>

        <li css={sideNavigationCss.li}>검색하기</li>
        <li css={sideNavigationCss.li}>내 라이브러리</li>
      </ul>
    </aside>
  );
};

export default SideNavigation;
