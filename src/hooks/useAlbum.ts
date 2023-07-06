import { useQuery } from 'react-query';

import { fetchAlbumList } from '../services';

import { queryKeys } from './constant/query';

const useAlbum = () => {
  const useAlbumData = () => {
    return useQuery(queryKeys.ALBUM_LIST, fetchAlbumList);
  };

  const { data } = useAlbumData();

  return {
    data,
  };
};

export default useAlbum;
