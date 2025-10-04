import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Wifi, Coffee, BookOpen, Users } from "lucide-react";

interface BuildingCardProps {
  name: string;
  description: string;
  image: string;
  facilities: string[];
  hours: string;
  location: string;
  capacity?: number;
  delay?: number;
}

export const BuildingCard = ({ 
  name, 
  description, 
  image, 
  facilities, 
  hours, 
  location,
  capacity,
  delay = 0 
}: BuildingCardProps) => {
  const getFacilityIcon = (facility: string) => {
    if (facility.toLowerCase().includes('wifi') || facility.toLowerCase().includes('internet')) {
      return <Wifi size={14} />;
    }
    if (facility.toLowerCase().includes('cafeteria') || facility.toLowerCase().includes('food')) {
      return <Coffee size={14} />;
    }
    if (facility.toLowerCase().includes('library') || facility.toLowerCase().includes('books')) {
      return <BookOpen size={14} />;
    }
    if (facility.toLowerCase().includes('hall') || facility.toLowerCase().includes('auditorium')) {
      return <Users size={14} />;
    }
    return <span className="w-3.5 h-3.5 rounded-full bg-primary"></span>;
  };

  return (
    <Card className={`card-elevated border-0 overflow-hidden group fade-in-up stagger-${delay}`}>
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} building`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        
        <div className="absolute top-4 right-4">
          <Badge className="bg-secondary text-secondary-foreground">
            Building
          </Badge>
        </div>
        
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-2xl font-bold mb-2">{name}</h3>
          <div className="flex items-center gap-2 text-sm opacity-90">
            <MapPin size={14} />
            <span>{location}</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-sm">
            <Clock size={16} className="text-primary" />
            <span className="font-medium">Operating Hours:</span>
            <span className="text-muted-foreground">{hours}</span>
          </div>
          
          {capacity && (
            <div className="flex items-center gap-2 text-sm">
              <Users size={16} className="text-primary" />
              <span className="font-medium">Capacity:</span>
              <span className="text-muted-foreground">{capacity.toLocaleString()} students</span>
            </div>
          )}
          
          <div>
            <h4 className="font-medium mb-3 text-sm">Available Facilities:</h4>
            <div className="grid grid-cols-1 gap-2">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-primary">
                    {getFacilityIcon(facility)}
                  </span>
                  {facility}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};