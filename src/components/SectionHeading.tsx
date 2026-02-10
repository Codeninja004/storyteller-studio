import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

const SectionHeading = ({ label, title, description, align = "left" }: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7 }}
      className={`⁠mb-12 md:mb-16 ${align === "center" ? "text-center" : ""}`}>
      {label && (
        <span className="font-body text-xs tracking-[0.3em] uppercase text-primary mb-3 block">
          {label}
        </span>
      )}
      <h2 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground leading-none">
        {title}
      </h2>
      {description && (
        <div className="flex justify-center items-center">
        <p className="mt-4 text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
        </div>
      )}
    </motion.div>
  );
};

export default SectionHeading;