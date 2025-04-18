
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-b from-secondary to-background overflow-hidden">
      {/* Background neural network animation */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="neuralNetwork" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <circle cx="50" cy="50" r="1" fill="currentColor" className="text-primary" />
              <circle cx="25" cy="25" r="1" fill="currentColor" className="text-accent" />
              <circle cx="75" cy="25" r="1" fill="currentColor" className="text-primary" />
              <circle cx="25" cy="75" r="1" fill="currentColor" className="text-accent" />
              <circle cx="75" cy="75" r="1" fill="currentColor" className="text-primary" />
              <path d="M25,25 L50,50 L75,25 M25,75 L50,50 L75,75" stroke="currentColor" strokeWidth="0.5" fill="none" className="text-muted-foreground" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#neuralNetwork)" />
        </svg>
      </div>
      
      <div className="container relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            <span className="text-primary">Exploring</span> the Human <span className="text-accent">Mind</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-lg">
            The Cognitive Laboratory combines cutting-edge neuroscience, psychology, and artificial intelligence to understand human cognition and explore new frontiers in cognitive enhancement.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button size="lg">Our Research</Button>
            <Button variant="outline" size="lg">Join a Study</Button>
          </div>
        </div>
        
        <div className="relative md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Brain illustration with animated pulse effect */}
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-accent/20 animate-pulse [animation-delay:0.2s]"></div>
            <div className="absolute inset-8 rounded-full bg-accent/30 animate-pulse [animation-delay:0.4s]"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary">
                <path d="M100,20 Q140,20 160,60 T160,100 Q160,140 120,160 T80,160 Q40,160 20,120 T20,80 Q20,40 60,20 T100,20" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M100,40 Q120,40 130,60 T130,100 Q130,120 110,130 T90,130 Q70,130 60,110 T60,90 Q60,70 80,60 T100,40" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <path d="M60,80 Q80,100 100,80 T140,100" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="70" cy="70" r="5" fill="currentColor" className="animate-pulse" />
                <circle cx="130" cy="70" r="5" fill="currentColor" className="animate-pulse [animation-delay:0.3s]" />
                <circle cx="100" cy="100" r="5" fill="currentColor" className="animate-pulse [animation-delay:0.6s]" />
                <circle cx="80" cy="120" r="5" fill="currentColor" className="animate-pulse [animation-delay:0.9s]" />
                <circle cx="120" cy="120" r="5" fill="currentColor" className="animate-pulse [animation-delay:1.2s]" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
