export interface Skill {
  name: string
  category: "frontend" | "backend" | "language" | "database" | "tools"
  icon: string
}

export interface Project {
  id: string
  title: string
  description: string
  technologies: string[]
  github: string
  demo: string
  image?: string
  featured?: boolean
}

export interface Education {
  degree: string
  school: string
  year: string
  description: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export type SkillCategory = "all" | "frontend" | "backend" | "language" | "database" | "tools"
