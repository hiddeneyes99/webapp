import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SongItem from "@/components/music/song-item";
import { type Song } from "@shared/schema";
import { Heart, Download, Clock, List, Plus } from "lucide-react";

export default function Library() {
  const [activeTab, setActiveTab] = useState("recent");

  const { data: songs = [], isLoading: songsLoading } = useQuery<Song[]>({
    queryKey: ["/api/songs"],
  });

  const { data: likedSongs = [], isLoading: likedLoading } = useQuery<Song[]>({
    queryKey: ["/api/library/liked"],
  });

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
            Your Music Library
          </h2>
          
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-4 bg-gray-900/50 mb-8">
              <TabsTrigger value="recent" className="flex items-center space-x-2">
                <Clock size={16} />
                <span>Recently Played</span>
              </TabsTrigger>
              <TabsTrigger value="liked" className="flex items-center space-x-2">
                <Heart size={16} />
                <span>Liked Songs</span>
              </TabsTrigger>
              <TabsTrigger value="downloaded" className="flex items-center space-x-2">
                <Download size={16} />
                <span>Downloaded</span>
              </TabsTrigger>
              <TabsTrigger value="playlists" className="flex items-center space-x-2">
                <List size={16} />
                <span>Playlists</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="recent">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold">Recently Played</h3>
                    <Button variant="outline" size="sm">
                      Clear History
                    </Button>
                  </div>
                  
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

            <TabsContent value="liked">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center space-x-2">
                      <Heart className="text-red-500" size={20} />
                      <span>Liked Songs</span>
                    </h3>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                      <Plus size={16} className="mr-2" />
                      Add to Playlist
                    </Button>
                  </div>
                  
                  {likedLoading ? (
                    <div className="space-y-4">
                      {Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="flex items-center space-x-4 p-4 animate-pulse">
                          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                          <div className="w-12 h-12 bg-gray-700 rounded-lg"></div>
                          <div className="flex-1">
                            <div className="h-4 bg-gray-700 rounded mb-2"></div>
                            <div className="h-3 bg-gray-700 rounded w-2/3"></div>
                          </div>
                          <div className="w-12 h-4 bg-gray-700 rounded"></div>
                        </div>
                      ))}
                    </div>
                  ) : likedSongs.length > 0 ? (
                    <div className="space-y-4">
                      {likedSongs.map((song, index) => (
                        <SongItem
                          key={song.id}
                          id={song.id}
                          title={song.title}
                          artist={song.artist}
                          album={song.album || undefined}
                          duration={song.duration}
                          thumbnailUrl={song.thumbnailUrl || undefined}
                          position={index + 1}
                          isLiked={true}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <Heart className="mx-auto text-gray-500 mb-4" size={48} />
                      <h4 className="text-lg font-semibold mb-2">No liked songs yet</h4>
                      <p className="text-gray-400 mb-4">Start liking songs to see them here</p>
                      <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        Discover Music
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="downloaded">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center space-x-2">
                      <Download className="text-green-500" size={20} />
                      <span>Downloaded Songs</span>
                    </h3>
                    <div className="text-sm text-gray-400">
                      Storage: 0 MB / ∞
                    </div>
                  </div>
                  
                  <div className="text-center py-12">
                    <Download className="mx-auto text-gray-500 mb-4" size={48} />
                    <h4 className="text-lg font-semibold mb-2">No downloaded songs</h4>
                    <p className="text-gray-400 mb-4">Download songs for offline listening</p>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                      Browse Music
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="playlists">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-semibold flex items-center space-x-2">
                      <List className="text-blue-500" size={20} />
                      <span>Your Playlists</span>
                    </h3>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                      <Plus size={16} className="mr-2" />
                      Create Playlist
                    </Button>
                  </div>
                  
                  <div className="text-center py-12">
                    <List className="mx-auto text-gray-500 mb-4" size={48} />
                    <h4 className="text-lg font-semibold mb-2">No playlists yet</h4>
                    <p className="text-gray-400 mb-4">Create your first playlist to organize your music</p>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                      <Plus size={16} className="mr-2" />
                      Create Playlist
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
