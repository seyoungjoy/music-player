import styled from '@emotion/styled';
import { Link, Outlet } from 'react-router-dom';

import { BACKGROUND, TEXT } from '../../constants/color';
import { ROUTER_PATH } from '../router';

const S = {
  Layout: styled.div`
    display: flex;
  `,
  Aside: styled.aside`
    flex: 0 0 200px;
    color: ${TEXT.PRIMARY};
  `,
  Ul: styled.ul`
    padding: 10px 12px;
    border-radius: 8px;
    background-color: ${BACKGROUND.PRIMARY};
  `,
  Li: styled.li`
    padding: 10px 10px;
    font-size: 15px;
    cursor: pointer;
  `,
};

const Layout = () => {
  return (
    <S.Layout>
      <S.Aside>
        <S.Ul>
          <S.Li>
            <Link to={ROUTER_PATH.HOME}>홈</Link>
          </S.Li>
          <S.Li>
            <Link to={ROUTER_PATH.SEARCH}>검색하기</Link>
          </S.Li>
          <S.Li>
            <Link to={ROUTER_PATH.LIBRARY}>내 라이브러리</Link>
          </S.Li>
        </S.Ul>
      </S.Aside>

      <div>
        <header>
          <nav>
            <ul>
              <li>가입하기</li>
              <li>로그인하기</li>
            </ul>
          </nav>
        </header>
        <main>
          <Outlet />
        </main>
      </div>
    </S.Layout>
  );
};

export default Layout;
