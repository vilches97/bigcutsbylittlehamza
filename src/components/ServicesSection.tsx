import { Scissors, Sparkles, Palette, Droplets, Star } from "lucide-react";

const services = [
  {
    icon: Scissors,
    title: "CORTE DE CABALLERO 12,00€",
    desc: "Cortes modernos, clásicos y personalizados. Adaptados a tu estilo y tipo de rostro.",
  },
  {
    icon: Sparkles,
    title: "RECORTE Y PERFILADO DE BARBA 8,00€",
    desc: "Perfilado, recorte y diseño de barba con acabado profesional y productos premium.",
  },
  {
    icon: Palette,
    title: "DISEÑOS HAIR TATTO 3,50€",
    desc: "Diseños personalizados y líneas de precisión para un look único y diferenciador.",
  },
  {
    icon: Droplets,
    title: "MECHAS O DECOLORACIÓN 55,00€",
    desc: "INFORMACION RELACION CON MECHAS Y DECOLARACION",
  },
  {
    icon: Star,
    title: "Servicios extras",
    desc: "CORTE Y BARBA 16,00€\nPERFILADO DISEÑO DE CEJAS 2,00€\nLIMPIEZA FACIALL 20,00€",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 hex-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Nuestros servicios
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase">
            Qué ofrecemos
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-card border border-border rounded-xl p-8 hover:border-glow transition-all duration-500 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground uppercase tracking-wide mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
