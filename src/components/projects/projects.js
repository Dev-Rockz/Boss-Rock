import React, { useState } from "react";
import { Code, Smartphone, Cpu } from "lucide-react";

const softwareProjects = [
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

const editProjects = [
  {
    title: "Project 1",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#EC4899",
    gradient: "from-pink-500 to-purple-600",
  },
  {
    title: "Project 2",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#8B5CF6",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Project 3",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#3B82F6",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    title: "Project 4",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#10B981",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    title: "Project 5",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#F59E0B",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Project 6",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#EF4444",
    gradient: "from-red-500 to-pink-600",
  },
  {
    title: "Project 7",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Project 8",
    type: "Edit",
    link: "https://drive.google.com/drive/u/2/folders/10tyYlog-ff1dz3jFCKwhdlRkanZ8f8_A",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Project 9",
    type: "Edit",
    link: "https://drive.google.com/file/d/1pp2kJvkLHB6XwrCsgltlSmOg1ULuDcH9/view?usp=drive_link",
    color: "#06B6D4",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Project 10",
    type: "Edit",
    link: "https://drive.google.com/file/d/1ed5f4mdnSL9tV_i9mrGAjiwwJr9KDMIc/view?usp=drive_link",
    color: "#EF4444",
    gradient: "from-red-500 to-pink-600",
  },
];

const ProjectsSection = () => {
  const [activeTab, setActiveTab] = useState("edits");

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

  const ProjectCard = ({ project }) => {
    const isEditProject = !project.image;

    return (
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white/95 backdrop-blur rounded-xl overflow-hidden border border-white/20 aspect-[4/5] flex flex-col cursor-pointer hover:scale-105 transition-transform duration-300"
      >
        {isEditProject ? (
          // Edit Project Card Design
          <div className="relative flex-1 overflow-hidden">
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
            />

            {/* Decorative elements */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
            </div>

            <div className="relative h-full flex flex-col items-center justify-center p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                    />
                  </svg>
                </div>
              </div>

              <h3 className="font-bold text-white text-3xl mb-8">
                {project.title}
              </h3>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-full font-semibold text-sm group-hover:bg-white/90 transition-colors">
                  Click to See Project
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </div>
            </div>

            <div className="absolute top-2 right-2 px-2 py-1 rounded-full text-white text-xs font-medium flex items-center gap-1 z-10 bg-black/30 backdrop-blur-sm">
              {getTypeIcon(project.type)}
              {project.type}
            </div>
          </div>
        ) : (
          // Software Project Card Design (original)
          <div className="relative flex-1 overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-br opacity-10"
              style={{ backgroundColor: project.color }}
            />

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
        )}
      </a>
    );
  };

  const currentProjects =
    activeTab === "software" ? softwareProjects : editProjects;

  return (
    <section
      id="projects"
      className="min-h-screen px-6 py-16 relative overflow-hidden bg-gray-900"
    >
      <div className="text-center mb-16 relative z-10">
        <h2
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow:
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
          }}
        >
          Featured Projects
        </h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
          Explore my latest work across web development, mobile apps, and
          creative edits.
        </p>

        {/* Tab Navigation */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={() => setActiveTab("edits")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "edits"
                ? "bg-pink-500 text-white shadow-lg"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            Edit Projects
          </button>
          <button
            onClick={() => setActiveTab("software")}
            className={`px-6 py-3 rounded-full font-semibold transition-all ${
              activeTab === "software"
                ? "bg-cyan-500 text-white shadow-lg"
                : "bg-white/20 text-white hover:bg-white/30"
            }`}
          >
            Software Projects
          </button>
        </div>
      </div>

      <div className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto w-full">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-400 text-sm">
          {currentProjects.length} projects
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;
