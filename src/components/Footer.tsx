import { Link } from "react-router-dom";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="gradient-green text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="JP VIP Landscapes" className="h-12 w-12 rounded-full" />
              <div>
                <p className="font-serif text-lg font-bold">JP VIP Landscapes</p>
                <p className="text-xs tracking-widest uppercase text-gold-light">Premium Garden Services</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Where Nature Meets Luxury. Proudly serving Kakinada and across Andhra Pradesh with breathtaking landscape transformations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/services", label: "Services" },
                { to: "/projects", label: "Projects" },
                { to: "/booking", label: "Book Consultation" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.to} to={link.to} className="text-sm text-primary-foreground/70 hover:text-gold-light transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Our Services</h4>
            <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <span>Landscape Design & Planning</span>
              <span>Premium Garden Installation</span>
              <span>Lawn Development</span>
              <span>Irrigation Systems</span>
              <span>Outdoor Lighting</span>
              <span>Water Features</span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-4 text-gold-light">Get In Touch</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-gold" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-gold" />
                <span>info@jpviplandscapes.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-gold" />
                <span>Kakinada, Andhra Pradesh, India</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a
                href="https://www.instagram.com/jp_vip_landscapes"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-gold/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-primary-foreground/10 hover:bg-gold/20 transition-colors"
              >
                <Phone size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© {new Date().getFullYear()} JP VIP Landscapes & Premium Garden Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
