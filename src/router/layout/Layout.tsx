import styled from '@emotion/styled';
import { Link, Outlet } from 'react-router-dom';

import { MusicPlayer } from '../../components/music';
import { BACKGROUND, COLOR, TEXT } from '../../constants/color';
import { useAudio } from '../../hooks';
import { ROUTER_PATH } from '../router';

const S = {
  Layout: styled.div`
    display: flex;
    gap: 15px;
    margin: 15px;
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
  Main: styled.main`
    flex: 1 1 auto;
    border-radius: 8px;
    background-color: ${BACKGROUND.SECONDARY};
  `,
  Content: styled.div`
    padding: 20px 20px;
  `,
  Header: styled.header`
    background-color: rgba(0, 0, 0, 0.5);
    color: ${TEXT.SECONDARY};
    font-size: 15px;
  `,
  Nav: styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 7px 0;
  `,
  Logo: styled.div`
    margin-left: 10px;
  `,
  Button: styled.button`
    padding: 5px 15px;
    margin: 0 10px;
    border-radius: 20px;
    background-color: ${COLOR.LIGHT};
  `,
};

const Layout = () => {
  const audioState = useAudio();

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

      <S.Main>
        <S.Header>
          <S.Nav>
            <S.Logo>Youngs Music</S.Logo>
            <div>
              <S.Button>가입하기</S.Button>
              <S.Button>로그인하기</S.Button>
            </div>
          </S.Nav>
        </S.Header>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Main>
      <MusicPlayer {...audioState} />
    </S.Layout>
  );
};

export default Layout;
