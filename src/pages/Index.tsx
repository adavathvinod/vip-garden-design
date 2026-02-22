import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Leaf, Sun, Droplets, TreePine, Star, ChevronRight, ArrowRight, Shield, Award, Users } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-garden.jpg";
import residentialImg from "@/assets/garden-residential.jpg";
import waterImg from "@/assets/water-feature.jpg";
import lightingImg from "@/assets/outdoor-lighting.jpg";
import villaImg from "@/assets/villa-landscape.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";

const floatingCards = [
  { icon: Leaf, label: "Premium Garden Design", delay: 0 },
  { icon: Sun, label: "Luxury Outdoor Spaces", delay: 0.2 },
  { icon: TreePine, label: "Expert Maintenance", delay: 0.4 },
];

const services = [
  { icon: Leaf, title: "Landscape Design", desc: "Bespoke garden designs tailored to your vision and lifestyle." },
  { icon: TreePine, title: "Garden Installation", desc: "Premium plantings, hardscaping, and complete garden builds." },
  { icon: Sun, title: "Lawn Development", desc: "Lush, perfectly manicured lawns for residential and commercial." },
  { icon: Droplets, title: "Irrigation Systems", desc: "Smart, efficient watering solutions for optimal plant health." },
  { icon: Star, title: "Outdoor Lighting", desc: "Ambient lighting design to illuminate your outdoor paradise." },
  { icon: Droplets, title: "Water Features", desc: "Elegant fountains and water installations for tranquil spaces." },
];

const projects = [
  { img: residentialImg, title: "Modern Villa Garden", category: "Residential" },
  { img: waterImg, title: "Grand Fountain", category: "Water Features" },
  { img: lightingImg, title: "Night Garden", category: "Lighting" },
  { img: villaImg, title: "Resort Landscaping", category: "Commercial" },
  { img: terraceImg, title: "Urban Terrace", category: "Terrace" },
  { img: heroImg, title: "Estate Garden", category: "Residential" },
];

const testimonials = [
  { name: "Rajesh Kumar", role: "Villa Owner, Kakinada", text: "JP VIP transformed our entire outdoor space into a private paradise. The attention to detail is truly remarkable.", rating: 5 },
  { name: "Priya Reddy", role: "Resort Manager, East Godavari", text: "Professional, creative, and always on time. Our resort grounds have never looked more beautiful.", rating: 5 },
  { name: "Suresh Naidu", role: "Homeowner, Kakinada", text: "From design to execution, every step was handled with precision and care. Highly recommended!", rating: 5 },
];

const Index = () => {
  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury garden landscape" className="w-full h-full object-cover" />
          <div className="absolute inset-0 gradient-hero" />
        </div>

        <div className="container mx-auto px-4 relative z-10 pt-24 pb-16">
          <div className="max-w-3xl">
            {/* Floating Cards */}
            <div className="flex flex-wrap gap-3 mb-8">
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: card.delay, duration: 0.6 }}
                  className="glass-dark px-4 py-2.5 rounded-xl flex items-center gap-2 text-primary-foreground text-sm animate-float"
                  style={{ animationDelay: `${card.delay * 2}s` }}
                >
                  <card.icon size={16} className="text-gold" />
                  {card.label}
                </motion.div>
              ))}
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-4"
            >
              JP VIP Landscapes &{" "}
              <span className="text-gradient-gold">Premium Garden</span>{" "}
              Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-xl md:text-2xl text-gold-light font-serif italic mb-8"
            >
              "Where Nature Meets Luxury"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="/booking"
                className="px-8 py-4 rounded-xl gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-transform flex items-center gap-2"
              >
                Book Free Consultation <ArrowRight size={18} />
              </Link>
              <Link
                to="/projects"
                className="px-8 py-4 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors flex items-center gap-2"
              >
                View Our Projects <ChevronRight size={18} />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ABOUT SNIPPET */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionHeading label="About Us" title="Crafting Outdoor Masterpieces" center={false} subtitle="Based in Kakinada, Andhra Pradesh, JP VIP Landscapes transforms ordinary outdoor spaces into extraordinary living environments that reflect luxury, sophistication, and harmony with India's rich natural heritage." />
              <div className="grid grid-cols-3 gap-4 mt-8">
                {[
                  { icon: Award, num: "500+", label: "Projects" },
                  { icon: Users, num: "350+", label: "Happy Clients" },
                  { icon: Shield, num: "15+", label: "Years Experience" },
                ].map((stat, i) => (
                  <div key={i} className="text-center p-4 glass rounded-xl">
                    <stat.icon size={24} className="mx-auto mb-2 text-secondary" />
                    <p className="font-serif text-2xl font-bold text-foreground">{stat.num}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img src={residentialImg} alt="Premium garden design" className="rounded-2xl shadow-luxury w-full object-cover aspect-[4/3]" loading="lazy" />
              <div className="absolute -bottom-6 -left-6 glass p-4 rounded-xl shadow-luxury max-w-[220px]">
                <p className="font-serif text-lg font-bold text-foreground">Trusted by 350+</p>
                <p className="text-sm text-muted-foreground">Homeowners across Andhra Pradesh</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Services" title="Premium Landscaping Solutions" subtitle="From concept to creation, we deliver end-to-end landscaping services that exceed expectations." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group p-6 rounded-2xl border border-border bg-card hover:shadow-luxury transition-all duration-500 hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-xl gradient-green flex items-center justify-center mb-4">
                  <svc.icon size={22} className="text-primary-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-2 text-foreground">{svc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{svc.desc}</p>
                <Link to="/services" className="text-sm font-medium text-secondary hover:text-gold-dark flex items-center gap-1 transition-colors">
                  Learn More <ChevronRight size={14} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4">
          <SectionHeading label="Why Choose Us" title="The JP VIP Difference" light subtitle="We don't just build gardens — we create legacy landscapes that stand the test of time." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Award, title: "Award-Winning Designs", desc: "Internationally recognized landscape architecture." },
              { icon: Shield, title: "Quality Guaranteed", desc: "Premium materials and expert craftsmanship." },
              { icon: Leaf, title: "Eco-Friendly Approach", desc: "Sustainable practices for a greener future." },
              { icon: Users, title: "Dedicated Team", desc: "Experienced horticulturists and designers." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:bg-primary-foreground/10 transition-colors"
              >
                <item.icon size={32} className="text-gold mb-4" />
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS GALLERY */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <SectionHeading label="Our Portfolio" title="Featured Projects" subtitle="A glimpse into our world of luxury landscapes." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((proj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="group relative overflow-hidden rounded-2xl shadow-luxury cursor-pointer"
              >
                <img src={proj.img} alt={proj.title} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <div>
                    <span className="text-xs uppercase tracking-widest text-gold-light">{proj.category}</span>
                    <h3 className="font-serif text-xl font-bold text-primary-foreground">{proj.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-xl gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-transform">
              View All Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <SectionHeading label="Testimonials" title="What Our Clients Say" subtitle="Real stories from satisfied clients who trusted us with their outdoor spaces." />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="p-6 rounded-2xl glass shadow-luxury"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={16} className="text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mb-4 italic">"{t.text}"</p>
                <div>
                  <p className="font-serif font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 gradient-green text-primary-foreground text-center">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-primary-foreground/70 mb-8 max-w-xl mx-auto">
              Schedule a free consultation with our expert team and bring your dream garden to life.
            </p>
            <Link to="/booking" className="inline-flex items-center gap-2 px-10 py-4 rounded-xl gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-transform text-lg">
              Book Free Consultation <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
