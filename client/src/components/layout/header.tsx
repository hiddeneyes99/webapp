import { Link, useLocation } from "wouter";
import { Download, Menu, Home, Info, Github, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AppIcon from "@/components/ui/app-icon";
import { cn } from "@/lib/utils";

export default function Header() {
  const [location] = useLocation();

  const navigation = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Features", icon: Monitor },
    { href: "/about", label: "About", icon: Info },
  ];

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-gray-800">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
          <AppIcon size="md" useCustomIcon />
          <div>
            <h1 className="text-xl font-bold gradient-text">Rhythm Music</h1>
            <p className="text-xs text-gray-400">by Technical White Hat</p>
          </div>
        </Link>
        
        <div className="hidden md:flex items-center space-x-6">
          {navigation.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href}>
              <span className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-full transition-colors",
                isActive(href) 
                  ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30" 
                  : "text-gray-400 hover:text-cyan-400"
              )}>
                <Icon size={16} />
                <span>{label}</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center space-x-3">
          <a 
            href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button size="sm" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:shadow-lg hidden md:flex">
              <Download size={16} className="mr-2" />
              Download
            </Button>
          </a>
          
          <a 
            href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button variant="ghost" size="icon" className="hover:bg-gray-800">
              <Github size={18} />
            </Button>
          </a>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden hover:bg-gray-800">
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black border-gray-800">
              <div className="flex flex-col space-y-4 mt-8">
                {navigation.map(({ href, label, icon: Icon }) => (
                  <Link key={href} href={href}>
                    <span className={cn(
                      "flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors",
                      isActive(href) 
                        ? "text-white bg-gradient-to-r from-purple-500/20 to-cyan-500/20" 
                        : "text-gray-400 hover:text-cyan-400"
                    )}>
                      <Icon size={20} />
                      <span>{label}</span>
                    </span>
                  </Link>
                ))}
                <div className="pt-4 border-t border-gray-700">
                  <a 
                    href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-400 hover:text-cyan-400"
                  >
                    <Download size={20} />
                    <span>Download App</span>
                  </a>
                  <a 
                    href="https://github.com/technicalwhitehat-yt/RhyThm-Music" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors text-gray-400 hover:text-cyan-400"
                  >
                    <Github size={20} />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
