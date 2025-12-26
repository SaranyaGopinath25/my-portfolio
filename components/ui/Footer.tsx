"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-muted-foreground text-center md:text-left"
          >
            © {year} Saranya Gopinath. Built with{" "}
            <Heart className="inline h-4 w-4 text-primary fill-primary" /> using
            Next.js & Tailwind CSS
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            <motion.a
              href="https://github.com/SaranyaGopinath25"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/gsaranya/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
            <motion.a
              href="mailto:saranyagee25@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ scale: 1.2, y: -2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
