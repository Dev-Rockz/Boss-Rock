import React, { useState, useEffect, useRef } from "react";

const experienceData = [
  {
    company: "Blenditoro Corp.",
    position: "Backend Intern",
    duration: "June 2024 - August 2024",
    description:
      "Worked on the backend development of web applications using Laravel, integrating Stripe for secure payment processing.",
    achievements: [
      "Implemented Stripe payment gateway for seamless transactions",
      "Optimized backend APIs for better performance",
      "Created database management and schema design",
    ],
    technologies: ["Laravel", "PHP", "Stripe", "MySQL"],
  },
  {
    company: "DLSU Manila - SDRC",
    position: "Research Developer",
    duration: "August 2024 - March 2025",
    description:
      "Contributed to research-driven systems, focusing on data collection tools and improving backend reliability.",
    achievements: [
      "Developed data logging modules for survey systems",
      "Improved form validation and error handling mechanisms",
      "Worked on REST API integration and deployment",
    ],
    technologies: ["Flutter", "Firebase", "Node.js"],
  },
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contentTransition, setContentTransition] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer for entrance animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
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
  }, []);

  // Handle content transition when switching between experiences
  const handleSelection = (idx) => {
    if (idx !== selected) {
      setContentTransition(true);
      setTimeout(() => {
        setSelected(idx);
        setContentTransition(false);
      }, 150);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="experience"
      className={`min-h-screen bg-gray-900 text-white p-8 md:p-12 relative overflow-hidden transition-all duration-1000 `}
    >
      <div className="relative z-10">
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
            Experiences
          </h2>
          <p
            className={`text-gray-300 text-lg max-w-2xl mx-auto ${
              isVisible ? "subtitle-animate" : "opacity-0"
            }`}
          >
            Professional Journey & Growth
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-7xl mx-auto">
          {/* Sidebar */}
          <div
            className={`flex flex-col gap-3 w-full lg:w-1/3 transition-all duration-800 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            {experienceData.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelection(idx)}
                className={`group relative text-left p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                  selected === idx
                    ? "border-cyan-400 bg-cyan-400 bg-opacity-10 shadow-lg shadow-cyan-400/20"
                    : "border-slate-700 hover:border-cyan-400/50 hover:bg-cyan-400/5 bg-slate-800/50"
                }`}
                style={{
                  transitionDelay: `${600 + idx * 100}ms`,
                }}
              >
                {/* Glowing border effect */}
                {selected === idx && (
                  <div className="absolute inset-0 border border-cyan-400 opacity-50 animate-pulse rounded-lg"></div>
                )}

                <div className="relative z-10">
                  <p className="font-semibold text-white mb-1 transition-colors duration-300">
                    {item.company}
                  </p>
                  <span className="text-sm text-slate-400 transition-colors duration-300">
                    {item.duration}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Main content */}
          <div
            className={`flex-1 relative transition-all duration-800 delay-600 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-8"
            }`}
          >
            <div
              key={selected}
              className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-lg border border-slate-700 relative shadow-xl transition-all duration-300 ${
                contentTransition
                  ? "opacity-0 translate-y-4 scale-95"
                  : "opacity-100 translate-y-0 scale-100"
              }`}
              style={{
                animation: contentTransition
                  ? "none"
                  : "slideInContent 0.5s ease-out",
              }}
            >
              {/* Glowing accents - Updated to blue theme */}
              <div className="absolute -top-px -left-px w-20 h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-tl-lg"></div>
              <div className="absolute -bottom-px -right-px w-20 h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-br-lg"></div>

              <div className="space-y-6 relative z-10">
                <div
                  className={`transition-all duration-400 ${
                    contentTransition
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h3 className="text-2xl text-white font-bold mb-2">
                    {experienceData[selected].position}
                  </h3>
                  <div className="flex items-center gap-3 text-sm text-slate-400 mb-4">
                    <span className="text-cyan-400 font-semibold">
                      {experienceData[selected].company}
                    </span>
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="px-3 py-1 bg-slate-700 rounded-full text-xs">
                      {experienceData[selected].duration}
                    </span>
                  </div>
                </div>

                <p
                  className={`text-slate-300 leading-relaxed transition-all duration-400 delay-100 ${
                    contentTransition
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  {experienceData[selected].description}
                </p>

                <div
                  className={`transition-all duration-400 delay-200 ${
                    contentTransition
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h4 className="text-cyan-400 font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Key Achievements
                  </h4>
                  <div className="space-y-2">
                    {experienceData[selected].achievements.map((point, i) => (
                      <div
                        key={i}
                        className={`flex items-start gap-3 transition-all duration-300 ${
                          contentTransition
                            ? "opacity-0 translate-x-2"
                            : "opacity-100 translate-x-0"
                        }`}
                        style={{
                          transitionDelay: contentTransition
                            ? "0ms"
                            : `${300 + i * 100}ms`,
                        }}
                      >
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-slate-300 text-sm">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={`transition-all duration-400 delay-300 ${
                    contentTransition
                      ? "opacity-0 translate-y-2"
                      : "opacity-100 translate-y-0"
                  }`}
                >
                  <h4 className="text-cyan-400 font-semibold text-sm mb-3 flex items-center gap-2">
                    <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                    Technologies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {experienceData[selected].technologies.map((tech, i) => (
                      <span
                        key={i}
                        className={`bg-slate-700/50 text-cyan-400 px-3 py-1 text-sm rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
                          contentTransition
                            ? "opacity-0 scale-75"
                            : "opacity-100 scale-100"
                        }`}
                        style={{
                          transitionDelay: contentTransition
                            ? "0ms"
                            : `${400 + i * 100}ms`,
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInContent {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
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

        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-slideInFromLeft {
          animation: slideInFromLeft 0.8s ease-out;
        }

        .animate-slideInFromRight {
          animation: slideInFromRight 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ExperienceSection;
