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
    <div className="sticky top-4 z-40 w-full">
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-medium p-4 sm:p-6 border max-w-full overflow-hidden">
        <div className="flex items-center gap-2 mb-4 sm:mb-6 min-w-0">
          <MapPin className="text-primary flex-shrink-0" size={20} />
          <h2 className="text-base sm:text-lg font-semibold truncate min-w-0">Virtual Tour Navigation</h2>
        </div>
        
        <div className="space-y-2 sm:space-y-3">
          {tourSections.map((section) => (
            <Button
              key={section.id}
              variant={activeSection === section.id ? "default" : "ghost"}
              className={`w-full justify-start text-left h-auto p-3 sm:p-4 overflow-hidden ${
                activeSection === section.id 
                  ? "bg-primary text-primary-foreground shadow-glow" 
                  : "hover:bg-muted"
              }`}
              onClick={() => onSectionChange(section.id)}
            >
              <div className="flex items-start gap-2 sm:gap-3 w-full min-w-0">
                <div className={`p-1.5 sm:p-2 rounded-lg flex-shrink-0 ${
                  activeSection === section.id 
                    ? "bg-primary-foreground/20" 
                    : "bg-primary/10"
                }`}>
                  {section.icon}
                </div>
                
                <div className="flex-1 min-w-0 overflow-hidden">
                  <div className="flex items-center gap-2 mb-1 min-w-0">
                    <span className="font-medium text-sm sm:text-base truncate flex-1 min-w-0">{section.title}</span>
                    <Badge 
                      variant={activeSection === section.id ? "secondary" : "outline"}
                      className="text-xs flex-shrink-0 whitespace-nowrap"
                    >
                      {section.count}
                    </Badge>
                  </div>
                  <p className={`text-xs leading-relaxed line-clamp-2 ${
                    activeSection === section.id 
                      ? "text-primary-foreground/80" 
                      : "text-muted-foreground"
                  }`}>
                    {section.description}
                  </p>
                </div>
                
                <ChevronRight 
                  size={14} 
                  className={`transition-transform flex-shrink-0 ${
                    activeSection === section.id ? "rotate-90" : ""
                  }`} 
                />
              </div>
            </Button>
          ))}
        </div>
        
        <div className="mt-4 sm:mt-6 pt-3 sm:pt-4 border-t">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            Click on any section to explore that area of the campus
          </p>
        </div>
      </div>
    </div>
  );
};