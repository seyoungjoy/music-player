import { useQuery } from 'react-query';

import { fetchMusicList } from '../services';
import { MusicsResponse } from '../services';

import { queryKeys } from './constant/query';

const useMusic = () => {
  const { isLoading, error, data } = useQuery<MusicsResponse>(
    queryKeys.MUSIC_LIST,
    fetchMusicList,
  );

  return {
    isLoading,
    error,
    data,
  };
};

export default useMusic;
