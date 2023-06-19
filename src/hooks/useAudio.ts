import { RefObject, useRef, useState } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { fetchMusic, fetchMusicList } from '../services';
import { MusicURLResponse } from '../types/music';

export type Audio = {
  playing: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  handleToggleClick: () => void;
  handleItemToggleClick?: (musicId: string, title: string) => void;
  loading: boolean;
  music: { id: string; title: string };
  handlePauseClick?: () => void;
};

const useAudio = () => {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [music, setMusic] = useState({ id: '', title: '' });
  const [loading, setLoading] = useState(false);

  const play = () => {
    audioRef.current?.play();
    setPlaying(true);
  };

  const stop = () => {
    audioRef.current?.pause();
    setPlaying(false);
  };

  const handleToggleClick = () => {
    if (playing) {
      stop();
    } else {
      play();
    }
  };

  const loadAudioSrc = (url: string) => {
    if (audioRef.current) {
      audioRef.current.src = url;
    }
  };

  const handleItemToggleClick = async (musicId: string, title: string) => {
    stop();
    setMusic({ id: musicId, title: title });
    setLoading(true);
    const data = await fetchMusic(musicId);
    await loadAudioSrc(data.url);
    setLoading(false);
    play();
  };

  const handlePauseClick = () => {
    stop();
  };

  return {
    loading,
    playing,
    audioRef,
    handleToggleClick,
    handleItemToggleClick,
    music,
    handlePauseClick,
  };
};

export default useAudio;
