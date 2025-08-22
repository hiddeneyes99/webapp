import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home } from "lucide-react";
import { Link } from "wouter";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-black text-white pt-20">
      <Card className="w-full max-w-md mx-4 bg-gradient-to-br from-purple-900/20 to-cyan-900/20 border-purple-500/30">
        <CardContent className="pt-6">
          <div className="text-center">
            <AlertCircle className="h-16 w-16 text-purple-400 mx-auto mb-4" />
            <h1 className="text-3xl font-bold text-white mb-2">404</h1>
            <h2 className="text-xl font-semibold text-purple-300 mb-4">Page Not Found</h2>
            
            <p className="text-gray-300 mb-6">
              The page you're looking for doesn't exist or has been moved.
            </p>
            
            <Link to="/">
              <Button 
                className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold px-6 py-2"
                data-testid="button-back-home"
              >
                <Home className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
