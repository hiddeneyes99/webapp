import { Github, Heart, Star, GitFork, Scale, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppIcon from "@/components/ui/app-icon";

export default function About() {
  const features = [
    { icon: "🚫", title: "No Advertisements", description: "Enjoy uninterrupted music without any ads" },
    { icon: "📥", title: "Offline Downloads", description: "Download songs for offline listening" },
    { icon: "📋", title: "Custom Playlists", description: "Create and manage your own playlists" },
    { icon: "🎛️", title: "Audio Equalizer", description: "Customize your audio experience" },
    { icon: "⏰", title: "Sleep Timer", description: "Set automatic playback stop" },
    { icon: "🔗", title: "YouTube Integration", description: "Import from YouTube & YouTube Music" },
  ];

  return (
    <div className="pt-20 pb-32">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Creator Section */}
          <section className="mb-16 text-center">
            <h2 className="text-3xl font-bold mb-8 gradient-text">
              About the Creator
            </h2>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                    alt="Technical White Hat - Software Developer" 
                    className="w-32 h-32 rounded-full object-cover shadow-lg" 
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-bold mb-2 gradient-text">
                      Technical White Hat
                    </h3>
                    <p className="text-gray-300 mb-4">Passionate Developer & Music Enthusiast</p>
                    <p className="text-gray-400 leading-relaxed">
                      I created Rhythm Music as an ad-free alternative to commercial music streaming platforms. 
                      This project is built with love and dedication for music lovers who want an uninterrupted listening experience.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Special Dedication */}
          <section className="mb-16">
            <Card className="bg-gradient-to-br from-red-500/20 via-purple-500/20 to-pink-500/20 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4 text-red-400">
                  <Heart className="inline mr-2 animate-pulse" size={28} />
                  Built for Someone Special
                </h3>
                <p className="text-gray-300 text-lg mb-6">
                  This app is dedicated to someone very special in my life. Every line of code, every feature, 
                  and every design element was crafted with love and care. Music brings us together, 
                  and this app is my gift to you.
                </p>
                <div className="flex justify-center space-x-2">
                  <Heart className="text-red-500 text-2xl animate-bounce" size={32} />
                  <Heart className="text-pink-500 text-2xl animate-bounce" size={32} style={{ animationDelay: '0.2s' }} />
                  <Heart className="text-red-500 text-2xl animate-bounce" size={32} style={{ animationDelay: '0.4s' }} />
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Open Source Project */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Open Source Project</h3>
            <Card className="bg-gray-900/50">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-semibold mb-2 flex items-center justify-center md:justify-start space-x-2">
                      <AppIcon size="sm" />
                      <span>Harmony Music</span>
                    </h4>
                    <p className="text-gray-400 mb-2">Based on the amazing open-source project</p>
                    <div className="flex items-center justify-center md:justify-start space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Star className="text-yellow-500" size={16} />
                        <span>2.2k stars</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <GitFork className="text-gray-400" size={16} />
                        <span>180 forks</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Scale className="text-gray-400" size={16} />
                        <span>GPL-3.0</span>
                      </span>
                    </div>
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/anandnet/Harmony-Music" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" className="border-gray-600">
                        <Github className="mr-2" size={16} />
                        View Source
                      </Button>
                    </a>
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                      <Heart className="mr-2" size={16} />
                      Support
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Features Grid */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Features & Capabilities</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-4">{feature.icon}</div>
                    <h4 className="font-semibold mb-2">{feature.title}</h4>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Technical Stack */}
          <section className="mb-16">
            <h3 className="text-2xl font-bold mb-6 text-center">Built With Modern Technology</h3>
            <Card className="bg-gray-900/50">
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                  <div className="space-y-2">
                    <div className="text-blue-500 font-semibold">React</div>
                    <div className="text-xs text-gray-400">Frontend Framework</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-purple-500 font-semibold">TypeScript</div>
                    <div className="text-xs text-gray-400">Type Safety</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-cyan-500 font-semibold">Tailwind CSS</div>
                    <div className="text-xs text-gray-400">Styling</div>
                  </div>
                  <div className="space-y-2">
                    <div className="text-green-500 font-semibold">Node.js</div>
                    <div className="text-xs text-gray-400">Backend Runtime</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Call to Action */}
          <section className="text-center">
            <Card className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">
                  Join the Open Source Community
                </h3>
                <p className="text-gray-300 mb-6">
                  Contribute to the project, report issues, or simply star the repository to show your support!
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <a 
                    href="https://github.com/anandnet/Harmony-Music" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 w-full sm:w-auto">
                      <Github className="mr-2" size={16} />
                      Contribute on GitHub
                    </Button>
                  </a>
                  <a 
                    href="https://github.com/anandnet/Harmony-Music/releases" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="border-gray-600 w-full sm:w-auto">
                      <ExternalLink className="mr-2" size={16} />
                      Download Latest Release
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </section>
        </div>
      </div>
    </div>
  );
}
