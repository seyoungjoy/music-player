import { Music } from '../../types/music';
import { axiosInstance } from '../index';

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};

export const fetchMusicList = async (): Promise<MusicsResponse> => {
  const response = await axiosInstance({
    url: '/musics',
    method: 'GET',
  });
  return response.data;
};

export const fetchMusicUrl = async (
  payload?: string,
): Promise<MusicURLResponse> => {
  const { data } = await axiosInstance({
    url: `/musics/${payload}`,
    method: 'GET',
  });
  return data;
};
