import { useQuery } from 'react-query';

import { fetchMusicList } from '../services';
import { MusicsResponse } from '../services';

import { queryKeys } from './constant/query';

const useMusic = () => {
  const useMusicList = () => {
    return useQuery<MusicsResponse>(queryKeys.MUSIC_LIST, fetchMusicList);
  };
  const { isLoading, error, data } = useMusicList();

  return {
    isLoading,
    error,
    data,
  };
};

export default useMusic;
