import styled from '@emotion/styled';

export const S = {
  MusicPlayerWrapper: styled.div<{ visible: boolean }>`
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background-color: #ffffff;
    border-top: 1px solid #000;
    transform: ${(props) =>
      props.visible ? 'translate3D(0,0,0)' : 'translate3D(0,100%,0)'};
    transition: transform 200ms ease;
  `,
  MusicPlayerControl: styled.div`
    max-width: 1020px;
    height: 100%;
    margin: 0 auto;
    padding: 0 80px;
    display: flex;
    align-items: center;
  `,
  MusicPlayerTitle: styled.div`
    margin: 0 40px;
  `,
  MusicPlayerProgressBar: styled.div`
    display: flex;
    align-items: center;
  `,
  MusicPlayerSlider: styled.div`
    margin: 0 10px;
  `,
  MusicPlayerCurrentTime: styled.span``,
  MusicPlayerDuration: styled.span``,
};
