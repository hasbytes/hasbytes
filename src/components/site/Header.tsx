import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className={cn("font-semibold tracking-tight text-sm md:text-base")}
          aria-label="Ahmed Hasanovic IMA - Home">
          Ahmed Hasanovic — IMA
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-foreground/80 transition-colors">About</a>
          <a href="#services" className="hover:text-foreground/80 transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground/80 transition-colors">Contact</a>
        </nav>
        <div className="md:hidden" />
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact" aria-label="Contact Ahmed">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
