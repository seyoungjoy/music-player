import React from 'react';

import PlayIcon from '../../assets/images/ic-small-fill-play-gray.png';
import PauseIcon from '../../assets/images/ic-small-line-stop-gray.png';
import { Spin } from '../common';

type Props = {
  playing: boolean;
  loading?: boolean;
  onClick: () => void;
  disabled?: boolean;
  size?: ButtonSize;
};

type ButtonSize = 'sm' | 'md';

const sizeStyles = {
  sm: {
    width: '20px',
    height: '20px',
  },
  md: {
    width: '30px',
    height: '30px',
  },
};

const PlayToggleButton = ({
  playing,
  onClick,
  loading,
  disabled,
  size = 'sm',
}: Props) => {
  if (loading) {
    return <Spin />;
  }

  const imgSrc = playing ? PauseIcon : PlayIcon;
  const imgAlt = playing ? '정지' : '재생';
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled ?? false}
      css={{
        position: 'relative',
        cursor: 'pointer',
        ...sizeStyles[size],
        '& > img': {
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate3d(-50%, -50%, 0)',
          height: '80%',
        },
      }}
    >
      <img src={imgSrc} alt={imgAlt} />
    </button>
  );
};

export default React.memo(PlayToggleButton);
