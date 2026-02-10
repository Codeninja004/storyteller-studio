import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTABanner = () => (
  <section className="py-24">
    <div className="container mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="relative overflow-hidden rounded-3xl px-8 py-16 text-center md:px-16"
        style={{
          background: "linear-gradient(135deg, hsl(270 65% 50%), hsl(210 90% 55%), hsl(155 70% 45%))",
        }}
      >
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-white md:text-4xl">
          Ready to Bring Your Vision to Life?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Let's collaborate on your next production, media, or broadcasting project.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3.5 font-semibold text-foreground transition-all hover:bg-white/90"
        >
          Start a Project <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  </section>
);

export default CTABanner;
