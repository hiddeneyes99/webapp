import { Github, Heart, Star, GitFork, Scale, ExternalLink, Download, Code, Users, Award } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AppIcon from "@/components/ui/app-icon";
import DownloadModal from "@/components/ui/download-modal";
import { useState, useEffect } from "react";
import techWhiteHatLogo from "@assets/technical white hat 2.0_1752333903253.jpg";

interface GitHubStats {
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
}

export default function About() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false);
  const [githubStats, setGithubStats] = useState<GitHubStats>({
    stars: 0,
    forks: 0,
    watchers: 0,
    issues: 0
  });

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch('https://api.github.com/repos/technicalwhitehat-yt/RhyThm-Music');
        if (response.ok) {
          const data = await response.json();
          setGithubStats({
            stars: data.stargazers_count || 0,
            forks: data.forks_count || 0,
            watchers: data.watchers_count || 0,
            issues: data.open_issues_count || 0
          });
        }
      } catch (error) {
        console.log('GitHub API not available, using default values');
      }
    };

    fetchGitHubStats();
  }, []);

  const technologies = [
    { name: "Flutter", description: "Cross-platform mobile framework", color: "text-blue-500" },
    { name: "Dart", description: "Programming language", color: "text-cyan-500" },
    { name: "YouTube Explode", description: "YouTube data extraction", color: "text-red-500" },
    { name: "Just Audio", description: "Audio playback engine", color: "text-green-500" },
    { name: "Hive", description: "Local database storage", color: "text-yellow-500" },
    { name: "Get", description: "State management", color: "text-purple-500" }
  ];

  const contributions = [
    { icon: Star, metric: `${githubStats.stars}`, label: "GitHub Stars" },
    { icon: GitFork, metric: `${githubStats.forks}`, label: "Project Forks" },
    { icon: Users, metric: `${githubStats.watchers}`, label: "Watchers" },
    { icon: Award, metric: "100%", label: "Open Source" }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-black via-purple-900/20 to-cyan-900/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <AppIcon size="xl" className="mx-auto mb-6 sm:mb-8" useCustomIcon />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 gradient-text">
              About Rhythm Music
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6 sm:mb-8 max-w-3xl mx-auto">
              An open-source, ad-free music streaming application built with passion and dedication. 
              Crafted by Technical White Hat for music lovers worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Creator Section */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-violet-900/20 via-purple-900/30 to-indigo-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-10 sm:top-20 left-4 sm:left-20 w-20 sm:w-32 h-20 sm:h-32 bg-violet-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-20 w-16 sm:w-28 h-16 sm:h-28 bg-indigo-500/10 rounded-full blur-xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">
              Meet the Creator
            </h2>
            
            <Card className="bg-gradient-to-br from-gray-900/80 to-black/80 border-gray-700/50 backdrop-blur-lg">
              <CardContent className="p-6 sm:p-8">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <img 
                    src={techWhiteHatLogo}
                    alt="Technical White Hat - Software Developer" 
                    className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover shadow-lg flex-shrink-0" 
                  />
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 gradient-text">
                      Technical White Hat
                    </h3>
                    <p className="text-lg sm:text-xl text-gray-300 mb-3 sm:mb-4">Passionate Developer & Music Enthusiast</p>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
                      I created Rhythm Music as an ad-free alternative to commercial music streaming platforms. 
                      This project represents my commitment to providing free, open-source software that respects 
                      user privacy and delivers an exceptional music listening experience.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <a 
                        href="https://github.com/technicalwhitehat-yt" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button variant="outline" className="border-gray-600 w-full sm:w-auto">
                          <Github className="mr-2" size={16} />
                          Follow on GitHub
                        </Button>
                      </a>
                      <a 
                        href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto"
                      >
                        <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 w-full sm:w-auto">
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
      <section className="py-16 sm:py-20 bg-gradient-to-br from-amber-900/20 via-orange-900/30 to-red-900/20 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-8 sm:top-16 right-4 sm:right-16 w-16 sm:w-24 h-16 sm:h-24 bg-amber-500/10 rounded-full blur-lg"></div>
        <div className="absolute bottom-8 sm:bottom-16 left-4 sm:left-16 w-24 sm:w-36 h-24 sm:h-36 bg-red-500/10 rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 sm:w-20 h-12 sm:h-20 bg-orange-500/10 rounded-full blur-lg"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 gradient-text">
              Community Impact
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
              {contributions.map((item, index) => (
                <Card key={index} className="bg-gray-900/50 hover:bg-gray-800/50 transition-colors">
                  <CardContent className="p-4 sm:p-6 text-center">
                    <item.icon className="mx-auto text-2xl sm:text-4xl text-cyan-400 mb-2 sm:mb-4" size={32} />
                    <div className="text-xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{item.metric}</div>
                    <div className="text-xs sm:text-base text-gray-400">{item.label}</div>
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
            
            <div className="max-w-4xl mx-auto">
              {/* Rhythm Music - Single focused card */}
              <Card className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 border-purple-500/30">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6 mb-6">
                    <AppIcon size="lg" useCustomIcon className="flex-shrink-0" />
                    <div className="text-center sm:text-left">
                      <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-2">Rhythm Music</h3>
                      <p className="text-gray-400 text-sm sm:text-base">Open-Source Music Streaming App by Technical White Hat</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
                    Rhythm Music is a completely free, ad-free music streaming application built from scratch with passion and dedication. 
                    It provides unlimited access to millions of songs from YouTube Music without any advertisements, registration requirements, 
                    or subscription fees. Every feature has been carefully crafted to deliver the best possible music experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    <a 
                      href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1"
                    >
                      <Button className="bg-gradient-to-r from-purple-500 to-cyan-500 w-full">
                        <Github className="mr-2" size={16} />
                        View Project
                      </Button>
                    </a>
                    <Button 
                      variant="outline" 
                      className="border-gray-600 flex-1"
                      onClick={() => setIsDownloadModalOpen(true)}
                    >
                      <Download className="mr-2" size={16} />
                      Download
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
