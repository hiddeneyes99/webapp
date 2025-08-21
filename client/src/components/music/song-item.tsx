import { useState } from "react";
import { Play, Heart, MoreHorizontal, Pause, Loader2, Edit, Save, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { formatDuration, MusicTrack, updateTrackThumbnail, getEffectiveThumbnailUrl } from "@/lib/music-data";
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
  const [isEditingImage, setIsEditingImage] = useState(false);
  const [newImageUrl, setNewImageUrl] = useState("");
  
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

  const handleImageEdit = () => {
    setNewImageUrl(track.customThumbnailUrl || track.thumbnailUrl || "");
    setIsEditingImage(true);
  };

  const handleImageSave = () => {
    if (newImageUrl.trim()) {
      updateTrackThumbnail(track.id, newImageUrl.trim());
    }
    setIsEditingImage(false);
    setNewImageUrl("");
  };

  const handleImageCancel = () => {
    setIsEditingImage(false);
    setNewImageUrl("");
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
      <div className="relative w-12 h-12">
        <img 
          src={getEffectiveThumbnailUrl(track)}
          alt={`${track.title} thumbnail`}
          className="w-12 h-12 rounded-lg object-cover" 
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute -top-1 -right-1 w-6 h-6 bg-gray-800/80 hover:bg-gray-700 opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={handleImageEdit}
        >
          <Edit size={12} />
        </Button>
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
      
      {/* Image Edit Modal */}
      {isEditingImage && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={handleImageCancel}>
          <div className="bg-gray-900 p-6 rounded-xl border border-gray-700 max-w-md w-full mx-4" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-lg font-semibold mb-4 text-white">🖼️ Change Song Image</h3>
            <p className="text-sm text-gray-400 mb-3">Paste any image URL below:</p>
            
            <Input
              value={newImageUrl}
              onChange={(e) => setNewImageUrl(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="mb-4 bg-gray-800 border-gray-600 text-white placeholder:text-gray-500"
              autoFocus
            />
            
            {newImageUrl && (
              <div className="mb-4">
                <p className="text-sm text-gray-400 mb-2">Preview:</p>
                <img 
                  src={newImageUrl} 
                  alt="Preview" 
                  className="w-20 h-20 rounded-lg object-cover border border-gray-600"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
            
            <div className="flex space-x-3">
              <Button 
                onClick={handleImageSave}
                className="flex-1 bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg"
              >
                <Save size={16} className="mr-2" />
                Save Image
              </Button>
              <Button 
                variant="outline" 
                onClick={handleImageCancel}
                className="flex-1 border-gray-600 hover:bg-gray-800"
              >
                <X size={16} className="mr-2" />
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
