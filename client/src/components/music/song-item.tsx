import { Play, Heart, MoreHorizontal, Pause, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDuration, MusicTrack } from "@/lib/music-data";
import { cn } from "@/lib/utils";
import { useAudioPlayer } from "@/hooks/use-audio-player";

interface SongItemProps {
  track: MusicTrack;
  position?: number;
  className?: string;
}

export default function SongItem({
  track,
  position,
  className
}: SongItemProps) {
  const { currentTrack, isPlaying, isLoading, playTrack, playPause, toggleLike } = useAudioPlayer();
  
  const isCurrentTrack = currentTrack?.id === track.id;
  const isThisTrackPlaying = isCurrentTrack && isPlaying;
  const isThisTrackLoading = isCurrentTrack && isLoading;
  
  const handlePlay = () => {
    if (isCurrentTrack) {
      playPause();
    } else {
      playTrack(track);
    }
  };
  
  const handleLike = () => {
    toggleLike(track.id);
  };
  return (
    <div className={cn(
      "flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/50 transition-colors cursor-pointer group",
      isCurrentTrack && "bg-gray-800/50 border border-purple-500/30",
      className
    )}>
      {/* Position/Play Button */}
      <div className="w-12 h-12 relative flex items-center justify-center">
        {position ? (
          <>
            <div className={cn(
              "w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold transition-opacity",
              (isThisTrackPlaying || isThisTrackLoading) ? "opacity-0" : "group-hover:opacity-0"
            )}>
              {position}
            </div>
            <Button
              size="icon"
              variant="ghost"
              className={cn(
                "absolute inset-0 transition-opacity bg-gray-700 hover:bg-gray-600",
                (isThisTrackPlaying || isThisTrackLoading) ? "opacity-100" : "opacity-0 group-hover:opacity-100"
              )}
              onClick={handlePlay}
              disabled={isThisTrackLoading}
            >
              {isThisTrackLoading ? <Loader2 size={16} className="animate-spin" /> : 
               isThisTrackPlaying ? <Pause size={16} /> : <Play size={16} />}
            </Button>
          </>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="bg-gray-700 hover:bg-gray-600"
            onClick={handlePlay}
            disabled={isThisTrackLoading}
          >
            {isThisTrackLoading ? <Loader2 size={16} className="animate-spin" /> : 
             isThisTrackPlaying ? <Pause size={16} /> : <Play size={16} />}
          </Button>
        )}
      </div>

      {/* Thumbnail */}
      <div className="w-12 h-12">
        <img 
          src={track.customThumbnailUrl || track.thumbnailUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&w=300&h=300&fit=crop&auto=format"}
          alt={`${track.title} thumbnail`}
          className="w-12 h-12 rounded-lg object-cover" 
        />
      </div>

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <h4 className={cn(
          "font-semibold transition-colors truncate",
          isCurrentTrack ? "text-purple-400" : "group-hover:text-cyan-400"
        )}>
          {track.title}
        </h4>
        <p className="text-sm text-gray-400 truncate">
          {track.artist}
          {track.album && ` • ${track.album}`}
        </p>
      </div>

      {/* Duration */}
      <div className="hidden md:block text-sm text-gray-400">
        {formatDuration(track.duration)}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-gray-700"
          onClick={handleLike}
        >
          <Heart 
            size={16} 
            className={track.isLiked ? "text-red-500 fill-current" : "text-gray-400"} 
          />
        </Button>
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-gray-700"
        >
          <MoreHorizontal size={16} />
        </Button>
      </div>
    </div>
  );
}
