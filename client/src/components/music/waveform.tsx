import { cn } from "@/lib/utils";

interface WaveformProps {
  className?: string;
  animated?: boolean;
  bars?: number;
}

export default function Waveform({ className, animated = true, bars = 8 }: WaveformProps) {
  const heights = [20, 35, 60, 45, 30, 55, 40, 25];
  
  return (
    <div className={cn("flex items-center justify-center space-x-1", className)}>
      {Array.from({ length: bars }).map((_, index) => (
        <div
          key={index}
          className={cn(
            "w-1 bg-gradient-to-t from-purple-500 to-cyan-500 rounded-full",
            animated && "waveform-bar"
          )}
          style={{
            height: `${heights[index % heights.length]}px`,
            animationDelay: `${index * 0.1}s`,
          }}
        />
      ))}
    </div>
  );
}
