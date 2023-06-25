import styled from '@emotion/styled';

export type ButtonSize = 'small' | 'large';

type Props = {
  size: ButtonSize;
};

const S = {
  Button: styled.button<Props>`
    position: relative;
    width: ${(props) => (props.size === 'small' ? '20px' : '30px')};
    height: ${(props) => (props.size === 'small' ? '20px' : '30px')};
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
export default S;
