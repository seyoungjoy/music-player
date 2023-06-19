import httpRequest from '../apiClient/httpRequest';
import { AxiosResponse } from 'axios';
import { MusicURLResponse } from '../types/music';

export const fetchMusicList = () =>
  httpRequest({
    url: '/musics',
    method: 'GET',
  }).then(({ data }) => data);

export const fetchMusic = async (payload?: string): Promise<MusicURLResponse> =>
  await httpRequest({
    url: `/musics/${payload}`,
    method: 'GET',
  }).then(({ data }) => data);
