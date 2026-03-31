import shopInterior from "@/assets/shop-interior.webp";
import barberWorking from "@/assets/barber-working.webp";
import haircutDetail from "@/assets/haircut-detail.webp";
import hexLights from "@/assets/hex-lights.webp";
import barberCloseup from "@/assets/barber-closeup.webp";
import shopWide from "@/assets/shop-wide.webp";

const images = [
  { src: hexLights, alt: "Interior con luces hexagonales", span: "row-span-2" },
  { src: haircutDetail, alt: "Detalle de corte", span: "" },
  { src: barberCloseup, alt: "Barbero en acción", span: "" },
  { src: shopWide, alt: "Vista amplia del local", span: "sm:col-span-2" },
  { src: barberWorking, alt: "Servicio profesional", span: "" },
  { src: shopInterior, alt: "Interior del local", span: "" },
];

const GallerySection = () => {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-heading font-semibold uppercase tracking-[0.3em] text-sm mb-4">
            Galería
          </p>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground uppercase">
            Nuestro trabajo
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 max-w-6xl mx-auto auto-rows-[200px] sm:auto-rows-[250px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-xl border border-border ${img.span}`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-foreground text-xs font-heading uppercase tracking-wider">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
