import React from 'react';

import PlayIcon from '../../assets/images/ic-small-fill-play-gray.png';
import PauseIcon from '../../assets/images/ic-small-line-stop-gray.png';

import { S } from './PlayToggleButton.styled';
import Spin from './Spin';

type Props = {
  playing: boolean;
  loading?: boolean;
  onClick: () => void;
};

const PlayToggleButton = ({ playing, onClick, loading }: Props) => {
  if (loading) {
    return <Spin />;
  }

  const imgSrc = playing ? PauseIcon : PlayIcon;
  const imgAlt = playing ? '정지' : '재생';
  return (
    <S.Button type="button" onClick={onClick}>
      <img src={imgSrc} alt={imgAlt} />
    </S.Button>
  );
};

export default React.memo(PlayToggleButton);
