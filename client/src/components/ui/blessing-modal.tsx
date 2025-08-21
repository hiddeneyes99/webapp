import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface BlessingModalProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export default function BlessingModal({ isOpen: externalIsOpen, onClose: externalOnClose }: Partial<BlessingModalProps> = {}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Auto-show modal on page load if no external control
    if (externalIsOpen === undefined && externalOnClose === undefined) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 800); // Show after 0.8 second delay
      return () => clearTimeout(timer);
    }
  }, [externalIsOpen, externalOnClose]);

  const handleClose = () => {
    if (externalOnClose) {
      externalOnClose();
    } else {
      setIsOpen(false);
    }
  };

  const modalIsOpen = externalIsOpen !== undefined ? externalIsOpen : isOpen;

  return (
    <Dialog open={modalIsOpen} onOpenChange={handleClose}>
      <DialogContent 
        className="max-w-lg mx-auto relative overflow-hidden rounded-3xl p-0 border-0 shadow-none
                   blessing-modal-enter rainbow-glow-animation"
        data-testid="blessing-modal"
      >
        {/* Hidden title and description for accessibility */}
        <DialogTitle className="sr-only">About Rhythm Music</DialogTitle>
        <DialogDescription className="sr-only">
          Information about Rhythm Music app and dedication message
        </DialogDescription>

        {/* Animated background with multiple gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900 opacity-95"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-pink-500/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.3),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(236,72,153,0.3),transparent_50%)]"></div>
        
        {/* Floating particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-yellow-300 rounded-full animate-ping opacity-75"></div>
        <div className="absolute top-16 right-16 w-1 h-1 bg-cyan-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-pink-300 rounded-full animate-bounce"></div>
        <div className="absolute bottom-16 right-12 w-1 h-1 bg-purple-300 rounded-full animate-ping delay-500"></div>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-5 right-5 z-20 p-2.5 rounded-full 
                     bg-gradient-to-r from-red-500/20 to-pink-500/20 backdrop-blur-sm
                     hover:from-red-500/40 hover:to-pink-500/40 transition-all duration-300 
                     border border-white/20 hover:border-white/40 group hover:scale-110"
          data-testid="button-close-modal"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white/80 group-hover:text-white transition-colors rotate-0 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main content */}
        <div className="relative z-10 p-10 pt-14">
          {/* Animated header */}
          <div className="text-center mb-8 relative">
            <div className="relative inline-block">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 
                             bg-clip-text text-transparent mb-3 animate-pulse">
                <span className="inline-block animate-bounce">✨</span>
                {" About Rhythm "}
                <span className="inline-block animate-bounce delay-100">✨</span>
              </h2>
              
              {/* Floating decorative elements around title */}
              <div className="absolute -top-3 -right-6 text-2xl sparkle-float-animation text-yellow-300">⭐</div>
              <div className="absolute -top-2 -left-6 text-xl gentle-float-animation text-purple-300">💫</div>
              <div className="absolute -bottom-2 right-2 text-sm animate-pulse delay-500 text-cyan-300">🌟</div>
            </div>
            
            {/* Animated underline */}
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-pink-400 to-transparent mx-auto rounded-full animate-pulse"></div>
          </div>

          {/* Enhanced message content */}
          <div className="space-y-6 text-center leading-relaxed">
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-violet-800/40 via-purple-800/40 to-fuchsia-800/40 
                            backdrop-blur-sm border border-white/10 shadow-lg">
              <p className="text-white text-lg font-medium">
                This app is built with{" "}
                <span className="text-2xl text-red-400 heart-beat-animation inline-block transform hover:scale-125 transition-transform">❤️</span>{" "}
                not for profit, but as a small dedication.
              </p>
              
              <p className="text-white/90 text-lg mt-3">
                It's completely free for everyone{" "}
                <span className="inline-block animate-bounce text-xl">🎶</span>
                <span className="inline-block animate-bounce delay-100 text-xl">💫</span>
              </p>
            </div>

            {/* Special dedication message */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-br from-pink-600/30 via-purple-600/30 to-cyan-600/30 
                            backdrop-blur-sm border-2 border-pink-400/30 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl animate-pulse"></div>
              
              <div className="relative space-y-3">
                <p className="text-white/95 text-base leading-relaxed font-medium">
                  But remember — if you're enjoying Rhythm, don't forget to send a silent prayer{" "}
                  <span className="inline-block animate-pulse text-xl">🤲</span>{" "}
                  for that "someone special".
                </p>
                <p className="text-pink-200 text-base leading-relaxed">
                  Wish them happiness{" "}
                  <span className="inline-block animate-bounce delay-200 text-lg">🌸</span>, 
                  and may all their dreams come true{" "}
                  <span className="inline-block animate-pulse delay-300 text-lg">🌟</span>.
                </p>
              </div>
              
              {/* Heart beating animation */}
              <div className="absolute -top-2 -right-2 text-red-400 heart-beat-animation">💖</div>
            </div>
          </div>

          {/* Enhanced action button */}
          <div className="flex justify-center mt-10">
            <Button
              onClick={handleClose}
              className="relative overflow-hidden bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 
                         hover:from-violet-500 hover:via-purple-500 hover:to-fuchsia-500
                         text-white font-bold px-10 py-4 rounded-full text-lg
                         shadow-2xl hover:shadow-purple-500/25 transition-all duration-500 
                         transform hover:scale-110 hover:-translate-y-1 border-2 border-white/20 
                         hover:border-white/40 group"
              data-testid="button-got-it"
            >
              <span className="relative z-10 flex items-center gap-2">
                Got it 
                <span className="text-xl animate-pulse">💜</span>
              </span>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                              -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>

        {/* Enhanced decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-500 via-fuchsia-500 via-pink-500 to-cyan-500 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-pink-500 via-fuchsia-500 to-violet-500 animate-pulse"></div>
        
        {/* Glowing orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-violet-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-fuchsia-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-ping"></div>
      </DialogContent>
    </Dialog>
  );
}