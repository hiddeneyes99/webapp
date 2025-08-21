import { Music2, PlayCircle, Shuffle, ListMusic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import SongItem from "@/components/music/song-item";
import { musicTracks, defaultPlaylist } from "@/lib/music-data";
import { useAudioPlayer } from "@/hooks/use-audio-player";

export default function Library() {
  const { playTrack } = useAudioPlayer();

  const handlePlayAll = () => {
    if (musicTracks.length > 0) {
      playTrack(musicTracks[0]);
    }
  };

  const handleShuffle = () => {
    if (musicTracks.length > 0) {
      const randomIndex = Math.floor(Math.random() * musicTracks.length);
      playTrack(musicTracks[randomIndex]);
    }
  };

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 pb-32">
      <div className="container mx-auto px-4 py-8">
        {/* Library Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-6 lg:space-y-0 lg:space-x-6 mb-8">
          <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto lg:mx-0">
            <Music2 size={80} className="text-white" />
          </div>
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl font-bold mb-2 gradient-text">Your Music Library</h1>
            <p className="text-gray-400 mb-4">{musicTracks.length} songs available</p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl"
                onClick={handlePlayAll}
              >
                <PlayCircle className="mr-2" size={20} />
                Play All
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600"
                onClick={handleShuffle}
              >
                <Shuffle className="mr-2" size={20} />
                Shuffle Play
              </Button>
            </div>
          </div>
        </div>

        {/* Songs List */}
        <Card className="bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="flex items-center">
              <ListMusic className="mr-2" size={24} />
              All Songs
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="space-y-1">
              {musicTracks.map((track, index) => (
                <SongItem 
                  key={track.id} 
                  track={track} 
                  position={index + 1}
                  className="hover:bg-gray-800/30"
                />
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Playlists Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Playlists</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <Card className="bg-gray-900/50 border-gray-700 hover:bg-gray-800/50 transition-colors cursor-pointer">
              <CardContent className="p-6">
                <div className="aspect-square bg-gradient-to-br from-purple-500 to-cyan-500 rounded-xl mb-4 flex items-center justify-center">
                  <ListMusic size={48} className="text-white" />
                </div>
                <h3 className="font-semibold mb-2">{defaultPlaylist.name}</h3>
                <p className="text-sm text-gray-400 mb-2">{defaultPlaylist.description}</p>
                <p className="text-xs text-gray-500">{defaultPlaylist.trackCount} songs</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}