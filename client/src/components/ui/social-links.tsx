import { Button } from "@/components/ui/button";
import { Youtube, Send, Instagram, Github, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  variant?: "floating" | "inline" | "footer" | "compact";
  className?: string;
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
}

const socialLinks = [
  {
    name: "YouTube",
    url: "https://www.youtube.com/channel/UC6itmDFY0MWGfA7_T3yJpkg",
    icon: Youtube,
    color: "hover:text-red-500 hover:border-red-500",
    bgColor: "hover:bg-red-500/10",
    shadowClass: "social-youtube"
  },
  {
    name: "Telegram",
    url: "https://t.me/technicalwhitehat",
    icon: Send,
    color: "hover:text-blue-500 hover:border-blue-500",
    bgColor: "hover:bg-blue-500/10",
    shadowClass: "social-telegram"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/technicalwhitehat/",
    icon: Instagram,
    color: "hover:text-pink-500 hover:border-pink-500",
    bgColor: "hover:bg-pink-500/10",
    shadowClass: "social-instagram"
  },
  {
    name: "GitHub",
    url: "https://github.com/technicalwhitehat-yt",
    icon: Github,
    color: "hover:text-purple-500 hover:border-purple-500",
    bgColor: "hover:bg-purple-500/10",
    shadowClass: "social-github"
  }
];

export default function SocialLinks({ 
  variant = "inline", 
  className,
  showLabels = true,
  size = "md"
}: SocialLinksProps) {
  const sizeClasses = {
    sm: "h-8 w-8",
    md: "h-10 w-10",
    lg: "h-12 w-12"
  };

  const iconSizes = {
    sm: 16,
    md: 20,
    lg: 24
  };

  if (variant === "floating") {
    return (
      <div className={cn(
        "fixed right-6 top-1/2 -translate-y-1/2 z-50 space-y-3",
        "bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl p-3 shadow-2xl",
        "floating-social",
        className
      )}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative block p-3 rounded-xl border border-gray-600/50 transition-all duration-500",
              "hover:border-transparent hover:scale-125 hover:shadow-2xl hover:shadow-purple-500/25",
              "hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20",
              "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500 before:to-cyan-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
              social.shadowClass,
              "social-button-glow"
            )}
            title={`Follow on ${social.name}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <social.icon 
              size={iconSizes[size]} 
              className={cn(
                "relative z-10 transition-all duration-300",
                social.color.replace('hover:', ''),
                "group-hover:animate-bounce-slow"
              )} 
            />
          </a>
        ))}
        <div className="text-center pt-2">
          <div className="text-xs text-gray-400 font-medium">Follow</div>
          <div className="text-xs text-purple-400 font-semibold">Technical White Hat</div>
        </div>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center justify-center space-x-3", className)}>
        {socialLinks.map((social, index) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "group relative p-3 rounded-xl border border-gray-600/50 transition-all duration-500",
              "hover:border-transparent hover:scale-110 hover:shadow-lg hover:-translate-y-1",
              "hover:bg-gradient-to-br hover:from-purple-500/20 hover:to-cyan-500/20",
              "before:absolute before:inset-0 before:rounded-xl before:bg-gradient-to-r before:from-purple-500 before:to-cyan-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-30"
            )}
            title={`Follow on ${social.name}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <social.icon 
              size={iconSizes[size]} 
              className={cn(
                "relative z-10 transition-all duration-300",
                social.color.replace('hover:', ''),
                "group-hover:animate-pulse"
              )}
            />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(
      variant === "footer" ? "grid grid-cols-2 md:grid-cols-4 gap-6" : "flex flex-wrap items-center justify-center gap-4",
      className
    )}>
      {socialLinks.map((social, index) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <Button
            variant="outline"
            size={size === "sm" ? "sm" : "default"}
            className={cn(
              "relative border-gray-600/50 transition-all duration-500 overflow-hidden",
              "hover:border-transparent hover:scale-110 hover:shadow-2xl hover:-translate-y-2",
              "before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-cyan-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-20",
              "group-hover:text-white",
              showLabels ? "px-6 py-3 text-base font-semibold" : sizeClasses[size]
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative z-10 flex items-center">
              <social.icon 
                size={iconSizes[size]} 
                className={cn(
                  showLabels ? "mr-3" : "",
                  "transition-all duration-300",
                  social.color.replace('hover:', ''),
                  "group-hover:animate-pulse"
                )} 
              />
              {showLabels && (
                <div className="flex items-center">
                  <span className="hidden sm:inline font-medium">Follow on</span>
                  <span className="sm:hidden font-medium">Follow</span>
                  <span className="ml-1 font-bold">{social.name}</span>
                  <ExternalLink size={14} className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                </div>
              )}
            </div>
          </Button>
        </a>
      ))}
    </div>
  );
}