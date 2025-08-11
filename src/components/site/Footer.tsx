import { Instagram, Linkedin, Twitter, Music } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm text-muted-foreground">© {year} HasBytes. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="https://www.linkedin.com/in/ahmed-hasanovic-15905437a/" aria-label="LinkedIn" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            <Linkedin size={20} />
          </a>
          <a href="https://instagram.com/hasbytes" aria-label="Instagram" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href="https://x.com/hasbytes" aria-label="X (Twitter)" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <a href="https://www.tiktok.com/@has_bytes" aria-label="TikTok" className="hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
            <Music size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
