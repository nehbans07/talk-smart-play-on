import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navigationItems = [
  { 
    path: "/", 
    label: "🤐 Passive", 
    character: "Arjun",
    description: "The Silent Sufferer",
    variant: "passive" as const
  },
  { 
    path: "/aggressive", 
    label: "😤 Aggressive", 
    character: "Priya",
    description: "The Bulldozer",
    variant: "aggressive" as const
  },
  { 
    path: "/passive-aggressive", 
    label: "😏 Passive-Aggressive", 
    character: "Kavya",
    description: "Queen of Mixed Signals",
    variant: "passive-aggressive" as const
  },
  { 
    path: "/assertive", 
    label: "👑 Assertive", 
    character: "Aarav",
    description: "The Balanced King",
    variant: "assertive" as const
  },
];

export const Navigation = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:block fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                CommStyles
              </h1>
              <span className="text-sm text-muted-foreground">Learn. Grow. Communicate.</span>
            </div>
            
            <div className="flex items-center space-x-2">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? item.variant : "ghost"}
                  size="sm"
                  asChild
                  className="text-xs"
                >
                  <Link to={item.path}>
                    {item.label}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              CommStyles
            </h1>
            
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <Card className="absolute top-full left-4 right-4 mt-2 p-4 shadow-lg">
            <div className="space-y-3">
              {navigationItems.map((item) => (
                <Button
                  key={item.path}
                  variant={location.pathname === item.path ? item.variant : "ghost"}
                  className="w-full justify-start text-left"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to={item.path}>
                    <div>
                      <div className="font-semibold">{item.label}</div>
                      <div className="text-xs text-muted-foreground">
                        {item.character} - {item.description}
                      </div>
                    </div>
                  </Link>
                </Button>
              ))}
            </div>
          </Card>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-20 md:h-24"></div>
    </>
  );
};