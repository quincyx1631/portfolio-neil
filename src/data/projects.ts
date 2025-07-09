import type { Project } from "../types"

export const projects: Project[] = [
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application built with React, Node.js, and MongoDB. Features include user authentication, payment processing, admin dashboard, inventory management, and real-time order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT", "Express.js"],
    github: "https://github.com/johndoe/ecommerce-platform",
    demo: "https://ecommerce-demo.vercel.app",
    featured: true,
  },
  {
    id: "task-management-app",
    title: "Task Management App",
    description:
      "A collaborative task management tool with real-time updates, drag-and-drop functionality, team collaboration features, and advanced filtering options.",
    technologies: ["React", "TypeScript", "Socket.io", "PostgreSQL", "Node.js"],
    github: "https://github.com/johndoe/task-manager",
    demo: "https://taskmanager-demo.vercel.app",
    featured: true,
  },
  {
    id: "weather-dashboard",
    title: "Weather Dashboard",
    description:
      "A responsive weather application that displays current weather and forecasts for multiple cities with interactive charts, maps, and weather alerts.",
    technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/johndoe/weather-dashboard",
    demo: "https://weather-demo.vercel.app",
    featured: false,
  },
  {
    id: "blog-cms",
    title: "Blog CMS",
    description:
      "A content management system for bloggers with markdown support, SEO optimization, comment system, and analytics dashboard.",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "NextAuth"],
    github: "https://github.com/johndoe/blog-cms",
    demo: "https://blog-cms-demo.vercel.app",
    featured: false,
  },
  {
    id: "crypto-tracker",
    title: "Cryptocurrency Tracker",
    description:
      "Real-time cryptocurrency price tracking application with portfolio management, price alerts, and detailed market analysis.",
    technologies: ["React", "Redux", "CoinGecko API", "Chart.js", "Firebase"],
    github: "https://github.com/johndoe/crypto-tracker",
    demo: "https://crypto-tracker-demo.vercel.app",
    featured: false,
  },
  {
    id: "social-media-app",
    title: "Social Media App",
    description:
      "A social networking platform with real-time messaging, post sharing, user profiles, and advanced privacy controls.",
    technologies: ["React Native", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
    github: "https://github.com/johndoe/social-app",
    demo: "https://social-demo.vercel.app",
    featured: true,
  },
]

export const getFeaturedProjects = (): Project[] => {
  return projects.filter((project) => project.featured)
}

export const getProjectsByTechnology = (technology: string): Project[] => {
  return projects.filter((project) =>
    project.technologies.some((tech) => tech.toLowerCase().includes(technology.toLowerCase())),
  )
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find((project) => project.id === id)
}
