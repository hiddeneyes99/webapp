import { Github, Heart, Star, GitFork, Scale, ExternalLink, Download, Code, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppIcon from "@/components/ui/app-icon";
import DownloadModal from "@/components/ui/download-modal";
import { useState } from "react";

export default function About() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);

  const technologies = [
    { name: "Flutter", description: "Cross-platform mobile framework", color: "text-blue-500" },
    { name: "Dart", description: "Programming language", color: "text-cyan-500" },
    { name: "YouTube Explode", description: "YouTube data extraction", color: "text-red-500" },
    { name: "Just Audio", description: "Audio playback engine", color: "text-green-500" },
    { name: "Hive", description: "Local database storage", color: "text-yellow-500" },
    { name: "Get", description: "State management", color: "text-purple-500" }
  ];

  const contributions = [
    { metric: "2.2k+", label: "GitHub Stars", icon: Star },
    { metric: "180+", label: "Forks", icon: GitFork },
    { metric: "25+", label: "Releases", icon: Award },
    { metric: "50+", label: "Contributors", icon: Users }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AppIcon size="xl" className="mx-auto mb-8" useCustomIcon />
            <h1 className="text-5xl md:text-6xl font-bold mb-6 gradient-text">
              About Rhythm Music
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              An open-source, ad-free music streaming application built with passion and dedication. 
              Crafted by Technical White Hat for music lovers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-20 bg-gradient-to-br from-violet-900/20 via-purple-900/30 to-indigo-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-violet-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-indigo-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Meet the Creator
            </h2>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=200&h=200"
                    alt="Technical White Hat - Software Developer" 
                    className="w-40 h-40 rounded-full object-cover shadow-lg" 
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-3xl font-bold mb-3 gradient-text">
                      Technical White Hat
                    </h3>
                    <p className="text-xl text-gray-300 mb-4">Passionate Developer & Music Enthusiast</p>
                    <p className="text-gray-400 leading-relaxed mb-6">
                      I created Rhythm Music as an ad-free alternative to commercial music streaming platforms. 
                      This project represents my commitment to providing free, open-source software that respects 
                      user privacy and delivers an exceptional music listening experience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-2 sm:space-y-0 sm:space-x-4">
                      <a 
                        href="https://github.com/technicalwhitehat-yt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" className="border-gray-600">
                          <Github className="mr-2" size={16} />
                          Follow on GitHub
                        </Button>
                      </a>
                      <a 
                        href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                          <Star className="mr-2" size={16} />
                          Star Project
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Special Dedication */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-br from-red-500/20 via-purple-500/20 to-pink-500/20 border-red-500/30 backdrop-blur-sm">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold mb-6 text-red-400">
                  <Heart className="inline mr-3 animate-pulse" size={32} />
                  Built for Someone Special
                </h3>
                <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                  This app is dedicated to someone very special in my life. Every line of code, every feature, 
                  and every design element was crafted with love and care. Music brings us together, 
                  and this app is my heartfelt gift to you and all music lovers around the world.
                </p>
                <div className="flex justify-center space-x-3">
                  <Heart className="text-red-500 animate-bounce" size={40} />
                  <Heart className="text-pink-500 animate-bounce" size={40} style={{ animationDelay: '0.2s' }} />
                  <Heart className="text-red-500 animate-bounce" size={40} style={{ animationDelay: '0.4s' }} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Project Stats */}
      <section className="py-20 bg-gradient-to-br from-amber-900/20 via-orange-900/30 to-red-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-16 right-16 w-24 h-24 bg-amber-500/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-16 left-16 w-36 h-36 bg-red-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-orange-500/10 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Community Impact
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {contributions.map((item, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <item.icon className="mx-auto text-4xl text-cyan-400 mb-4" size={48} />
                    <div className="text-3xl font-bold gradient-text mb-2">{item.metric}</div>
                    <div className="text-gray-400">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Section */}
      <section className="py-20 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Open Source Heritage
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Rhythm Music */}
              <Card className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/30">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <AppIcon size="lg" useCustomIcon />
                    <div>
                      <h3 className="text-2xl font-bold gradient-text">Rhythm Music</h3>
                      <p className="text-gray-400">Enhanced version by Technical White Hat</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Rhythm Music is my enhanced version of the original Harmony Music project, 
                    featuring improved UI, additional features, and optimizations for better user experience.
                  </p>
                  <div className="flex space-x-4">
                    <a 
                      href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Button className="bg-gradient-to-r from-purple-500 to-cyan-500">
                        <Github className="mr-2" size={16} />
                        View Project
                      </Button>
                    </a>
                    <Button 
                      variant="outline" 
                      className="border-gray-600"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      <Download className="mr-2" size={16} />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Original Harmony Music */}
              <Card className="bg-gray-900/50">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                      <Code className="text-white" size={32} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Harmony Music</h3>
                      <p className="text-gray-400">Original open-source project</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6">
                    Harmony Music is the original open-source project that inspired Rhythm Music. 
                    Created by the amazing developer community, it laid the foundation for ad-free music streaming.
                  </p>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
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
                        View Original
                      </Button>
                    </a>
                    <Button disabled className="opacity-50">
                      <Heart className="mr-2" size={16} />
                      Credit Given
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Stack */}
      <section className="py-20 bg-gradient-to-br from-emerald-900/20 via-green-900/30 to-teal-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-12 left-12 w-28 h-28 bg-emerald-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-12 right-12 w-32 h-32 bg-teal-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12 gradient-text">
              Built With Modern Technology
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl font-bold mb-3 ${tech.color}`}>{tech.name}</div>
                    <p className="text-gray-400">{tech.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-purple-900/30 to-cyan-900/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 gradient-text">
              Join the Open Source Community
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contribute to the project, report issues, suggest features, or simply star the repository to show your support!
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <a 
                href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-xl text-lg px-8 py-4">
                  <Github className="mr-2" size={20} />
                  Contribute on GitHub
                </Button>
              </a>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-gray-600 text-lg px-8 py-4"
                onClick={() => setIsDownloadModalOpen(true)}
              >
                <Download className="mr-2" size={20} />
                Download App
              </Button>
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
