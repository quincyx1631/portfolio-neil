import { useState, useEffect } from "react";
import { skills, skillCategories } from "./data/skills";
import { projects } from "./data/projects";
import { education, socialLinks } from "./data/personal";
import type { SkillCategory } from "./types";
import { MediaGallery } from "./components/media";

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
      const scrollPosition = window.scrollY + 120;
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
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-blue-100 z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <button
              onClick={() => scrollToSection("name")}
              className="text-2xl font-extrabold tracking-tight text-blue-700 hover:text-blue-900 transition-colors"
            >
              Neil Bryan Dingcol
            </button>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-base font-semibold transition-colors px-2 py-1 rounded-lg hover:bg-blue-50 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
                    activeSection === item.id
                      ? "text-blue-700 bg-blue-100"
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
                className="text-base border border-blue-200 rounded-lg px-3 py-2 bg-white shadow-sm focus:ring-2 focus:ring-blue-200"
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

      {/* Hero Section */}
      <section
        id="name"
        className="pt-28 min-h-[80vh] flex items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-60 absolute -top-32 -left-32" />
          <div className="w-72 h-72 bg-blue-200 rounded-full blur-2xl opacity-40 absolute bottom-0 right-0" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-tight">
                Hi, I'm{" "}
                <span className="text-blue-700">Neil Bryan Dingcol</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl text-blue-600 font-semibold mb-6">
                Web Developer
              </h2>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed max-w-xl">
                I build responsive, user-friendly web applications with modern
                technologies. Let's create something amazing together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-800 transition-colors"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="border-2 border-blue-700 text-blue-700 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get In Touch
                </button>
                <a
                  href="/Resume.pdf"
                  download="Resume.pdf"
                  className="bg-gradient-to-r from-blue-600 to-blue-400 text-white px-8 py-3 rounded-xl font-semibold shadow hover:from-blue-700 hover:to-blue-500 transition-colors inline-block text-center"
                >
                  📥 Resume
                </a>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden border-8 border-blue-200 shadow-lg bg-white">
                <img
                  src="/profile.JPG"
                  alt="Neil Bryan Dingcol"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
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
                className={`px-5 py-2 rounded-full text-base font-semibold transition-colors shadow-sm border-2 ${
                  activeSkillCategory === category.id
                    ? "bg-blue-700 text-white border-blue-700"
                    : "bg-white text-blue-700 border-blue-200 hover:bg-blue-50"
                }`}
              >
                {category.label}{" "}
                <span className="font-normal">({category.count})</span>
              </button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredSkills.map((skill, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl shadow-md border border-blue-100 text-center hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center">
                  <img
                    src={skill.icon || "../public/vite.svg"}
                    alt={skill.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-gray-900 font-semibold text-lg">
                  {skill.name}
                </span>
                <div className="text-xs text-blue-600 mt-1 capitalize font-medium">
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
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
              Projects
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A selection of my recent work and personal projects
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {displayedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col h-full"
              >
                {/* Media Gallery */}
                <div className="relative">
                  <MediaGallery
                    media={project.media}
                    projectTitle={project.title}
                  />
                  {project.featured && (
                    <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded text-xs font-bold shadow">
                      Featured
                    </div>
                  )}
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-base leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 hover:text-blue-900 font-semibold text-sm underline"
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
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-800 transition-colors"
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
      <section id="education" className="py-20 bg-white/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
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
                className="bg-white p-8 rounded-2xl shadow-md border border-blue-100"
              >
                <h3 className="text-2xl font-bold text-gray-900">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-blue-700 mb-2">{edu.school}</h4>
                <span className="text-blue-600 font-semibold text-lg block mb-2">
                  {edu.year}
                </span>
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
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 tracking-tight">
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
                href="mailto:dingcolneil@gmail.com"
                className="bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold shadow hover:bg-blue-800 transition-colors"
              >
                Send Email
              </a>
            </div>
            <div className="flex justify-center space-x-8 flex-wrap gap-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-700 transition-colors flex flex-col items-center gap-2"
                  title={link.name}
                >
                  <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-blue-50 flex items-center justify-center shadow">
                    <img
                      src={link.icon || "../public/vite.svg"}
                      alt={link.name}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                  <span className="text-base font-semibold">{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8 mt-10 shadow-inner">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold">
            &copy; 2025 Neil Bryan Dingcol. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
