"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fadeInUp, staggerContainer, scaleIn } from "@/components/animations/variants";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMysql,
  SiAmazondynamodb,
  SiCypress
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", icon: SiCss3, color: "#1572B6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", icon: SiReact, color: "#61DAFB" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
      { name: "Java", icon: FaJava, color: "#007396" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "DynamoDB", icon: SiAmazondynamodb, color: "#4053D6" },
    ],
  },
  {
    title: "Testing",
    skills: [
      { name: "Cypress", icon: SiCypress, color: "#17202C" },
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 md:py-32 bg-secondary/30">
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
              Technical <span className="text-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </motion.div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                variants={fadeInUp}
                custom={categoryIndex}
              >
                <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 h-full">
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="text-primary">//</span>
                    {category.title}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={`${category.title}-${skill.name}`}
                        variants={scaleIn}
                        custom={skillIndex}
                        whileHover={{ scale: 1.05, y: -5 }}
                        className="group"
                      >
                        <div className="flex flex-col items-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background transition-colors">
                          <div className="relative" suppressHydrationWarning>
                            <skill.icon
                              className="w-12 h-12 transition-all duration-300"
                              style={{ color: skill.color }}
                            />
                            <div
                              className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-50 transition-opacity"
                              style={{ backgroundColor: skill.color }}
                            />
                          </div>
                          <span className="text-sm font-medium text-center">
                            {skill.name}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Skills */}
          <motion.div variants={fadeInUp} className="mt-12 text-center">
            <h3 className="text-lg font-semibold mb-4 text-muted-foreground">
              Also experienced with
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript",
                "Git",
                "REST APIs",
                "Responsive Design",
                "Agile/Scrum",
                "CI/CD",
                "AWS",
                "Shopify",
                "Firebase",
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Badge
                    variant="outline"
                    className="px-4 py-2 text-sm border-primary/50 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
