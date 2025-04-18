
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export const TeamSection = () => {
  return (
    <section id="team" className="py-16 bg-white">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Our interdisciplinary team brings together expertise from neuroscience, psychology, 
            computer science, and engineering to tackle complex cognitive challenges.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Team Member 1 */}
          <Card className="overflow-hidden border-0 shadow-md">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                DR
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Dr. Rachel Davis</CardTitle>
              <CardDescription>Director & Principal Investigator</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-2">
              <p>
                Specializing in cognitive neuroscience with a focus on attention and memory systems. 
                Former researcher at Harvard University with over 100 publications in peer-reviewed journals.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </CardFooter>
          </Card>
          
          {/* Team Member 2 */}
          <Card className="overflow-hidden border-0 shadow-md">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                JL
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Dr. James Lee</CardTitle>
              <CardDescription>Senior Researcher, AI & Cognition</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-2">
              <p>
                Expert in computational cognitive science and artificial intelligence. 
                Leads projects on cognitive modeling and brain-computer interfaces.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </CardFooter>
          </Card>
          
          {/* Team Member 3 */}
          <Card className="overflow-hidden border-0 shadow-md">
            <div className="h-48 bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center">
              <div className="w-32 h-32 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center text-white text-2xl font-bold">
                SP
              </div>
            </div>
            <CardHeader className="pb-2">
              <CardTitle>Dr. Sarah Patel</CardTitle>
              <CardDescription>Head of Clinical Research</CardDescription>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground pb-2">
              <p>
                Clinical neuropsychologist specializing in cognitive rehabilitation. 
                Leads our translational research program developing interventions for cognitive disorders.
              </p>
            </CardContent>
            <CardFooter className="flex gap-2">
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="#" className="text-primary hover:text-primary/80">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </CardFooter>
          </Card>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg font-medium">Join Our Team</p>
          <p className="text-muted-foreground mb-4">
            We're always looking for talented researchers and students to join our lab.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <div className="bg-secondary rounded-full px-4 py-2 text-sm">PhD Positions</div>
            <div className="bg-secondary rounded-full px-4 py-2 text-sm">Postdoctoral Fellows</div>
            <div className="bg-secondary rounded-full px-4 py-2 text-sm">Research Assistants</div>
            <div className="bg-secondary rounded-full px-4 py-2 text-sm">Internships</div>
          </div>
        </div>
      </div>
    </section>
  );
};
