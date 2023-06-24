import { useEffect, useState } from 'react';

import { ErrorType } from '../components/MusicErrorBoundary';
import { fetchMusicList } from '../services';
import { MusicsResponse } from '../services/type/service';

const useMusic = () => {
  const [data, setData] = useState<MusicsResponse>();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<ErrorType>({ isError: false });

  useEffect(() => {
    let isCancelled = false;
    (async () => {
      setIsLoading(true);
      const [error, data] = await fetchMusicList();

      if (isCancelled) {
        return;
      }

      if (error) {
        setIsLoading(false);
        setError({ isError: true, errorInfo: error });
        return;
      }

      setData(data);
      setIsLoading(false);
    })();

    return () => {
      isCancelled = true;
    };
  }, []);

  return {
    data,
    isLoading,
    error,
  };
};

export default useMusic;
