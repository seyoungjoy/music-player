import styled from '@emotion/styled';
import { MusicList, MusicPlayer, Title } from '../components';
import { useQuery } from 'react-query';
import axiosInstance from '../apiClient/axiosInstance';
import { MusicsResponse } from '../types/music';

const S = {
  Main: styled.div`
    max-width: 1020px;
    margin: 0 auto;
    padding: 20px 80px;
  `,
};

const Main = () => {
  const { isLoading, error, data } = useQuery<MusicsResponse>('musics', () =>
    axiosInstance.get('/musics').then(({ data }) => data),
  );
  if (isLoading || !data) return <div>로딩중</div>;
  if (error) return <div>에러</div>;
  return (
    <S.Main>
      <Title />
      <MusicList items={data.items} />
      <MusicPlayer />
    </S.Main>
  );
};

export default Main;
