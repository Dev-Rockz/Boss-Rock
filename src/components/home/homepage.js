import React, { useState, useEffect } from "react";
import { Download, Eye } from "lucide-react";

const ProfileSection = () => {
  const [displayName, setDisplayName] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isNameComplete, setIsNameComplete] = useState(false);

  const fullName = "Rocky M. Pabalate";

  useEffect(() => {
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

    return () => clearInterval(typingInterval);
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

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col justify-center items-center p-4 md:p-8 bg-slate-950 relative overflow-hidden"
      style={{
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.03) 0%, transparent 50%), 
          radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.03) 0%, transparent 50%)
        `,
        animation: 'neonPulse 8s ease-in-out infinite'
      }}
    >
      <div className="flex items-center justify-center w-full max-w-6xl">
        <div className="flex-1 max-w-2xl text-center md:text-left">
          {/* Greeting and Name */}
          <div className="mb-8">
            <span className="block text-xl text-cyan-400 font-normal mb-2 tracking-wide drop-shadow-[0_0_10px_rgba(100,255,218,0.3)]">
              Hello, I'm
            </span>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight drop-shadow-[0_0_20px_rgba(255,255,255,0.5)]">
              {displayName}
              <span 
                className={`text-pink-500 font-light drop-shadow-[0_0_15px_rgba(255,0,128,0.8)] transition-opacity duration-300 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
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
            <h2 className="text-2xl md:text-3xl text-slate-200 font-medium mb-4 drop-shadow-[0_0_10px_rgba(224,230,237,0.3)]">
              Software Developer
            </h2>
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {["Full Stack", "Mobile", "Web"].map((specialty) => (
                <span
                  key={specialty}
                  className="px-4 py-2 bg-slate-800/80 text-cyan-400 rounded-full text-sm font-medium border border-cyan-400/30 backdrop-blur-sm drop-shadow-[0_0_8px_rgba(100,255,218,0.5)] transition-all duration-300 hover:bg-cyan-400/15 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(100,255,218,0.3)] hover:drop-shadow-[0_0_12px_rgba(100,255,218,0.8)] hover:border-cyan-400/60 cursor-pointer"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <p 
            className={`text-lg md:text-xl leading-relaxed text-slate-300 mb-12 max-w-lg mx-auto md:mx-0 drop-shadow-[0_0_5px_rgba(184,197,209,0.2)] transition-all duration-700 delay-500 ${fadeInClass}`}
          >
            I build efficient web and mobile apps that solve real problems, with clean code and a focus on great user experiences.
          </p>

          {/* Action Buttons */}
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center md:justify-start transition-all duration-700 delay-700 ${fadeInClass}`}
          >
            <a
              href="/path/to/your-cv.pdf"
              download
              className="group inline-flex items-center justify-center px-8 py-4 bg-pink-500/10 text-pink-400 rounded-lg text-base font-medium border-2 border-pink-500 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(255,0,128,0.5)] shadow-[0_0_20px_rgba(255,0,128,0.2)] transition-all duration-300 hover:bg-pink-500/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(255,0,128,0.4)] hover:drop-shadow-[0_0_15px_rgba(255,0,128,0.8)] hover:border-pink-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <Download size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">Download Resume</span>
            </a>
            
            <a 
              href="#projects" 
              className="group inline-flex items-center justify-center px-8 py-4 bg-cyan-400/10 text-cyan-400 rounded-lg text-base font-medium border-2 border-cyan-400 backdrop-blur-sm drop-shadow-[0_0_10px_rgba(100,255,218,0.5)] shadow-[0_0_20px_rgba(100,255,218,0.2)] transition-all duration-300 hover:bg-cyan-400/20 hover:-translate-y-1 hover:shadow-[0_8px_30px_rgba(100,255,218,0.4)] hover:drop-shadow-[0_0_15px_rgba(100,255,218,0.8)] hover:border-cyan-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              <Eye size={18} className="mr-2 relative z-10" />
              <span className="relative z-10">View Projects</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes neonPulse {
          0%, 100% { 
            background-image: radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.03) 0%, transparent 50%), 
                              radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.03) 0%, transparent 50%);
          }
          50% { 
            background-image: radial-gradient(circle at 30% 30%, rgba(0, 255, 255, 0.05) 0%, transparent 50%), 
                              radial-gradient(circle at 70% 70%, rgba(255, 0, 255, 0.05) 0%, transparent 50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ProfileSection;