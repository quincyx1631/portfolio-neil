"use client";

import { useState, useEffect } from "react";
import { skills, skillCategories } from "./data/skills";
import { projects } from "./data/projects";
import { education, socialLinks } from "./data/personal";
import type { SkillCategory } from "./types";

function App() {
  const [activeSection, setActiveSection] = useState("name");
  const [activeSkillCategory, setActiveSkillCategory] =
    useState<SkillCategory>("all");
  const [showAllProjects, setShowAllProjects] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["name", "skills", "projects", "education", "contact"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  const filteredSkills =
    activeSkillCategory === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  const displayedProjects = showAllProjects ? projects : projects.slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <button
              onClick={() => scrollToSection("name")}
              className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
            >
              Neil Bryan Dingcol
            </button>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === item.id
                      ? "text-blue-600"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden">
              <select
                onChange={(e) => scrollToSection(e.target.value)}
                className="text-sm border border-gray-300 rounded px-2 py-1"
                value={activeSection}
              >
                <option value="name">Home</option>
                {navItems.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <section id="name" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Hi, I'm{" "}
                <span className="text-blue-600">Neil Bryan Dingcol</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
                Software Developer
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                I developed responsive, user-friendly web applications with
                modern technologies. Let's build something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
                >
                  Get In Touch
                </button>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors inline-block text-center"
                >
                  📥 Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-blue-100">
                <img
                  src="/profile.JPG"
                  alt="John Doe"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Skills
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with
            </p>
          </div>

          {/* Skill Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveSkillCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeSkillCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 text-center hover:shadow-md transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 mx-auto mb-3">
                  <img
                    src={skill.icon || "../public/vite.svg"}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-800 font-medium">{skill.name}</span>
                <div className="text-xs text-gray-500 mt-1 capitalize">
                  {skill.category}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 relative">
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-medium">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Projects Button */}
          {projects.length > 3 && (
            <div className="text-center mt-12">
              <button
                onClick={() => setShowAllProjects(!showAllProjects)}
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                {showAllProjects
                  ? `Show Less Projects`
                  : `Show All Projects (${projects.length})`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Education
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              My educational background and continuous learning journey
            </p>
          </div>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-sm border border-gray-200"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-xl font-bold text-gray-900">
                    {edu.degree}
                  </h3>
                  <span className="text-blue-600 font-medium">{edu.year}</span>
                </div>
                <h4 className="text-lg text-gray-700 mb-3">{edu.school}</h4>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting
              projects
            </p>
          </div>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-8">
              Feel free to reach out if you're looking for a developer, have a
              question, or just want to connect.
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a
                href="dingcolneil@gmail.com"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                Send Email
              </a>
            </div>
            <div className="flex justify-center space-x-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 transition-colors flex flex-col items-center gap-2"
                  title={link.name}
                >
                  <div className="w-10 h-10 mx-auto mb-2">
                    <img
                      src={link.icon || "../public/vite.svg"}
                      alt={link.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-sm">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2025 Neil Bryan Dingcol. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
