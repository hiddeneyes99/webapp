import { Download, Github, Monitor, Smartphone, ExternalLink, Play, CheckCircle, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import AppIcon from "@/components/ui/app-icon";
import DownloadModal from "@/components/ui/download-modal";
import { useState } from "react";

export default function Features() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const mainFeatures = [
    { icon: "🎵", title: "YouTube & YouTube Music Integration", description: "Direct streaming from the world's largest music platforms" },
    { icon: "🚫", title: "100% Ad-Free Experience", description: "No advertisements, no interruptions, just pure music" },
    { icon: "💾", title: "Offline Downloads", description: "Download songs and listen without internet connection" },
    { icon: "🔓", title: "No Login Required", description: "Start listening immediately without accounts or registration" },
    { icon: "📱", title: "Cross-Platform Support", description: "Available on Android, Windows, and Linux" },
    { icon: "🎛️", title: "Built-in Equalizer", description: "Customize your audio experience with advanced sound controls" }
  ];

  const advancedFeatures = [
    { icon: "📦", title: "Song Cache While Playing", description: "Smart caching system for smooth playback" },
    { icon: "📻", title: "Radio Feature Support", description: "Discover new music with radio stations" },
    { icon: "🎼", title: "Background Music Playback", description: "Continue listening while using other apps" },
    { icon: "📋", title: "Playlist & Bookmark Support", description: "Create playlists and bookmark artists & albums" },
    { icon: "📤", title: "Import via Sharing", description: "Import content directly from YouTube/YouTube Music" },
    { icon: "⚙️", title: "Streaming Quality Control", description: "Choose your preferred audio quality" },
    { icon: "🌐", title: "Multi-language Support", description: "Interface available in multiple languages" },
    { icon: "⏭️", title: "Skip Silence Feature", description: "Automatically skip silent parts in tracks" },
    { icon: "🎨", title: "Dynamic Themes", description: "Beautiful themes that adapt to your music" },
    { icon: "📱", title: "Flexible Navigation", description: "Choose between bottom and side navigation" },
    { icon: "🚗", title: "Android Auto Support", description: "Seamless car integration" },
    { icon: "📝", title: "Synced & Plain Lyrics", description: "View lyrics synchronized with playback" },
    { icon: "⏰", title: "Sleep Timer", description: "Automatic playback stop timer" },
    { icon: "🔗", title: "Piped Integration", description: "Import playlists from Piped instances" }
  ];

  const screenshots = [
    { title: "Main Interface", url: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=400&h=600&fit=crop" },
    { title: "Music Player", url: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=600&fit=crop" },
    { title: "Playlist View", url: "https://images.unsplash.com/photo-1571330735066-03aaa9429d89?w=400&h=600&fit=crop" }
  ];

  const platforms = [
    { name: "Android", icon: Smartphone, version: "Latest", status: "available", downloads: "1M+" },
    { name: "Windows", icon: Monitor, version: "Latest", status: "available", downloads: "500K+" },
    { name: "Linux", icon: Monitor, version: "Latest", status: "available", downloads: "200K+" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AppIcon size="xl" className="mx-auto mb-8" useCustomIcon />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              Complete Features Overview
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover everything Rhythm Music has to offer - from ad-free streaming to advanced audio controls, 
              we've built the ultimate music experience for you.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="mr-2" size={20} />
                Download Now
              </Button>
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-gray-600 text-lg px-8 py-4">
                  <Github className="mr-2" size={20} />
                  View Source
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-20 bg-gradient-to-br from-blue-900/20 via-indigo-900/30 to-purple-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-24 h-24 bg-blue-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Core Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mainFeatures.map((feature, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 hover:border-purple-500/30 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Support */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Platform Support
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {platforms.map(platform => (
                <Card key={platform.name} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-8 text-center">
                    <platform.icon className="mx-auto text-4xl text-cyan-400 mb-4" size={64} />
                    <h3 className="text-2xl font-semibold mb-2">{platform.name}</h3>
                    <Badge variant="outline" className="mb-3">
                      <CheckCircle className="mr-1" size={12} />
                      {platform.status === 'available' ? 'Available' : 'Coming Soon'}
                    </Badge>
                    <p className="text-gray-400 mb-2">Version: {platform.version}</p>
                    <p className="text-sm text-gray-500">Downloads: {platform.downloads}</p>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 mt-4"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      <Download className="mr-2" size={16} />
                      Download for {platform.name}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Features */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 via-teal-900/30 to-cyan-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-36 h-36 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-teal-500/10 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Advanced Features
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {advancedFeatures.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              App Screenshots
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {screenshots.map((screenshot, index) => (
                <Card key={index} className="bg-gray-900/50 overflow-hidden">
                  <CardContent className="p-0">
                    <img 
                      src={screenshot.url} 
                      alt={screenshot.title}
                      loading="lazy"
                      className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h4 className="font-semibold text-center">{screenshot.title}</h4>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-20 bg-gradient-to-br from-rose-900/20 via-pink-900/30 to-purple-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-16 left-16 w-20 h-20 bg-rose-500/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-16 right-16 w-24 h-24 bg-pink-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              System Requirements
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <Smartphone className="text-green-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Android</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Android 5.0+ (API 21)</li>
                    <li>• 100MB free storage</li>
                    <li>• Internet connection</li>
                    <li>• 2GB RAM recommended</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <Monitor className="text-blue-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Windows</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Windows 10/11</li>
                    <li>• 200MB free storage</li>
                    <li>• Internet connection</li>
                    <li>• 4GB RAM recommended</li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50">
                <CardContent className="p-6">
                  <Monitor className="text-yellow-500 mb-4" size={32} />
                  <h3 className="text-xl font-semibold mb-4">Linux</h3>
                  <ul className="space-y-2 text-gray-400">
                    <li>• Ubuntu 18.04+</li>
                    <li>• 200MB free storage</li>
                    <li>• Internet connection</li>
                    <li>• 4GB RAM recommended</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Experience Ad-Free Music?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of music lovers who have already switched to Rhythm Music for their daily listening needs.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="mr-2" size={20} />
                Download Latest Release
              </Button>
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-gray-600 text-lg px-8 py-4">
                  <Star className="mr-2" size={20} />
                  Star on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Download Modal */}
      <DownloadModal 
        isOpen={isDownloadModalOpen} 
        onClose={() => setIsDownloadModalOpen(false)} 
      />
    </div>
  );
}
