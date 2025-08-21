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
      <DialogContent className="max-w-md mx-auto bg-gradient-to-br from-purple-900/95 to-pink-900/95 border-pink-500/30 backdrop-blur-xl">
        <DialogHeader>
          <DialogTitle className="sr-only">Special Message</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleClose}
            className="absolute right-4 top-4 text-white hover:bg-white/10"
          >
            <X size={18} />
          </Button>
        </DialogHeader>
        
        <div className="relative overflow-hidden p-6 text-center">
          {/* Floating Hearts Animation */}
          {hearts.map((heart) => (
            <Heart
              key={heart.id}
              className="absolute text-pink-400 animate-ping opacity-70"
              size={16}
              style={{
                left: `${heart.x}%`,
                top: `${heart.y}%`,
                animationDuration: '2s',
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
          
          {/* Main Content */}
          <div className="relative z-10 space-y-6">
            {/* Header */}
            <div className="flex justify-center space-x-2 mb-4">
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
              <Heart className="text-red-500 animate-bounce" size={28} />
              <Sparkles className="text-yellow-400 animate-pulse" size={24} />
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 gradient-text">
              💝 खुशखबरी! 💝
            </h2>
            
            {/* Message */}
            <div className="space-y-4 text-gray-200">
              <p className="text-lg font-semibold text-pink-200">
                🎉 यह ऐप बिल्कुल फ्री है! 🎉
              </p>
              
              <div className="bg-white/10 rounded-lg p-4 border border-pink-400/30">
                <p className="text-sm leading-relaxed">
                  लेकिन एक खास बात है... जिस इंसान की वजह से यह सब कुछ possible हुआ है, 
                  उसके लिए दुआ करना मत भूलना। 🤲
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium text-pink-200">
                  🌟 दुआ करें कि वह हमेशा खुश रहे
                </p>
                <p className="font-medium text-pink-200">
                  🌟 उसकी सारी दुआएं पूरी हो जाएं
                </p>
                <p className="font-medium text-pink-200">
                  🌟 उसके जीवन में खुशियां ही खुशियां हों
                </p>
              </div>
              
              <div className="flex justify-center space-x-2 py-2">
                <Heart className="text-red-500 animate-pulse" size={20} />
                <Heart className="text-pink-500 animate-pulse" size={20} style={{ animationDelay: '0.2s' }} />
                <Heart className="text-red-500 animate-pulse" size={20} style={{ animationDelay: '0.4s' }} />
              </div>
              
              <p className="text-xs text-gray-300 italic">
                "Music connects hearts, love makes everything possible" ❤️
              </p>
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col space-y-3 pt-4">
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-pink-500 to-red-500 hover:from-pink-600 hover:to-red-600 text-white font-semibold py-3"
              >
                🤲 दुआ के साथ आगे बढ़ें
              </Button>
              
              <button
                onClick={handleClose}
                className="text-xs text-gray-400 hover:text-white transition-colors"
              >
                बाद में दिखाएं
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}