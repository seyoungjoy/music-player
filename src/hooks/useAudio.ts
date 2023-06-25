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
  currentMusic: CurrentMusic;
  currentTime: number;
  handleToggleClick: () => void;
  handleRangeChange: ChangeEventHandler;
  handlePlayToggleClick: (musicId: string, title: string) => void;
  playAudio: () => void;
  pauseAudio: () => void;
};

type CurrentMusic = {
  id: string;
  title: string;
};

const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playerVisible, setPlayerVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [currentMusic, setCurrentMusic] = useState<CurrentMusic>({
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

  const handleToggleClick = () => {
    playing ? pauseAudio() : playAudio();
  };

  const loadAudioSrc = (url: string) => {
    if (!audioRef.current) return;
    audioRef.current.src = url;
  };

  const handlePlayToggleClick = useCallback(
    async (musicId: string, musicTitle: string) => {
      playerInit();

      try {
        setLoading(true);
        setPlaying(false);
        setCurrentMusic({ id: musicId, title: musicTitle });
        const data = await fetchMusicUrl(musicId);
        loadAudioSrc(data.url);
        setLoading(false);
        playAudio();
      } catch (error) {
        console.log(error);
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
    currentMusic,
    currentTime,
    handleToggleClick,
    handlePlayToggleClick,
    playAudio,
    pauseAudio,
    handleRangeChange,
  };
};

export default useAudio;
