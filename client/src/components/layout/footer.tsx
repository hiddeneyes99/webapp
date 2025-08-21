import { Link } from "wouter";
import { Github, Heart, Download, ExternalLink } from "lucide-react";
import AppIcon from "@/components/ui/app-icon";
import SocialLinks from "@/components/ui/social-links";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <AppIcon size="md" useCustomIcon />
                <div>
                  <h4 className="text-xl font-bold gradient-text">Rhythm Music</h4>
                  <p className="text-sm text-gray-400">by Technical White Hat</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4 max-w-md">
                An open-source, ad-free music streaming application that brings you unlimited music 
                from YouTube & YouTube Music without interruptions. Built with love for music enthusiasts.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2"
                >
                  <Download size={16} />
                  <span>Download</span>
                </a>
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2"
                >
                  <Github size={16} />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h5 className="font-semibold text-white mb-4">Quick Links</h5>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Home
                </Link>
                <Link href="/features" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Features
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  About
                </Link>
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Releases
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold text-white mb-4">Resources</h5>
              <div className="space-y-2">
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music/issues" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Report Issues
                </a>
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music/wiki" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Documentation
                </a>
                <a 
                  href="https://github.com/technicalwhitehat-yt/RhyThm-Music/discussions" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  Community
                </a>
                <a href="#" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © 2024 Technical White Hat. Built with <Heart size={14} className="inline text-red-500 mx-1" /> for music lovers worldwide.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span>Based on</span>
                <a 
                  href="https://github.com/anandnet/Harmony-Music" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:underline flex items-center space-x-1"
                >
                  <span>Harmony Music</span>
                  <ExternalLink size={12} />
                </a>
                <span>project</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
