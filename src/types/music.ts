export type Music = {
  id: string;
  title: string;
  moods: string[];
  genre: string;
  public_date: string;
};

export type MusicsResponse = {
  total: number;
  items: Music[];
};

export type MusicURLResponse = {
  url: string;
};
