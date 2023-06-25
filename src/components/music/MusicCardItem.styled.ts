import styled from '@emotion/styled';

import { BACKGROUND, TEXT } from '../../constants/color';

const S = {
  Wrapper: styled.li`
    padding: 13px;
    border-radius: 7px;
    background-color: ${BACKGROUND.THIRD};
  `,
  ImageWrapper: styled.div`
    margin-bottom: 7px;
    border-radius: 7px;
    overflow: hidden;
  `,
  CardTitle: styled.strong`
    display: block;
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: normal;
    color: ${TEXT.PRIMARY};
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    word-break: break-all;
  `,
  CardDescription: styled.span`
    font-size: 14px;
    color: ${TEXT.SECONDARY};
    overflow: hidden;
    white-space: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: keep-all;
  `,
};

export default S;
