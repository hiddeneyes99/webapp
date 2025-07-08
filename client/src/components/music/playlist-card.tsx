import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PlaylistCardProps {
  id: number;
  name: string;
  description?: string;
  coverUrl?: string;
  trackCount: number;
  className?: string;
  onClick?: () => void;
}

export default function PlaylistCard({ 
  name, 
  description, 
  coverUrl, 
  trackCount, 
  className, 
  onClick 
}: PlaylistCardProps) {
  return (
    <div 
      className={cn(
        "bg-gray-900/50 rounded-xl p-4 hover:bg-gray-800/50 transition-all duration-300 cursor-pointer group",
        className
      )}
      onClick={onClick}
    >
      <div className="relative mb-4">
        <img 
          src={coverUrl || "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=400&fit=crop"}
          alt={`${name} playlist cover`}
          className="w-full h-48 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" 
        />
        <Button
          size="icon"
          className="absolute bottom-2 right-2 bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        >
          <Play size={16} />
        </Button>
      </div>
      
      <div>
        <h4 className="font-semibold mb-1 group-hover:text-cyan-400 transition-colors">{name}</h4>
        {description && (
          <p className="text-sm text-gray-400 mb-2 line-clamp-2">{description}</p>
        )}
        <p className="text-sm text-gray-500">{trackCount} tracks</p>
      </div>
    </div>
  );
}
