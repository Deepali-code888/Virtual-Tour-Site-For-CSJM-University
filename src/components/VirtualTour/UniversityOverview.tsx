import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Globe, BookOpen, GraduationCap } from "lucide-react";

export const UniversityOverview = () => {
  const stats = [
    { icon: <Calendar size={24} />, label: "Established", value: "1966" },
    { icon: <Users size={24} />, label: "Students", value: "150,000+" },
    { icon: <GraduationCap size={24} />, label: "Faculty", value: "800+" },
    { icon: <BookOpen size={24} />, label: "Departments", value: "15+" },
    { icon: <Award size={24} />, label: "NAAC Grade", value: "A++" },
    { icon: <Globe size={24} />, label: "India Ranking", value: "Top 100" }
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12 fade-in-up">
        <h2 className="text-4xl font-bold mb-4">About CSJMU</h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          Chhatrapati Shahu Ji Maharaj University stands as a beacon of academic excellence, 
          fostering innovation, research, and holistic development since 1966.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
        {stats.map((stat, index) => (
          <Card key={index} className={`card-elevated text-center p-6 fade-in-up stagger-${index % 4 + 1}`}>
            <div className="text-primary mb-3 flex justify-center">
              {stat.icon}
            </div>
            <div className="text-2xl font-bold text-primary mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-muted-foreground">
              {stat.label}
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="card-elevated p-8 fade-in-up slide-in-left">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To provide quality education that nurtures intellectual growth, promotes research excellence, 
            and develops socially responsible citizens who contribute meaningfully to society and the nation.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-secondary text-secondary-foreground">Excellence</Badge>
              <span className="text-sm">Academic and Research Excellence</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-secondary text-secondary-foreground">Innovation</Badge>
              <span className="text-sm">Cutting-edge Learning Methods</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-secondary text-secondary-foreground">Inclusivity</Badge>
              <span className="text-sm">Equal Opportunities for All</span>
            </div>
          </div>
        </Card>

        <Card className="card-elevated p-8 fade-in-up slide-in-right">
          <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            To emerge as a world-class university recognized globally for academic excellence, 
            research innovation, and contribution to society through knowledge creation and dissemination.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Global</Badge>
              <span className="text-sm">International Recognition</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Research</Badge>
              <span className="text-sm">Leading Research Institution</span>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">Impact</Badge>
              <span className="text-sm">Societal Transformation</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};