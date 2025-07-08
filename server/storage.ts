import { users, songs, playlists, playlistSongs, userLibrary, type User, type InsertUser, type Song, type InsertSong, type Playlist, type InsertPlaylist } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Songs
  getSongs(): Promise<Song[]>;
  getSong(id: number): Promise<Song | undefined>;
  createSong(song: InsertSong): Promise<Song>;
  searchSongs(query: string): Promise<Song[]>;
  
  // Playlists
  getPlaylists(): Promise<Playlist[]>;
  getPlaylist(id: number): Promise<Playlist | undefined>;
  createPlaylist(playlist: InsertPlaylist): Promise<Playlist>;
  getPlaylistSongs(playlistId: number): Promise<Song[]>;
  
  // User Library
  getUserLibrary(userId: number): Promise<Song[]>;
  getUserLikedSongs(userId: number): Promise<Song[]>;
  toggleLikeSong(userId: number, songId: number): Promise<void>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private songs: Map<number, Song>;
  private playlists: Map<number, Playlist>;
  private playlistSongs: Map<number, { playlistId: number; songId: number; position: number }[]>;
  private userLibrary: Map<number, { songId: number; isLiked: boolean; isDownloaded: boolean }[]>;
  
  private currentUserId: number;
  private currentSongId: number;
  private currentPlaylistId: number;

  constructor() {
    this.users = new Map();
    this.songs = new Map();
    this.playlists = new Map();
    this.playlistSongs = new Map();
    this.userLibrary = new Map();
    
    this.currentUserId = 1;
    this.currentSongId = 1;
    this.currentPlaylistId = 1;
    
    this.initializeMockData();
  }

  private initializeMockData() {
    // Initialize with sample songs
    const sampleSongs: InsertSong[] = [
      {
        title: "Midnight Echoes",
        artist: "Luna Symphony",
        album: "Nocturnal Dreams",
        duration: 222,
        youtubeId: "dQw4w9WgXcQ",
        thumbnailUrl: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=300&h=300&fit=crop"
      },
      {
        title: "Ocean Waves",
        artist: "Coastal Dreams",
        album: "Serenity",
        duration: 255,
        youtubeId: "jNQXAC9IVRw",
        thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
      },
      {
        title: "Electric Pulse",
        artist: "Neo Beat",
        album: "Digital Fusion",
        duration: 208,
        youtubeId: "9bZkp7q19f0",
        thumbnailUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=300&h=300&fit=crop"
      },
      {
        title: "Starlight Journey",
        artist: "Cosmic Wanderer",
        album: "Astral Voyage",
        duration: 267,
        youtubeId: "kJQP7kiw5Fk",
        thumbnailUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=300&h=300&fit=crop"
      }
    ];

    sampleSongs.forEach(song => {
      const id = this.currentSongId++;
      this.songs.set(id, { ...song, id });
    });

    // Initialize sample playlists
    const samplePlaylists: InsertPlaylist[] = [
      {
        name: "Electronic Vibes",
        description: "High-energy electronic music for work and focus",
        coverUrl: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=400&fit=crop",
        userId: 1,
        isPublic: true
      },
      {
        name: "Indie Acoustic",
        description: "Chill acoustic songs for relaxation",
        coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
        userId: 1,
        isPublic: true
      },
      {
        name: "Rock Anthems",
        description: "Classic and modern rock hits",
        coverUrl: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?w=400&h=400&fit=crop",
        userId: 1,
        isPublic: true
      },
      {
        name: "Chill Vibes",
        description: "Ambient and relaxing music",
        coverUrl: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=400&h=400&fit=crop",
        userId: 1,
        isPublic: true
      }
    ];

    samplePlaylists.forEach(playlist => {
      const id = this.currentPlaylistId++;
      this.playlists.set(id, { ...playlist, id });
    });
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getSongs(): Promise<Song[]> {
    return Array.from(this.songs.values());
  }

  async getSong(id: number): Promise<Song | undefined> {
    return this.songs.get(id);
  }

  async createSong(insertSong: InsertSong): Promise<Song> {
    const id = this.currentSongId++;
    const song: Song = { ...insertSong, id };
    this.songs.set(id, song);
    return song;
  }

  async searchSongs(query: string): Promise<Song[]> {
    const allSongs = Array.from(this.songs.values());
    const lowercaseQuery = query.toLowerCase();
    return allSongs.filter(song => 
      song.title.toLowerCase().includes(lowercaseQuery) ||
      song.artist.toLowerCase().includes(lowercaseQuery) ||
      song.album?.toLowerCase().includes(lowercaseQuery)
    );
  }

  async getPlaylists(): Promise<Playlist[]> {
    return Array.from(this.playlists.values());
  }

  async getPlaylist(id: number): Promise<Playlist | undefined> {
    return this.playlists.get(id);
  }

  async createPlaylist(insertPlaylist: InsertPlaylist): Promise<Playlist> {
    const id = this.currentPlaylistId++;
    const playlist: Playlist = { ...insertPlaylist, id };
    this.playlists.set(id, playlist);
    return playlist;
  }

  async getPlaylistSongs(playlistId: number): Promise<Song[]> {
    const playlistSongsData = this.playlistSongs.get(playlistId) || [];
    return playlistSongsData
      .sort((a, b) => a.position - b.position)
      .map(ps => this.songs.get(ps.songId))
      .filter(song => song !== undefined) as Song[];
  }

  async getUserLibrary(userId: number): Promise<Song[]> {
    const library = this.userLibrary.get(userId) || [];
    return library
      .map(item => this.songs.get(item.songId))
      .filter(song => song !== undefined) as Song[];
  }

  async getUserLikedSongs(userId: number): Promise<Song[]> {
    const library = this.userLibrary.get(userId) || [];
    return library
      .filter(item => item.isLiked)
      .map(item => this.songs.get(item.songId))
      .filter(song => song !== undefined) as Song[];
  }

  async toggleLikeSong(userId: number, songId: number): Promise<void> {
    const library = this.userLibrary.get(userId) || [];
    const existingItem = library.find(item => item.songId === songId);
    
    if (existingItem) {
      existingItem.isLiked = !existingItem.isLiked;
    } else {
      library.push({ songId, isLiked: true, isDownloaded: false });
    }
    
    this.userLibrary.set(userId, library);
  }
}

export const storage = new MemStorage();
