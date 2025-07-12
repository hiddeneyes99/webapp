import { useState } from "react";
import { Download, Smartphone, Monitor, X, ExternalLink, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const platforms = [
    {
      name: "Android",
      icon: Smartphone,
      version: "Latest",
      size: "25 MB",
      requirements: "Android 5.0+",
      available: true,
      downloadUrl: "https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest/download/app-release.apk",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-green-600/20",
      borderColor: "border-green-500/30"
    },
    {
      name: "Windows",
      icon: Monitor,
      version: "Latest",
      size: "45 MB",
      requirements: "Windows 10/11",
      available: true,
      downloadUrl: "https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-600/20",
      borderColor: "border-blue-500/30"
    },
    {
      name: "Linux",
      icon: Monitor,
      version: "Latest",
      size: "40 MB",
      requirements: "Ubuntu 18.04+",
      available: true,
      downloadUrl: "https://github.com/technicalwhitehat-yt/RhyThm-Music/releases/latest",
      color: "text-yellow-500",
      bgColor: "from-yellow-500/20 to-yellow-600/20",
      borderColor: "border-yellow-500/30"
    },
    {
      name: "macOS",
      icon: Monitor,
      version: "v1.0.0",
      size: "50 MB",
      requirements: "macOS 10.15+",
      available: false,
      downloadUrl: "#",
      color: "text-gray-400",
      bgColor: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-500/30"
    },
    {
      name: "iOS",
      icon: Smartphone,
      version: "v1.0.0",
      size: "30 MB",
      requirements: "iOS 13.0+",
      available: false,
      downloadUrl: "#",
      color: "text-gray-400",
      bgColor: "from-gray-500/20 to-gray-600/20",
      borderColor: "border-gray-500/30"
    }
  ];

  const handleDownload = (platform: typeof platforms[0]) => {
    if (platform.available) {
      window.open(platform.downloadUrl, '_blank');
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl bg-black/90 backdrop-blur-lg border-gray-800 modal-fade-in">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold gradient-text flex items-center">
            <Download className="mr-3" size={28} />
            Download Rhythm Music
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {platforms.map((platform, index) => (
            <Card 
              key={platform.name} 
              className={`bg-gradient-to-br ${platform.bgColor} border ${platform.borderColor} hover:scale-105 transition-all duration-300 ${platform.available ? 'cursor-pointer' : 'opacity-60'}`}
              onClick={() => handleDownload(platform)}
            >
              <CardContent className="p-6 text-center">
                <platform.icon className={`mx-auto mb-4 ${platform.color}`} size={48} />
                <h3 className="text-xl font-semibold mb-2">{platform.name}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Version:</span>
                    <span>{platform.version}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Size:</span>
                    <span>{platform.size}</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>Requirements:</span>
                    <span>{platform.requirements}</span>
                  </div>
                </div>

                {platform.available ? (
                  <>
                    <Badge variant="outline" className="mb-4 text-green-400 border-green-400">
                      ✓ Available Now
                    </Badge>
                    <Button 
                      className={`w-full bg-gradient-to-r ${platform.bgColor} hover:opacity-80 download-btn`}
                      onClick={() => handleDownload(platform)}
                    >
                      <Download className="mr-2" size={16} />
                      Download
                    </Button>
                  </>
                ) : (
                  <>
                    <Badge variant="outline" className="mb-4 text-orange-400 border-orange-400">
                      <Clock className="mr-1" size={12} />
                      Coming Soon
                    </Badge>
                    <Button 
                      disabled 
                      className="w-full opacity-50"
                    >
                      Not Available
                    </Button>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
          <h4 className="font-semibold mb-2 flex items-center">
            <ExternalLink className="mr-2" size={16} />
            Need Help?
          </h4>
          <p className="text-sm text-gray-400 mb-3">
            Visit our GitHub repository for installation guides, troubleshooting, and community support.
          </p>
          <div className="flex space-x-3">
            <a 
              href="https://github.com/technicalwhitehat-yt/RhyThm-Music/releases" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="border-gray-600">
                All Releases
              </Button>
            </a>
            <a 
              href="https://github.com/technicalwhitehat-yt/RhyThm-Music/wiki" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button variant="outline" size="sm" className="border-gray-600">
                Documentation
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}