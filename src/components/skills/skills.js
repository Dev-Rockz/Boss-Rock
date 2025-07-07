import React, { useState, useEffect, useRef } from "react";

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend");
  const [animationKey, setAnimationKey] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  const skillsData = {
    Frontend: [
      { name: "Flutter", level: 90, color: "#02569B" },
      { name: "React", level: 75, color: "#61DAFB" },
      { name: "React Native", level: 75, color: "#61DAFB" },
      { name: "HTML/CSS", level: 85, color: "#E34F26" },
      { name: "JavaScript", level: 80, color: "#F7DF1E" },
      { name: "TypeScript", level: 75, color: "#3178C6" },
    ],
    Backend: [
      { name: "Node.js", level: 90, color: "#339933" },
      { name: "Python", level: 70, color: "#3776AB" },
      { name: "FastAPI", level: 70, color: "#009688" },
      { name: "PHP Laravel", level: 70, color: "#FF2D20" },
    ],
    Database: [
      { name: "MySQL", level: 90, color: "#4479A1" },
      { name: "Supabase", level: 70, color: "#3ECF8E" },
      { name: "Firebase", level: 75, color: "#FFCA28" },
      { name: "SQLite", level: 80, color: "#003B57" },
    ],
    Design: [
      { name: "Figma", level: 85, color: "#F24E1E" },
      { name: "Adobe XD", level: 75, color: "#FF61F6" },
      { name: "Photoshop", level: 70, color: "#31A8FF" },
      { name: "Canva", level: 80, color: "#00C4CC" },
    ],
    Hardware: [
      { name: "Arduino", level: 85, color: "#00979D" },
      { name: "PCB Design", level: 75, color: "#4CAF50" },
      { name: "Electronics", level: 80, color: "#607D8B" },
    ],
  };

  const categories = Object.keys(skillsData);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) {
          setVisibleCards([]);
          const currentSkills = skillsData[activeCategory];
          currentSkills.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards((prev) => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.3, rootMargin: "-50px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [activeCategory]);

  useEffect(() => {
    setAnimationKey((prev) => prev + 1);
    if (isVisible) {
      setVisibleCards([]);
      setTimeout(() => {
        const currentSkills = skillsData[activeCategory];
        currentSkills.forEach((_, index) => {
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, index]);
          }, index * 60);
        });
      }, 150);
    }
  }, [activeCategory, isVisible]);

  const ProgressBar = ({ skill, index }) => {
    const [animated, setAnimated] = useState(false);
    const isCardVisible = visibleCards.includes(index);

    useEffect(() => {
      if (isCardVisible) {
        const timer = setTimeout(() => setAnimated(true), 200);
        return () => clearTimeout(timer);
      } else {
        setAnimated(false);
      }
    }, [isCardVisible]);

    return (
      <div
        className={`
          bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-white/20
          transition-all duration-500 cubic-bezier(0.25, 0.46, 0.45, 0.94)
          hover:-translate-y-2 hover:scale-105 hover:shadow-2xl
          ${
            isCardVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-95"
          }
        `}
        style={{
          boxShadow: isCardVisible
            ? "0 8px 32px rgba(0,0,0,0.1)"
            : "0 4px 15px rgba(0,0,0,0.05)",
        }}
      >
        <div className="flex justify-between items-center mb-3">
          <span className="text-lg font-semibold text-gray-800">
            {skill.name}
          </span>
          <span className="text-base font-bold text-gray-600">
            {skill.level}%
          </span>
        </div>

        <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-1000 ease-in-out"
            style={{
              width: animated ? `${skill.level}%` : "0%",
              backgroundColor: skill.color,
              boxShadow: `0 0 10px ${skill.color}40`,
            }}
          />
        </div>
      </div>
    );
  };

  const renderContent = () => {
    const skills = skillsData[activeCategory];

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 p-4 max-w-6xl mx-auto">
        {skills.map((skill, index) => (
          <ProgressBar
            key={`${skill.name}-${animationKey}`}
            skill={skill}
            index={index}
          />
        ))}
      </div>
    );
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`min-h-screen bg-gray-900 relative overflow-hidden px-8 py-16 transition-all duration-1000`}
      style={{
        scrollMarginTop: "100px",
      }}
    >
      {/* Content */}
      <div className="relative z-10">
        <div className="text-center mb-12">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight ${
              isVisible ? "title-animate opacity-100" : "opacity-0"
            }`}
            style={{
              textShadow:
                "0 0 20px rgba(255,255,255,0.5), 0 0 40px rgba(100,255,218,0.3)",
            }}
          >
            Technical Skills
          </h2>
          <p
            className={`text-xl text-gray-300 max-w-2xl mx-auto ${
              isVisible ? "subtitle-animate opacity-100" : "opacity-0"
            }`}
          >
            Here are the technologies and tools I use across different areas of
            development.
          </p>
        </div>

        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 ${
            isVisible ? "buttons-animate opacity-100" : "opacity-0"
          }`}
        >
          {categories.map((cat, index) => (
            <button
              key={cat}
              className={`
                px-6 py-3 rounded-full text-base font-semibold backdrop-blur-md
                border-2 transition-all duration-300 ease-out
                hover:scale-105 hover:-translate-y-1 active:scale-95
                ${
                  activeCategory === cat
                    ? "bg-black/80 text-cyan-400 border-cyan-400 shadow-cyan-400/30"
                    : "bg-white/90 text-gray-700 border-transparent hover:shadow-lg"
                }
              `}
              style={{
                boxShadow:
                  activeCategory === cat
                    ? "0 0 15px rgba(0,255,255,0.3), 0 8px 25px rgba(0,255,255,0.15)"
                    : "0 4px 15px rgba(0,0,0,0.1)",
                animationDelay: `${0.6 + index * 0.1}s`,
              }}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {renderContent()}
      </div>

      <style jsx>{`
        @keyframes slideInFromLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
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
        :global(.title-animate) {
          animation: slideInFromLeft 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }
        :global(.subtitle-animate) {
          animation: slideInFromRight 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)
            0.2s both;
        }
        :global(.buttons-animate) {
          animation: fadeInUp 0.6s ease-out 0.4s both;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;