import { Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© {year} HasBytes. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:text-foreground transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-foreground transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" aria-label="Twitter / X" className="hover:text-foreground transition-colors">
            <Twitter size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
