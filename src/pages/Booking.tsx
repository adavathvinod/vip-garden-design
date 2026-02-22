import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const serviceOptions = [
  "Landscape Design & Planning",
  "Premium Garden Installation",
  "Lawn Development & Maintenance",
  "Irrigation Systems",
  "Outdoor Lighting Solutions",
  "Water Features & Fountains",
  "Vertical Gardens",
  "Villa & Resort Landscaping",
  "Seasonal Garden Care",
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", email: "", location: "", service: "", date: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="relative py-24 gradient-green text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4 bg-primary-foreground/10 text-gold-light border border-primary-foreground/10">Book Now</span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Schedule Your Consultation</h1>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">Take the first step towards your dream garden. Our experts will guide you through every detail.</p>
          </motion.div>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-2xl">
          {submitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-16">
              <CheckCircle size={64} className="text-primary mx-auto mb-4" />
              <h2 className="font-serif text-3xl font-bold text-foreground mb-2">Thank You!</h2>
              <p className="text-muted-foreground">We've received your booking request. Our team will contact you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} onSubmit={handleSubmit} className="space-y-6 glass p-8 md:p-10 rounded-2xl shadow-luxury">
              <SectionHeading title="Book Your Free Consultation" subtitle="Fill in the form below and we'll get back to you promptly." />

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Full Name *</label>
                  <input name="name" value={form.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder="Ravi Kumar" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Phone Number *</label>
                  <input name="phone" value={form.phone} onChange={handleChange} required type="tel" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder="+91 XXXXX XXXXX" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email Address *</label>
                <input name="email" value={form.email} onChange={handleChange} required type="email" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder="john@example.com" />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Location</label>
                <input name="location" value={form.location} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" placeholder="Kakinada, Andhra Pradesh" />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Service Type</label>
                  <select name="service" value={form.service} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition">
                    <option value="">Select a service</option>
                    {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Preferred Date</label>
                  <input name="date" value={form.date} onChange={handleChange} type="date" className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-border bg-background text-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition resize-none" placeholder="Tell us about your project..." />
              </div>

              <button type="submit" className="w-full py-4 rounded-xl gradient-gold text-foreground font-semibold shadow-gold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 text-lg">
                Schedule Consultation <Send size={18} />
              </button>
            </motion.form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Booking;
