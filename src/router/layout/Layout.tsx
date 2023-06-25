import { Link, Outlet } from 'react-router-dom';

import { ROUTER_PATH } from '../router';

import S from './Layout.styled';

const Layout = () => {
  return (
    <S.Layout>
      <S.Aside>
        <S.Ul>
          <Link to={ROUTER_PATH.HOME}>
            <S.Li>홈</S.Li>
          </Link>
          <S.Li>검색하기</S.Li>
          <S.Li>내 라이브러리</S.Li>
        </S.Ul>
      </S.Aside>

      <S.Main>
        <S.Header>
          <S.Nav>
            <S.Logo>Youngs Music</S.Logo>
            {/*<div>*/}
            {/*  <S.Button>가입하기</S.Button>*/}
            {/*  <S.Button>로그인하기</S.Button>*/}
            {/*</div>*/}
          </S.Nav>
        </S.Header>

        <S.Content>
          <Outlet />
        </S.Content>
      </S.Main>
    </S.Layout>
  );
};

export default Layout;
