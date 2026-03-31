import { MapPin, Phone, Clock, Instagram } from "lucide-react";

const schedule = [
  { day: "Lunes", hours: "10:00 - 20:00" },
  { day: "Martes", hours: "10:00 - 20:00" },
  { day: "Miércoles", hours: "10:00 - 20:00" },
  { day: "Jueves", hours: "10:00 - 20:00" },
  { day: "Viernes", hours: "10:00 - 20:00" },
  { day: "Sábado", hours: "10:00 - 14:00" },
  { day: "Domingo", hours: "Cerrado" },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Contacto
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase">
            Encuéntranos
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-1">
                  Dirección
                </h3>
                <p className="text-muted-foreground text-sm">
                  Av. de la Paz, 6, 23600 Martos (Jaén)
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Phone size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-1">
                  Teléfono
                </h3>
                <a href="tel:+34666797398" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  +34 666 797 398
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Instagram size={20} className="text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-1">
                  Instagram
                </h3>
                <a href="https://www.instagram.com/bigcutsbylittlehamza" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  @bigcutsbylittlehamza
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-primary">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.87a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.3z"/>
                </svg>
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-1">
                  TikTok
                </h3>
                <a href="https://www.tiktok.com/@bigcutsbylittlehamza" target="_blank" rel="noopener noreferrer" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                  @bigcutsbylittlehamza
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="font-heading font-bold text-foreground uppercase text-sm tracking-wider mb-3">
                  Horario
                </h3>
                <div className="space-y-2">
                  {schedule.map((s) => (
                    <div key={s.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{s.day}</span>
                      <span className={s.hours === "Cerrado" ? "text-destructive" : "text-foreground"}>
                        {s.hours}
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Horario flexible bajo cita previa
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border h-[400px] md:h-full min-h-[300px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d799.0!2d-3.9716!3d37.7210!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6dcf942a5b4b3b%3A0x1!2sAv.+de+la+Paz%2C+6%2C+23600+Martos%2C+Ja%C3%A9n!5e0!3m2!1ses!2ses!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ubicación Big Cuts"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
