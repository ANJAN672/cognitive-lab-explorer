
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const ResearchSection = () => {
  return (
    <section id="research" className="py-16 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Research Areas</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Our interdisciplinary team conducts cutting-edge research across various domains of cognitive science, 
            neuroscience, and artificial intelligence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m2 12 5.45 5.45"></path>
                  <path d="M2 12h10"></path>
                  <path d="m12 2v10l6.75 6.75"></path>
                </svg>
              </div>
              <CardTitle>Cognitive Neuroscience</CardTitle>
              <CardDescription>Understanding brain mechanisms that support cognition</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We investigate the neural basis of cognitive processes using advanced neuroimaging techniques such as fMRI, EEG, and MEG. 
                Our research focuses on mapping brain networks involved in attention, memory, and decision-making.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-primary">Learn More →</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect width="18" height="18" x="3" y="3" rx="2"></rect>
                  <path d="M7 7h10"></path>
                  <path d="M7 12h10"></path>
                  <path d="M7 17h10"></path>
                </svg>
              </div>
              <CardTitle>AI & Cognition</CardTitle>
              <CardDescription>Building bridges between human and artificial intelligence</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                Our AI research aims to develop computational models that simulate human cognitive processes and can help us 
                understand how the brain processes information. We also explore brain-computer interfaces and cognitive computing.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-primary">Learn More →</Button>
            </CardFooter>
          </Card>
          
          <Card>
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <CardTitle>Clinical Applications</CardTitle>
              <CardDescription>Translating research into therapeutic interventions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">
                We develop evidence-based cognitive interventions for conditions such as ADHD, dementia, and stroke recovery. 
                Our research has led to novel therapeutic approaches that enhance cognitive function in clinical populations.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" size="sm" className="text-primary">Learn More →</Button>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <Button>View All Research Projects</Button>
        </div>
      </div>
    </section>
  );
};
