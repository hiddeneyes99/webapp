interface AnimatedVisualizerProps {
  className?: string;
  bars?: number;
}

export default function AnimatedVisualizer({ className = "", bars = 5 }: AnimatedVisualizerProps) {
  return (
    <div className={`flex items-center justify-center gap-1 ${className}`}>
      {Array.from({ length: bars }).map((_, index) => (
        <div
          key={index}
          className="bg-gradient-to-t from-purple-500 to-cyan-400 rounded-full waveform-bar"
          style={{
            width: '4px',
            height: '20px',
            animationDelay: `${index * 0.1}s`,
            animationDuration: `${1.5 + Math.random() * 0.5}s`
          }}
        />
      ))}
    </div>
  );
}