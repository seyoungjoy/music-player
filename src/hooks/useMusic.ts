import { useQuery } from 'react-query';
import { fetchMusicList } from '../services';
import { MusicsResponse } from '../types/music';

const useMusic = () => {
  const { isLoading, error, data } = useQuery<MusicsResponse>(
    'musics',
    fetchMusicList,
  );

  return {
    isLoading,
    error,
    data,
  };
};

export default useMusic;
