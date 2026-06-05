import type { Stat, AboutCard } from "@/types";

export const stats: Stat[] = [
  { id: "projects", label: "Projects Built", value: 7, suffix: "+" },
  { id: "technologies", label: "Technologies Learned", value: 15, suffix: "+" },
  { id: "hours", label: "Coding Hours", value: 500, suffix: "+" },
  { id: "courses", label: "Courses Completed", value: 8, suffix: "+" },
];

export const aboutCards: AboutCard[] = [
  {
    id: "student",
    title: "CS Student",
    description:
      "Second semester Computer Science student building a strong foundation in algorithms, data structures, and software engineering.",
    icon: "GraduationCap",
  },
  {
    id: "passion",
    title: "Passionate Developer",
    description:
      "Passionate about software development with a focus on writing clean, efficient, and maintainable code.",
    icon: "Code2",
  },
  {
    id: "interests",
    title: "Tech Interests",
    description:
      "Interested in Python, databases, web development, and cloud computing — always exploring new technologies.",
    icon: "Sparkles",
  },
  {
    id: "learning",
    title: "Continuous Learner",
    description:
      "Always learning new technologies, frameworks, and best practices to stay at the forefront of software development.",
    icon: "BookOpen",
  },
];
