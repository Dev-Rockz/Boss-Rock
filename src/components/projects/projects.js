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

import Project1_1 from "@/assets/project1/project1_1.jpg";
import Project1_2 from "@/assets/project1/project1_2.jpg";
import Project1_3 from "@/assets/project1/project1_3.jpg";

const projects = [
  {
    title: "FOOD AI",
    description:
      "An Image Food Recognition Generating Recipes, Cooking Guidance and Nutritional Insights using Machine Learning",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework"],
    images: [Project1_1, Project1_2, Project1_3],
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "Portfolio Website",
    description: "Personal developer portfolio showcasing skills and projects.",
    type: "Web",
    techStack: ["React", "Tailwind", "Framer Motion"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%238B5CF6'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Portfolio</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%237C3AED'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>About Page</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%236D28D9'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Contact</text></svg>",
    ],
    link: "#",
    color: "#8B5CF6",
  },
  {
    title: "Weather App",
    description: "Displays live weather using API and user's location.",
    type: "Mobile",
    techStack: ["Flutter", "OpenWeather API"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%2306B6D4'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Weather</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%230891B2'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Forecast</text></svg>",
    ],
    link: "#",
    color: "#06B6D4",
  },
  {
    title: "Smart Irrigation",
    description: "Arduino-based irrigation system with moisture sensors.",
    type: "Arduino",
    techStack: ["Arduino", "C++", "Sensors"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%2310B981'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Irrigation</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23059669'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Sensors</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23047857'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Controls</text></svg>",
    ],
    link: "#",
    color: "#10B981",
  },
  {
    title: "Expense Tracker",
    description: "Track income and expenses with monthly analytics.",
    type: "Web",
    techStack: ["Vue.js", "Tailwind", "Supabase"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23F59E0B'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Expense</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23D97706'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Analytics</text></svg>",
    ],
    link: "#",
    color: "#F59E0B",
  },
  {
    title: "AR Solar System",
    description: "An AR app to visualize planets in 3D space.",
    type: "Mobile",
    techStack: ["Unity", "C#", "Vuforia"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23EF4444'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>AR Solar</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23DC2626'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Planets</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%23B91C1C'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>AR View</text></svg>",
    ],
    link: "#",
    color: "#EF4444",
  },
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with payment integration.",
    type: "Web",
    techStack: ["Next.js", "Node.js", "MongoDB"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%238B5CF6'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>E-Commerce</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%237C3AED'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Products</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%236D28D9'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Cart</text></svg>",
    ],
    link: "#",
    color: "#8B5CF6",
  },
  {
    title: "IoT Dashboard",
    description: "Real-time monitoring dashboard for IoT devices.",
    type: "Arduino",
    techStack: ["React", "Node.js", "Socket.io"],
    images: [
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%2306B6D4'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>IoT Dashboard</text></svg>",
      "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='%230891B2'/><text x='150' y='100' text-anchor='middle' fill='white' font-size='16' font-family='Arial'>Devices</text></svg>",
    ],
    link: "#",
    color: "#06B6D4",
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerState, setContainerState] = useState("visible");
  const [imageIndexes, setImageIndexes] = useState({});
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
        return <Code className="w-4 h-4" />;
      case "Mobile":
        return <Smartphone className="w-4 h-4" />;
      case "Arduino":
        return <Cpu className="w-4 h-4" />;
      default:
        return <Code className="w-4 h-4" />;
    }
  };

  // Auto-slide images
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndexes((prev) => {
        const newIndexes = { ...prev };
        getCurrentProjects().forEach((project, projectIndex) => {
          const key = `${currentPage}-${projectIndex}`;
          const currentIndex = newIndexes[key] || 0;
          newIndexes[key] = (currentIndex + 1) % project.images.length;
        });
        return newIndexes;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentPage]);

  // Reset image indexes when page changes
  useEffect(() => {
    setImageIndexes({});
  }, [currentPage]);

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

    setTimeout(() => {
      setCurrentPage(page);
      setContainerState("entering");

      setTimeout(() => {
        setContainerState("visible");
        setTimeout(() => {
          setIsAnimating(false);
        }, 600);
      }, 100);
    }, 400);
  };

  const getContainerClasses = () => {
    const baseClasses =
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto w-full transition-all duration-300 ease-out";

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

  const ProjectCard = ({ project, index }) => {
    const imageKey = `${currentPage}-${index}`;
    const currentImageIndex = imageIndexes[imageKey] || 0;

    return (
      <div
        className={`
          group relative bg-white/95 backdrop-blur rounded-xl overflow-hidden border border-white/20
          transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer
          aspect-[4/5] flex flex-col
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
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ backgroundColor: project.color }}
          />

          {/* Image Carousel */}
          <div className="relative w-full h-full">
            {project.images.map((image, imgIndex) => (
              <Image
                key={imgIndex}
                src={image}
                alt={`${project.title} ${imgIndex + 1}`}
                width={310}
                height={400}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-in-out ${
                  imgIndex === currentImageIndex
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-105"
                }`}
                onError={(e) => {
                  e.target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200"><rect width="300" height="200" fill="${project.color}20"/><text x="150" y="100" text-anchor="middle" fill="${project.color}" font-size="16" font-family="Arial">${project.title}</text></svg>`;
                }}
              />
            ))}
          </div>

          {/* Image indicators */}
          {project.images.length > 1 && (
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1 z-10">
              {project.images.map((_, imgIndex) => (
                <div
                  key={imgIndex}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    imgIndex === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          <div
            className="absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1 z-10"
            style={{ backgroundColor: `${project.color}CC` }}
          >
            {getTypeIcon(project.type)}
            {project.type}
          </div>

          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            <h3 className="font-bold text-white text-lg leading-tight">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-out opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 flex flex-col justify-center items-center p-8">
          <div className="text-center space-y-5 max-w-sm">
            <h3 className="font-bold text-white text-2xl leading-tight">
              {project.title}
            </h3>

            <p className="text-gray-300 text-base leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <p className="text-cyan-300 text-base font-medium">Tech Stack:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-white/20 text-white text-sm rounded-full backdrop-blur-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-base font-medium transition-all hover:scale-105 mt-6"
              style={{ backgroundColor: project.color }}
            >
              <span>View Project</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  };

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
        className="min-h-screen px-6 py-16 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a0a1a 25%, #0a0a1a 50%, #1a0a0a 75%, #0a0a0a 100%)",
        }}
      >
        <div className="text-center mb-16 relative z-10">
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
            className={`text-gray-300 text-lg max-w-2xl mx-auto ${
              isVisible ? "subtitle-animate" : "opacity-0"
            }`}
          >
            Explore my latest work across web development, mobile apps, and
            hardware projects.
          </p>
        </div>

        <div className="mb-16">
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

        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <button
              onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1 || isAnimating}
              className={`p-3 rounded-full transition-all ${
                currentPage === 1
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-cyan-500 hover:scale-110"
              }`}
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {[...Array(totalPages)].map((_, index) => {
              const pageNum = index + 1;
              return (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  disabled={isAnimating}
                  className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
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
              className={`p-3 rounded-full transition-all ${
                currentPage === totalPages
                  ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                  : "bg-white/20 text-white hover:bg-cyan-500 hover:scale-110"
              }`}
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              {(currentPage - 1) * projectsPerPage + 1}-
              {Math.min(currentPage * projectsPerPage, projects.length)} of{" "}
              {projects.length} projects
            </p>
          </div>
        )}
      </section>
    </>
  );
};

export default ProjectsSection;
