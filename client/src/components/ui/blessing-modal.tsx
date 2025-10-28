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
      }, 7000);
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
        className="w-[95vw] max-w-2xl mx-auto max-h-[90vh] overflow-y-auto bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 
                   backdrop-blur-xl border-2 border-purple-400/40 rounded-2xl shadow-2xl 
                   shadow-purple-600/30 text-white p-0 animate-in fade-in-0 
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
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 
                     transition-all duration-200 group backdrop-blur-sm border border-white/10"
          data-testid="button-close-modal"
          aria-label="Close modal"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Animated gradient border */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>

        {/* Content */}
        <div className="p-6 sm:p-8 pt-10 sm:pt-12">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-[2px] rounded-2xl mb-4">
              <div className="bg-slate-900 px-6 py-3 rounded-2xl">
                <h2 className="text-3xl sm:text-4xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 
                               bg-clip-text text-transparent">
                  Rhythm Music v1.1
                </h2>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <p className="text-xl sm:text-2xl font-bold text-yellow-400 animate-pulse">
                🔍 The Search is Back!
              </p>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
          </div>

          {/* Main content grid */}
          <div className="space-y-5">
            {/* About this Update */}
            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-400/30 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <span className="text-xl">💬</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-blue-300">About this Update</h3>
              </div>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                In this new <strong className="text-blue-400">v1.1 release</strong> of Rhythm Music, we've fixed one of the biggest issues — the <strong className="text-purple-400">Search feature</strong> is now fully functional again! 🔍🎶
              </p>
              <p className="text-gray-200 text-sm sm:text-base leading-relaxed mt-2">
                In the previous version, some users experienced problems with song searches not working. That's now fixed — you can instantly find your favorite tracks without any hassle ⚡
              </p>
            </div>

            {/* What's Fixed */}
            <div className="bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-400/30 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-emerald-300">What's Fixed</h3>
              </div>
              <ul className="space-y-2.5">
                <li className="flex items-start gap-3 text-gray-200 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-0.5">✅</span>
                  <span><strong className="text-emerald-300">Search Results Bug Fixed</strong> – Search now works smoothly and accurately.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-0.5">⚡</span>
                  <span><strong className="text-emerald-300">Improved Speed & Stability</strong> – The app feels faster, smoother, and more responsive.</span>
                </li>
                <li className="flex items-start gap-3 text-gray-200 text-sm sm:text-base">
                  <span className="text-emerald-400 mt-0.5">🧠</span>
                  <span><strong className="text-emerald-300">Minor Bug Fixes</strong> – Background performance and UI improvements for a cleaner experience.</span>
                </li>
              </ul>
            </div>

            {/* Important Note - Two Column Grid */}
            <div className="grid sm:grid-cols-2 gap-5">
              {/* Installation Note */}
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-400/30 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                    <span className="text-xl">⚠️</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-red-300">Important Note</h3>
                </div>
                <p className="text-gray-200 text-xs sm:text-sm font-semibold mb-2">
                  This update requires a fresh installation.
                </p>
                <p className="text-gray-200 text-xs sm:text-sm mb-2">
                  If you have an older version installed:
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-200 text-xs sm:text-sm ml-2">
                  <li>Uninstall the old app first</li>
                  <li>Install the new v1.1 APK</li>
                </ol>
                <div className="mt-3 p-2 bg-red-500/10 rounded-lg border border-red-400/20">
                  <p className="text-red-300 text-xs sm:text-sm italic">
                    Installing over the old version will cause a package conflict error!
                  </p>
                </div>
              </div>

              {/* Data Reset */}
              <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-400/30 rounded-xl p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/20 flex items-center justify-center">
                    <span className="text-xl">📦</span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-amber-300">Data Reset</h3>
                </div>
                <p className="text-gray-200 text-xs sm:text-sm mb-2">
                  All saved data will be reset:
                </p>
                <ul className="grid grid-cols-2 gap-1 text-gray-200 text-xs">
                  <li>❤️ Liked Songs</li>
                  <li>🎵 Playlists</li>
                  <li>📜 History</li>
                  <li>💡 Recommendations</li>
                  <li>🔍 Discover</li>
                  <li>💽 Albums</li>
                  <li>⬇️ Offline Songs</li>
                  <li>📁 Downloads</li>
                </ul>
                <div className="mt-3 p-2 bg-amber-500/10 rounded-lg border border-amber-400/20">
                  <p className="text-amber-300 text-xs italic">
                    Rebuilt for better performance 💫
                  </p>
                </div>
              </div>
            </div>

            {/* Developer's Note */}
            <div className="bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-purple-500/10 border border-purple-400/30 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <span className="text-xl">💜</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-300">Developer's Note</h3>
              </div>
              <p className="text-gray-200 text-sm sm:text-base italic leading-relaxed">
                This update may seem small, but it comes from one purpose —<br />
                <strong className="text-purple-400">"To make Rhythm Music better without changing its soul."</strong> 💜
              </p>
              <div className="mt-4 p-4 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-lg border border-purple-400/20">
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed">
                  If you enjoy this version, please send a silent prayer 🤲 for that someone special who made this app possible. Wish them happiness{" "}
                  <span className="inline-block animate-bounce text-pink-400">🌸</span>{" "}
                  and may all their dreams come true{" "}
                  <span className="inline-block animate-pulse text-yellow-400">🌟</span>
                </p>
              </div>
            </div>

            {/* Version Details */}
            <div className="bg-gradient-to-br from-indigo-500/10 to-blue-500/10 border border-indigo-400/30 rounded-xl p-5 backdrop-blur-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                  <span className="text-xl">📱</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-indigo-300">Version Details</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm sm:text-base">
                <div className="flex gap-2">
                  <span className="text-gray-400">App Name:</span>
                  <span className="text-white font-semibold">Rhythm Music</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-400">Version:</span>
                  <span className="text-white font-semibold">v1.1 (Search Fix)</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-400">Platform:</span>
                  <span className="text-white font-semibold">Android</span>
                </div>
                <div className="flex gap-2">
                  <span className="text-gray-400">License:</span>
                  <span className="text-white font-semibold">MIT (Free)</span>
                </div>
                <div className="flex gap-2 sm:col-span-2">
                  <span className="text-gray-400">Developer:</span>
                  <span className="text-white font-semibold">Afsar Ali (Technical White Hat)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action button */}
          <div className="flex justify-center mt-8">
            <Button
              onClick={handleClose}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 
                         hover:via-purple-700 hover:to-pink-700 text-white font-bold px-10 py-3 rounded-full 
                         shadow-lg shadow-purple-500/50 hover:shadow-xl hover:shadow-purple-500/60 
                         transition-all duration-300 transform hover:scale-105 border-2 border-white/20"
              data-testid="button-got-it"
            >
              Got it 💜
            </Button>
          </div>
        </div>

        {/* Decorative blur elements */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </DialogContent>
    </Dialog>
  );
}
