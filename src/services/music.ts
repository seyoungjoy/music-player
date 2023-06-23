import { AxiosError } from 'axios';

import { Music } from '../types/music';

import httpRequest from './httpRequest';

export type ErrorResponse = {
  message: string;
  statusCode?: number;
};

type FetchResponse<R> = [ErrorResponse, null] | [null, R];

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};

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
    const error = (await err) as AxiosError;
    if (error.response) {
      return [
        {
          message: error.response.statusText,
          statusCode: error.response.status,
        },
        null,
      ];
    } else {
      console.log('Error', error.message);
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
