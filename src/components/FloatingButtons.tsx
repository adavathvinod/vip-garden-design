import { Phone, Instagram, MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full bg-emerald text-primary-foreground shadow-luxury hover:scale-110 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
      <a
        href="https://www.instagram.com/jp_vip_landscapes"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3.5 rounded-full gradient-gold text-foreground shadow-gold hover:scale-110 transition-transform"
        aria-label="Instagram"
      >
        <Instagram size={22} />
      </a>
      <a
        href="tel:+91XXXXXXXXXX"
        className="p-3.5 rounded-full gradient-green text-primary-foreground shadow-luxury hover:scale-110 transition-transform"
        aria-label="Call us"
      >
        <Phone size={22} />
      </a>
    </div>
  );
};

export default FloatingButtons;
