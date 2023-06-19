import { Music } from '../types/music';

import httpRequest from './httpRequest';

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};

export const fetchMusicList = async (): Promise<MusicsResponse> => {
  const { data } = await httpRequest({
    url: '/musics',
    method: 'GET',
  });
  return data;
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
