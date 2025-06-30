import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code,
  Smartphone,
  Cpu,
} from "lucide-react";
import Image from "next/image";
import Profilepic from "@/assets/profile.png";

const projects = [
  {
    title: "Todo App",
    description: "A simple to-do list with task priorities and deadlines.",
    type: "Web",
    techStack: ["React", "Tailwind", "Firebase"],
    image: Profilepic,
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing skills and projects.",
    type: "Web",
    techStack: ["React", "Tailwind", "Framer Motion"],
    image: "/images/portfolio.png",
    link: "#",
    color: "#8B5CF6",
  },
  {
    title: "Weather App",
    description: "Displays live weather using API and user's location.",
    type: "Mobile",
    techStack: ["Flutter", "OpenWeather API"],
    image: "/images/weather.png",
    link: "#",
    color: "#06B6D4",
  },
  {
    title: "Smart Irrigation",
    description: "Arduino-based irrigation system with moisture sensors.",
    type: "Arduino",
    techStack: ["Arduino", "C++", "Sensors"],
    image: "/images/irrigation.png",
    link: "#",
    color: "#10B981",
  },
  {
    title: "Expense Tracker",
    description: "Track income and expenses with monthly analytics.",
    type: "Web",
    techStack: ["Vue.js", "Tailwind", "Supabase"],
    image: "/images/expense.png",
    link: "#",
    color: "#F59E0B",
  },
  {
    title: "AR Solar System",
    description: "An AR app to visualize planets in 3D space.",
    type: "Mobile",
    techStack: ["Unity", "C#", "Vuforia"],
    image: "/images/ar-solar.png",
    link: "#",
    color: "#EF4444",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration.",
    type: "Web",
    techStack: ["Next.js", "Node.js", "MongoDB"],
    image: "/images/ecommerce.png",
    link: "#",
    color: "#8B5CF6",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices.",
    type: "Arduino",
    techStack: ["React", "Node.js", "Socket.io"],
    image: "/images/iot-dashboard.png",
    link: "#",
    color: "#06B6D4",
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerState, setContainerState] = useState("visible"); // 'visible', 'exiting', 'entering'
  const sectionRef = useRef(null);

  const projectsPerPage = 6;
  const totalPages = Math.ceil(projects.length / projectsPerPage);

  const getCurrentProjects = () => {
    const startIndex = (currentPage - 1) * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const getTypeIcon = (type) => {
    switch (type) {
      case "Web":
        return <Code className="w-3 h-3" />;
      case "Mobile":
        return <Smartphone className="w-3 h-3" />;
      case "Arduino":
        return <Cpu className="w-3 h-3" />;
      default:
        return <Code className="w-3 h-3" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handlePageChange = (page) => {
    if (isAnimating || page === currentPage) return;

    setIsAnimating(true);
    setContainerState("exiting");

    // Exit animation
    setTimeout(() => {
      setCurrentPage(page);
      setContainerState("entering");

      // Enter animation
      setTimeout(() => {
        setContainerState("visible");
        setTimeout(() => {
          setIsAnimating(false);
        }, 600); // Wait for card animations to complete
      }, 100);
    }, 400);
  };

  const getContainerClasses = () => {
    const baseClasses =
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 max-w-6xl mx-auto w-full transition-all duration-300 ease-out";

    switch (containerState) {
      case "exiting":
        return `${baseClasses} opacity-0 transform translate-x-8 scale-95`;
      case "entering":
        return `${baseClasses} opacity-0 transform -translate-x-8 scale-95`;
      case "visible":
      default:
        return `${baseClasses} opacity-100 transform translate-x-0 scale-100`;
    }
  };

  const ProjectCard = ({ project, index }) => (
    <div
      className={`
        group bg-white/95 backdrop-blur rounded-xl overflow-hidden border border-white/20
        transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl
        ${
          containerState === "visible"
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }
      `}
      style={{
        transitionDelay:
          containerState === "visible" ? `${index * 100}ms` : "0ms",
      }}
    >
      <div className="relative h-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity"
          style={{ backgroundColor: project.color }}
        />
        <Image
          src={project.image}
          alt={project.title}
            width={310}
                    height={400}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          onError={(e) => {
            e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="${project.color}20"/><text x="150" y="100" text-anchor="middle" fill="${project.color}" font-size="16" font-family="Arial">${project.title}</text></svg>`;
          }}
        />
        <div
          className="absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1"
          style={{ backgroundColor: `${project.color}CC` }}
        >
          {getTypeIcon(project.type)}
          {project.type}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-bold text-gray-800 mb-2 text-sm leading-tight">
          {project.title}
        </h3>

        <p className="text-gray-600 mb-3 text-xs leading-relaxed line-clamp-2">
          {project.description}
        </p>

        <div className="mb-3">
          <div className="flex flex-wrap gap-1">
            {project.techStack.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-0.5 bg-gray-100 text-gray-700 text-xs rounded-full"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 3 && (
              <span className="px-2 py-0.5 bg-gray-200 text-gray-600 text-xs rounded-full">
                +{project.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        <a
          href={project.link}
          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-white text-xs font-medium transition-all hover:scale-105"
          style={{ backgroundColor: project.color }}
        >
          <span>View</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );

  return (
    <>
      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        .title-animate {
          animation: slideLeft 0.6s ease-out forwards;
        }
        
        .subtitle-animate {
          animation: slideRight 0.6s ease-out 0.1s both;
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className="h-screen flex flex-col px-6 py-8 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 25%, #0a0a1a 50%, #1a0a0a 75%, #0a0a0a 100%)",
        }}
      >
        {/* Compact Header */}
        <div className="text-center mb-12 relative z-10">
          <h2
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 
              tracking-tight transition-opacity duration-300
              ${isVisible ? "title-animate opacity-100" : "opacity-0"}
            `}
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
            }}
          >
            Featured Projects
          </h2>
          <p
            className={`text-gray-300 text-sm max-w-lg mx-auto ${
              isVisible ? "subtitle-animate" : "opacity-0"
            }`}
          >
            Explore my latest work across web development, mobile apps, and
            hardware projects.
          </p>
        </div>

        {/* Projects Grid - Takes remaining space */}
        <div className="flex-1 flex flex-col justify-center">
          <div className={getContainerClasses()}>
            {getCurrentProjects().map((project, index) => (
              <ProjectCard
                key={`${currentPage}-${index}`}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>

        {/* Compact Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1 || isAnimating}
              className={`p-2 rounded-full transition-all ${
                currentPage === 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-cyan-500 hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  disabled={isAnimating}
                  className={`w-8 h-8 rounded-full text-sm font-semibold transition-all ${
                    currentPage === pageNum
                      ? "bg-cyan-500 text-white shadow-lg scale-110"
                      : "bg-white/20 text-white hover:bg-white/30 hover:scale-105"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}

            <button
              onClick={() =>
                handlePageChange(Math.min(totalPages, currentPage + 1))
              }
              disabled={currentPage === totalPages || isAnimating}
              className={`p-2 rounded-full transition-all ${
                currentPage === totalPages
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-cyan-500 hover:scale-110"
              }`}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Compact Page Info */}
        {totalPages > 1 && (
          <div className="text-center mt-2">
            <p className="text-gray-400 text-xs">
              {(currentPage - 1) * projectsPerPage + 1}-
              {Math.min(currentPage * projectsPerPage, projects.length)} of{" "}
              {projects.length}
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectsSection;
