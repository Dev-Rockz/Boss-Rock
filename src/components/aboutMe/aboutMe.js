import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaFacebook,
  FaCode,
  FaMobile,
  FaLaptop,
} from "react-icons/fa";
import Image from "next/image";
import Profilepic from "@/assets/profile.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [visibleElements, setVisibleElements] = useState({
    header: false,
    profile: false,
    bio: false,
    stats: false,
  });

  const refs = {
    section: useRef(null),
    header: useRef(null),
    profile: useRef(null),
    bio: useRef(null),
    stats: useRef(null),
  };

  // Initialize visibility after mount
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Handle image load error
  const handleImageError = () => {
    console.error("Failed to load profile image from:", Profilepic);
    setImageError(true);
  };

  // Handle image load success
  const handleImageLoad = () => {
    console.log("Profile image loaded successfully from:", Profilepic);
  };

  // Optimized intersection observer with single observer
  useEffect(() => {
    const observerOptions = {
      threshold: [0, 0.2, 0.5, 0.8, 1],
      rootMargin: "-50px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const isInView = entry.intersectionRatio > 0.2;
        const elementKey = entry.target.dataset.element;

        setVisibleElements((prev) => ({
          ...prev,
          [elementKey]: isInView,
        }));
      });
    }, observerOptions);

    // Observe all elements
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current && key !== "section") {
        ref.current.dataset.element = key;
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, []);

  const skills = [
    { icon: <FaCode />, title: "Web Dev", description: "Modern frameworks" },
    { icon: <FaMobile />, title: "Mobile", description: "Cross-platform" },
    { icon: <FaLaptop />, title: "UI/UX", description: "User-centered" },
  ];

  const stats = [
    { number: "2+", label: "Years" },
    { number: "10+", label: "Projects" },
    { number: "2+", label: "Clients" },
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/your-profile",
      label: "LinkedIn",
    },
    {
      icon: <FaGithub />,
      href: "https://github.com/your-username",
      label: "GitHub",
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/your-profile",
      label: "Facebook",
    },
  ];

  return (
    <section
      ref={refs.section}
      id="about"
      className="min-h-screen bg-gray-900 relative overflow-hidden flex items-center justify-center animate-pulse-bg pt-20"
      style={{
        scrollMarginTop: "100px",
        backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(0, 255, 255, 0.03) 0%, transparent 50%), 
          radial-gradient(circle at 75% 75%, rgba(255, 0, 255, 0.03) 0%, transparent 50%)
        `,
      }}
    >
      <div className="w-full max-w-7xl flex flex-col justify-center">
        {/* Header */}
        <div
          ref={refs.header}
          className={`text-center mb-8 transition-all duration-700 ease-out ${
            visibleElements.header && isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-8 scale-95"
          }`}
        >
          <div className="relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
              <span className="drop-shadow-glow-white">About Me</span>
            </h2>
            <p className="text-cyan-400 text-xl drop-shadow-glow-cyan">
              Passionate Developer & Creative Problem Solver
            </p>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-pink-500 via-cyan-400 to-pink-500 mx-auto rounded-full shadow-glow-cyan mt-4" />
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-8 items-start">
          {/* Profile Section */}
          <div
            ref={refs.profile}
            className={`flex flex-col items-center transition-all duration-700 ease-out delay-100 h-full justify-start p-14 ${
              visibleElements.profile && isVisible
                ? "opacity-100 translate-x-0 scale-100"
                : "opacity-0 -translate-x-12 scale-90"
            }`}
          >
            {/* Profile Image */}
            <div className="relative w-80 h-96 mb-6 -mt-6">
              <div className="w-full h-full rounded-3xl bg-gradient-to-br from-cyan-400/30 to-pink-500/30 p-1 shadow-glow-multi transition-all duration-300 hover:shadow-glow-multi-intense">
                {imageError ? (
                  <div className="w-full h-full bg-gray-800 rounded-2xl flex items-center justify-center text-gray-400">
                    <div className="text-center">
                      <FaCode className="text-4xl mb-2 mx-auto" />
                      <p className="text-sm">Profile Image</p>
                      <p className="text-xs mt-1">Check image path</p>
                    </div>
                  </div>
                ) : (
                  <Image
                    src={Profilepic}
                    alt="Rocky Portrait"
                    width={310}
                    height={400}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                )}
              </div>

              {/* Floating Icon */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-pink-500 to-cyan-400 rounded-xl flex items-center justify-center text-white text-xl shadow-glow-multi animate-bounce-neon">
                <FaCode className="drop-shadow-glow-white" />
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 bg-gray-800/80 rounded-xl shadow-glow-cyan-soft flex items-center justify-center text-cyan-400 text-xl border border-cyan-400/30 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400/20 hover:shadow-glow-cyan group"
                >
                  <span className="drop-shadow-glow-cyan group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="flex flex-col gap-6">
            {/* Bio Section */}
            <div
              ref={refs.bio}
              className={`bg-gray-800/80 rounded-3xl p-6 shadow-glow-cyan-soft border border-cyan-400/30 backdrop-blur-sm transition-all duration-700 ease-out delay-200 ${
                visibleElements.bio && isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-8 scale-95"
              }`}
            >
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-pink-500 to-cyan-400 rounded-full shadow-glow-cyan" />
                <span className="drop-shadow-glow-white">Who I Am</span>
              </h3>

              <div className="space-y-6">
                <p className="text-gray-300 leading-relaxed drop-shadow-glow-text">
                  I'm{" "}
                  <span className="font-semibold text-cyan-400 drop-shadow-glow-cyan">
                    Rocky
                  </span>
                  , a recent computer science graduate who is a motivated and
                  imaginative mobile and web developer. I am an expert in using
                  Flutter to create mobile applications, and I am also
                  proficient in database administration and backend development.
                  In order to increase my knowledge and produce even more
                  adaptable solutions, I'm currently delving deeper into web
                  development.
                </p>

                <p className="text-gray-300 leading-relaxed drop-shadow-glow-text">
                  My goal is to become a full-stack developer who can build
                  complete, end-to-end solutions. I also aspire to contribute to
                  projects that have a meaningful impact on people's lives.
                </p>

                {/* Skills */}
                <div className="flex flex-col md:flex-row gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="bg-gray-800/80 rounded-xl p-5 text-center transition-all duration-300 cursor-pointer flex-1 border border-cyan-400/30 backdrop-blur-sm shadow-glow-cyan-soft hover:scale-105 hover:-translate-y-1 hover:bg-cyan-400/15 hover:shadow-glow-cyan group relative overflow-hidden"
                    >
                      {/* Shimmer effect */}
                      <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                      <div className="text-2xl text-cyan-400 mb-3 drop-shadow-glow-cyan group-hover:scale-110 transition-all duration-300">
                        {skill.icon}
                      </div>
                      <h4 className="font-semibold text-white text-lg mb-2 drop-shadow-glow-white">
                        {skill.title}
                      </h4>
                      <p className="text-sm text-gray-300 drop-shadow-glow-text">
                        {skill.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats Section */}
            <div
              ref={refs.stats}
              className={`transition-all duration-700 ease-out delay-300 pb-8 ${
                visibleElements.stats && isVisible
                  ? "opacity-100 translate-y-0 scale-100"
                  : "opacity-0 translate-y-10 scale-90"
              }`}
            >
              <div className="flex items-center justify-center">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-center flex-1 relative"
                  >
                    <span className="text-2xl font-bold text-pink-500 mb-1 drop-shadow-glow-pink">
                      {stat.number}
                    </span>
                    <span className="text-sm text-cyan-400 font-medium drop-shadow-glow-cyan">
                      {stat.label}
                    </span>
                    {index < stats.length - 1 && (
                      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-10 bg-gradient-to-b from-transparent via-cyan-400/50 to-transparent shadow-glow-cyan" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-neon {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -6px, 0);
          }
          70% {
            transform: translate3d(0, -3px, 0);
          }
          90% {
            transform: translate3d(0, -1px, 0);
          }
        }

        @keyframes pulse-bg {
          0%,
          100% {
            background-image: radial-gradient(
                circle at 25% 25%,
                rgba(0, 255, 255, 0.03) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 75% 75%,
                rgba(255, 0, 255, 0.03) 0%,
                transparent 50%
              );
          }
          50% {
            background-image: radial-gradient(
                circle at 30% 30%,
                rgba(0, 255, 255, 0.05) 0%,
                transparent 50%
              ),
              radial-gradient(
                circle at 70% 70%,
                rgba(255, 0, 255, 0.05) 0%,
                transparent 50%
              );
          }
        }

        :global(.animate-bounce-neon) {
          animation: bounce-neon 2s infinite;
        }

        :global(.animate-pulse-bg) {
          animation: pulse-bg 8s ease-in-out infinite;
        }

        :global(.drop-shadow-glow-white) {
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
            0 0 40px rgba(100, 255, 218, 0.3);
        }

        :global(.drop-shadow-glow-cyan) {
          text-shadow: 0 0 10px rgba(100, 255, 218, 0.5);
        }

        :global(.drop-shadow-glow-pink) {
          text-shadow: 0 0 15px rgba(255, 0, 128, 0.6);
        }

        :global(.drop-shadow-glow-text) {
          text-shadow: 0 0 5px rgba(184, 197, 209, 0.2);
        }

        :global(.shadow-glow-cyan) {
          box-shadow: 0 8px 25px rgba(100, 255, 218, 0.4);
        }

        :global(.shadow-glow-cyan-soft) {
          box-shadow: 0 4px 12px rgba(100, 255, 218, 0.2);
        }

        :global(.shadow-glow-multi) {
          box-shadow: 0 8px 30px rgba(100, 255, 218, 0.3),
            0 0 50px rgba(255, 0, 128, 0.2);
        }

        :global(.shadow-glow-multi-intense) {
          box-shadow: 0 12px 40px rgba(100, 255, 218, 0.4),
            0 0 60px rgba(255, 0, 128, 0.3);
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
