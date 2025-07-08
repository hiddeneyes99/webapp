export interface MusicTrack {
  id: number;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  youtubeId?: string;
  thumbnailUrl?: string;
  isLiked?: boolean;
}

export interface MusicPlaylist {
  id: number;
  name: string;
  description?: string;
  coverUrl?: string;
  trackCount: number;
  tracks: MusicTrack[];
}

export const formatDuration = (seconds: number): string => {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
};

export const getCurrentTime = (): string => {
  return new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });
};
