import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  Music, 
  BookOpen, 
  Users, 
  Heart, 
  Palette,
  Globe,
  Zap,
  Target,
  Lightbulb,
  Shield,
  Coffee
} from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";
import academicBuilding from "@/assets/academic-building.jpg";

export const CampusLifeSection = () => {
  const activities = [
    {
      title: "Sports & Athletics",
      description: "Comprehensive sports facilities including cricket, football, basketball, tennis, and indoor games. Regular tournaments and inter-university competitions.",
      icon: <Trophy size={24} />,
      image: campusHero,
      highlights: ["Olympic-size Swimming Pool", "Multi-sport Complex", "Yoga & Fitness Center", "Annual Sports Meet"],
      color: "bg-blue-500"
    },
    {
      title: "Cultural Activities", 
      description: "Rich cultural heritage with music, dance, drama, and art programs. Annual cultural festivals celebrating diversity and talent.",
      icon: <Music size={24} />,
      image: academicBuilding,
      highlights: ["Annual Cultural Festival", "Music & Dance Competitions", "Art Exhibitions", "Literary Societies"],
      color: "bg-purple-500"
    },
    {
      title: "Student Organizations",
      description: "Active student councils, academic clubs, and special interest groups fostering leadership and community engagement.",
      icon: <Users size={24} />,
      image: campusHero,
      highlights: ["Student Council", "Academic Clubs", "Debate Society", "Environmental Club"],
      color: "bg-green-500"
    },
    {
      title: "Research Opportunities",
      description: "Undergraduate and graduate research programs with faculty mentorship and access to advanced laboratories.",
      icon: <Lightbulb size={24} />,
      image: academicBuilding,
      highlights: ["Research Internships", "Innovation Labs", "Patent Filing Support", "Conference Presentations"],
      color: "bg-orange-500"
    }
  ];

  const facilities = [
    { icon: <Coffee size={20} />, title: "Cafeterias", description: "Multiple dining options across campus" },
    { icon: <Shield size={20} />, title: "Security", description: "24/7 campus security and safety" },
    { icon: <Heart size={20} />, title: "Health Center", description: "Medical facilities and wellness programs" },
    { icon: <BookOpen size={20} />, title: "Study Spaces", description: "Quiet zones and group study areas" },
    { icon: <Globe size={20} />, title: "Wi-Fi Campus", description: "High-speed internet throughout campus" },
    { icon: <Target size={20} />, title: "Career Services", description: "Placement assistance and career guidance" }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-4xl font-bold mb-4">Vibrant Campus Life</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Experience a dynamic campus environment that nurtures personal growth, 
          leadership skills, and lifelong friendships through diverse activities and opportunities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {activities.map((activity, index) => (
          <Card key={index} className={`card-elevated border-0 overflow-hidden group fade-in-up stagger-${index % 4 + 1}`}>
            <div className="relative h-48 overflow-hidden">
              <img 
                src={activity.image} 
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <div className={`p-3 rounded-full ${activity.color} text-white`}>
                  {activity.icon}
                </div>
              </div>
              
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">{activity.title}</h3>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {activity.description}
              </p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm mb-3">Key Highlights:</h4>
                {activity.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-sm">
                    <Zap size={14} className="text-secondary" />
                    <span className="text-muted-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="bg-university-lightBlue rounded-3xl p-8 fade-in-up">
        <h3 className="text-2xl font-bold text-center mb-8">Campus Facilities & Services</h3>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {facilities.map((facility, index) => (
            <div key={index} className={`text-center fade-in-up stagger-${index % 4 + 1}`}>
              <div className="bg-white rounded-2xl p-4 shadow-soft mb-3 group hover:shadow-medium transition-all duration-300">
                <div className="text-primary mb-2 flex justify-center group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h4 className="font-semibold text-sm mb-1">{facility.title}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {facility.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary-light text-primary-foreground shadow-glow"
          >
            Explore Student Life
          </Button>
        </div>
      </div>
    </section>
  );
};