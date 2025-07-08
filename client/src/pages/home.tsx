import { Link } from "wouter";
import { Play, Github, Heart, Music, Download, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AppIcon from "@/components/ui/app-icon";

export default function Home() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <AppIcon size="xl" className="mx-auto mb-8" />
              <h2 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
                Ad-Free Music
              </h2>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                Made with <Heart className="inline text-red-500 animate-pulse mx-2" size={48} />
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Stream unlimited music from YouTube & YouTube Music without ads. Built with passion for someone very special.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card className="bg-gradient-to-br from-purple-500/20 to-transparent border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Music className="mx-auto text-3xl text-purple-400 mb-4" size={48} />
                  <h4 className="text-lg font-semibold mb-2">Unlimited Streaming</h4>
                  <p className="text-gray-400 text-sm">Stream from YouTube & YouTube Music without interruptions</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-cyan-500/20 to-transparent border-cyan-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Download className="mx-auto text-3xl text-cyan-400 mb-4" size={48} />
                  <h4 className="text-lg font-semibold mb-2">Offline Downloads</h4>
                  <p className="text-gray-400 text-sm">Download your favorite tracks for offline listening</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/30 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Heart className="mx-auto text-3xl text-red-400 mb-4" size={48} />
                  <h4 className="text-lg font-semibold mb-2">Made with Love</h4>
                  <p className="text-gray-400 text-sm">Created with passion and dedication for music lovers</p>
                </CardContent>
              </Card>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link href="/discover">
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4">
                  <Play className="mr-2" size={20} />
                  Start Listening
                </Button>
              </Link>
              <a 
                href="https://github.com/anandnet/Harmony-Music" 
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

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Join the Rhythm Community
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">2.2k+</div>
                <div className="text-gray-400">GitHub Stars</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">180+</div>
                <div className="text-gray-400">Contributors</div>
              </div>
              <div className="space-y-2">
                <div className="text-4xl font-bold gradient-text">25+</div>
                <div className="text-gray-400">Releases</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features List */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
              Why Choose Rhythm Music?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl text-red-500 mb-4">🚫</div>
                  <h5 className="font-semibold mb-2">No Advertisements</h5>
                  <p className="text-sm text-gray-400">Enjoy uninterrupted music without any ads</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <Download className="text-3xl text-green-500 mb-4" size={32} />
                  <h5 className="font-semibold mb-2">Offline Downloads</h5>
                  <p className="text-sm text-gray-400">Download songs for offline listening</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl text-blue-500 mb-4">📋</div>
                  <h5 className="font-semibold mb-2">Custom Playlists</h5>
                  <p className="text-sm text-gray-400">Create and manage your own playlists</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl text-purple-500 mb-4">🎛️</div>
                  <h5 className="font-semibold mb-2">Audio Equalizer</h5>
                  <p className="text-sm text-gray-400">Customize your audio experience</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl text-orange-500 mb-4">⏰</div>
                  <h5 className="font-semibold mb-2">Sleep Timer</h5>
                  <p className="text-sm text-gray-400">Set automatic playback stop</p>
                </CardContent>
              </Card>
              
              <Card className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                <CardContent className="p-6">
                  <div className="text-3xl text-cyan-500 mb-4">🔗</div>
                  <h5 className="font-semibold mb-2">YouTube Integration</h5>
                  <p className="text-sm text-gray-400">Import from YouTube & YouTube Music</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
