import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import campusHero from "@/assets/campus-hero.jpg";

export const HeroSection = () => {
  const scrollToTour = () => {
    document.getElementById('tour-sections')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${campusHero})`,
        }}
      >
        <div className="absolute inset-0 bg-hero-gradient opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Welcome to
            <span className="block bg-gold-gradient bg-clip-text text-transparent">
              CSJMU
            </span>
          </h1>
        </div>
        
        <div className="fade-in-up stagger-1">
          <p className="text-xl md:text-2xl mb-4 font-light">
            Chhatrapati Shahu Ji Maharaj University
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our prestigious campus through an immersive virtual journey. 
            Discover world-class facilities, academic excellence, and the vibrant life 
            at one of India's premier universities.
          </p>
        </div>
        
        <div className="fade-in-up stagger-2">
          <Button 
            onClick={scrollToTour}
            size="lg"
            className="bg-secondary hover:bg-secondary-light text-secondary-foreground font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-glow"
          >
            Begin Virtual Tour
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 fade-in-up stagger-3">
        <button 
          onClick={scrollToTour}
          className="animate-bounce text-white hover:text-secondary transition-colors"
          aria-label="Scroll to tour"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};