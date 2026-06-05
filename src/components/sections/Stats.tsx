"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { stats } from "@/data/about";

export function Stats() {
  return (
    <section id="stats" className="section-padding">
      <div className="container-custom">
        <SectionHeading
          title="By The Numbers"
          subtitle="A snapshot of my development journey so far."
        />

        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.id}
              className="glass glass-hover rounded-2xl p-6 text-center sm:p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="mt-2 text-sm text-muted sm:text-base">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
