// Prefetch utilities for better performance
export const prefetchRoute = (routePath: string) => {
  // Prefetch the route using link[rel="prefetch"]
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = routePath;
  document.head.appendChild(link);
};

export const prefetchImage = (src: string) => {
  // Prefetch images
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.href = src;
  link.as = 'image';
  document.head.appendChild(link);
};

export const preloadCriticalImages = () => {
  // Preload critical images that are above the fold
  const criticalImages = [
    '/assets/icon_1751963872011.png',
    '/assets/technical white hat 2.0_1752333903253.jpg'
  ];
  
  criticalImages.forEach(src => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = src;
    link.as = 'image';
    document.head.appendChild(link);
  });
};