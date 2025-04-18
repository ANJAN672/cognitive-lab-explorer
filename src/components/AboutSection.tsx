
import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">About Cognitive Lab</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Founded in 2015, the Cognitive Laboratory is a premier research institute dedicated to understanding human cognitive processes 
            and developing innovative technologies based on these insights.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              The Cognitive Laboratory aims to advance our understanding of human cognition through rigorous scientific research 
              and to translate these insights into practical applications that enhance human capabilities and well-being.
            </p>
            
            <h3 className="text-xl font-semibold mb-4">Our Approach</h3>
            <p className="text-muted-foreground mb-6">
              We employ a multidisciplinary approach that combines neuroscience, psychology, computer science, and 
              engineering to investigate cognitive processes and develop technologies that augment human cognitive abilities.
            </p>
            
            <Button variant="outline">Learn More About Our History</Button>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-secondary p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                  <line x1="1" y1="1" x2="23" y2="23"></line>
                </svg>
              </div>
              <h4 className="font-medium mb-2">Perception Research</h4>
              <p className="text-sm text-muted-foreground">Investigating how the brain processes sensory information.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                </svg>
              </div>
              <h4 className="font-medium mb-2">Memory Studies</h4>
              <p className="text-sm text-muted-foreground">Exploring the mechanisms of memory formation and recall.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </div>
              <h4 className="font-medium mb-2">Decision Making</h4>
              <p className="text-sm text-muted-foreground">Analyzing the cognitive processes behind human decisions.</p>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m2 12 5.45 5.45"></path>
                  <path d="M2 12h10"></path>
                  <path d="m12 2v10l6.75 6.75"></path>
                </svg>
              </div>
              <h4 className="font-medium mb-2">Cognitive Enhancement</h4>
              <p className="text-sm text-muted-foreground">Developing technologies to boost cognitive performance.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
