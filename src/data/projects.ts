import type { Project } from "../types"

export const projects: Project[] = [
  {
    id: "capstone-project",
    title: "JAVAESCAPE: AN INTERACTIVE APPROACH TO PROGRAMMING THROUGH E-LEARNING",
    description:
      "A 3D game-based learning platform built with Unity (C#) and Azure PlayFab, designed to teach Java programming through interactive puzzles, quizzes, and level-based challenges.",
    technologies: ["C#", "Unity", "Azure Playfab", "Blender"],
    github: "https://github.com/quincyx1631/JavaEscape",
    demo: "none",
    featured: true,
  },
  {
    id: "MangaHilaw - Manga Reading Website",
    title: "MangaHilaw - Manga Reading Website",
    description:
      "A full stack manga reading platform built with Next.js, Express.js, Tailwind CSS, and Supabase, featuring user authentication, bookmarking, and custom manga lists via a public REST API.",
    technologies: ["NextJS", "TypeScript", "ExpressJS", "PostgreSQL", "Rest API", "Tailwind CSS"],
    github: "https://github.com/quincyx1631/MangaHilaw",
    demo: "https://manga-hilaw.vercel.app/",
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
