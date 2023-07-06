import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { BACKGROUND, TEXT } from '../../constants/color';
import { ROUTER_PATH } from '../../router/router';
import { Album } from '../../types/album';

const musicCardItemCss = {
  cardWrapper: css({
    padding: '13px',
    borderRadius: '7px',
    backgroundColor: BACKGROUND.THIRD,
    cursor: 'pointer',
  }),
  imageWrapper: css({
    marginBottom: '7px',
    borderRadius: '7px',
    overflow: 'hidden',
  }),
  title: css({
    display: 'block',
    marginBottom: '5px',
    fontSize: '16px',
    fontWeight: 'normal',
    color: TEXT.PRIMARY,
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    wordBreak: 'break-all',
  }),
  description: css({
    fontSize: '14px',
    color: TEXT.SECONDARY,
    overflow: 'hidden',
    whiteSpace: 'normal',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical',
    wordBreak: 'keep-all',
  }),
};

const MusicCardItem = ({ title, moods, imgUrl, id }: Album) => {
  return (
    <li css={musicCardItemCss.cardWrapper}>
      <Link to={`${ROUTER_PATH.PLAYLIST}/${id}`}>
        <div css={musicCardItemCss.imageWrapper}>
          <img src={imgUrl} alt={title} />
        </div>
        <strong css={musicCardItemCss.title}>{title}</strong>
        <span css={musicCardItemCss.description}>{moods}</span>
      </Link>
    </li>
  );
};

export default MusicCardItem;
