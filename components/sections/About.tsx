"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { Code2, Briefcase, Award, Users } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Years Experience", value: "8+" },
  { icon: Code2, label: "Projects Completed", value: "50+" },
  { icon: Award, label: "Technologies", value: "10+" },
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

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Image */}
            <motion.div variants={fadeInUp}>
              <Card className="p-8 bg-card border-border overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-lg overflow-hidden">
                  <img
                    src="/avatars/SaranyaGopinath.jpeg"
                    alt="Saranya Gopinath"
                    className="w-full h-full object-cover"
                  />
                </div>
              </Card>
            </motion.div>

            {/* About Content */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold">
                Full-Stack Developer with a Passion for Frontend
              </h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a full-stack developer with over 8 years of experience working
                  in SaaS companies across India. My journey in software development
                  has been driven by a passion for creating intuitive and efficient
                  user experiences.
                </p>
                <p>
                  While I'm proficient in both frontend and backend technologies, my
                  true passion lies in frontend development, particularly with React.
                  I love transforming complex problems into simple, beautiful, and
                  intuitive designs.
                </p>
                <p>
                  Currently based in Aarhus, Denmark, I'm excited to bring my
                  expertise to new challenges and continue growing as a developer in
                  the European tech scene.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <motion.div
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="p-6 bg-card border-border hover:border-primary transition-colors group">
                  <div className="text-center space-y-3">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
