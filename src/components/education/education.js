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
      category: "Achievements",
      achievements: [
        {
          id: 1,
          title: "BISU - Bilar Exemplary Award 2025",
          description:
            "Recognize for outstanding achievements and exemplary performance in the IT/CS Track field.",
          date: "June 2024",
          type: "Award",
          image: "/certificate/cert1.jpg",
          tags: ["Award", "Excellence"],
        },
        {
          id: 2,
          title: "ICBEIST 2025 Research Presentation",
          description:
            "Presented innovative research on mobile app development at international conference",
          date: "March 2025",
          type: "Research",
          image: "/achievements/image.png",
          tags: ["Research", "Conference", "Innovation"],
        },
        {
          id: 3,
          title: "National Research Conference NCCEB 2024",
          description:
            "Won 1st Place (IT/CS Track) in the National Conference on Computing, Education, and Business (NCCEB) 2024",
          date: "May 2024",
          type: "Research",
          image: "/certificate/cert2.jpg",
          tags: ["Research", "Excellence", "Recognition"],
        },
        {
          id: 4,
          title: "Contribution - eBaybaymo Project",
          description:
            "Outstanding contribution as a Fullstack Developer in the eBaybaymo Version 2 project.",
          date: "February 2024",
          type: "Project",
          image: "/certificate/cert3.jpg",
          tags: ["Project", "Contribution", "Innovation"],
        },
        {
          id: 5,
          title: "Participation NCCEB 2024",
          description:
            "Participating in the National Conference on Computing, Education, and Business (NCCEB) 2024",
          date: "May 2024",
          type: "Research",
          image: "/certificate/cert4.jpg",
          tags: ["Research", "Innovation"],
        },
        {
          id: 6,
          title: "Programming Competition",
          description:
            "Recognition for being 1st Place in Programming Contest - Senior Category.",
          date: "September 2023",
          type: "Competition",
          image: "/certificate/cert5.jpg",
          tags: ["Application", "Programming", "Competition"],
        },
        {
          id: 7,
          title: "Flutter Programming-  Mentorship",
          description:
            "Mentoring basic mobile development to  Junior developer student during the Computing Society Workshop in BISU-Bilar.",
          date: "Novemeber 2024",
          type: "Mentorship",
          image: "/certificate/cert6.jpg",
          tags: ["Programming", "Mobile", "Learning"],
        },
        {
          id: 8,
          title: "Seminar -Flutter Mobile Development",
          description:
            "Participating seminar for Mobile Development about the latest trends and best practices particulary in flutter. ",
          date: "March 2025",
          type: "Seminar",
          image: "/certificate/cert7.jpg",
          tags: ["Seminar", "Mobile", "Learnings"],
        },
        {
          id: 9,
          title: "Project Contribution - E Voting System",
          description:
            "Appreciation for contribution as a Programmer in the Development of the E Voting System used during SSG election.",
          date: "April 2025",
          type: "Contribution",
          image: "/certificate/cert9.jpg",
          tags: ["Contribution", "Project", "System"],
        },
        {
          id: 10,
          title: "Recognition - eBaybaymo Project",
          description:
            "Outstanding contribution as a Mobile Developer in the eBaybaymo mobile app",
          date: "April 2025",
          type: "Project",
          image: "/certificate/cert10.jpg",
          tags: ["Project", "Contribution", "Innovation"],
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
    return shouldShowAll ? achievements : achievements.slice(0, 6);
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
      className={`min-h-screen bg-gray-900 px-4 sm:px-6 py-16 relative overflow-hidden transition-all duration-1000 ease-out`}
    >
      {/* Header Section */}
      <div
        ref={setElementRef(0)}
        className={getElementClass(0, "text-center mb-16 relative z-10")}
      >
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight"
          style={{
            textShadow:
              "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
          }}
        >
          Education & Achievements
        </h2>
        <p className="text-lg sm:text-xl text-slate-300 font-medium mb-8 max-w-2xl mx-auto px-4">
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
            className={`px-4 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
              activeTab === "education"
                ? "bg-sky-500 text-white shadow-lg shadow-sky-400/25"
                : "text-slate-300 hover:text-white hover:bg-slate-700/50"
            }`}
          >
            🎓 Education
          </button>
          <button
            onClick={() => handleTabChange("achievements")}
            className={`px-4 sm:px-8 py-3 rounded-xl font-semibold transition-all duration-300 text-sm sm:text-base ${
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
                  "group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/10 transform hover:-translate-y-2"
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
                          className="relative w-16 h-16 sm:w-20 sm:h-20 shadow-lg object-contain transition-all duration-300 group-hover:scale-110"
                        />
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {edu.level}
                        </h3>
                        <div className="w-20 h-1 bg-sky-400 rounded-full"></div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h4 className="text-lg sm:text-xl font-semibold text-sky-400">
                        {edu.degree}
                      </h4>
                      <p className="text-base sm:text-lg text-slate-300">
                        {edu.institution}
                      </p>
                      <p className="text-slate-400 text-sm sm:text-base">
                        {edu.description}
                      </p>
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
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                    {category.category}
                  </h3>
                  <div className="w-16 h-1 bg-sky-400 mx-auto rounded-full"></div>
                </div>

                {/* Horizontal Scrollable Container */}
                <div className="relative">
                  {/* Scroll Buttons */}
                  <div className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10">
                    <button
                      onClick={() => {
                        const container = document.getElementById(
                          `scroll-container-${catIndex}`
                        );
                        container.scrollBy({ left: -300, behavior: "smooth" });
                      }}
                      className="bg-slate-800/90 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
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
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10">
                    <button
                      onClick={() => {
                        const container = document.getElementById(
                          `scroll-container-${catIndex}`
                        );
                        container.scrollBy({ left: 300, behavior: "smooth" });
                      }}
                      className="bg-slate-800/90 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
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
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Scrollable Achievement Cards */}
                  <div
                    id={`scroll-container-${catIndex}`}
                    className="flex overflow-x-auto scrollbar-hide gap-4 sm:gap-6 pb-4 px-2 snap-x snap-mandatory"
                    style={{
                      scrollbarWidth: "none",
                      msOverflowStyle: "none",
                    }}
                  >
                    {category.achievements.map((achievement, index) => (
                      <div
                        key={achievement.id}
                        ref={setElementRef(catIndex * 10 + index + 3)}
                        className={getElementClass(
                          catIndex * 10 + index + 3,
                          "group bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-4 sm:p-6 hover:border-sky-400/50 transition-all duration-500 hover:shadow-2xl hover:shadow-sky-400/10 transform hover:-translate-y-2 cursor-pointer flex-shrink-0 snap-start"
                        )}
                        style={{
                          transitionDelay: `${index * 0.1}s`,
                          width: "300px",
                          minWidth: "300px",
                        }}
                        onClick={() => setSelectedImage(achievement.image)}
                      >
                        {/* Achievement Image */}
                        <div className="relative mb-4 sm:mb-6">
                          <div className="absolute inset-0 bg-sky-400 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                          <img
                            src={achievement.image}
                            alt={achievement.title}
                            className="w-full h-40 sm:h-40 rounded-xl border-2 border-slate-600 group-hover:border-sky-400 object-cover shadow-lg transition-all duration-300 relative z-10 group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-slate-900/80 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-sky-400 font-semibold">
                            {achievement.type}
                          </div>
                        </div>

                        {/* Achievement Content */}
                        <div className="space-y-3 sm:space-y-4">
                          <h4 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-400 transition-colors duration-300 leading-tight line-clamp-2">
                            {achievement.title}
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed line-clamp-3">
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
                            {achievement.tags.slice(0, 3).map((tag, i) => (
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
                    ))}
                  </div>

                  {/* Mobile Scroll Indicator */}
                  <div className="flex justify-center mt-1 sm:hidden">
                    <div className="flex space-x-1">
                      {category.achievements.map((_, index) => (
                        <div
                          key={index}
                          className="w-2 h-2 bg-slate-600 rounded-full"
                        />
                      ))}
                    </div>
                  </div>
                </div>
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
