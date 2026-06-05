"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { timelineItems } from "@/data/timeline";

export function LearningJourney() {
  return (
    <section id="journey" className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          title="Learning Journey"
          subtitle="My path from first lines of code to building full-stack applications."
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-gradient-to-b from-accent via-accent/50 to-transparent md:left-1/2 md:-translate-x-px" />

          {timelineItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative mb-12 flex items-start gap-6 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="hidden flex-1 md:block" />

              <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-background md:absolute md:left-1/2 md:-translate-x-1/2">
                <div className="h-3 w-3 rounded-full bg-accent animate-pulse-slow" />
              </div>

              <div
                className={`glass glass-hover flex-1 rounded-2xl p-6 ${
                  index % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                <span className="mb-2 inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-light">
                  {item.year}
                </span>
                <h3 className="mb-2 text-lg font-semibold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
