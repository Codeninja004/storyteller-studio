import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Film, Radio, Tv, Camera } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

const projects = [
  { img: project1, title: "Brand Campaign", category: "Commercial" },
  { img: project2, title: "Live Broadcast", category: "Broadcasting" },
  { img: project3, title: "Aerial Documentary", category: "Documentary" },
  { img: project4, title: "Post-Production Suite", category: "Post-Production" },
  { img: project5, title: "Stage Production", category: "Event Coverage" },
  { img: project6, title: "Studio Session", category: "Film Production" },
];

const services = [
  { icon: Film, title: "Video Production", desc: "Cinematic storytelling from concept to final cut." },
  { icon: Radio, title: "Live Broadcasting", desc: "Multi-camera live coverage for any scale." },
  { icon: Tv, title: "Post-Production", desc: "Color grading, VFX, and editorial finishing." },
  { icon: Camera, title: "Event Coverage", desc: "Full-service capture for events worldwide." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Production studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-background/40" />
        </div>
        <div className="relative z-10 section-padding pb-24 md:pb-32 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <span className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4 block">
              Production · Broadcasting · Media
            </span>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] max-w-5xl">
              WE BRING<br />
              <span className="text-gradient">STORIES</span> TO<br />
              THE SCREEN
            </h1>
            <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
              Award-winning production and broadcast services for brands, agencies, and visionary creators.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 font-body text-sm tracking-widest uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="section-padding max-w-7xl mx-auto">
        <SectionHeading label="Featured Work" title="SELECTED PROJECTS" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative aspect-square overflow-hidden cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-xs tracking-[0.3em] uppercase text-primary">{project.category}</span>
                <span className="font-display text-2xl text-foreground mt-1">{project.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Snippet */}
      <section className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <SectionHeading
              label="Who We Are"
              title="CRAFTED WITH VISION"
              description="ENS is a creative media studio driven by a passion for visual storytelling. We combine technical precision with artistic vision to produce content that captivates and inspires."
            />
            <Link
              to="/about"
              className="inline-flex items-center gap-3 font-body text-sm tracking-widest uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              Learn More <ArrowRight size={16} />
            </Link>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img src={project6} alt="Studio" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-primary/20" />
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <SectionHeading label="What We Do" title="OUR SERVICES" align="center" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 text-center group hover:border-primary/30 transition-colors duration-500"
              >
                <service.icon className="mx-auto mb-4 text-primary" size={32} strokeWidth={1.5} />
                <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground mb-6">
              READY TO CREATE<br />
              <span className="text-gradient">SOMETHING BOLD?</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto mb-8">
              Let's talk about your next project. We're ready when you are.
            </p>
            <Link
              to="/contact"
              className="inline-block font-body text-sm tracking-widest uppercase px-8 py-4 bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
