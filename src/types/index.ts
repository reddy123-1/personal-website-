export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
}

export interface Skill {
  name: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface TimelineItem {
  id: string;
  title: string;
  description: string;
  year: string;
}

export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix?: string;
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  github: string;
  linkedin: string;
  description: string;
}

export interface AboutCard {
  id: string;
  title: string;
  description: string;
  icon: string;
}
