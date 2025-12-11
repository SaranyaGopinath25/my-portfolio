"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import { Mail, Github, Linkedin, Download, MapPin } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "saranyagee25@gmail.com",
    href: "mailto:saranyagee25@gmail.com",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "SaranyaGopinath25",
    href: "https://github.com/SaranyaGopinath25",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "gsaranya",
    href: "https://www.linkedin.com/in/gsaranya/",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Aarhus, Denmark",
    href: null,
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          {/* Section Title */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="text-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <motion.div
            variants={staggerContainer}
            className="grid sm:grid-cols-2 gap-6 mb-12"
          >
            {contactInfo.map((info, index) => (
              <motion.div key={info.label} variants={fadeInUp} custom={index}>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer h-full">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <info.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                            {info.label}
                          </h3>
                          <p className="text-sm text-muted-foreground break-all">
                            {info.value}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </a>
                ) : (
                  <Card className="p-6 bg-card border-border h-full">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary">
                        <info.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{info.label}</h3>
                        <p className="text-sm text-muted-foreground">
                          {info.value}
                        </p>
                      </div>
                    </div>
                  </Card>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Resume Download */}
          <motion.div variants={fadeInUp} className="text-center">
            <Card className="p-8 bg-card border-border">
              <div className="space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-2">
                  <Download className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold">Download My Resume</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  Get a detailed overview of my experience, skills, and
                  accomplishments.
                </p>
                <a href="/avatars/Saranya%20Gopinath%20-%20Danske%20Bank%20CV.pdf" download="Saranya_Gopinath_CV.pdf">
                  <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 mt-4"
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Resume
                  </Button>
                </a>
                <p className="text-xs text-muted-foreground mt-4">
                  Upload your resume PDF via the Assets panel and update the link
                  above
                </p>
              </div>
            </Card>
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeInUp} className="text-center mt-12">
            <p className="text-lg text-muted-foreground mb-6">
              Looking for a dedicated developer to join your team?
            </p>
            <a href="mailto:saranyagee25@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Send Me an Email
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
