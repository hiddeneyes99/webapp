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
    bgColor: "hover:bg-red-500/10"
  },
  {
    name: "Telegram",
    url: "https://t.me/technicalwhitehat",
    icon: Send,
    color: "hover:text-blue-500 hover:border-blue-500",
    bgColor: "hover:bg-blue-500/10"
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/technicalwhitehat/",
    icon: Instagram,
    color: "hover:text-pink-500 hover:border-pink-500",
    bgColor: "hover:bg-pink-500/10"
  },
  {
    name: "GitHub",
    url: "https://github.com/technicalwhitehat-yt",
    icon: Github,
    color: "hover:text-purple-500 hover:border-purple-500",
    bgColor: "hover:bg-purple-500/10"
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
        "bg-black/80 backdrop-blur-lg border border-gray-700/50 rounded-2xl p-3",
        className
      )}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "block p-2 rounded-xl border border-gray-600 transition-all duration-300",
              social.color,
              social.bgColor,
              "hover:scale-110 hover:shadow-lg"
            )}
            title={`Follow on ${social.name}`}
          >
            <social.icon size={iconSizes[size]} />
          </a>
        ))}
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={cn("flex items-center space-x-2", className)}>
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "p-2 rounded-lg border border-gray-600 transition-all duration-300",
              social.color,
              social.bgColor,
              "hover:scale-105"
            )}
            title={`Follow on ${social.name}`}
          >
            <social.icon size={iconSizes[size]} />
          </a>
        ))}
      </div>
    );
  }

  return (
    <div className={cn(
      variant === "footer" ? "grid grid-cols-2 md:grid-cols-4 gap-4" : "flex flex-wrap items-center justify-center gap-4",
      className
    )}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <Button
            variant="outline"
            size={size === "sm" ? "sm" : "default"}
            className={cn(
              "border-gray-600 transition-all duration-300",
              social.color,
              social.bgColor,
              "hover:scale-105 hover:shadow-lg",
              showLabels ? "px-4 py-2" : sizeClasses[size]
            )}
          >
            <social.icon size={iconSizes[size]} className={showLabels ? "mr-2" : ""} />
            {showLabels && (
              <>
                <span className="hidden sm:inline">Follow on</span>
                <span className="sm:hidden">Follow</span>
                <span className="ml-1">{social.name}</span>
                <ExternalLink size={12} className="ml-1 opacity-60" />
              </>
            )}
          </Button>
        </a>
      ))}
    </div>
  );
}