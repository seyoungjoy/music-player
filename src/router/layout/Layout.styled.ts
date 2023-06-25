import styled from '@emotion/styled';

import { BACKGROUND, COLOR, TEXT } from '../../constants/color';

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
    padding: 10px 0;
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

export default S;
