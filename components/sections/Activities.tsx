"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { fadeInUp, staggerContainer } from "@/components/animations/variants";
import Image from "next/image";
import { Building2, Users, Rocket } from "lucide-react";

const activities = [
  {
    title: "Techstars Startup Aarhus",
    description:
      "Active participant in Techstars Startup Aarhus ecosystem, networking with entrepreneurs and learning about startup culture.",
    icon: Rocket,
    logo: "/avatars/Techstar.png",
    photos: [
      {
        src: "/avatars/StartupAarhus.jpeg",
        alt: "Techstars Startup Aarhus",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/2ndprize.jpeg",
        alt: "Techstars Startup Aarhus",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/Team.jpeg",
        alt: "HackYourFuture team event",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/1765365424787.jpg",
        alt: "HackYourFuture team event",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-pink-500/20 to-rose-500/20",
  },
  {
    title: "ReDI School Program",
    description:
      "Participated in ReDI School's digital education program, contributing to tech education and community building.",
    icon: Users,
    logo: "/avatars/redi-logo.jpeg",
    photos: [
      {
        src: "/avatars/IMG_2354.jpg",
        alt: "ReDI School program",
        width: 800,
        height: 600,
      },
      {
        src: "/ReDI-Demo-day.jpeg",
        alt: "ReDI Demo Day",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/ReDI-class.jpg",
        alt: "ReDI Demo Day",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-orange-500/20 to-red-500/20",
  },
  {
    title: "HackYourFuture Program",
    description:
      "Engaged with HackYourFuture community, mentoring aspiring developers and sharing knowledge in web development.",
    icon: Users,
    logo: "/avatars/Hack_your_future.webp",
    photos: [
      {
        src: "/avatars/HYFTeam.jpeg",
        alt: "HackYourFuture team",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/HYFSession.png",
        alt: "HackYourFuture team",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/HYF-JuleHygge.jpeg",
        alt: "HackYourFuture team",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-indigo-500/20 to-purple-500/20",
  },
  {
    title: "iPaper Company Visit",
    description:
      "Visited iPaper to learn about their innovative digital publishing solutions and network with industry professionals.",
    icon: Building2,
    logo: "/avatars/iPaper.png",
    photos: [
      {
        src: "/avatars/IMG_3264.jpg",
        alt: "Mjølner company visit",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/IMG_3262.jpg",
        alt: "iPaper company visit",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Vertica Company Visit",
    description:
      "Explored Vertica's data analytics platform and connected with their engineering team to understand enterprise solutions.",
    icon: Building2,
    logo: "/avatars/vertica.png",
    photos: [
      {
        src: "/avatars/Vertica.jpg",
        alt: "Vertica company visit",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "Mjølner Company Visit",
    description:
      "Visited Mjølner to learn about their software development practices and innovation culture.",
    icon: Building2,
    logo: "/avatars/Mjølner.jpeg",
    photos: [
      {
        src: "/avatars/IMG_2984.jpg",
        alt: "Mjølner company visit",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/mjolner.jpg",
        alt: "Mjølner company visit",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Danish Data Science Community - Henosia Vibe Coding Hackathon",
    description:
      "Participated in the Henosia Vibe Coding Hackathon hosted by Danish Data Science Community, collaborating with developers and data scientists on innovative projects.",
    icon: Users,
    logo: "/avatars/DSCC2.jpeg",
    photos: [
      {
        src: "/avatars/Vibe-coding1.jpeg",
        alt: "Henosia Vibe Coding Hackathon",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/vch1.png",
        alt: "Henosia Vibe Coding Hackathon",
        width: 800,
        height: 600,
      },
      {
        src: "/avatars/vch3.png",
        alt: "Henosia Vibe Coding Hackathon",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-yellow-500/20 to-amber-500/20",
  },
  {
    title: "A2B Danish Class - JuleHygge Celebration",
    description:
      "Studying Danish Module 2 at A2B with fellow international students, celebrating Danish culture and traditions through JuleHygge festivities.",
    icon: Users,
    logo: "/avatars/A2B-logo.png",
    photos: [
      {
        src: "/A2B-Dansk-JuleHygge.jpeg",
        alt: "A2B Danish class JuleHygge celebration",
        width: 800,
        height: 600,
      },
    ],
    gradient: "from-red-500/20 to-green-500/20",
  },
];

export default function Activities() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="activities" className="py-20 md:py-32 bg-muted/30">
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
              Networking <span className="text-primary">Activities</span>
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Building connections and growing through community engagement in
              Aarhus
            </p>
          </motion.div>

          {/* Activities Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {activities.map((activity, index) => (
              <motion.div
                key={activity.title}
                variants={fadeInUp}
                custom={index}
                className={index === activities.length - 1 && activities.length % 2 !== 0 ? "md:col-span-2 md:max-w-2xl md:mx-auto" : ""}
              >
                <Card className="group h-full bg-card border-border hover:border-primary transition-all duration-300 overflow-hidden">
                  {/* Activity Header with Logo */}
                  <div
                    className={`p-6 bg-gradient-to-br ${activity.gradient} border-b border-border`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="relative w-16 h-16 rounded-lg bg-background/80 backdrop-blur-sm overflow-hidden flex-shrink-0">
                        <Image
                          src={activity.logo}
                          alt={`${activity.title} logo`}
                          fill
                          className="object-contain p-2"
                          sizes="64px"
                        />
                      </div>
                      <h3 className="text-xl font-bold flex-1">
                        {activity.title}
                      </h3>
                    </div>
                  </div>

                  {/* Photo Carousel */}
                  <div className="relative bg-background/50">
                    {activity.photos.length === 1 ? (
                      <div className="relative w-full h-64 md:h-80 bg-muted/50" suppressHydrationWarning>
                        <Image
                          src={activity.photos[0].src}
                          alt={activity.photos[0].alt}
                          fill
                          className="object-contain"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <Carousel className="w-full">
                        <CarouselContent>
                          {activity.photos.map((photo, photoIndex) => (
                            <CarouselItem key={photoIndex}>
                              <div className="relative w-full h-64 md:h-80 bg-muted/50" suppressHydrationWarning>
                                <Image
                                  src={photo.src}
                                  alt={photo.alt}
                                  fill
                                  className="object-contain"
                                  sizes="(max-width: 768px) 100vw, 50vw"
                                  unoptimized
                                />
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>
                        <CarouselPrevious className="left-4" />
                        <CarouselNext className="right-4" />
                      </Carousel>
                    )}
                  </div>

                  {/* Activity Description */}
                  <div className="p-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Info */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 text-center p-6 bg-card/50 rounded-lg border border-border"
          >
            <p className="text-sm text-muted-foreground">
              These networking activities have been instrumental in building
              connections within the Aarhus tech community and expanding my
              professional network.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
