import { motion } from "framer-motion";
import { Film, Radio, Tv, Camera, Clapperboard, Palette } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import project1 from "@/assets/project-1.jpg";
import project5 from "@/assets/project-5.jpg";

const capabilities = [
  { icon: Film, title: "Video Production", desc: "End-to-end film and video production, from scripting and storyboarding to on-set direction and final delivery." },
  { icon: Radio, title: "Live Broadcasting", desc: "Multi-camera live streaming and broadcast solutions for events, conferences, and real-time programming." },
  { icon: Tv, title: "Post-Production", desc: "Professional editing, color grading, sound design, VFX compositing, and finishing for broadcast and digital." },
  { icon: Camera, title: "Event Coverage", desc: "Comprehensive event documentation with cinematic quality — from intimate gatherings to large-scale productions." },
  { icon: Clapperboard, title: "Commercials & Ads", desc: "High-impact commercial production for brands seeking memorable, visually striking advertising content." },
  { icon: Palette, title: "Creative Direction", desc: "Strategic creative oversight ensuring every project aligns with brand vision and audience expectations." },
];

const clients = [
  "National Geographic", "Red Bull Media", "Sony Pictures",
  "Warner Bros.", "Nike", "Adidas",
  "BBC Studios", "Netflix", "Paramount",
  "ESPN", "Discovery", "HBO",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-32 pb-20 section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">About Us</span>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] max-w-4xl">
              BUILT ON <span className="text-gradient">CRAFT</span>,<br />
              DRIVEN BY VISION
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <img src={project1} alt="Behind the scenes" className="w-full h-full object-cover" />
              <div className="absolute inset-0 border border-primary/20" />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <SectionHeading label="Our Story" title="WHO WE ARE" />
            <div className="space-y-4 text-muted-foreground text-sm md:text-base leading-relaxed">
              <p>
                ENS Media is a full-service media production company based in Los Angeles.
                We specialize in creating cinematic content that moves audiences — from brand campaigns
                and documentaries to live broadcasts and corporate media.
              </p>
              <p>
                Our approach is rooted in collaboration, creative integrity, and technical excellence.
                Every project begins with understanding the story our clients want to tell, and we bring
                the expertise, equipment, and artistry to bring that story to life.
              </p>
              <p>
                With a team of experienced producers, directors, cinematographers, and editors,
                we deliver broadcast-quality content that meets the highest industry standards.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Capabilities"
            title="WHAT WE DO"
            description="From initial concept to final delivery, we offer a comprehensive suite of production and broadcast services."
            align="center"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass-card p-8 group hover:border-primary/30 transition-colors duration-500"
              >
                <cap.icon className="mb-4 text-primary" size={28} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{cap.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{cap.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            label="Clients"
            title="TRUSTED BY LEADING BRANDS"
            description="We've had the privilege of working with world-class organizations across media, entertainment, and corporate sectors."
            align="center"
          />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {clients.map((client, i) => (
              <motion.div
                key={client}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="glass-card py-6 px-4 flex items-center justify-center"
              >
                <span className="font-display text-lg tracking-wider text-muted-foreground">{client}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image break */}
      <section className="relative h-[50vh] overflow-hidden">
        <img src={project5} alt="Stage production" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-background/50" />
      </section>

      <Footer />
    </div>
  );
};

export default About;
