import styled from '@emotion/styled';
import useAudio from '../hooks/useAudio';
import Spin from './Spin';

type Props = {
  isPlaying: boolean;
  onClick: () => void;
  loading?: boolean;
};

const S = {
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
const PlayToggleButton = ({ isPlaying, onClick, loading }: Props) => {
  if (loading) {
    return <Spin loading={true} />;
  }
  const handleClick = () => {
    onClick();
  };

  const buttonImg = isPlaying ? (
    <img src="/images/ic-small-line-stop-gray.png" alt="정지" />
  ) : (
    <img src="/images/ic-small-fill-play-gray.png" alt="재생" />
  );

  return (
    <S.Button type="button" onClick={handleClick}>
      {buttonImg}
    </S.Button>
  );
};

export default PlayToggleButton;
