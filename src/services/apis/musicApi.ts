import { Album } from '../../types/album';
import { Music } from '../../types/music';
import { axiosInstance } from '../index';

export type AlbumsResponse = {
  total: number;
  items: Album[];
};

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type PlaylistResponse = {
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};

export const fetchAlbumList = async (): Promise<AlbumsResponse> => {
  const response = await axiosInstance({
    url: '/albums',
    method: 'GET',
  });
  return response.data;
};

export const fetchPlaylist = async (
  playlistId: string,
): Promise<PlaylistResponse> => {
  const response = await axiosInstance({
    url: `/playlists/${playlistId}`,
    method: 'GET',
  });
  return response.data;
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
