import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlaylistCard from "@/components/music/playlist-card";
import SongItem from "@/components/music/song-item";
import Waveform from "@/components/music/waveform";
import { type Song, type Playlist } from "@shared/schema";
import { formatDuration } from "@/lib/music-data";
import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Plus, Volume2, Shuffle, Repeat } from "lucide-react";
import { Slider } from "@/components/ui/slider";

export default function Discover() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [volume, setVolume] = useState([75]);
  
  const { data: songs = [], isLoading: songsLoading } = useQuery<Song[]>({
    queryKey: ["/api/songs"],
  });

  const { data: playlists = [], isLoading: playlistsLoading } = useQuery<Playlist[]>({
    queryKey: ["/api/playlists"],
  });

  const currentSong = songs[0] || {
    id: 1,
    title: "Beautiful Music Track",
    artist: "Amazing Artist",
    album: "Album Name • 2024",
    duration: 255,
    thumbnailUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  };

  const currentTime = 151; // 2:31
  const progress = (currentTime / currentSong.duration) * 100;

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-4 py-8">
        {/* Now Playing Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 gradient-text">
            Experience Rich Music Playback
          </h2>
          
          <Card className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Album Art & Info */}
                <div className="text-center lg:text-left">
                  <img 
                    src={currentSong.thumbnailUrl}
                    alt="Album cover" 
                    className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl shadow-2xl mb-6" 
                  />
                  <h4 className="text-2xl font-bold mb-2">{currentSong.title}</h4>
                  <p className="text-gray-400 mb-1">{currentSong.artist}</p>
                  <p className="text-sm text-gray-500">{currentSong.album}</p>
                </div>

                {/* Player Controls */}
                <div className="space-y-6">
                  {/* Waveform Visualization */}
                  <div className="flex items-center justify-center h-16 mb-6">
                    <Waveform animated={isPlaying} />
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm text-gray-400">
                      <span>{formatDuration(currentTime)}</span>
                      <span>{formatDuration(currentSong.duration)}</span>
                    </div>
                    <Slider
                      value={[progress]}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-center space-x-6">
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                      <Shuffle size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                      <SkipBack size={20} />
                    </Button>
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl w-16 h-16 rounded-full"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                      <SkipForward size={20} />
                    </Button>
                    <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                      <Repeat size={20} />
                    </Button>
                  </div>

                  {/* Additional Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="hover:bg-gray-700"
                        onClick={() => setIsLiked(!isLiked)}
                      >
                        <Heart size={18} className={isLiked ? "text-red-500 fill-current" : "text-gray-300"} />
                      </Button>
                      <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                        <Plus size={18} />
                      </Button>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Volume2 size={18} className="text-gray-400" />
                      <Slider
                        value={volume}
                        max={100}
                        step={1}
                        className="w-20"
                        onValueChange={setVolume}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Browse Content */}
        <section>
          <Tabs defaultValue="playlists" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-gray-900/50">
              <TabsTrigger value="playlists">Trending Playlists</TabsTrigger>
              <TabsTrigger value="songs">Popular Songs</TabsTrigger>
              <TabsTrigger value="genres">Genres</TabsTrigger>
            </TabsList>
            
            <TabsContent value="playlists" className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {playlistsLoading ? (
                  Array.from({ length: 8 }).map((_, i) => (
                    <Card key={i} className="bg-gray-900/50 animate-pulse">
                      <CardContent className="p-4">
                        <div className="w-full h-48 bg-gray-700 rounded-lg mb-4"></div>
                        <div className="h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  playlists.map(playlist => (
                    <PlaylistCard
                      key={playlist.id}
                      id={playlist.id}
                      name={playlist.name}
                      description={playlist.description || undefined}
                      coverUrl={playlist.coverUrl || undefined}
                      trackCount={42} // Mock track count for demo
                    />
                  ))
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="songs" className="mt-8">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {songsLoading ? (
                      Array.from({ length: 6 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 animate-pulse">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-gray-700 rounded mb-2"></div>
                            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                          </div>
                          <div className="w-12 h-4 bg-gray-700 rounded"></div>
                        </div>
                      ))
                    ) : (
                      songs.map((song, index) => (
                        <SongItem
                          key={song.id}
                          id={song.id}
                          title={song.title}
                          artist={song.artist}
                          album={song.album || undefined}
                          duration={song.duration}
                          thumbnailUrl={song.thumbnailUrl || undefined}
                          position={index + 1}
                        />
                      ))
                    )}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="genres" className="mt-8">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { name: "Electronic", color: "from-blue-500 to-purple-500" },
                  { name: "Rock", color: "from-red-500 to-orange-500" },
                  { name: "Hip Hop", color: "from-yellow-500 to-red-500" },
                  { name: "Jazz", color: "from-green-500 to-blue-500" },
                  { name: "Classical", color: "from-purple-500 to-pink-500" },
                  { name: "Country", color: "from-orange-500 to-yellow-500" },
                  { name: "R&B", color: "from-pink-500 to-purple-500" },
                  { name: "Indie", color: "from-cyan-500 to-blue-500" },
                ].map(genre => (
                  <Card key={genre.name} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors cursor-pointer">
                    <CardContent className="p-6">
                      <div className={`w-full h-24 bg-gradient-to-br ${genre.color} rounded-lg mb-4`}></div>
                      <h4 className="font-semibold text-center">{genre.name}</h4>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
