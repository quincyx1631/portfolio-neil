import type { Skill } from "../types"

export const skills: Skill[] = [
  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    icon: "/html5.svg",
  },
  {
    name: "CSS3",
    category: "frontend",
    icon: "/css3.svg",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: "/javascript.svg",
  },
  {
    name: "React",
    category: "frontend",
    icon: "/reactjs.svg",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: "/tailwind.svg",
  },
  {
    name: "Next.js",
    category: "frontend",
    icon: "/nextjs.svg",
  },
  {
    name: "Typescript",
    category: "frontend",
    icon: "/typescript.svg",
  },
  {
    name: "ASP.NET Core",
    category: "frontend",
    icon: "/net.svg",
  },

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: "/nodejs.svg",
  },
  {
    name: "Express.js",
    category: "backend",
    icon: "/expressjs.svg",
  },
  {
    name: "REST APIs",
    category: "backend",
    icon: "/restapi.svg",
  },

  // Languages
  {
    name: "C#",
    category: "language",
    icon: "/csharp.svg",
  },
  {
    name: "Javascript",
    category: "language",
    icon: "/javascript.svg",
  },

  // Database
  {
    name: "Firebase",
    category: "database",
    icon: "/firebase.svg",
  },
  {
    name: "PostgreSQL",
    category: "database",
    icon: "/postgresql.svg",
  },
  {
    name: "SQL",
    category: "database",
    icon: "/sql.svg",
  },
  {
    name: "Azure Playfab",
    category: "database",
    icon: "/playfab.jpg",
  },
  
  // Tools
  {
    name: "Git",
    category: "tools",
    icon: "/git.svg",
  },
  {
    name: "Github",
    category: "tools",
    icon: "/github.svg",
  },
  {
    name: "Unity",
    category: "tools",
    icon: "/unity.svg",
  },
  {
    name: "Vercel",
    category: "tools",
    icon: "/vercel.svg",
  },
  {
    name: "Visual Studio Code",
    category: "tools",
    icon: "/visualstudiocode.svg",
  },
  {
    name: "Visual Studio 2022",
    category: "tools",
    icon: "/visualstudio2022.svg",
  },
  {
    name: "Postman",
    category: "tools",
    icon: "/postman.svg",
  },
  {
    name: "WinForms",
    category: "tools",
    icon: "/winforms.png",
  },
]

export const skillCategories = [
  { id: "all" as const, label: "All Skills", count: skills.length },
  { id: "frontend" as const, label: "Frontend", count: skills.filter((s) => s.category === "frontend").length },
  { id: "backend" as const, label: "Backend", count: skills.filter((s) => s.category === "backend").length },
  { id: "language" as const, label: "Languages", count: skills.filter((s) => s.category === "language").length },
  { id: "database" as const, label: "Database", count: skills.filter((s) => s.category === "database").length },
  { id: "tools" as const, label: "Tools", count: skills.filter((s) => s.category === "tools").length },
]
