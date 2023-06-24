import { Music } from '../../types/music';

export type ErrorResponse = {
  message: string;
  statusCode?: number;
};

export type FetchResponse<R> = [ErrorResponse, null] | [null, R];

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};
