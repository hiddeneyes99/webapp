import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { preloadCriticalImages } from './utils/prefetch';

// Preload critical images for better perceived performance
preloadCriticalImages();

createRoot(document.getElementById("root")!).render(<App />);
