import { cn } from "@/lib/utils";

interface AppIconProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function AppIcon({ className, size = "md" }: AppIconProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
    xl: "w-16 h-16"
  };

  const barSizes = {
    sm: ["w-0.5 h-2", "w-0.5 h-3", "w-0.5 h-4", "w-0.5 h-3", "w-0.5 h-2"],
    md: ["w-1 h-4", "w-1 h-6", "w-1 h-8", "w-1 h-6", "w-1 h-4"],
    lg: ["w-1 h-5", "w-1 h-7", "w-1 h-9", "w-1 h-7", "w-1 h-5"],
    xl: ["w-1.5 h-6", "w-1.5 h-8", "w-1.5 h-12", "w-1.5 h-8", "w-1.5 h-6"]
  };

  return (
    <div className={cn(
      sizeClasses[size],
      "rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center shadow-lg",
      className
    )}>
      <div className="flex space-x-0.5 items-end">
        {barSizes[size].map((barClass, index) => (
          <div
            key={index}
            className={cn(
              barClass,
              "bg-white rounded-full waveform-bar"
            )}
            style={{ animationDelay: `${index * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  );
}
