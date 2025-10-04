import { useState, useEffect } from "react";
import { HeroSection } from "@/components/VirtualTour/HeroSection";
import { TourNavigation } from "@/components/VirtualTour/TourNavigation";
import { UniversityOverview } from "@/components/VirtualTour/UniversityOverview";
import { DepartmentsSection } from "@/components/VirtualTour/DepartmentsSection";
import { BuildingsSection } from "@/components/VirtualTour/BuildingsSection";
import { CampusLifeSection } from "@/components/VirtualTour/CampusLifeSection";
import { Button } from "@/components/ui/button";
import { ArrowUp, ExternalLink } from "lucide-react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("overview");
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle section change
  const handleSectionChange = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Intersection Observer to update active section
  useEffect(() => {
    const sections = ['overview', 'departments', 'buildings', 'campus-life'];
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId);
      if (!element) return null;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
              setActiveSection(sectionId);
            }
          });
        },
        { threshold: 0.3, rootMargin: '-100px 0px -100px 0px' }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer?.disconnect());
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <HeroSection />
      
      {/* Main Content */}
      <div id="tour-sections" className="relative">
        <div className="container mx-auto px-4 py-8">
          <div className="flex gap-8">
            {/* Navigation Sidebar */}
            <div className="hidden lg:block w-80 flex-shrink-0">
              <TourNavigation 
                activeSection={activeSection}
                onSectionChange={handleSectionChange}
              />
            </div>
            
            {/* Content Area */}
            <div className="flex-1 min-w-0">
              <div id="overview" className="mb-20">
                <UniversityOverview />
              </div>
              
              <div id="departments" className="mb-20">
                <DepartmentsSection />
              </div>
              
              <div id="buildings" className="mb-20">
                <BuildingsSection />
              </div>
              
              <div id="campus-life" className="mb-20">
                <CampusLifeSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join CSJMU?
            </h3>
            <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
              Take the next step in your educational journey. Explore admission opportunities 
              and become part of our prestigious academic community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                variant="secondary"
                className="bg-secondary hover:bg-secondary-light text-secondary-foreground"
                asChild
              >
                <a href="https://csjmu.ac.in/admissions202526/" target="_blank" rel="noopener noreferrer">
                  Apply for Admissions
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <a href="https://csjmu.ac.in/" target="_blank" rel="noopener noreferrer">
                  Visit Official Website
                  <ExternalLink size={16} className="ml-2" />
                </a>
              </Button>
            </div>
            
            <div className="mt-8 pt-8 border-t border-primary-foreground/20">
              <p className="text-sm opacity-80">
                © 2024 Chhatrapati Shahu Ji Maharaj University. Virtual Tour Experience.
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="lg"
          className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 p-0 shadow-strong hover:shadow-glow transition-all duration-300"
          aria-label="Scroll to top"
        >
          <ArrowUp size={20} />
        </Button>
      )}
      
      {/* Mobile Navigation */}
      <div className="lg:hidden fixed bottom-4 left-4 right-4 z-40">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-strong p-4">
          <TourNavigation 
            activeSection={activeSection}
            onSectionChange={handleSectionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Index;
