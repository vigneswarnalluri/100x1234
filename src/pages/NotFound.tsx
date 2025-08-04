import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-surface">
      <div className="text-center space-y-8 p-8">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-2 mb-8">
          <img 
            src="/logo.jpg" 
            alt="100XDROPSHIP Logo" 
            width="60"
            className="h-12 w-12 md:h-16 md:w-16"
          />
          <span className="asn-headline text-2xl md:text-3xl">100XDROPSHIP</span>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          <h1 className="asn-headline text-6xl md:text-8xl font-bold text-foreground">404</h1>
          <h2 className="asn-headline text-2xl md:text-3xl text-muted-foreground">
            Oops! Page not found
          </h2>
          <p className="asn-body text-lg text-muted-foreground max-w-md mx-auto">
            The page you're looking for doesn't exist. Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/">
            <Button className="asn-button-primary">
              <Home className="mr-2 h-4 w-4" />
              Return to Home
            </Button>
          </Link>
          <Button 
            variant="outline" 
            className="asn-button-secondary"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
        </div>

        {/* Additional Info */}
        <div className="mt-8 p-4 bg-muted/20 rounded-lg">
          <p className="asn-body text-sm text-muted-foreground">
            Attempted to access: <code className="bg-muted px-2 py-1 rounded text-xs">{location.pathname}</code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
