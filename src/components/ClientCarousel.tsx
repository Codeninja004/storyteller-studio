import { motion } from "framer-motion";

import entity from "@/assets/entity.jpg";
import garena from "@/assets/garena.jpg";
import intel from "@/assets/intel.webp";
import alienware from "@/assets/alienware.png";
import krafton from "@/assets/krafton(bgmi).png";
import samsung from "@/assets/samsung.png";
import oneplus from "@/assets/oneplus.png";
import riot from "@/assets/riot.jpg";
import iqoo from "@/assets/Iqoo.png";
import flipkart from "@/assets/Flipkart.webp";
import playstation from "@/assets/Playstation.jpg";
import acer from "@/assets/Acer.jpg";
import lenovo from "@/assets/Lenovo.png";

const clients = [
  entity, garena, intel, alienware, krafton, samsung, oneplus, riot, iqoo, flipkart, playstation, acer, lenovo
];

const ClientCarousel = () => (
  <section className="overflow-hidden border-y border-border/50 py-12">
    <div className="container mx-auto px-6">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.15em] text-muted-foreground"
      >
        Trusted By Leading Brands
      </motion.p>
    </div>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...clients, ...clients].map((client, i) => (
          <div
            key={`${i}`}
            className="mx-6 flex shrink-0 items-center justify-center rounded-xl border border-border bg-card px-10 py-5"
          >
            <img src={client} alt="Behind the scenes" className="w-30 h-20 object-cover" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ClientCarousel;
