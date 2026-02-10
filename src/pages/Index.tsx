import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Film, Radio, Tv, Camera, Dot, DotIcon } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpeg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project6 from "@/assets/project-6.jpg";
import ClientCarousel from "@/components/ClientCarousel";
import CTABanner from "@/components/CTABanner";

const projects = [
  { img: project1, title: "Campus Tours & Brand Activations", client: "Lenovo · Krafton (BGMI) · PlayStation · Garena (Free Fire)", description: "We design and execute high-impact college campus tours and on-ground brand activations, creating immersive gaming and engagement experiences that connect brands directly with young audiences." },
  { img: project2, title: "Production & Live Broadcasting", client: "OnePlus · iQOO · Samsung", description: "We deliver end-to-end production and live broadcasting for esports, LAN and similar events, managing everything from pre-event planning and technical setup to multi-camera production and real-time streaming. Our team ensures seamless execution, broadcast-quality visuals, and reliable live streams across digital platforms." },
  { img: project3, title: "Casting & Live Commentary", client: "Acer · Samsung · Alienware · Intel · Flipkart · Entity", description: "We provide professional casting and live commentary for esports tournaments, product launch and branded streams, delivering energetic storytelling, in-depth gameplay analysis, and real-time audience engagement that elevates the viewing experience." },
];

const services = [
  { title: "Casting", desc: "We provide professional esports casting for gaming streams, tournaments, and live events, delivering high-energy commentary that enhances gameplay, engages viewers, and elevates the broadcast experience." },
  { title: "Emcee Services", desc: "Our professional emcees host and anchor events with energy, clarity, and audience engagement, elevating brand presence across live shows, launches, and activations." },
  { title: "Production", desc: "We handle complete media production, from concept and planning to execution, delivering high-quality visual content tailored for digital, broadcast, and on-ground platforms." },
  { title: "Broadcasting", desc: "We specialize in live and recorded broadcasting, covering events with seamless production, real-time streaming, and technical precision across multiple platforms." },
  { title: "Campus Tours & Brand Activations", desc: "We design and execute college campus tours and on-ground activations for brands, creating immersive experiences that drive awareness, engagement, and recall among young audiences." },
  { title: "Social Media Marketing", desc: "We build and manage data-driven social media strategies, producing content that increases visibility, engagement, and brand growth across all major platforms." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative h-screen flex items-end overflow-hidden  text-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Production studio" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
          <div className="absolute inset-0 bg-background/50" />
        </div>
        <div className="relative z-10 section-padding pb-24 md:pb-32 w-full max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="font-body text-xs tracking-[0.4em] uppercase mb-4 mr-10 block font-medium ">
              Production <DotIcon className="inline-block size-8 text-[#F77325]" /> Media <DotIcon className="inline-block size-8 text-[#30C0E5]" /> Broadcasting
            </p>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground leading-[0.9] max-w-5xl">
              WE BRING {" "}
              <span className="text-gradient">STORIES</span> <br />TO
              THE SCREEN
            </h1>
            <div className="flex justify-center items-center">
              <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-lg leading-relaxed">
                Award-winning production and broadcast services for brands, agencies, and visionary creators.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 mt-8 font-body text-sm tracking-widest uppercase text-primary hover:gap-5 transition-all duration-300"
            >
              Start a Project <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      <ClientCarousel />

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
              className="group  aspect-square  cursor-pointer"
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className=" inset-0 bg-background/70  duration-500 flex flex-col justify-end py-6 gap-2">
                <span className="font-display text-2xl text-foreground mt-1">{project.title}</span>
                <span className="text-xs ">{project.description}</span>
                <span className="text-xs text-primary">{project.client}</span>
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
                <h3 className="font-display text-xl text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />

      <Footer />
    </div>
  );
};

export default Index;
