import { useState, useEffect } from "react";
import { Music, X, Sparkles, Music2, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface BlessingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlessingModal({ isOpen, onClose }: BlessingModalProps) {
  const [musicNotes, setMusicNotes] = useState<Array<{ id: number; x: number; y: number; icon: string }>>([]);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        const icons = ['♪', '♫', '♬', '🎵', '🎶'];
        setMusicNotes(prev => [
          ...prev.slice(-8), // Keep only last 8 notes
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100,
            icon: icons[Math.floor(Math.random() * icons.length)]
          }
        ]);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleClose = () => {
    setMusicNotes([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-purple-900/90 via-gray-900/95 to-cyan-900/90 border border-purple-500/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        <DialogHeader>
          <DialogTitle className="sr-only">About Rhythm</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute right-3 top-3 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300 z-20"
          >
            <X size={16} />
          </Button>
        </DialogHeader>
        
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-transparent to-cyan-500/20"></div>
        <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-cyan-500/30 rounded-full blur-3xl"></div>
        
        <div className="relative p-6 text-center">
          {/* Floating Music Notes */}
          {musicNotes.map((note) => (
            <div
              key={note.id}
              className="absolute text-purple-400/70 animate-pulse text-lg pointer-events-none"
              style={{
                left: `${note.x}%`,
                top: `${note.y}%`,
                animationDuration: '2s',
                animationDelay: `${Math.random() * 1}s`
              }}
            >
              {note.icon}
            </div>
          ))}
          
          {/* Main Content */}
          <div className="relative z-10 space-y-5">
            {/* Header */}
            <div className="flex justify-center items-center space-x-2 mb-4">
              <Music className="text-purple-400 animate-pulse" size={20} />
              <div className="p-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse">
                <Music2 className="text-white" size={18} />
              </div>
              <Radio className="text-cyan-400 animate-pulse" size={20} />
            </div>
            
            <h2 className="text-2xl font-bold gradient-text mb-4">
              ✨ About Rhythm ✨
            </h2>
            
            {/* Message */}
            <div className="space-y-4 text-sm leading-relaxed">
              <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-lg p-4 border border-purple-400/20 backdrop-blur-sm">
                <p className="text-gray-200 mb-3">
                  This app is built with ❤️ not for profit, but as a small dedication.
                </p>
                <p className="text-white font-medium">
                  It's completely free for everyone 🎶💫
                </p>
              </div>
              
              <div className="bg-black/30 rounded-lg p-4 border border-gray-600/30">
                <p className="text-gray-300 mb-3">
                  But remember — if you're enjoying Rhythm, don't forget to send a silent prayer 🤲 for that "someone special" because it's only because of them that this app even exists today.
                </p>
                <p className="text-cyan-400 font-medium">
                  Wish them happiness 🌸, and may all their dreams come true 🌟.
                </p>
              </div>
            </div>
            
            {/* Button */}
            <div className="pt-4">
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Continue 🎵
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}