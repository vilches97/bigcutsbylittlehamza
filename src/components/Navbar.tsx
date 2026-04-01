import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.webp";

const navItems = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#about" },
  { label: "Servicios", href: "#services" },
  { label: "Galería", href: "#gallery" },
  { label: "Reseñas", href: "#reviews" },
  { label: "Contacto", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Big Cuts" className="h-10 w-10 rounded-full object-cover" />
          <span className="font-heading font-bold text-lg tracking-wider text-foreground">BIG CUTS</span>
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest"
            >
              {item.label}
            </a>
          ))}
          <a
            href="https://booksy.com/es-es/128812_big-cuts_barberia_28835_martos#ba_s=sr_1"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:box-glow transition-all duration-300"
          >
            Reservar
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-foreground p-2">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border animate-fade-in">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-foreground font-heading font-semibold uppercase tracking-wider text-sm py-2"
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-3 pt-4">
              <a
                href="https://booksy.com/es-es/128812_big-cuts_barberia_28835_martos#ba_s=sr_1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-primary-foreground text-center py-3 rounded-lg font-heading font-semibold text-sm uppercase"
              >
                Reservar
              </a>
              <a
                href="tel:+34666797398"
                className="flex items-center justify-center bg-secondary text-foreground px-4 py-3 rounded-lg"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
