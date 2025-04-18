import { Button } from "@/components/ui/button";
import { GridBackground } from "./backgrounds/GridBackground";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background/95 to-background overflow-hidden">
      {/* Animated grid background */}
      <GridBackground />
      
      <div className="container relative px-4 py-20 sm:px-6 lg:px-8 lg:py-28 flex flex-col md:flex-row items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent animate-gradient">
              Exploring
            </span>{" "}
            the Human{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-primary animate-gradient">
              Mind
            </span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 text-lg text-muted-foreground max-w-lg"
          >
            The Cognitive Laboratory combines cutting-edge neuroscience, psychology, and artificial intelligence to understand human cognition and explore new frontiers in cognitive enhancement.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
              Our Research
            </Button>
            <Button variant="outline" size="lg" className="backdrop-blur-sm bg-background/50 border-primary/20 hover:bg-primary/10">
              Join a Study
            </Button>
          </motion.div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative md:w-1/2 flex justify-center"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-accent/10 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-accent/20 animate-pulse [animation-delay:0.2s]"></div>
            <div className="absolute inset-8 rounded-full bg-accent/30 animate-pulse [animation-delay:0.4s]"></div>
            <div className="absolute inset-0 flex items-center justify-center animate-float">
              <svg viewBox="0 0 200 200" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" className="text-primary animate-glow">
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
        </motion.div>
      </div>
    </div>
  );
};
