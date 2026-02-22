import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

import heroImg from "@/assets/hero-garden.jpg";
import residentialImg from "@/assets/garden-residential.jpg";
import waterImg from "@/assets/water-feature.jpg";
import lightingImg from "@/assets/outdoor-lighting.jpg";
import villaImg from "@/assets/villa-landscape.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import lawnImg from "@/assets/lawn-care.jpg";
import irrigationImg from "@/assets/irrigation.jpg";
import verticalImg from "@/assets/vertical-garden.jpg";

const services = [
  {
    title: "Landscape Design & Planning",
    image: heroImg,
    description: "Our landscape design and planning service begins with understanding your vision, lifestyle, and the unique characteristics of your outdoor space. Our certified landscape architects create comprehensive master plans that blend aesthetic beauty with functional excellence. From initial concept sketches to detailed 3D renderings, we ensure every element — from plant selection to hardscape integration — is meticulously planned for lasting impact and visual harmony.",
    benefits: ["Custom 3D design renderings", "Expert plant selection", "Sustainable material sourcing", "Phased implementation plans"],
  },
  {
    title: "Premium Garden Installation",
    image: residentialImg,
    description: "Transform your outdoor space with our premium garden installation service. We handle every aspect of the build — from soil preparation and grading to planting, hardscaping, and finishing touches. Our skilled teams use only the finest materials and premium-grade plants, ensuring your garden is built to the highest standards of quality and durability. Every installation is a testament to our commitment to excellence.",
    benefits: ["Premium-grade materials", "Expert installation teams", "Quality-controlled process", "Post-installation care guide"],
  },
  {
    title: "Lawn Development & Maintenance",
    image: lawnImg,
    description: "A lush, perfectly manicured lawn is the foundation of any beautiful landscape. Our lawn development service includes soil analysis, turf selection, precision grading, and professional installation. We also offer ongoing maintenance programs that include scheduled mowing, fertilization, aeration, and pest management to keep your lawn looking immaculate throughout every season.",
    benefits: ["Soil analysis & preparation", "Premium turf varieties", "Scheduled maintenance plans", "Seasonal treatments"],
  },
  {
    title: "Irrigation Systems",
    image: irrigationImg,
    description: "Efficient water management is essential for a thriving garden. Our smart irrigation solutions include drip systems, sprinkler networks, and automated controllers that optimize water usage while ensuring every plant receives the perfect amount of hydration. We design custom irrigation layouts that minimize waste, reduce utility costs, and support sustainable landscaping practices.",
    benefits: ["Smart automation", "Water-efficient design", "Custom zone mapping", "Remote monitoring options"],
  },
  {
    title: "Outdoor Lighting Solutions",
    image: lightingImg,
    description: "Illuminate your outdoor space with our bespoke lighting design service. From subtle pathway lights to dramatic uplighting and architectural accent fixtures, we create lighting schemes that enhance safety, extend usability, and add an enchanting ambiance to your garden after dark. Our designs use energy-efficient LED technology and smart controls for effortless operation.",
    benefits: ["Energy-efficient LEDs", "Smart controls", "Architectural accents", "Safety-focused design"],
  },
  {
    title: "Water Features & Fountains",
    image: waterImg,
    description: "Add a touch of serenity and sophistication to your garden with custom water features. From cascading waterfalls and reflecting pools to ornamental fountains and natural stream designs, our water feature installations create focal points that captivate the senses. Each feature is engineered for reliability, easy maintenance, and stunning visual impact that elevates your entire landscape.",
    benefits: ["Custom designs", "Low-maintenance systems", "Natural stone options", "Integrated lighting"],
  },
  {
    title: "Vertical Gardens",
    image: verticalImg,
    description: "Maximize your green space with stunning vertical garden installations. Perfect for modern architecture, commercial buildings, and compact urban environments, our living walls bring nature to spaces where traditional gardens aren't feasible. We design self-sustaining vertical systems with integrated irrigation, proper drainage, and carefully curated plant selections that thrive in vertical conditions.",
    benefits: ["Space optimization", "Improved air quality", "Integrated irrigation", "Low maintenance design"],
  },
  {
    title: "Villa & Resort Landscaping",
    image: villaImg,
    description: "Our villa and resort landscaping service caters to luxury properties that demand extraordinary outdoor environments. We design and build resort-style gardens with tropical plantings, infinity-edge features, outdoor living areas, and seamless indoor-outdoor transitions. Every project is tailored to complement the architecture and create an immersive experience for residents and guests alike.",
    benefits: ["Resort-style aesthetics", "Indoor-outdoor flow", "Tropical plant expertise", "Luxury amenity integration"],
  },
  {
    title: "Seasonal Garden Care",
    image: terraceImg,
    description: "Keep your garden looking its best year-round with our comprehensive seasonal care programs. Our expert maintenance teams provide scheduled visits for pruning, fertilizing, pest control, mulching, and seasonal plantings. We adapt our care routines to the unique needs of your garden and the changing seasons, ensuring vibrant color, healthy growth, and lasting beauty every day of the year.",
    benefits: ["Year-round maintenance", "Seasonal plantings", "Expert pruning", "Health monitoring"],
  },
];

const Services = () => {
  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-primary-foreground/10 text-gold-light border border-primary-foreground/10">Our Services</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Premium Landscaping Solutions</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Comprehensive landscaping services tailored to create, maintain, and elevate luxury outdoor spaces.</p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 space-y-24">
          {services.map((svc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
              style={{ direction: i % 2 === 1 ? "rtl" : "ltr" }}
            >
              <div style={{ direction: "ltr" }}>
                <img src={svc.image} alt={svc.title} className="rounded-2xl shadow-luxury w-full object-cover aspect-[4/3]" loading="lazy" />
              </div>
              <div style={{ direction: "ltr" }}>
                <h2 className="font-serif text-2xl md:text-3xl font-bold mb-4 text-foreground">{svc.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{svc.description}</p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {svc.benefits.map((b, j) => (
                    <div key={j} className="flex items-center gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary" />
                      <span className="text-foreground">{b}</span>
                    </div>
                  ))}
                </div>
                <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl gradient-gold text-foreground font-semibold shadow-gold hover:scale-105 transition-transform text-sm">
                  Book This Service <ArrowRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Services;
