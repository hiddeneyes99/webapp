import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Plus, Shuffle, Repeat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Waveform from "./waveform";
import { formatDuration } from "@/lib/music-data";

interface PlayerProps {
  className?: string;
}

export default function MusicPlayer({ className }: PlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [currentTime, setCurrentTime] = useState(151); // 2:31
  const [totalTime] = useState(255); // 4:15
  const [volume, setVolume] = useState([75]);
  const [isMinimized, setIsMinimized] = useState(true);

  const progress = (currentTime / totalTime) * 100;

  const currentSong = {
    title: "Beautiful Music Track",
    artist: "Amazing Artist",
    album: "Album Name • 2024",
    coverUrl: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300"
  };

  if (isMinimized) {
    return (
      <div className={cn(
        "fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-lg border-t border-gray-700",
        className
      )}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <img 
                src={currentSong.coverUrl}
                alt="Currently playing album cover" 
                className="w-12 h-12 rounded-lg object-cover" 
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate">{currentSong.title}</h4>
                <p className="text-xs text-gray-400 truncate">{currentSong.artist}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <SkipBack size={16} />
              </Button>
              <Button 
                size="icon" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <SkipForward size={16} />
              </Button>
            </div>
            
            <div className="hidden md:flex items-center space-x-3">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-700"
                onClick={() => setIsLiked(!isLiked)}
              >
                <Heart size={16} className={isLiked ? "text-red-500 fill-current" : "text-gray-300"} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Volume2 size={16} />
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMinimized(false)}
                className="text-xs hover:bg-gray-700"
              >
                Expand
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      "fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-lg border-t border-gray-700",
      className
    )}>
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Album Art & Info */}
          <div className="text-center lg:text-left">
            <img 
              src={currentSong.coverUrl}
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
                <span>{formatDuration(totalTime)}</span>
              </div>
              <Slider
                value={[progress]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => {
                  const newTime = Math.floor((value[0] / 100) * totalTime);
                  setCurrentTime(newTime);
                }}
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
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMinimized(true)}
                className="text-xs hover:bg-gray-700"
              >
                Minimize
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
