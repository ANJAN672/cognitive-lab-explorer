
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const PublicationsSection = () => {
  return (
    <section id="publications" className="py-16 bg-secondary">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Recent Publications</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-muted-foreground">
            Our research has been published in leading journals and presented at international conferences.
          </p>
        </div>
        
        <div className="space-y-6">
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Neural mechanisms of attention capture and maintenance</CardTitle>
              <CardDescription>Journal of Cognitive Neuroscience, 2023</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Davis R, Lee J, Patel S, et al.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Neuroscience</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Attention</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">fMRI</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Computational models of working memory: A comparative analysis</CardTitle>
              <CardDescription>Trends in Cognitive Sciences, 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lee J, Davis R, Chen M, et al.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Working Memory</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Computational Modeling</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Cognitive rehabilitation for executive function impairments following stroke</CardTitle>
              <CardDescription>Neuropsychological Rehabilitation, 2022</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Patel S, Davis R, Thompson K, et al.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Rehabilitation</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Executive Function</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Clinical</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="border-0 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Brain-computer interfaces for cognitive enhancement: Current challenges and future directions</CardTitle>
              <CardDescription>Nature Communications, 2021</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Lee J, Davis R, Patel S, et al.
              </p>
              <div className="flex gap-2 mt-2">
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">BCI</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Cognitive Enhancement</span>
                <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded">Neurotechnology</span>
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-10 text-center">
          <Button>View All Publications</Button>
        </div>
      </div>
    </section>
  );
};
