interface AnimatedVisualizerProps {
  className?: string;
  bars?: number;
  size?: "sm" | "md" | "lg";
}

export default function AnimatedVisualizer({ className = "", bars = 5, size = "md" }: AnimatedVisualizerProps) {
  const sizeConfig = {
    sm: { width: '3px', height: '12px', gap: 'gap-0.5' },
    md: { width: '4px', height: '20px', gap: 'gap-1' },
    lg: { width: '5px', height: '30px', gap: 'gap-1.5' }
  };
  
  const config = sizeConfig[size];
  
  return (
    <div className={`flex items-center justify-center ${config.gap} ${className}`}>
      {Array.from({ length: bars }).map((_, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full waveform-bar"
          style={{
            width: config.width,
            height: config.height,
            animationDelay: `${index * 0.1}s`,
            animationDuration: `${1.5 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}