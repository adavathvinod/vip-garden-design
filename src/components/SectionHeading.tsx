import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

const SectionHeading = ({ label, title, subtitle, center = true, light = false }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-gold/10 text-secondary border border-gold/20">
          {label}
        </span>
      )}
      <h2 className={`font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${light ? "text-primary-foreground" : "text-foreground"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`max-w-2xl text-base leading-relaxed ${center ? "mx-auto" : ""} ${light ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
