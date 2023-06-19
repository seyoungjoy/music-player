import httpRequest from '../apiClient/httpRequest';
import { MusicsResponse, MusicURLResponse } from '../types/music';

export const fetchMusicList = async (): Promise<MusicsResponse> =>
  await httpRequest({
    url: '/musics',
    method: 'GET',
  }).then(({ data }) => data);

export const fetchMusic = async (payload?: string): Promise<MusicURLResponse> =>
  await httpRequest({
    url: `/musics/${payload}`,
    method: 'GET',
  }).then(({ data }) => data);
