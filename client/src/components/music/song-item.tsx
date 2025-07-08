import { Play, Heart, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDuration } from "@/lib/music-data";
import { cn } from "@/lib/utils";

interface SongItemProps {
  id: number;
  title: string;
  artist: string;
  album?: string;
  duration: number;
  thumbnailUrl?: string;
  isLiked?: boolean;
  position?: number;
  className?: string;
  onPlay?: () => void;
  onLike?: () => void;
}

export default function SongItem({
  title,
  artist,
  album,
  duration,
  thumbnailUrl,
  isLiked = false,
  position,
  className,
  onPlay,
  onLike
}: SongItemProps) {
  return (
    <div className={cn(
      "flex items-center space-x-4 p-4 rounded-xl hover:bg-gray-800/50 transition-colors cursor-pointer group",
      className
    )}>
      {/* Position/Play Button */}
      <div className="w-12 h-12 relative flex items-center justify-center">
        {position ? (
          <>
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-semibold group-hover:opacity-0 transition-opacity">
              {position}
            </div>
            <Button
              size="icon"
              variant="ghost"
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-700 hover:bg-gray-600"
              onClick={onPlay}
            >
              <Play size={16} />
            </Button>
          </>
        ) : (
          <Button
            size="icon"
            variant="ghost"
            className="bg-gray-700 hover:bg-gray-600"
            onClick={onPlay}
          >
            <Play size={16} />
          </Button>
        )}
      </div>

      {/* Thumbnail */}
      {thumbnailUrl && (
        <img 
          src={thumbnailUrl}
          alt={`${title} thumbnail`}
          className="w-12 h-12 rounded-lg object-cover" 
        />
      )}

      {/* Song Info */}
      <div className="flex-1 min-w-0">
        <h4 className="font-semibold group-hover:text-cyan-400 transition-colors truncate">
          {title}
        </h4>
        <p className="text-sm text-gray-400 truncate">
          {artist}
          {album && ` • ${album}`}
        </p>
      </div>

      {/* Duration */}
      <div className="hidden md:block text-sm text-gray-400">
        {formatDuration(duration)}
      </div>

      {/* Actions */}
      <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <Button
          size="icon"
          variant="ghost"
          className="hover:bg-gray-700"
          onClick={onLike}
        >
          <Heart 
            size={16} 
            className={isLiked ? "text-red-500 fill-current" : "text-gray-400"} 
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
