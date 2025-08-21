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
      }, 1000); // Show after 1 second delay
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
        className="max-w-md mx-auto bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-indigo-900/95 
                   backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl shadow-2xl 
                   shadow-purple-500/20 text-white p-0 overflow-hidden animate-in fade-in-0 
                   zoom-in-95 duration-500"
        data-testid="blessing-modal"
      >
        {/* Hidden title and description for accessibility */}
        <DialogTitle className="sr-only">About Rhythm Music</DialogTitle>
        <DialogDescription className="sr-only">
          Information about Rhythm Music app and dedication message
        </DialogDescription>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/20 hover:bg-black/40 
                     transition-colors duration-200 group"
          data-testid="button-close-modal"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
        </button>

        {/* Content */}
        <div className="p-8 pt-12">
          {/* Header with sparkle animation */}
          <div className="text-center mb-6">
            <div className="relative">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 
                             bg-clip-text text-transparent mb-2 animate-pulse">
                ✨ About Rhythm ✨
              </h2>
              <div className="absolute -top-2 -right-2 text-yellow-300 animate-bounce delay-100">⭐</div>
              <div className="absolute -top-1 -left-3 text-purple-300 animate-bounce delay-300">💫</div>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-4 text-center leading-relaxed">
            <p className="text-purple-100 text-lg">
              This app is built with{" "}
              <span className="text-red-300 animate-pulse inline-block">❤️</span>{" "}
              not for profit, but as a small dedication.
            </p>
            
            <p className="text-purple-100 text-lg">
              It's completely free for everyone{" "}
              <span className="inline-block animate-bounce">🎶</span>
              <span className="inline-block animate-bounce delay-100">💫</span>
            </p>

            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-4 mt-6 mb-6 border border-purple-400/20">
              <p className="text-purple-100 text-base leading-relaxed">
                But remember — if you're enjoying Rhythm, don't forget to send a silent prayer{" "}
                <span className="inline-block animate-pulse">🤲</span>{" "}
                for that "someone special".
              </p>
              <p className="text-purple-100 text-base mt-2">
                Wish them happiness{" "}
                <span className="inline-block animate-bounce delay-200">🌸</span>, 
                and may all their dreams come true{" "}
                <span className="inline-block animate-pulse delay-300">🌟</span>.
              </p>
            </div>
          </div>

          {/* Action button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 
                         hover:to-pink-700 text-white font-semibold px-8 py-3 rounded-full 
                         shadow-lg hover:shadow-xl transition-all duration-300 transform 
                         hover:scale-105 border border-purple-400/30"
              data-testid="button-got-it"
            >
              Got it 💜
            </Button>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"></div>
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </DialogContent>
    </Dialog>
  );
}