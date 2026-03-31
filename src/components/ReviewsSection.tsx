import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Carlos M.",
    text: "Sin duda la mejor barbería de Martos. El trato es increíble y los cortes de otro nivel. Siempre salgo contento.",
  },
  {
    name: "Alejandro R.",
    text: "Hamza es un artista. Le explicas lo que quieres y siempre supera las expectativas. Local espectacular.",
  },
  {
    name: "David P.",
    text: "Ambiente premium, atención al detalle y un resultado siempre impecable. No cambio de barbero.",
  },
  {
    name: "Miguel Á.",
    text: "La experiencia completa: desde que entras por la puerta hasta que sales te sientes como en casa. Recomendado 100%.",
  },
];

const ReviewsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="py-24 bg-secondary/30 relative">
      <div className="absolute inset-0 hex-pattern opacity-10" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Reseñas
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase mb-6">
            Lo que dicen nuestros clientes
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={24} className="text-primary fill-primary" />
            ))}
          </div>
          <p className="text-foreground font-heading font-bold text-2xl">5.0 / 5</p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden" style={{ minHeight: 180 }}>
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ${
                  i === current ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
                }`}
              >
                <p className="text-muted-foreground text-lg leading-relaxed mb-6 italic max-w-xl">
                  "{review.text}"
                </p>
                <p className="text-foreground font-heading font-bold uppercase tracking-wider text-sm">
                  {review.name}
                </p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-8 box-glow" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
