import { useState, useEffect } from "react";
import { Heart, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";

interface BlessingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BlessingModal({ isOpen, onClose }: BlessingModalProps) {
  const [hearts, setHearts] = useState<Array<{ id: number; x: number; y: number }>>([]);

  useEffect(() => {
    if (isOpen) {
      const interval = setInterval(() => {
        setHearts(prev => [
          ...prev.slice(-10), // Keep only last 10 hearts
          {
            id: Date.now(),
            x: Math.random() * 100,
            y: Math.random() * 100
          }
        ]);
      }, 800);

      return () => clearInterval(interval);
    }
  }, [isOpen]);

  const handleClose = () => {
    setHearts([]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-lg mx-auto bg-gradient-to-br from-gray-900/98 to-black/98 border border-purple-500/40 backdrop-blur-2xl shadow-2xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Special Message</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-white hover:bg-purple-500/20 rounded-full transition-all duration-300"
          >
            <X size={18} />
          </Button>
        </DialogHeader>
        
        <div className="relative overflow-hidden p-8 text-center">
          {/* Floating Hearts Animation */}
          {hearts.map((heart) => (
            <Heart
              key={heart.id}
              className="absolute text-purple-400 animate-ping opacity-60"
              size={14}
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
                animationDuration: '3s',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Main Content */}
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex justify-center items-center space-x-3 mb-6">
              <Sparkles className="text-cyan-400 animate-pulse" size={24} />
              <div className="p-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse">
                <Heart className="text-white" size={24} />
              </div>
              <Sparkles className="text-cyan-400 animate-pulse" size={24} />
            </div>
            
            <h2 className="text-3xl font-bold gradient-text mb-6">
              A Special Message
            </h2>
            
            {/* Message */}
            <div className="space-y-6 text-gray-200">
              <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-xl p-6 border border-purple-400/30 backdrop-blur-sm">
                <p className="text-xl font-bold text-white mb-4">
                  This App is Completely FREE! 🎉
                </p>
                <p className="text-gray-300 leading-relaxed">
                  But there's something special... This beautiful app exists because of someone very dear to our hearts. 
                </p>
              </div>
              
              <div className="bg-black/40 rounded-xl p-6 border border-gray-700/50">
                <p className="text-lg font-semibold text-cyan-400 mb-4">
                  Please keep that special person in your prayers:
                </p>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                    <p className="text-gray-300">May they always be blessed with happiness</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <p className="text-gray-300">May all their dreams come true</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    <p className="text-gray-300">May their life be filled with endless joy</p>
                  </div>
                </div>
              </div>
              
              <div className="flex justify-center space-x-3 py-2">
                <Heart className="text-red-500 animate-bounce" size={20} />
                <Heart className="text-purple-500 animate-bounce" size={20} style={{ animationDelay: '0.3s' }} />
                <Heart className="text-cyan-500 animate-bounce" size={20} style={{ animationDelay: '0.6s' }} />
              </div>
              
              <p className="text-sm text-gray-400 italic font-medium">
                "Music connects hearts, love makes everything possible" ❤️
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col space-y-4 pt-6">
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-bold py-4 px-8 text-lg rounded-xl shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
              >
                Continue with Blessings 🙏
              </Button>
              
              <button
                onClick={handleClose}
                className="text-sm text-gray-500 hover:text-gray-300 transition-colors py-2"
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}