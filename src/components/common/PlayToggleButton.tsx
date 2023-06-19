import { S } from './PlayToggleButton.styled';
import Spin from './Spin';

type Props = {
  isPlaying: boolean;
  onClick: () => void;
  loading?: boolean;
};

const PlayToggleButton = ({ isPlaying, onClick, loading }: Props) => {
  if (loading) {
    return <Spin />;
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
