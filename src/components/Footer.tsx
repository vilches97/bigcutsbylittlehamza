import { Instagram } from "lucide-react";
import logo from "@/assets/logo.webp";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Big Cuts" className="h-10 w-10 rounded-full object-cover" />
            <div>
              <p className="font-heading font-bold text-foreground tracking-wider">BIG CUTS</p>
              <p className="text-muted-foreground text-xs">by Little Hamza</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Galería</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/bigcutsbylittlehamza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.tiktok.com/@bigcutsbylittlehamza"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-[18px] h-[18px]">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
              </svg>
            </a>
            <a
              href="https://booksy.com/es-es/128812_big-cuts_barberia_28835_martos#ba_s=sr_1"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-xs uppercase tracking-wider hover:box-glow transition-all"
            >
              Booksy
            </a>
          </div>
        </div>

        <div className="text-center mt-8 pt-8 border-t border-border">
          <p className="text-muted-foreground text-xs">
            &copy; {new Date().getFullYear()} Big Cuts by Little Hamza. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
