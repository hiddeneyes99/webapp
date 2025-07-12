import { Download, Github, Heart, Music, Smartphone, Monitor, Shield, Play, Volume2, Radio, Users, Palette, Navigation } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppIcon from "@/components/ui/app-icon";

export default function Home() {
  const features = [
    { icon: "🎵", title: "YouTube & YouTube Music Integration", description: "Play songs directly from YouTube and YouTube Music platforms" },
    { icon: "📦", title: "Song Cache While Playing", description: "Smart caching system for smooth playback experience" },
    { icon: "📻", title: "Radio Feature Support", description: "Discover new music with built-in radio stations" },
    { icon: "🎼", title: "Background Music", description: "Continue listening while using other apps" },
    { icon: "📋", title: "Playlist & Bookmark Support", description: "Create playlists and bookmark your favorite artists & albums" },
    { icon: "📤", title: "Import via Sharing", description: "Import songs, playlists, albums, and artists from YouTube/YouTube Music" },
    { icon: "⚙️", title: "Streaming Quality Control", description: "Choose your preferred audio quality for optimal experience" },
    { icon: "💾", title: "Song Downloading Support", description: "Download songs for offline listening" },
    { icon: "🌐", title: "Language Support", description: "Multi-language interface for global users" },
    { icon: "⏭️", title: "Skip Silence", description: "Automatically skip silent parts in tracks" },
    { icon: "🎨", title: "Dynamic Theme", description: "Beautiful themes that adapt to your music" },
    { icon: "📱", title: "Flexible Navigation", description: "Switch between bottom and side navigation bars" },
    { icon: "🎛️", title: "Equalizer Support", description: "Fine-tune your audio with built-in equalizer" },
    { icon: "🚗", title: "Android Auto Support", description: "Seamless integration with Android Auto" },
    { icon: "📝", title: "Synced & Plain Lyrics", description: "View synchronized and plain text lyrics" },
    { icon: "⏰", title: "Sleep Timer", description: "Set automatic playback stop timer" },
    { icon: "🚫", title: "No Advertisement", description: "Completely ad-free music experience" },
    { icon: "🔓", title: "No Login Required", description: "Start listening immediately without registration" },
    { icon: "🔗", title: "Piped Playlist Integration", description: "Import playlists from Piped instances" }
  ];

  const platforms = [
    { name: "Android", icon: Smartphone, color: "text-green-500", available: true },
    { name: "Windows", icon: Monitor, color: "text-blue-500", available: true },
    { name: "Linux", icon: Monitor, color: "text-yellow-500", available: true },
    { name: "macOS", icon: Monitor, color: "text-gray-400", available: false },
    { name: "iOS", icon: Smartphone, color: "text-gray-400", available: false }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <AppIcon size="xl" className="mx-auto mb-8" useCustomIcon />
              <h1 className="text-6xl md:text-8xl font-bold mb-6 gradient-text">
                Rhythm Music
              </h1>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Ad-Free Music Experience
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold mb-8 text-white">
                Made with <Heart className="inline text-red-500 animate-pulse mx-2" size={32} /> for someone special
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                A cross-platform music streaming app that lets you enjoy unlimited music from YouTube & YouTube Music 
                without advertisements. Built with passion by Technical White Hat.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4">
                  <Download className="mr-2" size={20} />
                  Download Now
                </Button>
              </a>
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-gray-600 text-lg px-8 py-4">
                  <Github className="mr-2" size={20} />
                  View Source Code
                </Button>
              </a>
            </div>

            {/* Platform Support */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {platforms.map(platform => (
                <Card key={platform.name} className={`bg-gray-900/50 border-gray-700 ${platform.available ? 'hover:bg-gray-800/50' : 'opacity-60'}`}>
                  <CardContent className="p-4 text-center">
                    <platform.icon className={`mx-auto mb-2 ${platform.color}`} size={32} />
                    <h4 className="font-semibold text-sm">{platform.name}</h4>
                    <p className="text-xs text-gray-400 mt-1">
                      {platform.available ? 'Available' : 'Coming Soon'}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
              Why Choose Rhythm Music?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <Card className="bg-gradient-to-br from-purple-500/20 to-transparent border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Shield className="mx-auto text-4xl text-purple-400 mb-4" size={56} />
                  <h4 className="text-xl font-semibold mb-3">100% Ad-Free</h4>
                  <p className="text-gray-400">Enjoy uninterrupted music streaming without any advertisements or distractions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-500/20 to-transparent border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Download className="mx-auto text-4xl text-cyan-400 mb-4" size={56} />
                  <h4 className="text-xl font-semibold mb-3">Offline Downloads</h4>
                  <p className="text-gray-400">Download your favorite tracks and listen offline anytime, anywhere</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/20 to-transparent border-green-500/30 backdrop-blur-sm">
                <CardContent className="p-8 text-center">
                  <Heart className="mx-auto text-4xl text-red-400 mb-4" size={56} />
                  <h4 className="text-xl font-semibold mb-3">No Login Required</h4>
                  <p className="text-gray-400">Start listening immediately without creating accounts or providing personal data</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
              Complete Feature Set
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h5 className="font-semibold mb-2">{feature.title}</h5>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-6 gradient-text">
              Ready to Experience Ad-Free Music?
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Download Rhythm Music now and enjoy unlimited music streaming without interruptions.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4">
                  <Download className="mr-2" size={20} />
                  Download Latest Release
                </Button>
              </a>
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button variant="outline" size="lg" className="border-gray-600 text-lg px-8 py-4">
                  <Github className="mr-2" size={20} />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
