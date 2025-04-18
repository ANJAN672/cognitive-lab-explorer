
export const Footer = () => {
  return (
    <footer className="bg-accent/10 py-10 text-sm">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Cognitive Lab</h3>
            <p className="text-muted-foreground mb-4">
              Advancing our understanding of human cognition through innovative research and technology.
            </p>
            <p className="text-muted-foreground text-xs">
              © {new Date().getFullYear()} Cognitive Laboratory. All rights reserved.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Research</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Cognitive Neuroscience</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">AI & Machine Learning</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Clinical Applications</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Publications</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">About Us</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Our Team</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Facilities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">News & Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-primary">Participate in Research</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Student Opportunities</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-xs">
            Cognitive Lab | Advancing the science of mind and brain
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-primary">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-primary">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
