"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Memory Game",
    description:
      "An interactive memory card game built with React, featuring smooth animations, score tracking, and multiple difficulty levels. A fun way to test and improve memory skills.",
    technologies: ["React", "JavaScript", "CSS"],
    github: "https://github.com/SaranyaGopinath25/Memory-game",
    demo: "https://saranyagopinath25.github.io/Memory-game/",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Twilio SMS Messaging App",
    description:
      "A Shopify app that enables webshops to send SMS messages to customers using Twilio API. Built with React frontend and Node.js backend, featuring real-time message tracking and analytics.",
    technologies: ["React", "Node.js", "Twilio API", "Shopify"],
    github: "#",
    demo: "#",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Habit Tracking App",
    description:
      "A comprehensive habit tracking application that helps users build and maintain positive habits. Features include daily check-ins, streak tracking, and progress visualization with Firebase backend.",
    technologies: ["React", "Firebase", "JavaScript"],
    github: "#",
    demo: "#",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Email Verifier",
    description:
      "A tool to verify email addresses in bulk, checking for validity, deliverability, and potential spam traps. Helps businesses maintain clean email lists and improve deliverability rates.",
    technologies: ["React", "Node.js", "API Integration"],
    github: "#",
    demo: "#",
    gradient: "from-orange-500/20 to-red-500/20",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 md:py-32">
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
              Featured <span className="text-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and experience
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={fadeInUp}
                custom={index}
              >
                <Card className="group h-full bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden">
                  {/* Project Image/Gradient */}
                  <div
                    className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 bg-background/50 backdrop-blur-sm flex items-center justify-center">
                      <div className="text-center p-6">
                        <p className="text-sm text-muted-foreground mb-2">
                          Project Screenshot
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Upload via Assets or add demo link
                        </p>
                      </div>
                    </div>
                    <motion.div
                      className="absolute inset-0 bg-primary/10"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Project Content */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-secondary/50"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-4 pt-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-primary text-primary hover:bg-primary hover:text-primary-foreground group/btn"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Code
                        </Button>
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          size="sm"
                          className="bg-primary text-primary-foreground hover:bg-primary/90 group/btn"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Note about placeholders */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center p-6 bg-card/50 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground">
              <span className="text-primary font-semibold">Note:</span> GitHub
              and demo links are currently placeholders. Update them with your
              actual project URLs.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
