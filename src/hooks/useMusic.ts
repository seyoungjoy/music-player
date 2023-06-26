import { useQuery } from 'react-query';

import { fetchMusicList } from '../services';

import { queryKeys } from './constant/query';

const useMusic = () => {
  const useMusicData = () => {
    return useQuery(queryKeys.MUSIC_LIST, fetchMusicList);
  };

  const { data } = useMusicData();

  return {
    data,
  };
};

export default useMusic;
