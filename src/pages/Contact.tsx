import { useState } from "react";
import { motion } from "framer-motion";
import { Send, MapPin, Mail, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <section className="relative pt-32 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">Contact</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] max-w-4xl">
              LET'S <span className="text-gradient">WORK</span><br />
              TOGETHER
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Have a project in mind? We'd love to hear about it. Reach out and let's create something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">Message</label>
              <textarea
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-secondary/50 border border-border/50 px-4 py-3 text-foreground text-sm focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-8 lg:pl-16"
          >
            <div>
              <h3 className="font-display text-2xl text-foreground mb-6">CONTACT INFO</h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Mail className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">Email</span>
                    <span className="text-foreground text-sm">hello@novaframe.studio</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">Phone</span>
                    <span className="text-foreground text-sm">+1 (555) 234-5678</span>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary mt-1 shrink-0" size={18} />
                  <div>
                    <span className="text-xs tracking-widest uppercase text-muted-foreground block mb-1">Location</span>
                    <span className="text-foreground text-sm">1234 Sunset Blvd, Suite 500<br />Los Angeles, CA 90028</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 mt-8">
              <h4 className="font-display text-xl text-foreground mb-3">WORKING HOURS</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Monday – Friday: 9:00 AM – 6:00 PM</p>
                <p>Saturday: By appointment</p>
                <p>Sunday: Closed</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
