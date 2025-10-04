import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Users, BookOpen, Award } from "lucide-react";

interface DepartmentCardProps {
  name: string;
  description: string;
  image: string;
  faculty: number;
  courses: string[];
  achievements?: string[];
  link?: string;
  delay?: number;
}

export const DepartmentCard = ({ 
  name, 
  description, 
  image, 
  faculty, 
  courses, 
  achievements = [], 
  link,
  delay = 0 
}: DepartmentCardProps) => {
  return (
    <Card className={`card-elevated border-0 overflow-hidden group fade-in-up stagger-${delay}`}>
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={`${name} department`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4 text-white">
          <h3 className="text-xl font-bold mb-2">{name}</h3>
          <div className="flex items-center gap-2">
            <Users size={16} />
            <span className="text-sm">{faculty} Faculty Members</span>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-muted-foreground mb-4 leading-relaxed">
          {description}
        </p>
        
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen size={16} className="text-primary" />
            <span className="font-medium text-sm">Courses Offered:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {courses.map((course, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {course}
              </Badge>
            ))}
          </div>
        </div>
        
        {achievements.length > 0 && (
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Award size={16} className="text-secondary" />
              <span className="font-medium text-sm">Key Achievements:</span>
            </div>
            <ul className="text-sm text-muted-foreground space-y-1">
              {achievements.map((achievement, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-secondary mt-1">•</span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
        )}
        
        {link && (
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full group/btn"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              Learn More
              <ExternalLink size={14} className="ml-2 transition-transform group-hover/btn:translate-x-1" />
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
};