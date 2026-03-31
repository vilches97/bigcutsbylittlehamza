import barberWorking from "@/assets/barber-working.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 hex-pattern opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <img
              src={barberWorking}
              alt="Barbero trabajando"
              className="relative rounded-2xl w-full object-cover aspect-[3/4] border border-border"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
              Sobre nosotros
            </p>
            <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              TU PELUQUERO DE CONFIANZA
            </h2>
            <div className="w-16 h-0.5 bg-primary mb-8" />
            <p className="text-muted-foreground leading-relaxed mb-6">
              En Big Cuts no hacemos simples cortes de pelo. Cada servicio es una experiencia
              diseñada para sacar lo mejor de ti. Combinamos técnica de alto nivel con un trato
              cercano y personalizado.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Nuestro espacio está pensado al detalle: desde las luces hexagonales que nos
              definen hasta cada herramienta que utilizamos. Porque creemos que cada corte
              es una obra y tu imagen merece lo mejor.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "3+", label: "Años" },
                { value: "3K+", label: "Clientes" },
                { value: "5.0", label: "Valoración" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-heading font-bold text-2xl sm:text-3xl text-primary text-glow">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
