import { useState } from "react";
import { Play, Pause, SkipBack, SkipForward, Heart, Loader2, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { musicTracks } from "@/lib/music-data";
import { useAudioPlayer } from "@/hooks/use-audio-player";

import technical_white_hat_2_0_1752333903253 from "@assets/technical white hat 2.0_1752333903253.jpg";

interface MiniPlayerProps {
  className?: string;
  onExpand?: () => void;
}

export default function MiniPlayer({ className, onExpand }: MiniPlayerProps) {
  const { 
    currentTrack, 
    isPlaying, 
    isLoading,
    playTrack,
    playPause, 
    nextTrack, 
    previousTrack, 
    toggleLike
  } = useAudioPlayer();
  
  // Always show if there are tracks available, even if none is currently playing
  const displayTrack = currentTrack || musicTracks[0];
  
  if (!displayTrack) {
    return null;
  }

  return (
    <div 
      className={cn(
        "bg-gradient-to-r from-gray-900/95 to-black/95 backdrop-blur-lg border border-gray-700/50 rounded-xl p-4 cursor-pointer hover:bg-gray-800/50 transition-colors",
        className
      )}
      onClick={onExpand}
    >
      <div className="flex items-center space-x-3">
        <img 
          src={technical_white_hat_2_0_1752333903253}
          alt="Currently playing album cover" 
          loading="lazy"
          className="w-12 h-12 rounded-lg object-cover" 
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-sm truncate">{displayTrack.title}</h4>
          <p className="text-xs text-gray-400 truncate">{displayTrack.artist}</p>
        </div>
        
        <div className="flex items-center space-x-2" onClick={(e) => e.stopPropagation()}>
          <Button variant="ghost" size="icon" className="hover:bg-gray-700 h-8 w-8" onClick={previousTrack}>
            <SkipBack size={14} />
          </Button>
          <Button 
            size="icon" 
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg h-8 w-8"
            onClick={playPause}
            disabled={isLoading}
          >
            {isLoading ? <Loader2 size={14} className="animate-spin" /> : isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </Button>
          <Button variant="ghost" size="icon" className="hover:bg-gray-700 h-8 w-8" onClick={nextTrack}>
            <SkipForward size={14} />
          </Button>
          <Button 
            variant="ghost" 
            size="icon" 
            className="hover:bg-gray-700 h-8 w-8"
            onClick={() => toggleLike(displayTrack.id)}
          >
            <Heart size={14} className={displayTrack.isLiked ? "text-red-500 fill-current" : "text-gray-300"} />
          </Button>
        </div>
        
        {onExpand && (
          <div className="flex items-center space-x-1">
            <ChevronUp size={16} className="text-purple-400 animate-bounce" />
            <span className="text-xs text-purple-300 font-semibold animate-pulse">Click to Expand</span>
          </div>
        )}
      </div>
    </div>
  );
}