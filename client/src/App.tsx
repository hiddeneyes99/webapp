import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Features from "@/pages/discover";
import About from "@/pages/about";
import Library from "@/pages/library";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import DownloadModal from "@/components/ui/download-modal";
import MusicPlayer from "@/components/music/player";
import { AudioPlayerProvider } from "@/hooks/use-audio-player";
import { useState } from "react";

function Router() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col">
      <Header onDownloadClick={() => setIsDownloadModalOpen(true)} />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/library" component={Library} />
          <Route path="/features" component={Features} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
      
      {/* Global Download Modal */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
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
