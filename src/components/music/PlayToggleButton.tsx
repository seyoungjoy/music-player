import React from 'react';

import PlayIcon from '../../assets/images/ic-small-fill-play-gray.png';
import PauseIcon from '../../assets/images/ic-small-line-stop-gray.png';
import { Spin } from '../common';

import S, { ButtonSize } from './PlayToggleButton.styled';

type Props = {
  playing: boolean;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  size?: ButtonSize;
};

const PlayToggleButton = ({
  playing,
  onClick,
  loading,
  disabled,
  size,
}: Props) => {
  if (loading) {
    return <Spin />;
  }

  const imgSrc = playing ? PauseIcon : PlayIcon;
  const imgAlt = playing ? '정지' : '재생';
  return (
    <S.Button
      type="button"
      onClick={onClick}
      disabled={disabled ?? false}
      size={size ?? 'small'}
    >
      <img src={imgSrc} alt={imgAlt} />
    </S.Button>
  );
};

export default React.memo(PlayToggleButton);
