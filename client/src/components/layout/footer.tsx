import { Link } from "wouter";
import { Github, Heart } from "lucide-react";
import AppIcon from "@/components/ui/app-icon";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <AppIcon size="md" />
            <div>
              <h4 className="text-xl font-bold gradient-text">Rhythm Music</h4>
              <p className="text-sm text-gray-400">by Technical White Hat</p>
            </div>
          </div>

          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            An open-source, ad-free music streaming application built with love and passion. 
            Based on Harmony Music project and enhanced for a better user experience.
          </p>

          <div className="flex flex-wrap justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/anandnet/Harmony-Music" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center space-x-2"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <Link href="/about" className="text-gray-400 hover:text-cyan-400 transition-colors">
              About
            </Link>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              Terms
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-500 text-sm">
              © 2024 Technical White Hat. Built with <Heart size={14} className="inline text-red-500 mx-1" /> for music lovers.
              Based on{" "}
              <a 
                href="https://github.com/anandnet/Harmony-Music" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                Harmony Music
              </a>{" "}
              project.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
