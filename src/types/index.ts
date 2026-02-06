// ============================================================
// Domain Types - Portfolio Data Models
// ============================================================

export interface PersonalInfo {
  name: string;
  firstName: string;
  lastName: string;
  title: string;
  email: string;
  phone: string;
  location: string;
  summary: string;
  motto: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  achievements: string[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  description: string;
}

export interface Education {
  institution: string;
  degree?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
