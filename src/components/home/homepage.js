import React, { useState, useEffect } from "react";
import { Download, Eye } from "lucide-react";

const ProfileSection = () => {
  const [displayName, setDisplayName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isNameComplete, setIsNameComplete] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const fullName = "Rocky M. Pabalate";

  useEffect(() => {
    // Start image entrance animation when component mounts
    const imageTimer = setTimeout(() => {
      setImageLoaded(true);
    }, 500);

    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsNameComplete(true);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => {
      clearTimeout(imageTimer);
      clearInterval(typingInterval);
    };
  }, []);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const fadeInClass = isNameComplete
    ? "opacity-100 translate-y-0"
    : "opacity-0 translate-y-5";

  const imageEntranceClass = imageLoaded
    ? "opacity-100 scale-100 translate-y-0 rotate-0"
    : "opacity-0 scale-75 translate-y-10 rotate-12";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-gray-900 relative overflow-hidden"
    >
      {/* Subtle Glitch Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/3 to-transparent animate-glitch-1"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/3 to-transparent animate-glitch-2"></div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-16 z-10 relative">
        {/* Profile Image Section - Much Larger */}
        <div className="relative flex-shrink-0 order-first lg:order-last pt-16 md:pt-0">
          <div
            className={`relative w-96 h-96 md:w-[500px] md:h-[500px] lg:w-[550px] lg:h-[600px] transition-all duration-1000 ease-out ${imageEntranceClass}`}
          >
            {/* Hexagonal Tech Rings */}
            <div
              className={`absolute inset-0 transition-all duration-1200 ease-out delay-300 ${
                imageLoaded
                  ? "animate-spin-slow opacity-100"
                  : "opacity-0 scale-90"
              }`}
            >
              <div
                className="absolute inset-0 border-2 border-cyan-400/30 rotate-0"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
              <div
                className="absolute inset-8 border border-cyan-300/20 rotate-12"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            <div
              className={`absolute inset-4 transition-all duration-1200 ease-out delay-500 ${
                imageLoaded
                  ? "animate-spin-reverse opacity-100"
                  : "opacity-0 scale-110"
              }`}
            >
              <div
                className="absolute inset-0 border-2 border-pink-500/30 rotate-45"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
              <div
                className="absolute inset-8 border border-pink-400/20 rotate-30"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            <div
              className={`absolute inset-8 transition-all duration-1200 ease-out delay-700 ${
                imageLoaded
                  ? "animate-spin-slow-reverse opacity-100"
                  : "opacity-0 scale-80"
              }`}
            >
              <div
                className="absolute inset-0 border border-purple-400/25 rotate-60"
                style={{
                  clipPath:
                    "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                }}
              ></div>
            </div>

            {/* Tech Orbiting Elements */}
            <div
              className={`absolute inset-0 transition-all duration-1000 ease-out delay-900 ${
                imageLoaded
                  ? "animate-spin-slow opacity-100"
                  : "opacity-0 scale-50"
              }`}
            >
              <div
                className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-sm rotate-45 shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="absolute top-1/2 right-0 w-3 h-3 bg-gradient-to-r from-pink-500 to-pink-400 rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,255,0.8)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="absolute bottom-0 left-1/2 w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-300 rounded-sm rotate-45 shadow-[0_0_15px_rgba(168,85,247,0.8)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div>

            <div
              className={`absolute inset-4 transition-all duration-1000 ease-out delay-1100 ${
                imageLoaded
                  ? "animate-spin-reverse opacity-100"
                  : "opacity-0 scale-150"
              }`}
            >
              <div
                className="absolute top-1/2 left-0 w-4 h-4 bg-gradient-to-r from-cyan-300 to-cyan-400 rounded-sm rotate-45 shadow-[0_0_20px_rgba(0,255,255,0.8)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="absolute top-0 right-1/2 w-3 h-3 bg-gradient-to-r from-pink-400 to-pink-500 rounded-sm rotate-45 shadow-[0_0_15px_rgba(255,0,255,0.8)]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div>

            {/* Digital Corner Brackets */}
            <div
              className={`absolute inset-12 transition-all duration-800 ease-out delay-1300 ${
                imageLoaded ? "animate-pulse opacity-100" : "opacity-0 scale-75"
              }`}
            >
              <div className="absolute top-0 left-0 w-8 h-8 border-l-2 border-t-2 border-cyan-400 shadow-[0_0_10px_rgba(0,255,255,0.5)]"></div>
              <div className="absolute top-0 right-0 w-8 h-8 border-r-2 border-t-2 border-pink-500 shadow-[0_0_10px_rgba(255,0,255,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-8 h-8 border-l-2 border-b-2 border-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-8 h-8 border-r-2 border-b-2 border-cyan-300 shadow-[0_0_10px_rgba(165,243,252,0.5)]"></div>
            </div>

            {/* Profile image container */}
            <div
              className={`absolute inset-16 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-pink-500/20 p-1 backdrop-blur-sm shadow-[0_0_60px_rgba(0,255,255,0.4)] border border-white/10 transition-all duration-1000 ease-out delay-200 ${
                imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-90"
              }`}
            >
              <div className="w-full h-full bg-black/90 p-3 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)] border border-cyan-400/20">
                <div className="w-full h-full overflow-hidden border-2 border-gradient-to-r from-cyan-400 to-pink-500 shadow-[0_0_40px_rgba(0,255,255,0.6)]">
                  <img
                    src="/profile.png"
                    alt="Rocky M. Pabalate"
                    className="w-full h-full object-cover transition-all duration-500 hover:scale-105 hover:brightness-110"
                    style={{
                      filter:
                        "drop-shadow(0 0 30px rgba(0,255,255,0.4)) saturate(1.2) contrast(1.1)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Intense Neon Glow */}
            <div
              className={`absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 blur-3xl transition-all duration-1200 ease-out delay-400 ${
                imageLoaded ? "animate-pulse opacity-100" : "opacity-0"
              }`}
            ></div>
            <div
              className={`absolute inset-8 bg-gradient-to-r from-pink-500/10 via-cyan-400/10 to-purple-500/10 blur-2xl transition-all duration-1200 ease-out delay-600 ${
                imageLoaded ? "animate-pulse opacity-100" : "opacity-0"
              }`}
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>

        <div className="flex-1 max-w-3xl text-center lg:text-left order-last lg:order-first">
          {/* Greeting and Name */}
          <div className="mb-8">
            <span className="block text-lg text-cyan-400 font-normal mb-2 tracking-wide drop-shadow-[0_0_10px_rgba(0,255,255,0.5)] font-mono">
              &gt; Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.8)] font-mono">
              {displayName}
              <span
                className={`text-pink-500 font-light drop-shadow-[0_0_15px_rgba(255,0,255,0.8)] transition-opacity duration-300 ${
                  showCursor ? "opacity-100" : "opacity-0"
                }`}
              >
                |
              </span>
            </h1>
          </div>

          {/* Role Section */}
          <div
            className={`mb-8 transition-all duration-700 delay-300 ${fadeInClass}`}
          >
            <h2 className="text-2xl md:text-3xl text-slate-200 font-medium mb-4 drop-shadow-[0_0_10px_rgba(224,230,237,0.5)] font-mono">
              &lt;Software Developer/&gt;
            </h2>
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              {["Frontend", "Backend"].map((specialty) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-black/80 text-cyan-400 rounded-none text-sm font-medium border-2 border-cyan-400/50 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] transition-all duration-300 hover:bg-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(0,255,255,0.4)] hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:border-cyan-400 cursor-pointer font-mono relative overflow-hidden group"
                  style={{
                    clipPath:
                      "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 8px 100%, 0 calc(100% - 8px))",
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
                  <span className="relative z-10">{specialty}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p
            className={`text-lg md:text-xl leading-relaxed text-slate-300 mb-10 max-w-2xl mx-auto lg:mx-0 drop-shadow-[0_0_5px_rgba(184,197,209,0.3)] transition-all duration-700 delay-500 ${fadeInClass}`}
          >
            I build efficient web and mobile apps that solve real problems, with
            clean code and a focus on great user experiences.
          </p>

          {/* Action Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start transition-all duration-700 delay-700 ${fadeInClass}`}
          >
            <a
              href="/resume/Plain CV Rocky M. Pabalate.pdf"
              download
              className="group inline-flex items-center justify-center px-6 py-3 bg-black/80 text-cyan-400 rounded-none text-base font-medium border-2 border-cyan-400 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 hover:bg-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(0,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:border-cyan-300 relative overflow-hidden font-mono"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
              <Download size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">RESUME</span>
            </a>

            <a
              href="#projects"
              className="group inline-flex items-center justify-center px-6 py-3 bg-black/80 text-cyan-400 rounded-none text-base font-medium border-2 border-cyan-400 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(0,255,255,0.6)] shadow-[0_0_20px_rgba(0,255,255,0.3)] transition-all duration-300 hover:bg-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_6px_25px_rgba(0,255,255,0.5)] hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.8)] hover:border-cyan-300 relative overflow-hidden font-mono"
              style={{
                clipPath:
                  "polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-500"></div>
              <Eye size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">VIEW_PROJECTS</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes glitch-1 {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0;
          }
          50% {
            transform: translateX(2px);
            opacity: 0.1;
          }
        }

        @keyframes glitch-2 {
          0%,
          100% {
            transform: translateX(0);
            opacity: 0;
          }
          25% {
            transform: translateX(-2px);
            opacity: 0.1;
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes spin-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        @keyframes spin-slow-reverse {
          from {
            transform: rotate(360deg);
          }
          to {
            transform: rotate(0deg);
          }
        }

        .animate-spin-slow {
          animation: spin-slow 25s linear infinite;
        }

        .animate-spin-reverse {
          animation: spin-reverse 18s linear infinite;
        }

        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 30s linear infinite;
        }

        .animate-glitch-1 {
          animation: glitch-1 3s ease-in-out infinite;
        }

        .animate-glitch-2 {
          animation: glitch-2 4s ease-in-out infinite 1s;
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;
