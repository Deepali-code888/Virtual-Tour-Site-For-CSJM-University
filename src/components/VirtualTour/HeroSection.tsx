import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import campusHero from "@/assets/uiet-campus-1.jpg";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const words = ["WELCOME TO", "स्वागत है"];
  const typingSpeed = 150;
  const deletingSpeed = 100;
  const pauseDuration = 2000;

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    
    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentWord.length) {
        // Typing
        setDisplayText(currentWord.substring(0, currentCharIndex + 1));
        setCurrentCharIndex(prev => prev + 1);
      } else if (!isDeleting && currentCharIndex === currentWord.length) {
        // Pause before deleting
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, pauseDuration);
      } else if (isDeleting && currentCharIndex > 0) {
        // Deleting
        setDisplayText(currentWord.substring(0, currentCharIndex - 1));
        setCurrentCharIndex(prev => prev - 1);
      } else if (isDeleting && currentCharIndex === 0) {
        // Move to next word
        setIsDeleting(false);
        setCurrentWordIndex(prev => (prev + 1) % words.length);
      }
    }, isPaused ? 0 : isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentCharIndex, currentWordIndex, isDeleting, isPaused]);

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
            <span className="typing-text">
              {displayText}
              <span className="typing-cursor">|</span>
            </span>
            <span className="block bg-gold-gradient bg-clip-text text-opacity-90 mt-2">
              CSJMU
            </span>
          </h1>
        </div>
        
        <div className="fade-in-up stagger-1">
          <p className="text-xl md:text-2xl mb-4 font-light">
            Chhatrapati Shahu Ji Maharaj University
          </p>
          <p className="text-xl md:text-xl mb-4 font-light">
            Uttar Pradesh State University (Formerly known as Kanpur University)
          </p>
          <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Explore our prestigious campus through an immersive virtual journey. 
          </p>
        </div>
        
        <div className="fade-in-up stagger-2">
          <Button 
            onClick={scrollToTour}
            className="bg-white hover:bg-gray-50 text-red-600 border-2 border-red-600 font-semibold px-8 py-4 text-lg transition-all duration-300 transform hover:scale-105 shadow-glow"
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