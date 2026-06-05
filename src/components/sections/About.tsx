"use client";

import {
  GraduationCap,
  Code2,
  Sparkles,
  BookOpen,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { aboutCards } from "@/data/about";

const iconMap: Record<string, LucideIcon> = {
  GraduationCap,
  Code2,
  Sparkles,
  BookOpen,
};

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="About Me"
          subtitle="Get to know more about my journey, passion, and what drives me as a developer."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {aboutCards.map((card, index) => {
            const Icon = iconMap[card.icon];
            return (
              <Card key={card.id} delay={index * 0.1}>
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10">
                  <Icon size={24} className="text-accent-light" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{card.description}</p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
