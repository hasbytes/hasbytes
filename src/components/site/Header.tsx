import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import logo from "@/assets/hasbytes-logo.jpg";

const Header = () => {
  return (
    <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container flex items-center justify-between h-16">
        <a href="#home" className={cn("flex items-center gap-2 font-semibold tracking-tight text-sm md:text-base")}
          aria-label="HasBytes - Home">
          <img src={logo} alt="HasBytes logo" className="w-8 h-8 rounded-full" />
          HasBytes
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:text-foreground/80 transition-colors">About</a>
          <a href="#services" className="hover:text-foreground/80 transition-colors">Services</a>
          <a href="#contact" className="hover:text-foreground/80 transition-colors">Contact</a>
        </nav>
        <div className="md:hidden" />
        <div className="hidden md:block">
          <Button asChild>
            <a href="#contact" aria-label="Contact HasBytes">Contact</a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
