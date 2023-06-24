import { AxiosError } from 'axios';

import {
  FetchResponse,
  MusicsResponse,
  MusicURLResponse,
} from './type/service';

import { httpRequest } from './index';

export const fetchMusicList = async (): Promise<
  FetchResponse<MusicsResponse>
> => {
  try {
    const response = await httpRequest({
      url: '/musics',
      method: 'GET',
    });
    return [null, response.data];
  } catch (err) {
    const error = err as AxiosError;
    if (error.response) {
      return [
        {
          message: error.response.statusText,
          statusCode: error.response.status,
        },
        null,
      ];
    } else if (error.request) {
      return [
        {
          message: 'Network error',
        },
        null,
      ];
    } else {
      return [
        {
          message: error.message,
        },
        null,
      ];
    }
  }
};

export const fetchMusicUrl = async (
  payload?: string,
): Promise<MusicURLResponse> => {
  const { data } = await httpRequest({
    url: `/musics/${payload}`,
    method: 'GET',
  });
  return data;
};
