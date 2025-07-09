import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Code,
  Smartphone,
  Cpu,
  X,
} from "lucide-react";

const projects = [
  {
    title: "FOOD AI",
    description:
      "An Image Food Recognition Generating Recipes, Cooking Guidance and Nutritional Insights using Machine Learning",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework"],
    image: "/projects1/project1_1.jpg",
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "FOOD AI Backend API",
    description:
      "Handles image processing, recipe generation, and nutrition analysis for the FOOD AI app.",
    type: "Server",
    techStack: ["Node.js"],
    image: "/projects2/image.png",
    link: "#",
    color: "#FACC15",
  },
  {
    title: "FOOD AI Backend API",
    description:
      "Flask backend that verifies and classifies Filipino dishes using Gemini AI and a TFLite model. Returns predictions from uploaded images for the FOOD AI app.",
    type: "Server",
    techStack: ["Python", "Flask", "TensorFlow Lite", "Google Gemini API"],
    image: "/projects3/image.png",
    link: "#",
    color: "#FACC15",
  },
  {
    title: "Ebaybaymo Mobile App",
    description:
      "A mobile app that processes images of Baybayin script and translates them into readable text using image recognition.",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework"],
    image: "/projects4/image.jpg",
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "Techno Concern",
    description:
      "A mobile app for students to submit tech concerns, with instructors handling admin-assigned issues through real-time updates.",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework", "Supabase"],
    image: "/projects5/image1.jpg",
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "FOOD AI WEB",
    description:
      "An AI-powered web app that helps users find and create recipes from food images. Features include recipe search, snapshot uploads, image-based recipe generation, and a chatbot for cooking assistance.",
    type: "Web",
    techStack: ["Python", "Streamlit", "Google-Gemini"],
    image: "/projects6/Picture2.png",
    link: "#",
    color: "#22C55E",
  },
  {
    title: "BISU-ROTC Attendance",
    description:
      "An attendance tracking app for BISU-ROTC where users fill out their details to generate a unique QR code for attendance. Includes additional features to streamline and secure ROTC attendance management.",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework"],
    image: "/projects7/image.jpg",
    link: "#",
    color: "#3B82F6",
  },
  {
    title: "BISU-ROTC qr-code",
    description:
      "An attendance app for BISU-ROTC where users generate a QR code after submitting their details. ROTC officers scan the code using a separate app to record attendance.",
    type: "Mobile",
    techStack: ["Flutter", "Stacked Framework"],
    image: "/projects8/image.jpg",
    link: "#",
    color: "#3B82F6",
  },
];

const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [containerState, setContainerState] = useState("hidden");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const [hasEntered, setHasEntered] = useState(false);

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

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Enhanced intersection observer for entrance animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Trigger entrance animation sequence
          if (!hasEntered) {
            setHasEntered(true);

            // Start with hidden state
            setContainerState("hidden");

            // After title animation starts, begin container entrance
            setTimeout(() => {
              setContainerState("entering");

              // Complete entrance animation
              setTimeout(() => {
                setContainerState("visible");
              }, 300);
            }, 500);
          }
        } else {
          setIsVisible(false);
          // Reset entrance state when leaving viewport
          if (hasEntered) {
            setContainerState("exiting");
            setTimeout(() => {
              setContainerState("hidden");
              setHasEntered(false);
            }, 100);
          }
        }
      },
      {
        threshold: 0.2,
        rootMargin: "-50px 0px -50px 0px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasEntered]);

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

  const handleProjectClick = (project) => {
    if (isMobile) {
      setSelectedProject(project);
    }
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
  };

  const getContainerClasses = () => {
    const baseClasses =
      "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto w-full transition-all duration-600 ease-out";

    switch (containerState) {
      case "hidden":
        return `${baseClasses} opacity-0 transform translate-y-16 scale-95`;
      case "entering":
        return `${baseClasses} opacity-0 transform translate-y-8 scale-98`;
      case "exiting":
        return `${baseClasses} opacity-0 transform translate-y-16 scale-95`;
      case "visible":
      default:
        return `${baseClasses} opacity-100 transform translate-y-0 scale-100`;
    }
  };

  const getPaginationClasses = () => {
    const baseClasses =
      "flex justify-center items-center gap-4 mb-8 transition-all duration-500 ease-out";

    switch (containerState) {
      case "hidden":
        return `${baseClasses} opacity-0 transform translate-y-8`;
      case "entering":
        return `${baseClasses} opacity-0 transform translate-y-4`;
      case "exiting":
        return `${baseClasses} opacity-0 transform translate-y-8`;
      case "visible":
      default:
        return `${baseClasses} opacity-100 transform translate-y-0`;
    }
  };

  const getProjectStatusClasses = () => {
    const baseClasses = "text-center transition-all duration-500 ease-out";

    switch (containerState) {
      case "hidden":
        return `${baseClasses} opacity-0 transform translate-y-8`;
      case "entering":
        return `${baseClasses} opacity-0 transform translate-y-4`;
      case "exiting":
        return `${baseClasses} opacity-0 transform translate-y-8`;
      case "visible":
      default:
        return `${baseClasses} opacity-100 transform translate-y-0`;
    }
  };

  const ProjectCard = ({ project, index }) => {
    const getCardDelay = () => {
      switch (containerState) {
        case "entering":
          return `${index * 30}ms`;
        case "visible":
          return `${index * 10}ms`;
        default:
          return "0ms";
      }
    };

    return (
      <div
        className={`
          group relative bg-white/95 backdrop-blur rounded-xl overflow-hidden border border-white/20
          transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl cursor-pointer
          aspect-[4/5] flex flex-col
          ${
            containerState === "visible" || containerState === "entering"
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }
        `}
        style={{
          transitionDelay: getCardDelay(),
        }}
        onClick={() => handleProjectClick(project)}
      >
        <div className="relative flex-1 overflow-hidden">
          <div
            className="absolute inset-0 bg-gradient-to-br opacity-10 group-hover:opacity-20 transition-opacity"
            style={{ backgroundColor: project.color }}
          />

          {/* Single Image */}
          <div className="relative w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='${project.color}20'/><text x='150' y='100' text-anchor='middle' fill='${project.color}' font-size='16' font-family='Arial'>${project.title}</text></svg>`;
              }}
            />
          </div>

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

        {/* Desktop Hover Overlay */}
        <div className="absolute inset-0 bg-black/95 backdrop-blur-sm transition-all duration-300 ease-out opacity-0 md:group-hover:opacity-100 translate-y-full md:group-hover:translate-y-0 flex flex-col justify-center items-center p-8 hidden md:flex">
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
              onClick={(e) => e.stopPropagation()}
            >
              <span>View Project</span>
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Mobile Project Modal
  const ProjectModal = ({ project, onClose }) => {
    if (!project) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:hidden">
        <div className="bg-white rounded-xl max-w-sm w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-t-xl"
              onError={(e) => {
                e.target.src = `data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'><rect width='300' height='200' fill='${project.color}20'/><text x='150' y='100' text-anchor='middle' fill='${project.color}' font-size='16' font-family='Arial'>${project.title}</text></svg>`;
              }}
            />
            <button
              onClick={onClose}
              className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full"
            >
              <X className="w-5 h-5" />
            </button>
            <div
              className="absolute top-2 left-2 px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1"
              style={{ backgroundColor: `${project.color}CC` }}
            >
              {getTypeIcon(project.type)}
              {project.type}
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <h3 className="font-bold text-gray-900 text-xl">{project.title}</h3>

            <p className="text-gray-600 text-sm leading-relaxed">
              {project.description}
            </p>

            <div className="space-y-3">
              <p className="text-gray-800 text-sm font-medium">Tech Stack:</p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1.5 bg-gray-100 text-gray-700 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={project.link}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white text-sm font-medium transition-all w-full justify-center mt-6"
              style={{ backgroundColor: project.color }}
            >
              <span>View Project</span>
              <ExternalLink className="w-4 h-4" />
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
        
        @keyframes slideInFromLeft {
          from { 
            opacity: 0; 
            transform: translateX(-50px) translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) translateY(0);
          }
        }
        
        @keyframes slideInFromRight {
          from { 
            opacity: 0; 
            transform: translateX(50px) translateY(20px);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) translateY(0);
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(30px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0);
          }
        }
        
        .title-animate {
          animation: slideInFromLeft 0.8s ease-out forwards;
        }
        
        .subtitle-animate {
          animation: slideInFromRight 0.8s ease-out 0.2s both;
        }
        
        .container-entrance {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .staggered-entrance {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}</style>

      <section
        id="projects"
        ref={sectionRef}
        className="min-h-screen px-6 py-16 relative overflow-hidden bg-gray-900"
      >
        <div className="text-center mb-16 relative z-10">
          <h2
            className={`
              text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 
              tracking-tight transition-all duration-800
              ${
                isVisible
                  ? "title-animate opacity-100"
                  : "opacity-0 transform translate-x-8"
              }
            `}
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
            }}
          >
            Featured Projects
          </h2>
          <p
            className={`text-gray-300 text-lg max-w-2xl mx-auto transition-all duration-800 ${
              isVisible
                ? "subtitle-animate opacity-100"
                : "opacity-0 transform translate-x-8"
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
          <div className={getPaginationClasses()}>
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
          <div className={getProjectStatusClasses()}>
            <p className="text-gray-400 text-sm">
              {(currentPage - 1) * projectsPerPage + 1}-
              {Math.min(currentPage * projectsPerPage, projects.length)} of{" "}
              {projects.length} projects
            </p>
          </div>
        )}

        {/* Mobile Project Modal */}
        <ProjectModal project={selectedProject} onClose={closeProjectModal} />
      </section>
    </>
  );
};

export default ProjectsSection;
