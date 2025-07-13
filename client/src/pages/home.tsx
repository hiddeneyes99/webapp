import { useState } from "react";
import { Download, Github, Heart, Music, Smartphone, Monitor, Shield, Play, Volume2, Radio, Users, Palette, Navigation, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppIcon from "@/components/ui/app-icon";
import DownloadModal from "@/components/ui/download-modal";
import AnimatedVisualizer from "@/components/ui/animated-visualizer";

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
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
            <div className="mb-6 sm:mb-8">
              <AppIcon size="xl" className="mx-auto mb-6 sm:mb-8" useCustomIcon />
              <div className="flex flex-col items-center mb-4 sm:mb-6">
                <AnimatedVisualizer className="mb-3 sm:mb-4" bars={5} size="lg" />
                <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold gradient-text">
                  Rhythm Music
                </h1>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                Ad-Free Music Experience
              </h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8 text-white">
                Made with <Heart className="inline text-red-500 heart-pulse mx-1 sm:mx-2" size={24} /> for someone special
              </h3>
              <p className="text-base sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto px-4">
                A cross-platform music streaming app that lets you enjoy unlimited music from YouTube & YouTube Music 
                without advertisements. Built with passion by Technical White Hat.
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 download-btn w-full sm:w-auto"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="mr-2" size={18} />
                Download Now
              </Button>
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="outline" size="lg" className="border-gray-600 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full">
                  <Github className="mr-2" size={18} />
                  View Source Code
                </Button>
              </a>
            </div>

            {/* Platform Support */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 sm:gap-4">
              {platforms.map((platform, index) => (
                <Card key={platform.name} className={`bg-gray-900/50 border-gray-700 platform-card ${platform.available ? 'hover:bg-gray-800/50' : 'opacity-60'}`}>
                  <CardContent className="p-3 sm:p-4 text-center">
                    <platform.icon className={`mx-auto mb-1 sm:mb-2 ${platform.color}`} size={28} />
                    <h4 className="font-semibold text-xs sm:text-sm">{platform.name}</h4>
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



      {/* Detailed App Description */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-indigo-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-8 left-8 w-20 h-20 bg-blue-500/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 right-8 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 gradient-text">
              What is Rhythm Music?
            </h3>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="space-y-4 sm:space-y-6 text-sm sm:text-base text-gray-300 leading-relaxed">
                  <p className="text-base sm:text-lg font-semibold text-white">
                    Rhythm Music is a revolutionary, completely free music streaming application that brings you unlimited access to millions of songs without any limitations.
                  </p>
                  
                  <p>
                    Built from the ground up by <span className="text-purple-400 font-semibold">Technical White Hat</span>, this app connects directly to YouTube Music's vast library, giving you access to every song, album, and playlist you could ever want - all without a single advertisement interrupting your music experience.
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 my-6 sm:my-8">
                    <div className="text-center p-3 sm:p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-1 sm:mb-2">100%</div>
                      <div className="text-xs sm:text-sm text-purple-300">Ad-Free</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <div className="text-2xl sm:text-3xl font-bold text-cyan-400 mb-1 sm:mb-2">∞</div>
                      <div className="text-xs sm:text-sm text-cyan-300">Unlimited Music</div>
                    </div>
                    <div className="text-center p-3 sm:p-4 bg-green-500/10 rounded-lg border border-green-500/20">
                      <div className="text-2xl sm:text-3xl font-bold text-green-400 mb-1 sm:mb-2">FREE</div>
                      <div className="text-xs sm:text-sm text-green-300">Forever</div>
                    </div>
                  </div>
                  
                  <p>
                    Unlike other music apps that require subscriptions, registrations, or bombard you with ads, Rhythm Music respects your time and privacy. Simply download, install, and start listening to your favorite music immediately.
                  </p>
                  
                  <p className="text-base sm:text-lg font-semibold text-white">
                    <Heart className="inline text-red-500 mr-2" size={20} />
                    This isn't just an app - it's a gift to music lovers everywhere, built with genuine passion and dedication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features Highlight */}
      <section className="py-16 sm:py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">
              Why Choose Rhythm Music?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              <Card className="bg-gradient-to-br from-purple-500/20 to-transparent border-purple-500/30 backdrop-blur-sm feature-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Shield className="mx-auto text-3xl sm:text-4xl text-purple-400 mb-3 sm:mb-4 feature-icon" size={48} />
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">100% Ad-Free</h4>
                  <p className="text-sm sm:text-base text-gray-400">Enjoy uninterrupted music streaming without any advertisements or distractions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-500/20 to-transparent border-cyan-500/30 backdrop-blur-sm feature-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Download className="mx-auto text-3xl sm:text-4xl text-cyan-400 mb-3 sm:mb-4 feature-icon" size={48} />
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">Offline Downloads</h4>
                  <p className="text-sm sm:text-base text-gray-400">Download your favorite tracks and listen offline anytime, anywhere</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-green-500/20 to-transparent border-green-500/30 backdrop-blur-sm feature-card">
                <CardContent className="p-6 sm:p-8 text-center">
                  <Heart className="mx-auto text-3xl sm:text-4xl text-red-400 mb-3 sm:mb-4 feature-icon" size={48} />
                  <h4 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">No Login Required</h4>
                  <p className="text-sm sm:text-base text-gray-400">Start listening immediately without creating accounts or providing personal data</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* All Features Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-900/20 via-purple-900/30 to-pink-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <h3 className="text-4xl font-bold text-center mb-12 gradient-text">
              Complete Feature Set
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 feature-card">
                  <CardContent className="p-6">
                    <div className="text-3xl mb-4 feature-icon">{feature.icon}</div>
                    <h5 className="font-semibold mb-2">{feature.title}</h5>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Project Worth Section */}
      <section className="py-20 bg-gradient-to-br from-green-900/30 to-blue-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 gradient-text">
              A Gift, Not Just an App
            </h3>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div className="text-left">
                    <h4 className="text-2xl font-bold mb-4 text-white">Actual Project Worth</h4>
                    <p className="text-gray-300 mb-4">
                      If you gave this project to an agency — they'd easily charge:
                    </p>
                    <div className="text-3xl font-bold gradient-text mb-2">
                      ₹1.5 Lakh to ₹2 Lakh+
                    </div>
                    <p className="text-sm text-gray-400 mb-4">
                      Team of Designers, Developers, Testers, Project Managers.
                    </p>
                    <p className="text-xl font-semibold text-green-400">
                      But you're getting it for FREE
                    </p>
                    <p className="text-gray-300">
                      Because this was made with something <strong className="text-red-400">money can't buy</strong> — emotion.
                    </p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-purple-500/10 rounded-lg border border-purple-500/30">
                      <Zap className="text-purple-400 mb-2" size={24} />
                      <div className="text-sm text-purple-300">Premium Features</div>
                      <div className="text-xs text-gray-400">Completely Free</div>
                    </div>
                    <div className="p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/30">
                      <Heart className="text-red-400 mb-2" size={24} />
                      <div className="text-sm text-cyan-300">Built with Love</div>
                      <div className="text-xs text-gray-400">Priceless</div>
                    </div>
                    <div className="p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                      <Shield className="text-green-400 mb-2" size={24} />
                      <div className="text-sm text-green-300">No Ads, No Fees</div>
                      <div className="text-xs text-gray-400">Always Free</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>



      {/* The Story Behind Rhythm */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 via-black/50 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold mb-8 gradient-text">
              A Story of Passion & Unbreakable Motivation
            </h3>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                  <p>
                    <strong className="text-white">Rhythm Music</strong> is not just an app — it's a story carved from sleepless nights, 
                    countless failures, and one powerful reason: <span className="gradient-text font-semibold">build something special</span>.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                    <div className="text-center p-4 bg-red-500/10 rounded-lg border border-red-500/20">
                      <div className="text-3xl font-bold text-red-400 mb-2">42</div>
                      <div className="text-sm text-red-300">Build Failures</div>
                    </div>
                    <div className="text-center p-4 bg-purple-500/10 rounded-lg border border-purple-500/20">
                      <div className="text-3xl font-bold text-purple-400 mb-2">180+</div>
                      <div className="text-sm text-purple-300">Hours of Work</div>
                    </div>
                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg border border-cyan-500/20">
                      <div className="text-3xl font-bold text-cyan-400 mb-2">12</div>
                      <div className="text-sm text-cyan-300">Days to Complete</div>
                    </div>
                  </div>
                  
                  <p>
                    I didn't know how to build an app. I had never written a single line of code in app development. 
                    And yet, I dared to dream. <span className="text-red-400 font-semibold">Why?</span>
                  </p>
                  
                  <p className="text-xl font-semibold text-white">
                    Because there was one person I deeply cared about. I wanted to build something special.
                  </p>
                  
                  <div className="p-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 rounded-lg border border-red-500/30 my-6">
                    <p className="text-center italic text-lg">
                      <Heart className="inline text-red-500 mr-2" size={20} />
                      "If I can't do this for my own dream... then what is my dream worth?"
                      <Heart className="inline text-red-500 ml-2" size={20} />
                    </p>
                  </div>
                  
                  <p>
                    On the <strong className="text-green-400">43rd attempt</strong>, I did it. I beat the code. I crushed the failure. I won.
                  </p>
                </div>
              </CardContent>
            </Card>
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
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4 download-btn"
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
                  <Github className="mr-2" size={20} />
                  View on GitHub
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
