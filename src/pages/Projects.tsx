import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";

import heroImg from "@/assets/hero-garden.jpg";
import residentialImg from "@/assets/garden-residential.jpg";
import waterImg from "@/assets/water-feature.jpg";
import lightingImg from "@/assets/outdoor-lighting.jpg";
import villaImg from "@/assets/villa-landscape.jpg";
import terraceImg from "@/assets/terrace-garden.jpg";
import lawnImg from "@/assets/lawn-care.jpg";
import commercialImg from "@/assets/commercial-project.jpg";
import verticalImg from "@/assets/vertical-garden.jpg";

const categories = ["All", "Residential", "Villa", "Commercial", "Terrace", "Water Features"];

const projects = [
  { img: residentialImg, title: "Modern Family Garden", category: "Residential", desc: "Complete garden redesign for a luxury residence." },
  { img: villaImg, title: "Palm Villa Estate", category: "Villa", desc: "Resort-style landscaping for a private villa." },
  { img: commercialImg, title: "Corporate Green Campus", category: "Commercial", desc: "Commercial landscaping for a tech headquarters." },
  { img: terraceImg, title: "Skyline Terrace Garden", category: "Terrace", desc: "Rooftop garden with vertical walls and seating." },
  { img: waterImg, title: "Grand Fountain Plaza", category: "Water Features", desc: "Custom fountain with integrated lighting." },
  { img: heroImg, title: "Heritage Estate Gardens", category: "Residential", desc: "Traditional garden with modern elements." },
  { img: lightingImg, title: "Moonlit Pathway Villa", category: "Villa", desc: "Architectural lighting and garden design." },
  { img: lawnImg, title: "Championship Lawn Estate", category: "Residential", desc: "Premium turf installation and flower borders." },
  { img: verticalImg, title: "Green Tower Living Wall", category: "Commercial", desc: "Massive vertical garden for a commercial building." },
];

const Projects = () => {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-primary-foreground/10 text-gold-light border border-primary-foreground/10">Portfolio</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Our Projects</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Explore our portfolio of luxury landscape transformations across residential, commercial, and resort properties.</p>
          </motion.div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat ? "gradient-green text-primary-foreground shadow-luxury" : "bg-muted text-muted-foreground hover:bg-border"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((proj, i) => (
                <motion.div
                  key={proj.title}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative overflow-hidden rounded-2xl shadow-luxury cursor-pointer"
                >
                  <img src={proj.img} alt={proj.title} className="w-full aspect-[4/3] object-cover group-hover:scale-110 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <span className="text-xs uppercase tracking-widest text-gold-light">{proj.category}</span>
                      <h3 className="font-serif text-xl font-bold text-primary-foreground">{proj.title}</h3>
                      <p className="text-sm text-primary-foreground/70 mt-1">{proj.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
