import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, BrainCircuit } from "lucide-react";

const products = [
  {
    name: "OmniParse",
    description: "Convert anything into Structured Actionable Data",
    icon: "public/lovable-uploads/b457d110-ed75-4a9b-8927-98358978a6ec.png",
  },
  {
    name: "RAG SaaS",
    description: "Deploy Agentic RAG solutions to enterprises seamlessly",
    icon: "public/lovable-uploads/e9bf3f79-edad-405f-b624-65befc481f77.png",
  },
  {
    name: "Scrapio",
    description: "Extract Structured Data from the Web at Scale(Coming soon)",
    icon: "public/lovable-uploads/6de3c4ae-90db-40ab-8595-4c7792babbe6.png",
  },
  {
    name: "AI Engineering Academy",
    description: "Navigate the field of AI one Step at a time",
    icon: "public/lovable-uploads/c959c94b-7f61-44f0-90a0-a620cc22dcac.png",
  },
];

export const Navbar = () => {
  return (
    <nav className="bg-background/90 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border/50">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-10 bg-gradient-to-br from-primary/80 to-accent rounded-xl overflow-hidden transition-transform group-hover:scale-110">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  <svg className="absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="30" r="4" fill="white" className="animate-pulse" />
                    <circle cx="30" cy="50" r="4" fill="white" className="animate-pulse [animation-delay:200ms]" />
                    <circle cx="70" cy="50" r="4" fill="white" className="animate-pulse [animation-delay:400ms]" />
                    <circle cx="50" cy="70" r="4" fill="white" className="animate-pulse [animation-delay:600ms]" />
                    
                    <line x1="50" y1="30" x2="30" y2="50" stroke="white" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite]" />
                    <line x1="50" y1="30" x2="70" y2="50" stroke="white" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite_0.2s]" />
                    <line x1="30" y1="50" x2="50" y2="70" stroke="white" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite_0.4s]" />
                    <line x1="70" y1="50" x2="50" y2="70" stroke="white" strokeWidth="1" className="animate-[dash_3s_ease-in-out_infinite_0.6s]" />
                  </svg>
                  <BrainCircuit className="absolute inset-0 w-6 h-6 m-auto text-white/90 animate-pulse" />
                </div>
              </div>
            </div>
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">CognitiveLab</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="group">
                Products 
                <ChevronDown className="h-4 w-4 ml-1 transition-transform duration-200 group-data-[state=open]:rotate-180" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-3 bg-background/95 backdrop-blur-lg border-border animate-in fade-in-0 zoom-in-95">
              {products.map((product) => (
                <DropdownMenuItem key={product.name} className="flex items-start gap-3 p-3 cursor-pointer rounded-lg hover:bg-muted/50 transition-colors focus:bg-muted">
                  <img src={product.icon} alt={product.name} className="w-8 h-8" />
                  <div>
                    <div className="font-semibold">{product.name}</div>
                    <div className="text-sm text-muted-foreground">{product.description}</div>
                  </div>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/blog" className="text-sm font-medium hover:text-primary transition-colors">Blog</Link>
          <Link to="/docs" className="text-sm font-medium hover:text-primary transition-colors">Docs</Link>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" asChild className="hover:bg-accent/10">
            <Link to="/try" className="text-primary hover:text-accent transition-colors">Try OmniParse</Link>
          </Button>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-gradient-to-r from-primary/90 to-accent/90 hover:from-primary hover:to-accent transition-all duration-300 shadow-lg shadow-accent/20"
          >
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};
