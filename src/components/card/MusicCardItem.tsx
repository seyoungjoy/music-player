/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import MOCK_THUMB from '../../assets/images/mock_thumbnail.jpg';
import { BACKGROUND, TEXT } from '../../constants/color';

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

const MusicCardItem = () => {
  return (
    <li css={musicCardItemCss.cardWrapper}>
      <div css={musicCardItemCss.imageWrapper}>
        <img src={MOCK_THUMB} alt="mock-thumbnail" />
      </div>
      <strong css={musicCardItemCss.title}>New Music</strong>
      <span css={musicCardItemCss.description}>
        매주 업데이트 되는 국내의 신곡들을 만나보세요.
      </span>
    </li>
  );
};

export default MusicCardItem;
