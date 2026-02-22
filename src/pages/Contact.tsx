import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Instagram, MessageCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-primary-foreground/10 text-gold-light border border-primary-foreground/10">Contact</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">We'd love to hear from you. Reach out and let's bring your garden vision to life.</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <SectionHeading title="Contact Information" center={false} subtitle="Our team is ready to assist you with any inquiries about our landscaping services." />

              <div className="space-y-6">
                {[
                  { icon: MapPin, title: "Our Office", lines: ["Dubai, United Arab Emirates", "Business Bay Area"] },
                  { icon: Phone, title: "Phone", lines: ["+971 XX XXX XXXX"] },
                  { icon: Mail, title: "Email", lines: ["info@jpviplandscapes.com"] },
                  { icon: Clock, title: "Working Hours", lines: ["Monday – Saturday: 8:00 AM – 6:00 PM", "Sunday: By appointment only"] },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center shrink-0">
                      <item.icon size={20} className="text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                      {item.lines.map((line, j) => (
                        <p key={j} className="text-sm text-muted-foreground">{line}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social */}
              <div className="flex gap-3 pt-4">
                <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl gradient-green text-primary-foreground font-medium text-sm hover:scale-105 transition-transform">
                  <MessageCircle size={18} /> WhatsApp
                </a>
                <a href="https://www.instagram.com/jp_vip_landscapes" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-xl gradient-gold text-foreground font-medium text-sm hover:scale-105 transition-transform shadow-gold">
                  <Instagram size={18} /> Instagram
                </a>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl overflow-hidden shadow-luxury h-[400px] lg:h-auto">
              <iframe
                title="JP VIP Landscapes Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.6828168076!2d54.89782219812429!3d25.07628045498749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1690000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
