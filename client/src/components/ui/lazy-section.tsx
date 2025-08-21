import { ReactNode } from "react";
import { useLazyLoad } from "@/hooks/use-lazy-load";
import { cn } from "@/lib/utils";

interface LazySectionProps {
  children: ReactNode;
  className?: string;
  fallback?: ReactNode;
  threshold?: number;
  rootMargin?: string;
}

const DefaultSkeleton = () => (
  <div className="min-h-[200px] bg-gray-800 animate-pulse rounded-lg" />
);

export default function LazySection({ 
  children, 
  className,
  fallback = <DefaultSkeleton />,
  threshold = 0.1,
  rootMargin = "100px"
}: LazySectionProps) {
  const { targetRef, isIntersecting } = useLazyLoad({ threshold, rootMargin });

  return (
    <div ref={targetRef} className={cn(className)}>
      {isIntersecting ? children : fallback}
    </div>
  );
}