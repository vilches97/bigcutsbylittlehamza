import { Phone } from "lucide-react";
import HexBackground from "./HexBackground";
import shopInterior from "@/assets/shop-interior.webp";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={shopInterior} alt="Big Cuts Interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/20" />
      </div>

      <HexBackground />

      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1
          className="font-heading font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight text-foreground mb-4 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          BIG <span className="text-primary text-glow">CUTS</span>
        </h1>

        <p
          className="font-heading text-lg sm:text-xl md:text-2xl text-muted-foreground uppercase tracking-[0.3em] mb-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
        >
          by Little Hamza
        </p>

        <div className="w-20 h-0.5 bg-primary mx-auto my-6 opacity-0 animate-fade-in animate-line-glow" style={{ animationDelay: "0.7s" }} />

        <p
          className="text-xl sm:text-2xl md:text-3xl font-heading font-semibold text-foreground mb-3 opacity-0 animate-fade-in"
          style={{ animationDelay: "0.8s" }}
        >
          Sacamos la mejor versión de ti
        </p>

        <p
          className="text-muted-foreground max-w-lg mx-auto mb-10 text-sm sm:text-base opacity-0 animate-fade-in"
          style={{ animationDelay: "1s" }}
        >
          Barbería premium en Martos especializada en cortes modernos y cuidado masculino
        </p>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in"
          style={{ animationDelay: "1.2s" }}
        >
          <a
            href="https://booksy.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-heading font-bold uppercase tracking-wider text-sm hover:box-glow transition-all duration-300 hover:scale-105"
          >
            Reservar cita
          </a>
          <a
            href="tel:+34666797398"
            className="flex items-center gap-2 bg-secondary text-foreground px-8 py-4 rounded-lg font-heading font-semibold uppercase tracking-wider text-sm hover:bg-muted transition-all duration-300"
          >
            <Phone size={16} />
            Llamar ahora
          </a>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default HeroSection;
