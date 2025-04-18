
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-sm sticky top-0 z-50 w-full border-b border-border">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 bg-primary rounded-full overflow-hidden">
              <svg className="absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="40" fill="none" stroke="white" strokeWidth="2" />
                <path d="M50,10 Q70,30 60,50 T50,90" fill="none" stroke="white" strokeWidth="2" />
                <path d="M30,30 Q40,50 30,70" fill="none" stroke="white" strokeWidth="2" />
              </svg>
            </div>
            <span className="font-bold text-xl tracking-tight">Cognitive Lab</span>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <Link to="/#about" className="text-sm font-medium hover:text-primary transition">About</Link>
          <Link to="/#research" className="text-sm font-medium hover:text-primary transition">Research</Link>
          <Link to="/#team" className="text-sm font-medium hover:text-primary transition">Team</Link>
          <Link to="/#publications" className="text-sm font-medium hover:text-primary transition">Publications</Link>
          <Link to="/#contact" className="text-sm font-medium hover:text-primary transition">Contact</Link>
        </div>
        <div className="hidden md:block">
          <Button variant="default" size="sm">Join Research</Button>
        </div>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </nav>
  );
};
