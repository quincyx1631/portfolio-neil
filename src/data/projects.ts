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
    media: [
      {
        type: "image",
        src: "/javaescape-main-menu.jpg",
        alt: "Main menu screenshot",
      },
      {
        type: "image",
        src: "/javaescape-dialog.jpg",
        alt: "dialogue screenshot",
      },  
      {
        type: "image",
        src: "/javaescape-lvl5.jpg",
        alt: "level 5 screenshot",
      },  
      {
        type: "video",
        src: "/JAVAESCAPE.mp4",
        thumbnail: "/javaescape-thumbnail.jpg",
        alt: "video demo of the game",
      },

    ],
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
    media: [
      {
        type: "image",
        src: "/m-homepage.png",
        alt: "Manga reading homepage screenshot",
      },
      {
        type: "image",
        src: "/m-browse.png",
        alt: "Manga browsing page screenshot",
      },
      {
        type: "image",
        src: "/m-read.png",
        alt: "Manga reading page screenshot",
      },
    ],
    featured: true,
  },
  {
    id: "timezone-tracker",
    title: "TZone Tracker",
    description:
      "A full stack web app for remote teams to track each member's timezone, current availability, and best meeting times.",
    technologies: ["React", "Vite", "ExpressJS", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/quincyx1631/TzoneTracker",
    demo: "https://weather-demo.vercel.app",
    media: [
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "E-commerce homepage screenshot",
      },
      {
        type: "image",
        src: "/placeholder.svg",
        alt: "Admin dashboard screenshot",
      },
      {
        type: "video",
        src: "/placeholder.svg",
        thumbnail: "/placeholder.svg",
        alt: "E-commerce platform demo video",
      },
    ],
    featured: false,
  },
  {
    id: "pharmacy-PAF",
    title: "Pharmacy Purchase Approval System (PAF)",
    description:
      "A Desktop Application for Pharmacy Purchase Approval System (PAF) built with C# and SQL Server, designed to streamline purchase requests and approvals in pharmacies.",
    technologies: ["C#", "SQL", "Windows Forms", "PostgreSQL"],
    github: "https://github.com/quincyx1631/TzoneTracker",
    demo: "https://weather-demo.vercel.app",
    media: [
      {
        type: "image",
        src: "/pafpage1.png",
        alt: "homepage screenshot",
      },
      {
        type: "image",
        src: "/pafpage2.png",
        alt: "2nd page screenshot",
      },
    ],
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
