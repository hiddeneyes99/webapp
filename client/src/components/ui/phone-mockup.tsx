import { cn } from "@/lib/utils";
import titleImage from "@assets/title_1755795183720.png";

interface PhoneMockupProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function PhoneMockup({ className, size = "md" }: PhoneMockupProps) {
  const sizeClasses = {
    sm: "w-48 h-96",
    md: "w-64 h-[500px]",
    lg: "w-80 h-[600px]"
  };

  return (
    <div className={cn("relative", className)}>
      {/* Phone Frame */}
      <div className={cn(
        "relative mx-auto bg-black rounded-[2.5rem] border-8 border-gray-800 shadow-2xl",
        sizeClasses[size]
      )}>
        {/* Screen Bezel */}
        <div className="absolute inset-2 bg-black rounded-[2rem] overflow-hidden">
          {/* Notch */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-10"></div>
          
          {/* Screen Content */}
          <div className="w-full h-full bg-gradient-to-b from-gray-900 via-purple-900/30 to-black relative overflow-hidden">
            {/* App Screenshot */}
            <img 
              src={titleImage}
              alt="Rhythm Music App Interface"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            
            {/* Overlay Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 via-transparent to-cyan-500/20 pointer-events-none"></div>
          </div>
        </div>
        
        {/* Side Buttons */}
        <div className="absolute left-0 top-20 w-1 h-16 bg-gray-700 rounded-r-lg"></div>
        <div className="absolute left-0 top-40 w-1 h-8 bg-gray-700 rounded-r-lg"></div>
        <div className="absolute left-0 top-52 w-1 h-8 bg-gray-700 rounded-r-lg"></div>
        <div className="absolute right-0 top-28 w-1 h-20 bg-gray-700 rounded-l-lg"></div>
      </div>
      
      {/* Glowing Base */}
      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-8 bg-gradient-to-r from-purple-500/30 via-cyan-500/50 to-purple-500/30 rounded-full blur-lg"></div>
      
      {/* Floating Elements */}
      <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-purple-500/20 rounded-full blur-lg animate-bounce-slow"></div>
    </div>
  );
}