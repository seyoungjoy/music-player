import { useQuery } from 'react-query';

import { fetchAlbumList } from '../services';

import { queryKeys } from './constant/query';

const useAlbum = () => {
  const useAlbumData = () => {
    return useQuery(queryKeys.ALBUM_LIST, fetchAlbumList, {
      useErrorBoundary: false,
    });
  };

  const { data, isError, error } = useAlbumData();

  return {
    data,
    isError,
    error,
  };
};

export default useAlbum;
