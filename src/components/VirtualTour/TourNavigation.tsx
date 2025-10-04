import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  GraduationCap, 
  Building2, 
  Users, 
  MapPin,
  ChevronRight,
  Home
} from "lucide-react";

interface TourSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  count: number;
  description: string;
}

const tourSections: TourSection[] = [
  {
    id: "overview",
    title: "University Overview",
    icon: <Home size={18} />,
    count: 1,
    description: "Learn about CSJMU's rich history and mission"
  },
  {
    id: "departments",
    title: "Academic Departments",
    icon: <GraduationCap size={18} />,
    count: 15,
    description: "Explore our diverse academic schools and programs"
  },
  {
    id: "buildings",
    title: "Campus Buildings",
    icon: <Building2 size={18} />,
    count: 8,
    description: "Tour our state-of-the-art facilities and infrastructure"
  },
  {
    id: "campus-life",
    title: "Campus Life",
    icon: <Users size={18} />,
    count: 12,
    description: "Discover student activities and campus culture"
  }
];

interface TourNavigationProps {
  activeSection: string;
  onSectionChange: (sectionId: string) => void;
}

export const TourNavigation = ({ activeSection, onSectionChange }: TourNavigationProps) => {
  return (
    <div className="sticky top-4 z-40">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-medium p-6 border">
        <div className="flex items-center gap-2 mb-6">
          <MapPin className="text-primary" size={20} />
          <h2 className="text-lg font-semibold">Virtual Tour Navigation</h2>
        </div>
        
        <div className="space-y-3">
          {tourSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              className={`w-full justify-start text-left h-auto p-4 ${
                activeSection === section.id 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "hover:bg-muted"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <div className="flex items-center gap-3 w-full">
                <div className={`p-2 rounded-lg ${
                  activeSection === section.id 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10"
                }`}>
                  {section.icon}
                </div>
                
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-medium truncate">{section.title}</span>
                    <Badge 
                      variant={activeSection === section.id ? "secondary" : "outline"}
                      className="text-xs"
                    >
                      {section.count}
                    </Badge>
                  </div>
                  <p className={`text-xs leading-relaxed ${
                    activeSection === section.id 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground"
                  }`}>
                    {section.description}
                  </p>
                </div>
                
                <ChevronRight 
                  size={16} 
                  className={`transition-transform ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`} 
                />
              </div>
            </Button>
          ))}
        </div>
        
        <div className="mt-6 pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center">
            Click on any section to explore that area of the campus
          </p>
        </div>
      </div>
    </div>
  );
};