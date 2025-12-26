"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { Code2, Briefcase, Award, MapPin, Heart, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "8+ Years Experience",
    description: "Working in SaaS companies across India",
  },
  {
    icon: Code2,
    title: "Frontend Specialist",
    description: "Passionate about React & modern web tech",
  },
  {
    icon: MapPin,
    title: "Based in Denmark",
    description: "Aarhus, ready for new challenges",
  },
  {
    icon: Heart,
    title: "UX Focused",
    description: "Creating intuitive & efficient user experiences",
  },
  {
    icon: Rocket,
    title: "Problem Solver",
    description: "Transforming complex problems into simple solutions",
  },
  {
    icon: Award,
    title: "Full-Stack Skills",
    description: "Proficient in both frontend & backend",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="text-primary">Me</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Left Column - Photo and Title */}
            <motion.div variants={fadeInUp} className="lg:col-span-1 space-y-6">
              <Card className="p-6 bg-card border-border overflow-hidden">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/Portfolio-photo.jpeg"
                    alt="Saranya Gopinath"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </Card>
              <div className="text-center lg:text-left"></div>
            </motion.div>

            {/* Right Column - Highlights Grid */}
            <motion.div
              variants={staggerContainer}
              className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="p-6 bg-card border-border hover:border-primary transition-colors group h-full">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <highlight.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">
                          {highlight.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {highlight.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
