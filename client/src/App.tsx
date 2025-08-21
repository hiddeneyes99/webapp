import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DownloadModal from "@/components/ui/download-modal";
import BlessingModal from "@/components/ui/blessing-modal";
import MusicPlayer from "@/components/music/player";
import SocialLinks from "@/components/ui/social-links";
import { AudioPlayerProvider } from "@/hooks/use-audio-player";
import { useState, lazy, Suspense } from "react";

// Lazy load pages for faster initial load
const Home = lazy(() => import("@/pages/home"));
const Features = lazy(() => import("@/pages/discover"));
const About = lazy(() => import("@/pages/about"));
const Library = lazy(() => import("@/pages/library"));
const NotFound = lazy(() => import("@/pages/not-found"));

// Loading component
const PageLoading = () => (
  <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500 mx-auto mb-4"></div>
      <p className="text-white/60">Loading...</p>
    </div>
  </div>
);

function Router() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header onDownloadClick={() => setIsDownloadModalOpen(true)} />
      <main className="flex-1">
        <Suspense fallback={<PageLoading />}>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/library" component={Library} />
            <Route path="/features" component={Features} />
            <Route path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </main>
      <Footer />
      
      {/* Global Download Modal */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
      
      {/* Blessing Modal - Auto-shows on page load */}
      <BlessingModal />
      
      {/* Floating Social Media Links */}
      <SocialLinks variant="floating" showLabels={false} size="sm" />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AudioPlayerProvider>
          <Toaster />
          <Router />
          <MusicPlayer />
        </AudioPlayerProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
