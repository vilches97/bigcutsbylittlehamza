import { Calendar, Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      <div className="absolute inset-0 hex-pattern opacity-20" />

      <div className="container mx-auto px-4 relative z-10 text-center">
        <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
          Reservas
        </p>
        <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase mb-6">
          Reserva tu cita en segundos
        </h2>
        <p className="text-muted-foreground max-w-md mx-auto mb-10">
          Elige el día y la hora que mejor te venga. Sin esperas, sin complicaciones.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://booksy.com/es-es/128812_big-cuts_barberia_28835_martos#ba_s=sr_1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-primary text-primary-foreground px-10 py-5 rounded-xl font-heading font-bold uppercase tracking-wider text-sm hover:box-glow hover:scale-105 transition-all duration-300 animate-glow-pulse"
          >
            <Calendar size={20} />
            Reservar en Booksy
          </a>
          <a
            href="tel:+34666797398"
            className="flex items-center gap-3 bg-secondary text-foreground px-10 py-5 rounded-xl font-heading font-semibold uppercase tracking-wider text-sm hover:bg-muted transition-all duration-300"
          >
            <Phone size={20} />
            Llamar
          </a>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
