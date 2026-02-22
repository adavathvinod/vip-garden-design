import { motion } from "framer-motion";
import { Award, Leaf, Target, Eye, Heart, Shield, Users, TreePine } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import residentialImg from "@/assets/garden-residential.jpg";
import villaImg from "@/assets/villa-landscape.jpg";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 gradient-green text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-primary-foreground/10 text-gold-light border border-primary-foreground/10">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Story of Excellence</h1>
            <p className="text-lg text-primary-foreground/70">Discover the passion, expertise, and commitment that drives JP VIP Landscapes to create the most stunning outdoor spaces.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading label="Our Journey" title="Crafting Landscapes Since Day One" center={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>JP VIP Landscapes was founded with a singular vision: to elevate outdoor living to an art form. What began as a passion for horticulture and design has evolved into one of the region's most sought-after premium landscaping firms.</p>
                <p>Our journey has been marked by an unwavering commitment to quality, innovation, and client satisfaction. Every garden we create tells a unique story — one of beauty, functionality, and harmony with the natural environment.</p>
                <p>Today, we serve an elite clientele of villa owners, resorts, commercial establishments, and discerning homeowners who demand nothing but the best for their outdoor spaces.</p>
              </div>
            </motion.div>
            <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={residentialImg} alt="Our story" className="rounded-2xl shadow-luxury w-full object-cover aspect-[4/3]" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { icon: Target, title: "Our Mission", text: "To transform every outdoor space into a masterpiece that harmonizes luxury with nature, delivering unparalleled craftsmanship and sustainable beauty that enriches lives and communities." },
              { icon: Eye, title: "Our Vision", text: "To be the world's most trusted premium landscaping brand, setting the gold standard for garden design, innovation, and environmental stewardship in luxury outdoor living." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.2 }} className="p-8 rounded-2xl glass shadow-luxury">
                <item.icon size={40} className="text-secondary mb-4" />
                <h3 className="font-serif text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.img initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} src={villaImg} alt="Garden philosophy" className="rounded-2xl shadow-luxury w-full object-cover aspect-[4/3]" loading="lazy" />
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <SectionHeading label="Philosophy" title="Our Luxury Garden Philosophy" center={false} />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>We believe that a garden is more than plants and pathways — it's an extension of your lifestyle, a sanctuary that reflects your personality and aspirations.</p>
                <p>Our design philosophy centers on three pillars: <strong className="text-foreground">Elegance</strong> in every detail, <strong className="text-foreground">Sustainability</strong> in every choice, and <strong className="text-foreground">Innovation</strong> in every solution.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-6">
                {[
                  { icon: Heart, label: "Passion-Driven" },
                  { icon: Leaf, label: "Eco-Conscious" },
                  { icon: Shield, label: "Quality First" },
                  { icon: Users, label: "Client-Focused" },
                ].map((v, i) => (
                  <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted">
                    <v.icon size={20} className="text-secondary" />
                    <span className="text-sm font-medium text-foreground">{v.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Expertise */}
      <section className="py-20 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <SectionHeading label="Our Team" title="Expert Craftsmen & Designers" light subtitle="Our team of certified horticulturists, landscape architects, and project managers ensures every project exceeds expectations." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            {[
              { icon: TreePine, title: "Landscape Architects", desc: "Certified professionals with global experience." },
              { icon: Leaf, title: "Horticulturists", desc: "Plant experts ensuring perfect selection." },
              { icon: Award, title: "Project Managers", desc: "Dedicated oversight for seamless delivery." },
              { icon: Shield, title: "Maintenance Crew", desc: "Skilled teams for ongoing garden care." },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10">
                <item.icon size={32} className="text-gold mx-auto mb-3" />
                <h3 className="font-serif text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-primary-foreground/70">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
