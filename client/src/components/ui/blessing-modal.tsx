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
      }, 7000); // Show after 1 second delay
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
        className="w-[90vw] max-w-md mx-auto max-h-[80vh] overflow-y-auto bg-gradient-to-br from-purple-900/95 via-purple-800/95 to-indigo-900/95 
                   backdrop-blur-xl border-2 border-purple-500/30 rounded-3xl shadow-2xl 
                   shadow-purple-500/20 text-white p-0 animate-in fade-in-0 
                   zoom-in-95 duration-500 m-4"
        data-testid="blessing-modal"
      >
        {/* Hidden title and description for accessibility */}
        <DialogTitle className="sr-only">Rhythm Music v1.1 Update</DialogTitle>
        <DialogDescription className="sr-only">
          Important update information about Rhythm Music v1.1 - Search fix release
        </DialogDescription>

        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-2 right-2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/60 
                     transition-colors duration-200 group shadow-lg border border-white/20"
          data-testid="button-close-modal"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-white group-hover:text-white transition-colors" />
        </button>

        {/* Content */}
        <div className="p-4 sm:p-8 pt-12 sm:pt-12">
          {/* Header with sparkle animation */}
          <div className="text-center mb-6">
            <div className="relative">
              <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-300 via-pink-300 to-purple-300 
                             bg-clip-text text-transparent mb-2 animate-pulse">
                🎵 Rhythm Music v1.1
              </h2>
              <p className="text-lg sm:text-xl font-semibold text-yellow-300 animate-bounce">
                "The Search is Back!"
              </p>
            </div>
          </div>

          {/* Main message */}
          <div className="space-y-4 leading-relaxed">
            {/* About this Update */}
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-purple-200 mb-3">💬 About this Update</h3>
              <p className="text-purple-100 text-xs sm:text-base">
                In this new v1.1 release of Rhythm Music, we've fixed one of the biggest issues — the Search feature is now fully functional again! 🔍🎶
              </p>
              <p className="text-purple-100 text-xs sm:text-base mt-2">
                In the previous version, some users experienced problems with song searches not working. That's now fixed — you can instantly find your favorite tracks without any hassle ⚡
              </p>
            </div>

            {/* What's Fixed */}
            <div className="bg-gradient-to-r from-green-600/30 to-emerald-600/30 rounded-2xl p-4 border border-green-400/20">
              <h3 className="text-lg sm:text-xl font-bold text-green-200 mb-3">🚀 What's Fixed</h3>
              <ul className="space-y-2 text-purple-100 text-xs sm:text-base">
                <li>✅ Search Results Bug Fixed – Search now works smoothly and accurately.</li>
                <li>⚡ Improved Speed & Stability – The app feels faster, smoother, and more responsive.</li>
                <li>🧠 Minor Bug Fixes – Background performance and UI improvements for a cleaner experience.</li>
              </ul>
            </div>

            {/* Important Note */}
            <div className="bg-gradient-to-r from-red-600/30 to-orange-600/30 rounded-2xl p-4 border border-red-400/20">
              <h3 className="text-lg sm:text-xl font-bold text-red-200 mb-3">⚠️ Important Note</h3>
              <p className="text-purple-100 text-xs sm:text-base font-semibold mb-2">
                This update requires a fresh installation.
              </p>
              <p className="text-purple-100 text-xs sm:text-base">
                If you already have an older version of Rhythm Music installed, please follow these steps:
              </p>
              <ol className="list-decimal list-inside space-y-1 mt-2 text-purple-100 text-xs sm:text-base ml-2">
                <li>Uninstall the old app first.</li>
                <li>Then install the new v1.1 APK.</li>
              </ol>
              <p className="text-purple-100 text-xs sm:text-base mt-3 italic">
                ⚠️ Installing it directly over the old version will cause a package conflict error, and the update won't work properly.
              </p>
            </div>

            {/* Data Reset Information */}
            <div className="bg-gradient-to-r from-yellow-600/30 to-amber-600/30 rounded-2xl p-4 border border-yellow-400/20">
              <h3 className="text-lg sm:text-xl font-bold text-yellow-200 mb-3">📦 Data Reset Information</h3>
              <p className="text-purple-100 text-xs sm:text-base mb-2">
                Once you install this new version, all previously saved data will be reset — including:
              </p>
              <ul className="space-y-1 text-purple-100 text-xs sm:text-base ml-2">
                <li>❤️ Liked Songs</li>
                <li>🎵 Imported Playlists</li>
                <li>📜 Song History</li>
                <li>💡 Personalized Recommendations</li>
                <li>🔍 Discover Section Preferences</li>
                <li>💽 Albums</li>
                <li>⬇️ Offline Songs</li>
                <li>📁 Downloaded Songs</li>
              </ul>
              <p className="text-purple-100 text-xs sm:text-base mt-3 italic">
                This is because the app has been rebuilt from scratch for better performance and a smoother experience 💫
              </p>
            </div>

            {/* Developer's Note */}
            <div className="bg-gradient-to-r from-purple-600/30 to-pink-600/30 rounded-2xl p-4 border border-purple-400/20">
              <h3 className="text-lg sm:text-xl font-bold text-purple-200 mb-3">🧠 Developer's Note</h3>
              <p className="text-purple-100 text-xs sm:text-base italic mb-2">
                This update may seem small, but it comes from one purpose —<br />
                "To make Rhythm Music better without changing its soul." 💜
              </p>
              <p className="text-purple-100 text-xs sm:text-base mt-3">
                If you enjoy using this version, please don't forget to send a silent prayer 🤲 for that someone special who made this app possible. Wish them happiness{" "}
                <span className="inline-block animate-bounce delay-200">🌸</span>{" "}
                and may all their dreams come true{" "}
                <span className="inline-block animate-pulse delay-300">🌟</span>
              </p>
            </div>

            {/* Version Details */}
            <div className="bg-gradient-to-r from-indigo-600/30 to-blue-600/30 rounded-2xl p-4 border border-indigo-400/20">
              <h3 className="text-lg sm:text-xl font-bold text-indigo-200 mb-3">📱 Version Details</h3>
              <ul className="space-y-1 text-purple-100 text-xs sm:text-base">
                <li><strong>App Name:</strong> Rhythm Music</li>
                <li><strong>Version:</strong> v1.1 (Search Fix Update)</li>
                <li><strong>Platform:</strong> Android</li>
                <li><strong>License:</strong> MIT (Completely Free)</li>
                <li><strong>Developer:</strong> Afsar Ali (Technical White Hat)</li>
              </ul>
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
