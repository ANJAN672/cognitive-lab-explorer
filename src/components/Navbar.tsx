
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

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
    <nav className="bg-background/90 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative h-8 w-8 bg-primary rounded-full overflow-hidden transition-transform group-hover:scale-110">
              <svg className="absolute inset-0 animate-pulse" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" />
                <path d="M50,10 Q70,30 60,50 T50,90" fill="none" stroke="white" strokeWidth="2" className="animate-[dash_3s_ease-in-out_infinite]" />
                <path d="M30,30 Q40,50 30,70" fill="none" stroke="white" strokeWidth="2" className="animate-[dash_3s_ease-in-out_infinite_0.5s]" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight">CognitiveLab</span>
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
          <Button variant="ghost" size="sm" asChild>
            <Link to="/try" className="hover:text-primary transition-colors">Try OmniParse</Link>
          </Button>
          <Button variant="default" size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            Book a Call
          </Button>
        </div>
      </div>
    </nav>
  );
};
