import { useState, useRef, useEffect, createContext, useContext, ReactNode } from 'react';
import { MusicTrack, musicTracks } from '@/lib/music-data';

interface AudioPlayerContextType {
  currentTrack: MusicTrack | null;
  isPlaying: boolean;
  isLoading: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  playlist: MusicTrack[];
  currentIndex: number;
  playTrack: (track: MusicTrack) => Promise<void>;
  playPause: () => void;
  stop: () => void;
  nextTrack: () => void;
  previousTrack: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
  toggleLike: (trackId: number) => void;
}

const AudioPlayerContext = createContext<AudioPlayerContextType | null>(null);

export const useAudioPlayer = () => {
  const context = useContext(AudioPlayerContext);
  if (!context) {
    throw new Error('useAudioPlayer must be used within AudioPlayerProvider');
  }
  return context;
};

export const AudioPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [currentTrack, setCurrentTrack] = useState<MusicTrack | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(75);
  const [playlist] = useState<MusicTrack[]>(musicTracks);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hasAutoStarted, setHasAutoStarted] = useState(false);
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressInterval = useRef<NodeJS.Timeout | null>(null);

  // Lazy load audio when needed
  const initializeAudio = async (track: MusicTrack) => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
    }

    setIsLoading(true);
    const audio = new Audio();
    audioRef.current = audio;

    // Set up audio event listeners
    audio.addEventListener('loadeddata', () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
    });

    audio.addEventListener('ended', () => {
      nextTrack();
    });

    audio.addEventListener('loadedmetadata', () => {
      setDuration(audio.duration || 0);
      setIsLoading(false);
    });

    audio.addEventListener('error', (e) => {
      console.error('Audio loading error:', e);
      setIsLoading(false);
    });

    // Set volume and load
    audio.volume = volume / 100;
    audio.preload = 'metadata';
    audio.src = track.audioUrl;
    
    return audio;
  };

  const playTrack = async (track: MusicTrack) => {
    try {
      const trackIndex = playlist.findIndex(t => t.id === track.id);
      setCurrentIndex(trackIndex);
      setCurrentTrack(track);
      
      const audio = await initializeAudio(track);
      await audio.play();
      setIsPlaying(true);
      
      // Start progress tracking
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
      
      progressInterval.current = setInterval(() => {
        if (audio && !audio.paused) {
          setCurrentTime(audio.currentTime);
        }
      }, 1000);
      
    } catch (error) {
      console.error('Error playing track:', error);
      setIsPlaying(false);
      setIsLoading(false);
    }
  };

  const playPause = async () => {
    if (!audioRef.current || !currentTrack) return;
    
    try {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
        if (progressInterval.current) {
          clearInterval(progressInterval.current);
        }
      } else {
        await audioRef.current.play();
        setIsPlaying(true);
        
        // Restart progress tracking
        progressInterval.current = setInterval(() => {
          if (audioRef.current && !audioRef.current.paused) {
            setCurrentTime(audioRef.current.currentTime);
          }
        }, 1000);
      }
    } catch (error) {
      console.error('Error toggling playback:', error);
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
    setIsPlaying(false);
    setCurrentTime(0);
    if (progressInterval.current) {
      clearInterval(progressInterval.current);
    }
  };

  const nextTrack = () => {
    const nextIndex = (currentIndex + 1) % playlist.length;
    const nextTrackItem = playlist[nextIndex];
    if (nextTrackItem) {
      playTrack(nextTrackItem);
    }
  };

  const previousTrack = () => {
    const prevIndex = currentIndex === 0 ? playlist.length - 1 : currentIndex - 1;
    const prevTrackItem = playlist[prevIndex];
    if (prevTrackItem) {
      playTrack(prevTrackItem);
    }
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const setVolume = (newVolume: number) => {
    setVolumeState(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  const toggleLike = (trackId: number) => {
    // Implementation for liking tracks
    console.log('Toggle like for track:', trackId);
  };

  // Auto-start first song on app load
  useEffect(() => {
    if (!hasAutoStarted && musicTracks.length > 0) {
      setHasAutoStarted(true);
      // Auto-play first song after a short delay
      setTimeout(() => {
        playTrack(musicTracks[0]);
      }, 1000);
    }
  }, [hasAutoStarted]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      if (progressInterval.current) {
        clearInterval(progressInterval.current);
      }
    };
  }, []);

  const value: AudioPlayerContextType = {
    currentTrack,
    isPlaying,
    isLoading,
    currentTime,
    duration,
    volume,
    playlist,
    currentIndex,
    playTrack,
    playPause,
    stop,
    nextTrack,
    previousTrack,
    seek,
    setVolume,
    toggleLike
  };

  return (
    <AudioPlayerContext.Provider value={value}>
      {children}
    </AudioPlayerContext.Provider>
  );
};