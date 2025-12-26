"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { useEffect, useState } from "react";

const roles = [
  "Full-Stack Developer",
  "React Enthusiast",
  "Frontend Specialist",
  "Problem Solver"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.p
            variants={fadeInUp}
            className="text-primary text-lg md:text-xl mb-4 font-medium"
          >
            Hi, my name is
          </motion.p>

          {/* Name */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
              Saranya Gopinath
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.h2
            variants={fadeInUp}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-foreground mb-6"
          >
            Full-Stack Developer with a Passion for Frontend
          </motion.h2>

          {/* Typing animation role */}
          <motion.div
            variants={fadeInUp}
            className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground mb-6 h-12 md:h-14"
          >
            {displayText}
            <span className="animate-pulse">|</span>
          </motion.div>

          {/* Location badge */}
          <motion.div variants={fadeInUp} className="flex justify-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">
                Based in Aarhus, Denmark
              </span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Building exceptional web experiences with 8+ years in SaaS development.
            Specialized in React and modern frontend technologies.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 group"
              onClick={() => scrollToSection("#projects")}
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              onClick={() => scrollToSection("#contact")}
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeInUp}
            className="flex gap-6 justify-center"
          >
            <motion.a
              href="https://github.com/SaranyaGopinath25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gsaranya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-6 w-6" />
            </motion.a>
            <motion.a
              href="mailto:saranyagee25@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-6 w-6" />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-muted-foreground"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.div>
    </section>
  );
}
