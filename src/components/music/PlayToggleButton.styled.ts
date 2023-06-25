import styled from '@emotion/styled';

export const S = {
  Button: styled.button`
    position: relative;
    width: 30px;
    height: 30px;
    cursor: pointer;
    & > img {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate3d(-50%, -50%, 0);
      height: 80%;
    }
  `,
};
