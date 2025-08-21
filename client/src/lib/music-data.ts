export interface MusicTrack {
  id: number;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  audioUrl: string;
  thumbnailUrl?: string;
  customThumbnailUrl?: string;
  isLiked?: boolean;
}

// Function to update track thumbnail
export const updateTrackThumbnail = (trackId: number, newThumbnailUrl: string) => {
  const trackIndex = musicTracks.findIndex(track => track.id === trackId);
  if (trackIndex !== -1) {
    musicTracks[trackIndex].customThumbnailUrl = newThumbnailUrl;
  }
};

// Function to get effective thumbnail URL (custom first, then default)
export const getEffectiveThumbnailUrl = (track: MusicTrack): string => {
  return track.customThumbnailUrl || track.thumbnailUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format";
};

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

// Real music tracks from uploaded files - One-sided Love first for auto-play
export const musicTracks: MusicTrack[] = [
  {
    id: 1,
    title: "One-sided Love",
    artist: "Technical White Hat",
    album: "A Unspoken Feeling",
    duration: 244, // approximate
    audioUrl: "/music/One-sided love_ A Unspoken Feeling (LYRICS) _ Twh(MP3_128K)_1755781957784.mp3",
    thumbnailUrl: "/assets/technical white hat 2.0_1755783359786.jpg",
    isLiked: true
  },
  {
    id: 2,
    title: "Abhi Na Jaao Chhod Kar",
    artist: "Mohd Rafi, Asha Bhosle",
    album: "Hum Dono • 1961",
    duration: 248, // approximate
    audioUrl: "/music/Abhi Na Jaao Chhod Kar _ Dev Anand _ Sadhana _ Mohd Rafi _ Asha Bhosle _ Hum Dono (1961)(MP3_128K)_1755781957779.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 3,
    title: "Chand Si Mehbooba Ho Meri",
    artist: "Mukesh",
    album: "Himalay Ki God Mein • 1965",
    duration: 267, // approximate
    audioUrl: "/music/Chand Si Mehbooba Ho Meri - Mukesh - Himalay Ki God Mein [1965](MP3_128K)_1755781957779.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 4,
    title: "Invincible",
    artist: "DEAF KEV",
    album: "Glitch Hop • NCS",
    duration: 274, // approximate
    audioUrl: "/music/DEAF KEV - Invincible _ Glitch Hop _ NCS - Copyright Free Music(MP3_320K)_1755781957780.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 5,
    title: "Heroes Tonight",
    artist: "Janji feat. Johnning",
    album: "Progressive House • NCS",
    duration: 208, // approximate
    audioUrl: "/music/Janji - Heroes Tonight (feat. Johnning) _ Progressive House _ NCS - Copyright Free Music(MP3_320K)_1755781957780.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 6,
    title: "Invisible",
    artist: "Julius Dreisig, Zeus X Crona",
    album: "Trap • NCS",
    duration: 201, // approximate
    audioUrl: "/music/Julius Dreisig _ Zeus X Crona - Invisible _ Trap _ NCS - Copyright Free Music(MP3_320K)_1755781957783.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 7,
    title: "Faded",
    artist: "Ooyy",
    album: "Single",
    duration: 194, // approximate
    audioUrl: "/music/Ooyy - Faded(MP3_320K)_1755781957785.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  },
  {
    id: 8,
    title: "Ignoring My Heart",
    artist: "T-Mass",
    album: "NCS Release",
    duration: 190, // approximate
    audioUrl: "/music/T-Mass - Ignoring My Heart [NCS Release](MP3_320K)_1755781957786.mp3",
    thumbnailUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format",
    isLiked: false
  }
];

export const defaultPlaylist: MusicPlaylist = {
  id: 1,
  name: "My Music",
  description: "Your uploaded music collection",
  coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&w=300&h=300&fit=crop",
  trackCount: musicTracks.length,
  tracks: musicTracks
};
