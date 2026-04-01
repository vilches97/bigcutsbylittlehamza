import { Calendar } from "lucide-react";

const MobileBookingButton = () => {
  return (
    <a
      href="https://booksy.com/es-es/128812_big-cuts_barberia_28835_martos#ba_s=sr_1"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 md:hidden bg-primary text-primary-foreground w-14 h-14 rounded-full flex items-center justify-center shadow-lg animate-glow-pulse"
    >
      <Calendar size={22} />
    </a>
  );
};

export default MobileBookingButton;
