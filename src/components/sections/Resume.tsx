"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Resume() {
  return (
    <section id="resume" className="section-padding bg-surface/30">
      <div className="container-custom">
        <SectionHeading
          title="Resume"
          subtitle="Download my resume to learn more about my education, skills, and experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl"
        >
          <div className="glass glass-hover rounded-2xl p-8 text-center sm:p-12">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-accent/10">
              <FileText size={40} className="text-accent-light" />
            </div>

            <h3 className="mb-3 text-xl font-semibold text-white">
              Tejas R — Resume
            </h3>
            <p className="mb-8 text-sm text-muted">
              Computer Science Student & Aspiring Software Developer with skills in
              Python, web development, databases, and cloud computing.
            </p>

            <Button
              href="/Tejas_R_Resume.docx"
              download="Tejas_R_Resume.docx"
              size="lg"
              className="mx-auto"
            >
              <Download size={20} />
              Download Resume
            </Button>

            <p className="mt-4 text-xs text-muted">
              DOCX format · Updated June 2026
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
