import {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { fetchMusicUrl } from '../services';

export type Audio = {
  audioRef: RefObject<HTMLAudioElement>;
  playerVisible: boolean;
  playing: boolean;
  loading: boolean;
  currentTime: number;
  playingMusic: PlayingMusic;
  playAudio: () => void;
  pauseAudio: () => void;
  togglePlayPause: () => void;
  loadAndPlayMusic: (musicId: string, title: string) => void;
  handleRangeChange: ChangeEventHandler;
};

type PlayingMusic = {
  id: string;
  title: string;
};

const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playerVisible, setPlayerVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [playingMusic, setPlayingMusic] = useState<PlayingMusic>({
    id: '',
    title: '',
  });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playerInit = () => {
    if (playerVisible) return;
    setPlayerVisible(true);
  };

  const playAudio = useCallback(() => {
    audioRef.current?.play();
    setPlaying(true);
  }, []);

  const pauseAudio = useCallback(() => {
    audioRef.current?.pause();
    setPlaying(false);
  }, []);

  const togglePlayPause = () => {
    playing ? pauseAudio() : playAudio();
  };

  const loadAudioSrc = (url: string) => {
    if (!audioRef.current) return;
    audioRef.current.src = url;
  };

  const loadAndPlayMusic = useCallback(
    async (musicId: string, musicTitle: string) => {
      playerInit();

      try {
        setLoading(true);
        setPlaying(false);
        setPlayingMusic({ id: musicId, title: musicTitle });
        const data = await fetchMusicUrl(musicId);
        loadAudioSrc(data.url);
        setLoading(false);
        playAudio();
      } catch (error) {
        console.log(error);
        alert('오류가 발생했습니다. 잠시 뒤에 다시 시도해주세요.');
        setLoading(false);
        pauseAudio();
      }
    },
    [],
  );

  const handleRangeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;

    const value = Number(e.target.value);
    setCurrentTime(value);
    audioRef.current.currentTime = value;
  }, []);

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setCurrentTime(audioRef.current?.currentTime ?? 0);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playing]);

  return {
    audioRef,
    playerVisible,
    playing,
    loading,
    playingMusic,
    currentTime,
    togglePlayPause,
    loadAndPlayMusic,
    playAudio,
    pauseAudio,
    handleRangeChange,
  };
};

export default useAudio;
