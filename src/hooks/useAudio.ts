import {
  ChangeEvent,
  ChangeEventHandler,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';

import { fetchMusic } from '../services';

export type Audio = {
  playing: boolean;
  audioRef: RefObject<HTMLAudioElement>;
  handleToggleClick: () => void;
  handleItemToggleClick?: (musicId: string, title: string) => void;
  loading: boolean;
  music: { id: string; title: string };
  handlePauseClick?: () => void;
  currentTime: number;
  handleRangeChange?: ChangeEventHandler;
  playerVisible: boolean;
};

const useAudio = () => {
  const [playerVisible, setPlayerVisible] = useState(false);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
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

  const handleItemToggleClick = async (musicId: string, title: string) => {
    playerInit();

    if (loading) return;

    setPlaying(false);
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

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (audioRef.current) {
      setCurrentTime(Number(e.target.value));
      audioRef.current.currentTime = Number(e.target.value);
    }
  };

  useEffect(() => {
    if (playing) {
      const interval = setInterval(() => {
        setCurrentTime(audioRef.current?.currentTime ?? 0);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [playing]);
  return {
    loading,
    playing,
    audioRef,
    handleToggleClick,
    handleItemToggleClick,
    music,
    handlePauseClick,
    currentTime,
    handleRangeChange,
    playerVisible,
  };
};

export default useAudio;
