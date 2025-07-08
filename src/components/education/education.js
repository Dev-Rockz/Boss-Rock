import React, { useState, useEffect, useRef } from "react";

const EducationAchievements = () => {
  const [activeTab, setActiveTab] = useState("education");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showAllAchievements, setShowAllAchievements] = useState({});
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [visibleElements, setVisibleElements] = useState(new Set());
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);
  const elementRefs = useRef([]);

  const educationData = [
    {
      id: 1,
      level: "College",
      degree: "Bachelor of Science in Computer Science",
      institution: "Bohol Island State University - Bilar Campus",
      period: "2021 - 2025",
      status: "Graduated",
      gpa: "-",
      highlights: ["Exemplary Award", "Research Excellence"],
      description:
        "Specialized in software engineering, mobile development, and database systems.",
      image: "/logo/logobissu.png",
    },
    {
      id: 2,
      level: "Senior High School",
      degree: "TVL - Electronics",
      institution: "Katipunan National Highschool",
      period: "2017 - 2019",
      status: "Graduated",
      gpa: "90%",
      highlights: ["With Honors"],
      description:
        "Studied practical electronics, circuit design, and hands-on technical skills in electrical systems and devices under the TVL track.",
      image: "/logo/katipunan images.png",
    },
    {
      id: 3,
      level: "Elementary",
      degree: "Elementary Education",
      institution: "Guadalupe, Carmen, Bohol",
      period: "2010 - 2016",
      status: "Graduated",
      gpa: "With Honors",
      highlights: ["Honored Student"],
      description:
        "Built strong foundation in core subjects and developed leadership skills.",
      image: "/logo/pngegg.png",
    },
  ];

  const achievementCategories = [
    {
      category: "Academic Excellence",
      achievements: [
        {
          id: 1,
          title: "ICBEIST 2025 Research Presentation",
          description:
            "Presented innovative research on mobile app development at international conference",
          date: "March 2025",
          type: "Research",
          image: "/achievements/image.png",
          tags: ["Research", "Conference", "Innovation"],
        },
        {
          id: 2,
          title: "Top 5 Capstone Project Awardee",
          description:
            "Developed award-winning mobile application for healthcare management",
          date: "December 2024",
          type: "Project",
          image:
            "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=CAPSTONE",
          tags: ["Mobile Dev", "Healthcare", "Innovation"],
        },
      ],
    },
    {
      category: "Technical Competitions",
      achievements: [
        {
          id: 3,
          title: "Best Mobile App UI - CS Week",
          description:
            "Created outstanding user interface design for university competition",
          date: "November 2023",
          type: "Design",
          image: "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=UI/UX",
          tags: ["UI/UX", "Design", "Mobile"],
        },
        {
          id: 4,
          title: "Programming Competition Winner",
          description: "First place in algorithmic programming challenge",
          date: "September 2023",
          type: "Competition",
          image: "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=CODE",
          tags: ["Algorithms", "Programming", "Competition"],
        },
        {
          id: 5,
          title: "Hackathon 2nd Place",
          description:
            "Built innovative solution for local business automation in 48 hours",
          date: "May 2023",
          type: "Hackathon",
          image: "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=HACK",
          tags: ["Hackathon", "Innovation", "Teamwork"],
        },
      ],
    },
    {
      category: "Leadership & Recognition",
      achievements: [
        {
          id: 6,
          title: "Student Developer Ambassador",
          description:
            "Represented university in national tech conferences and workshops",
          date: "2023 - 2024",
          type: "Leadership",
          image: "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=LEAD",
          tags: ["Leadership", "Community", "Tech"],
        },
        {
          id: 7,
          title: "Open Source Contributor",
          description:
            "Active contributor to multiple open-source projects on GitHub",
          date: "2022 - Present",
          type: "Community",
          image: "https://via.placeholder.com/120x120/0ea5e9/ffffff?text=OSS",
          tags: ["Open Source", "GitHub", "Community"],
        },
      ],
    },
  ];

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === sectionRef.current) {
            setIsInView(entry.isIntersecting);
          } else {
            const elementIndex = elementRefs.current.indexOf(entry.target);
            if (elementIndex !== -1) {
              setVisibleElements((prev) => {
                const newSet = new Set(prev);
                if (entry.isIntersecting) {
                  newSet.add(elementIndex);
                } else {
                  newSet.delete(elementIndex);
                }
                return newSet;
              });
            }
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    // Observe main section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Observe all elements
    elementRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      observer.disconnect();
    };
  }, [activeTab]);

  const handleTabChange = (newTab) => {
    if (newTab === activeTab) return;

    setIsTransitioning(true);
    setVisibleElements(new Set()); // Reset visible elements

    setTimeout(() => {
      setActiveTab(newTab);
      setIsTransitioning(false);
    }, 300);
  };

  const toggleShowAll = (categoryIndex) => {
    setShowAllAchievements((prev) => ({
      ...prev,
      [categoryIndex]: !prev[categoryIndex],
    }));
  };

  const getVisibleAchievements = (achievements, categoryIndex) => {
    const shouldShowAll = showAllAchievements[categoryIndex];
    return shouldShowAll ? achievements : achievements.slice(0, 3);
  };

  const setElementRef = (index) => (el) => {
    elementRefs.current[index] = el;
  };

  const getElementClass = (index, baseClass = "") => {
    const isVisible = visibleElements.has(index);
    return `${baseClass} transition-all duration-700 ease-out ${
      isVisible
        ? "opacity-100 translate-y-0 scale-100"
        : "opacity-0 translate-y-8 scale-95"
    }`;
  };

  return (
    <section
      ref={sectionRef}
      id="education"
      className={`min-h-screen bg-gray-900 px-6 py-16 relative overflow-hidden transition-all duration-1000 ease-out `}
    >
      {/* Header Section */}
      <div
        ref={setElementRef(0)}
        className={getElementClass(0, "text-center mb-16 relative z-10")}
      >
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow:
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
          }}
        >
          Education & Achievements
        </h2>
        <p className="text-xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto">
          My academic journey and professional accomplishments that shaped my
          expertise in technology and innovation
        </p>
        <div className="w-24 h-1 bg-sky-400 mx-auto rounded-full mb-8"></div>
      </div>

      {/* Tab Navigation */}
      <div
        ref={setElementRef(1)}
        className={getElementClass(
          1,
          "flex justify-center mb-12 relative z-10"
        )}
      >
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-2 inline-flex">
          <button
            onClick={() => handleTabChange("education")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "education"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-400/25"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            🎓 Education
          </button>
          <button
            onClick={() => handleTabChange("achievements")}
            className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
              activeTab === "achievements"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-400/25"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            🏆 Achievements
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Education Tab Content */}
        {activeTab === "education" && (
          <div
            className={`space-y-16 transition-all duration-600 ease-in-out ${
              isTransitioning
                ? "opacity-0 transform translate-y-8 scale-95"
                : "opacity-100 transform translate-y-0 scale-100"
            }`}
          >
            {educationData.map((edu, index) => (
              <div
                key={edu.id}
                ref={setElementRef(index + 2)}
                className={getElementClass(
                  index + 2,
                  "group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/10 transform hover:-translate-y-2"
                )}
                style={{
                  transitionDelay: `${index * 0.2}s`,
                }}
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left Section - Main Info */}
                  <div className="flex-1">
                    <div className="flex items-center mb-6">
                      <div className="relative mr-6">
                        <div className="absolute inset-0 bg-sky-400/30 rounded-full blur-md"></div>
                        <img
                          src={edu.image}
                          alt={edu.level}
                          className="relative w-20 h-20 shadow-lg object-contain transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-3xl font-bold text-white mb-2">
                          {edu.level}
                        </h3>
                        <div className="w-20 h-1 bg-sky-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-sky-400">
                        {edu.degree}
                      </h4>
                      <p className="text-lg text-slate-300">
                        {edu.institution}
                      </p>
                      <p className="text-slate-400">{edu.description}</p>
                    </div>
                  </div>

                  {/* Right Section - Details */}
                  <div className="lg:w-80">
                    <div className="space-y-6">
                      {/* Period & Status */}
                      <div className="bg-slate-900/50 rounded-xl p-4 border border-slate-700">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-400">Period:</span>
                          <span className="text-sky-400 font-semibold">
                            {edu.period}
                          </span>
                        </div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-slate-400">Status:</span>
                          <span className="text-green-400 font-semibold">
                            {edu.status}
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-slate-400">GPA:</span>
                          <span className="text-sky-400 font-semibold">
                            {edu.gpa}
                          </span>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div>
                        <h5 className="text-white font-semibold mb-3">
                          Highlights:
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {edu.highlights.map((highlight, i) => (
                            <span
                              key={i}
                              className="bg-sky-400/20 text-white px-3 py-1 rounded-full text-sm border border-sky-400/30"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Achievements Tab Content */}
        {activeTab === "achievements" && (
          <div
            className={`space-y-12 transition-all duration-600 ease-in-out ${
              isTransitioning
                ? "opacity-0 transform translate-y-8 scale-95"
                : "opacity-100 transform translate-y-0 scale-100"
            }`}
          >
            {achievementCategories.map((category, catIndex) => (
              <div key={catIndex} className="space-y-6">
                <div
                  ref={setElementRef(catIndex * 10 + 2)}
                  className={getElementClass(catIndex * 10 + 2, "text-center")}
                >
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getVisibleAchievements(category.achievements, catIndex).map(
                    (achievement, index) => (
                      <div
                        key={achievement.id}
                        ref={setElementRef(catIndex * 10 + index + 3)}
                        className={getElementClass(
                          catIndex * 10 + index + 3,
                          "group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/10 transform hover:-translate-y-2 cursor-pointer"
                        )}
                        style={{
                          transitionDelay: `${index * 0.1}s`,
                        }}
                        onClick={() => setSelectedImage(achievement.image)}
                      >
                        {/* Achievement Image */}
                        <div className="relative mb-6">
                          <div className="absolute inset-0 bg-sky-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-32 rounded-xl border-2 border-slate-600 group-hover:border-sky-400 object-cover shadow-lg transition-all duration-300 relative z-10 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-sky-400 font-semibold">
                            {achievement.type}
                          </div>
                        </div>

                        {/* Achievement Content */}
                        <div className="space-y-4">
                          <h4 className="text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300">
                            {achievement.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {achievement.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sky-400 font-semibold text-sm">
                              {achievement.date}
                            </span>
                            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                              <svg
                                className="w-5 h-5 text-sky-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M9 5l7 7-7 7"
                                />
                              </svg>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {achievement.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="bg-slate-900/50 text-slate-300 px-2 py-1 rounded-md text-xs border border-slate-600 group-hover:border-sky-400/50 transition-colors duration-300"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>

                {/* Show More/Less Button */}
                {category.achievements.length > 3 && (
                  <div
                    ref={setElementRef(catIndex * 10 + 8)}
                    className={getElementClass(
                      catIndex * 10 + 8,
                      "text-center mt-8"
                    )}
                  >
                    <button
                      onClick={() => toggleShowAll(catIndex)}
                      className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-sky-400/25 transform hover:scale-105"
                    >
                      {showAllAchievements[catIndex]
                        ? "Show Less"
                        : `Show More (${
                            category.achievements.length - 3
                          } more)`}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-slate-800 rounded-2xl border border-slate-700 overflow-hidden animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 bg-slate-900/80 hover:bg-slate-900 text-white w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <img
              src={selectedImage}
              alt="Achievement"
              className="w-full h-full object-contain max-h-[90vh]"
            />
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        /* Smooth transition for tab content */
        .transition-all {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .duration-600 {
          transition-duration: 600ms;
        }

        .duration-700 {
          transition-duration: 700ms;
        }

        .ease-in-out {
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }

        .ease-out {
          transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
        }
      `}</style>
    </section>
  );
};

export default EducationAchievements;
