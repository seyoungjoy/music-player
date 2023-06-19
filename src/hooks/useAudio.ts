import {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { fetchMusic } from '../services';

export type Audio = {
  audioRef: RefObject<HTMLAudioElement>;
  playerVisible: boolean;
  playing: boolean;
  loading: boolean;
  music: { id: string; title: string };
  currentTime: number;
  handleToggleClick: () => void;
  handleRangeChange?: ChangeEventHandler;
  handleItemToggleClick?: (musicId: string, title: string) => void;
  handlePauseClick?: () => void;
};

const useAudio = () => {
  const audioRef = useRef<HTMLAudioElement>(null);

  const [playerVisible, setPlayerVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [music, setMusic] = useState({ id: '', title: '' });
  const [loading, setLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);

  const playerInit = () => {
    if (playerVisible) return;
    setPlayerVisible(true);
  };

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

  const handleItemToggleClick = useCallback(
    async (musicId: string, title: string) => {
      playerInit();

      if (loading) return;

      setPlaying(false);
      setMusic({ id: musicId, title: title });
      setLoading(true);
      const data = await fetchMusic(musicId);
      loadAudioSrc(data.url);
      setLoading(false);
      play();
    },
    [],
  );

  const handlePauseClick = useCallback(() => {
    stop();
  }, []);

  const handleRangeChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>): void => {
      if (audioRef.current) {
        setCurrentTime(Number(e.target.value));
        audioRef.current.currentTime = Number(e.target.value);
      }
    },
    [],
  );

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
    music,
    currentTime,
    handleToggleClick,
    handleItemToggleClick,
    handlePauseClick,
    handleRangeChange,
  };
};

export default useAudio;
