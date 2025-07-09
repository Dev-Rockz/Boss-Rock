import React, { useState, useEffect, useRef } from "react";

const GetInTouchSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          // Entrance animation
          const timer = setTimeout(() => setIsVisible(true), 100);
          return () => clearTimeout(timer);
        } else {
          // Exit animation
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: "-50px 0px -50px 0px", // Add some margin for better control
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      link: "https://github.com/Dev-Rockz",
      color: "hover:text-purple-400",
    },
    {
      name: "LinkedIn",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      link: "https://www.linkedin.com/in/rocky-pabalate-205271345/",
      color: "hover:text-blue-400",
    },
    {
      name: "Facebook",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      link: "https://www.facebook.com/rocky.m.pabalate",
      color: "hover:text-blue-600",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      link: "https://www.instagram.com/rockypabalate/",
      color: "hover:text-pink-400",
    },
  ];

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
      ),
      text: "Carmen, Bohol, Philippines",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      text: "dev.rocky.pabalate@gmail.com",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>
      ),
      text: "+63 9078859175",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen px-8 py-12 bg-gray-900 box-border transition-all duration-1000"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={`absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <div
          className={`absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
        <div
          className={`absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000 transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
          }`}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 delay-300"
              : "opacity-0 translate-y-10 delay-0"
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">
            <span className="drop-shadow-glow-white">
              Let's create something
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}
              Amazing
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build
            incredible digital experiences. Let's connect and make something
            extraordinary together.
          </p>
        </div>

        {/* Contact Information */}
        <div
          className={`mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 delay-500"
              : "opacity-0 translate-y-10 delay-0"
          }`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500 hover:scale-105 transform text-center group ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${700 + index * 100}ms` : "0ms",
                }}
              >
                <div className="flex justify-center mb-4">
                  <span className="text-cyan-400 group-hover:text-cyan-300 transition-colors duration-300">
                    {info.icon}
                  </span>
                </div>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-300 font-medium">
                  {info.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links Section */}
        <div
          className={`transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0 delay-700"
              : "opacity-0 translate-y-10 delay-0"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              Let's Connect
            </h3>
            <p className="text-gray-300 text-lg">
              Follow me on social media and let's start a conversation
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl">
              {socialLinks.map((social, index) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl bg-gray-800 border border-cyan-500/30 text-gray-300 hover:bg-gray-700 transition-all duration-300 hover:scale-110 transform group shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 ${
                    social.color
                  } ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-4"
                  }`}
                  style={{
                    transitionDelay: isVisible
                      ? `${1000 + index * 100}ms`
                      : "0ms",
                  }}
                >
                  <span className="group-hover:scale-110 transition-transform duration-300">
                    {social.icon}
                  </span>
                  <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                    {social.name}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;
