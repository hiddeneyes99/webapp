import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Plus, Shuffle, Repeat, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Waveform from "./waveform";
import { formatDuration, musicTracks } from "@/lib/music-data";
import { useAudioPlayer } from "@/hooks/use-audio-player";

import technical_white_hat_2_0_1752333903253 from "@assets/technical white hat 2.0_1752333903253.jpg";

interface PlayerProps {
  className?: string;
  forceMinimized?: boolean;
}

export default function MusicPlayer({ className, forceMinimized }: PlayerProps) {
  const { 
    currentTrack, 
    isPlaying, 
    isLoading,
    currentTime, 
    duration, 
    volume, 
    playTrack,
    playPause, 
    nextTrack, 
    previousTrack, 
    seek, 
    setVolume: setPlayerVolume,
    toggleLike
  } = useAudioPlayer();
  
  const [isMinimized, setIsMinimized] = useState(forceMinimized ?? true);

  // Always show if there are tracks available, even if none is currently playing
  const displayTrack = currentTrack || musicTracks[0];
  
  if (!displayTrack) {
    return null;
  }

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  if (isMinimized || forceMinimized) {
    return (
      <div 
        className={cn(
          "fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-lg border-t border-gray-700 cursor-pointer",
          className
        )}
        onClick={() => !forceMinimized && setIsMinimized(false)}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-1 min-w-0">
              <img 
                src={technical_white_hat_2_0_1752333903253}
                alt="Currently playing album cover" 
                className="w-12 h-12 rounded-lg object-cover" 
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-sm truncate">{displayTrack.title}</h4>
                <p className="text-xs text-gray-400 truncate">{displayTrack.artist}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4" onClick={(e) => e.stopPropagation()}>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700" onClick={previousTrack}>
                <SkipBack size={16} />
              </Button>
              <Button 
                size="icon" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg"
                onClick={playPause}
                disabled={isLoading}
              >
                {isLoading ? <Loader2 size={16} className="animate-spin" /> : isPlaying ? <Pause size={16} /> : <Play size={16} />}
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700" onClick={nextTrack}>
                <SkipForward size={16} />
              </Button>
            </div>
            
            <div className="hidden md:flex items-center space-x-3" onClick={(e) => e.stopPropagation()}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-gray-700"
                onClick={() => toggleLike(displayTrack.id)}
              >
                <Heart size={16} className={displayTrack.isLiked ? "text-red-500 fill-current" : "text-gray-300"} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Volume2 size={16} />
              </Button>
              {!forceMinimized && (
                <Button 
                  variant="ghost" 
                  size="sm" 
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMinimized(false);
                  }}
                  className="text-xs hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 border border-purple-500/30 text-purple-300 animate-pulse"
                >
                  🔺 Expand
                </Button>
              )}
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
              src={technical_white_hat_2_0_1752333903253}
              alt="Album cover" 
              className="w-64 h-64 mx-auto lg:mx-0 rounded-2xl shadow-2xl mb-6" 
            />
            <h4 className="text-2xl font-bold mb-2">{displayTrack.title}</h4>
            <p className="text-gray-400 mb-1">{displayTrack.artist}</p>
            <p className="text-sm text-gray-500">{displayTrack.album}</p>
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
                <span>{formatDuration(Math.floor(currentTime))}</span>
                <span>{formatDuration(Math.floor(duration))}</span>
              </div>
              <Slider
                value={[progress]}
                max={100}
                step={1}
                className="w-full"
                onValueChange={(value) => {
                  const newTime = (value[0] / 100) * duration;
                  seek(newTime);
                }}
              />
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-center space-x-6">
              <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                <Shuffle size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700" onClick={previousTrack}>
                <SkipBack size={20} />
              </Button>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl w-16 h-16 rounded-full"
                onClick={playPause}
                disabled={isLoading}
              >
                {isLoading ? <Loader2 size={24} className="animate-spin" /> : isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-gray-700" onClick={nextTrack}>
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
                  onClick={() => toggleLike(displayTrack.id)}
                >
                  <Heart size={18} className={displayTrack.isLiked ? "text-red-500 fill-current" : "text-gray-300"} />
                </Button>
                <Button variant="ghost" size="icon" className="hover:bg-gray-700">
                  <Plus size={18} />
                </Button>
              </div>
              
              <div className="flex items-center space-x-2">
                <Volume2 size={18} className="text-gray-400" />
                <Slider
                  value={[volume]}
                  max={100}
                  step={1}
                  className="w-20"
                  onValueChange={(value) => setPlayerVolume(value[0])}
                />
              </div>
              
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => setIsMinimized(true)}
                className="text-xs hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-cyan-500/20 border border-purple-500/40 text-purple-300 animate-pulse"
              >
                🔻 Minimize
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
