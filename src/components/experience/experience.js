import React, { useState, useEffect, useRef } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Helmet } from "react-helmet";

const experienceData = [
  {
    company: "Blenditoro Corp.",
    position: "Frontend Intern (Mobile Development)",
    duration: "June 2024 - August 2024",
    description:
      "Contributed to the development of a mobile shopping application, focusing on responsive UI design, API integration, and Stripe payment implementation.",
    achievements: [
      "Designed and developed responsive mobile interfaces using modern UI practices",
      "Integrated RESTful APIs to support dynamic app functionality",
      "Implemented Stripe payment gateway for secure and seamless transactions",
    ],
    technologies: ["Flutter", "Dart", "Stripe", "REST API"],
    images: [
      {
        src: "/exp1/image1.jpg",
        //   alt: "Mobile App UI Design",
      },
      {
        src: "/exp1/image2.jpg",
        //   alt: "Payment Integration",
      },
      {
        src: "/exp1/image3.jpg",
        //    alt: "API Dashboard" ,
      },
      {
        src: "/exp1/image4.jpg",
        //  alt: "Shopping Cart Feature",
      },
      {
        src: "/exp1/image5.jpg",
        //   alt: "User Profile Screen",
      },
    ],
    type: "single",
  },
  {
    company: "Research Conferences",
    position: "Research Developer",
    duration: "April 2024 & March 2025",
    description:
      "Contributed to multiple research-driven systems, focusing on data collection tools and improving backend reliability across different conference domains.",
    type: "multiple",
    projects: [
      {
        title:
          "National Conference on Computing , Education and Business ( NCCEB ) 2024",
        position: "Research Developer",
        duration: "April 2024",
        description:
          "Presented the research paper FOOD AI – An Integrated Web Platform for Image-Based Food Recognition, Recipe Generation, and Comprehensive Food Information on behalf of Bohol Island State University – Bilar Campus (BISU-Bilar). The conference was held via Zoom, hosted from the La Union Convention Center, Brgy. Sevilla, City of San Fernando, La Union.",
        achievements: [
          "Won 1st Place (IT/CS Track) in the National Conference on Computing, Education, and Business (NCCEB) 2024",
          "Engaged in impactful research focused on AI-driven food recognition systems",
        ],

        images: [
          {
            src: "/ncceb/image1.jpg",
            //alt: "AI Conference Dashboard",
          },
          {
            src: "/ncceb/image2.jpg",
            // alt: "Paper Submission System",
          },
          {
            src: "/ncceb/image3.jpg",
            //  alt: "Reviewer Assignment Tool",
          },
          {
            src: "/ncceb/image4.jpg",
            //   alt: "Conference Analytics",
          },
        ],
      },
      {
        title: "International Research Conference : 1st ICBEIST 2025",
        position: "Research Developer",
        duration: "March 2025",
        description:
          "Presented the research paper 'FOOD AI – An Image Food Recognition Generating Recipes, Cooking Guidance and Nutritional Insights using Machine Learning' representing BISU-Bilar",
        achievements: [
          "Participated in the 1st International Conference on Business, Education, Information Systems, and Technology (ICBEIST) 2025",
          "Showcased innovative use of machine learning in food recognition and personalized nutrition systems",
        ],

        images: [
          {
            src: "/icbeist/icbeist1.jpg",
            ///   alt: "Conference Analytics Dashboard",
          },
          {
            src: "/icbeist/icbeist.jpg",
            //   alt: "Paper Review System",
          },
        ],
      },
    ],
  },
  {
    company: "Bohol Island State University - Bilar Campus",
    position: "Flutter Mentor",
    duration: "April 2024 & June 2025",
    description:
      "Conducted mobile development workshops focused on Flutter programming for junior developer students. Provided hands-on instruction and guidance on both fundamental and advanced Flutter concepts across two major university-led tech events.",
    type: "multiple",
    projects: [
      {
        title: "Tech Workshop: Mobile Development",
        position: "Mentor",
        duration: "April 2024",
        description:
          "Served as a mentor for junior students during a university-led mobile development workshop. Introduced Flutter programming by covering installation, project setup, basic widgets, page creation, routing, and app building fundamentals.",
        achievements: [
          "Successfully guided students through hands-on Flutter development",
          "Introduced real-world practices and project structuring in mobile app development",
        ],

        images: [
          {
            src: "/workshop1/teach1.jpg",
            //alt: "AI Conference Dashboard",
          },
          {
            src: "/workshop1/teach2.jpg",
            // alt: "Paper Submission System",
          },
        ],
      },
      {
        title: "Tech Talks: UI/UX, Mobile Development & Project Management",
        position: "Mentor",
        duration: "June 2025",
        description:
          "Led the Flutter programming session during the Tech Talks series, focusing on integrating Supabase with Flutter. Demonstrated how to build a login system, fetch and display user data, and create a simple product listing app using Supabase API.",
        achievements: [
          "Demonstrated real-time backend integration using Supabase with Flutter",
          "Empowered junior developers with practical knowledge in backend and API interaction",
        ],

        images: [
          {
            src: "/workshop2/tech1.jpg",
            ///   alt: "Conference Analytics Dashboard",
          },
          {
            src: "/workshop2/tech2.jpg",
            //   alt: "Paper Review System",
          },
          {
            src: "/workshop2/tech3.jpg",
            //    alt: "Data Visualization Charts",
          },
          {
            src: "/workshop2/tech4.jpg",
            //      alt: "Data Visualization Charts",
          },
          {
            src: "/workshop2/tech5.jpg",
            //      alt: "Data Visualization Charts",
          },
          {
            src: "/workshop2/tech6.jpg",
            //      alt: "Data Visualization Charts",
          },
        ],
      },
    ],
  },
];

const ExperienceSection = () => {
  const [selected, setSelected] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [contentTransition, setContentTransition] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({});
  const [fullSizeImage, setFullSizeImage] = useState(null);
  const [imagesPerView, setImagesPerView] = useState(3);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setImagesPerView(1);
      } else if (window.innerWidth < 1024) {
        setImagesPerView(2);
      } else if (window.innerWidth < 1280) {
        setImagesPerView(3);
      } else {
        setImagesPerView(4);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1, rootMargin: "50px" }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const handleSelection = (idx) => {
    if (idx !== selected) {
      setContentTransition(true);
      setTimeout(() => {
        setSelected(idx);
        setContentTransition(false);
      }, 150);
    }
  };

  const handleImageSlide = (direction, experienceId, projectId = null) => {
    const key =
      projectId !== null ? `${experienceId}-${projectId}` : experienceId;
    const images =
      projectId !== null
        ? experienceData[experienceId].projects[projectId].images
        : experienceData[experienceId].images;

    setCurrentImageIndex((prev) => {
      const current = prev[key] || 0;
      let newIndex;
      if (direction === "next") {
        newIndex = current >= images.length - imagesPerView ? 0 : current + 1;
      } else {
        newIndex =
          current <= 0
            ? Math.max(0, images.length - imagesPerView)
            : current - 1;
      }
      return { ...prev, [key]: newIndex };
    });
  };

  const handleImageClick = (image) => {
    setFullSizeImage(image);
  };

  const closeFullSizeImage = () => {
    setFullSizeImage(null);
  };

  const handleImageError = (e) => {
    e.target.src = "/fallback-image.jpg";
  };

  return (
    <>
      <Helmet>
        {experienceData.map((exp, idx) =>
          exp.type === "single" ? (
            <link
              key={idx}
              rel="preload"
              href={exp.images[0]?.src}
              as="image"
            />
          ) : (
            exp.projects.map((proj, projIdx) => (
              <link
                key={`${idx}-${projIdx}`}
                rel="preload"
                href={proj.images[0]?.src}
                as="image"
              />
            ))
          )
        )}
      </Helmet>
      <section
        ref={sectionRef}
        id="experience"
        className="min-h-screen bg-gray-900 text-white p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden transition-all duration-1000"
      >
        <div className="relative z-10">
          <div className="text-center mb-8 sm:mb-12 md:mb-16 relative z-10">
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 tracking-tight transition-opacity duration-300 ${
                isVisible ? "title-animate opacity-100" : "opacity-0"
              }`}
              style={{
                textShadow:
                  "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(100, 255, 218, 0.3)",
              }}
            >
              Experience & Academic Activities
            </h2>
            <p
              className={`text-gray-300 text-base sm:text-lg max-w-2xl mx-auto px-4 ${
                isVisible ? "subtitle-animate" : "opacity-0"
              }`}
            >
              Professional Journey & Growth
            </p>
          </div>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
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
                  className={`group relative text-left p-3 sm:p-4 rounded-lg border transition-all duration-300 transform hover:scale-105 ${
                    selected === idx
                      ? "border-cyan-400 bg-cyan-400 bg-opacity-10 shadow-lg shadow-cyan-400/20"
                      : "border-slate-700 hover:border-cyan-400/50 hover:bg-cyan-400/5 bg-slate-800/50"
                  }`}
                  style={{ transitionDelay: `${600 + idx * 100}ms` }}
                >
                  {selected === idx && (
                    <div className="absolute inset-0 border border-cyan-400 opacity-50 animate-pulse rounded-lg"></div>
                  )}
                  <div className="relative z-10">
                    <p className="font-semibold text-white mb-1 text-sm sm:text-base transition-colors duration-300">
                      {item.company}
                    </p>
                    <p className="text-xs text-white mb-1 font-medium">
                      {item.position}
                    </p>
                    <span className="text-xs sm:text-sm text-white transition-colors duration-300">
                      {item.duration}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            <div
              className={`flex-1 relative transition-all duration-800 delay-600 ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
            >
              {experienceData[selected].type === "single" ? (
                <div
                  key={selected}
                  className={`bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-lg border border-slate-700 relative shadow-xl transition-all duration-300 ${
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
                  <div className="absolute -top-px -left-px w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-cyan-400/20 to-transparent rounded-tl-lg"></div>
                  <div className="absolute -bottom-px -right-px w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-tl from-blue-500/20 to-transparent rounded-br-lg"></div>

                  <div className="space-y-4 sm:space-y-6 relative z-10">
                    <div
                      className={`transition-all duration-400 ${
                        contentTransition
                          ? "opacity-0 translate-y-2"
                          : "opacity-100 translate-y-0"
                      }`}
                    >
                      <h3 className="text-xl sm:text-2xl text-white font-bold mb-2">
                        {experienceData[selected].position}
                      </h3>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-slate-400 mb-4">
                        <span className="text-cyan-400 font-semibold">
                          {experienceData[selected].company}
                        </span>
                        <span className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></span>
                        <span className="px-3 py-1 bg-slate-700 rounded-full text-xs w-fit">
                          {experienceData[selected].duration}
                        </span>
                      </div>
                    </div>

                    <p
                      className={`text-slate-300 leading-relaxed text-sm sm:text-base transition-all duration-400 delay-100 ${
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
                        {experienceData[selected].achievements.map(
                          (point, i) => (
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
                              <span className="text-slate-300 text-xs sm:text-sm">
                                {point}
                              </span>
                            </div>
                          )
                        )}
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
                        {experienceData[selected].technologies.map(
                          (tech, i) => (
                            <span
                              key={i}
                              className={`bg-slate-700/50 text-cyan-400 px-2 sm:px-3 py-1 text-xs sm:text-sm rounded-full border border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 ${
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
                          )
                        )}
                      </div>
                    </div>

                    {experienceData[selected].images && (
                      <div
                        className={`transition-all duration-400 delay-400 ${
                          contentTransition
                            ? "opacity-0 translate-y-2"
                            : "opacity-100 translate-y-0"
                        }`}
                      >
                        <h4 className="text-cyan-400 font-semibold text-sm mb-3 flex items-center gap-2">
                          <span className="w-1 h-4 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
                          Images
                        </h4>
                        <div className="relative">
                          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 auto-rows-fr">
                            {experienceData[selected].images
                              .slice(
                                currentImageIndex[selected] || 0,
                                (currentImageIndex[selected] || 0) +
                                  imagesPerView
                              )
                              .map((image, i) => (
                                <div
                                  key={i}
                                  className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                                  onClick={() => handleImageClick(image)}
                                >
                                  <LazyLoadImage
                                    src={image.src}
                                    alt={image.alt || `Image ${i + 1}`}
                                    effect="blur"
                                    onError={handleImageError}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                  />
                                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <svg
                                      className="w-6 h-6 text-white"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              ))}
                          </div>

                          {experienceData[selected].images.length >
                            imagesPerView && (
                            <>
                              <button
                                onClick={() =>
                                  handleImageSlide("prev", selected)
                                }
                                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 19l-7-7 7-7"
                                  />
                                </svg>
                              </button>
                              <button
                                onClick={() =>
                                  handleImageSlide("next", selected)
                                }
                                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                              >
                                <svg
                                  className="w-4 h-4"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M9 5l7 7-7 7"
                                  />
                                </svg>
                              </button>
                            </>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="space-y-4 sm:space-y-6">
                  {experienceData[selected].projects.map((project, projIdx) => (
                    <div
                      key={projIdx}
                      className={`bg-slate-800/50 backdrop-blur-sm p-4 sm:p-6 rounded-lg border border-slate-700 relative shadow-xl transition-all duration-300 ${
                        contentTransition
                          ? "opacity-0 translate-y-4 scale-95"
                          : "opacity-100 translate-y-0 scale-100"
                      }`}
                      style={{
                        animation: contentTransition
                          ? "none"
                          : "slideInContent 0.5s ease-out",
                        animationDelay: contentTransition
                          ? "0ms"
                          : `${projIdx * 200}ms`,
                      }}
                    >
                      <div
                        className={`absolute -top-px -left-px w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-br ${
                          projIdx === 0
                            ? "from-cyan-400/20"
                            : "from-purple-400/20"
                        } to-transparent rounded-tl-lg`}
                      ></div>
                      <div
                        className={`absolute -bottom-px -right-px w-12 sm:w-16 h-12 sm:h-16 bg-gradient-to-tl ${
                          projIdx === 0
                            ? "from-blue-500/20"
                            : "from-pink-500/20"
                        } to-transparent rounded-br-lg`}
                      ></div>

                      <div className="space-y-3 sm:space-y-4 relative z-10">
                        <div
                          className={`transition-all duration-400 ${
                            contentTransition
                              ? "opacity-0 translate-y-2"
                              : "opacity-100 translate-y-0"
                          }`}
                        >
                          <h4 className="text-lg sm:text-xl text-white font-bold mb-2">
                            {project.title}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm text-slate-400 mb-3">
                            <span
                              className={`${
                                projIdx === 0
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                              } font-semibold`}
                            >
                              {project.position}
                            </span>
                            <span className="hidden sm:block w-2 h-2 bg-blue-500 rounded-full"></span>
                            <span className="px-3 py-1 bg-slate-700 rounded-full text-xs w-fit">
                              {project.duration}
                            </span>
                          </div>
                        </div>

                        <p
                          className={`text-slate-300 leading-relaxed text-xs sm:text-sm transition-all duration-400 delay-100 ${
                            contentTransition
                              ? "opacity-0 translate-y-2"
                              : "opacity-100 translate-y-0"
                          }`}
                        >
                          {project.description}
                        </p>

                        <div
                          className={`transition-all duration-400 delay-200 ${
                            contentTransition
                              ? "opacity-0 translate-y-2"
                              : "opacity-100 translate-y-0"
                          }`}
                        >
                          <h5
                            className={`${
                              projIdx === 0
                                ? "text-cyan-400"
                                : "text-purple-400"
                            } font-semibold text-sm mb-2 flex items-center gap-2`}
                          >
                            <span
                              className={`w-1 h-3 bg-gradient-to-b ${
                                projIdx === 0
                                  ? "from-cyan-400 to-blue-500"
                                  : "from-purple-400 to-pink-500"
                              } rounded-full`}
                            ></span>
                            Key Achievements
                          </h5>
                          <div className="space-y-1">
                            {project.achievements.map((point, i) => (
                              <div
                                key={i}
                                className={`flex items-start gap-2 transition-all duration-300 ${
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
                                <div
                                  className={`w-1.5 h-1.5 ${
                                    projIdx === 0
                                      ? "bg-cyan-400"
                                      : "bg-purple-400"
                                  } rounded-full mt-1.5 flex-shrink-0`}
                                ></div>
                                <span className="text-slate-300 text-xs">
                                  {point}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {project.images && (
                          <div
                            className={`transition-all duration-400 delay-400 ${
                              contentTransition
                                ? "opacity-0 translate-y-2"
                                : "opacity-100 translate-y-0"
                            }`}
                          >
                            <h5
                              className={`${
                                projIdx === 0
                                  ? "text-cyan-400"
                                  : "text-purple-400"
                              } font-semibold text-sm mb-2 flex items-center gap-2`}
                            >
                              <span
                                className={`w-1 h-3 bg-gradient-to-b ${
                                  projIdx === 0
                                    ? "from-cyan-400 to-blue-500"
                                    : "from-purple-400 to-pink-500"
                                } rounded-full`}
                              ></span>
                              Images
                            </h5>
                            <div className="relative">
                              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-3 auto-rows-fr">
                                {project.images
                                  .slice(
                                    currentImageIndex[
                                      `${selected}-${projIdx}`
                                    ] || 0,
                                    (currentImageIndex[
                                      `${selected}-${projIdx}`
                                    ] || 0) + imagesPerView
                                  )
                                  .map((image, i) => (
                                    <div
                                      key={i}
                                      className="relative aspect-[4/3] rounded-lg overflow-hidden cursor-pointer group"
                                      onClick={() => handleImageClick(image)}
                                    >
                                      <LazyLoadImage
                                        src={image.src}
                                        alt={
                                          image.alt || `Project Image ${i + 1}`
                                        }
                                        effect="blur"
                                        onError={handleImageError}
                                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                                      />
                                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg
                                          className="w-6 h-6 text-white"
                                          fill="none"
                                          stroke="currentColor"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                          />
                                        </svg>
                                      </div>
                                    </div>
                                  ))}
                              </div>

                              {project.images.length > imagesPerView && (
                                <>
                                  <button
                                    onClick={() =>
                                      handleImageSlide(
                                        "prev",
                                        selected,
                                        projIdx
                                      )
                                    }
                                    className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M15 19l-7-7 7-7"
                                      />
                                    </svg>
                                  </button>
                                  <button
                                    onClick={() =>
                                      handleImageSlide(
                                        "next",
                                        selected,
                                        projIdx
                                      )
                                    }
                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-slate-800/80 hover:bg-slate-700/80 text-cyan-400 p-2 rounded-full transition-all duration-300 hover:scale-110 z-10"
                                  >
                                    <svg
                                      className="w-4 h-4"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M9 5l7 7-7 7"
                                      />
                                    </svg>
                                  </button>
                                </>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {fullSizeImage && (
          <div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            onClick={closeFullSizeImage}
          >
            <div className="relative max-w-4xl max-h-full">
              <LazyLoadImage
                src={fullSizeImage.src}
                alt={fullSizeImage.alt}
                className="max-w-full max-h-full object-contain rounded-lg"
                effect="blur"
                onError={handleImageError}
              />
              <button
                onClick={closeFullSizeImage}
                className="absolute top-4 right-4 bg-slate-800/80 hover:bg-slate-700/80 text-white p-2 rounded-full transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="absolute bottom-4 left-4 bg-slate-800/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-white text-sm">{fullSizeImage.alt}</p>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes slideInContent {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .title-animate {
            animation: titleGlow 2s ease-out;
          }

          .subtitle-animate {
            animation: slideInContent 1s ease-out 0.5s both;
          }

          @keyframes titleGlow {
            0% {
              opacity: 0;
              transform: translateY(30px);
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
            }
            50% {
              text-shadow: 0 0 30px rgba(100, 255, 218, 0.8);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
              text-shadow: 0 0 20px rgba(255, 255, 255, 0.5),
                0 0 40px rgba(100, 255, 218, 0.3);
            }
          }

          .grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 0.75rem;
          }

          @media (min-width: 640px) {
            .grid {
              grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
              gap: 1rem;
            }
          }

          @media (min-width: 1024px) {
            .grid {
              grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
              gap: 1.5rem;
            }
          }

          .aspect-[4/3] {
            aspect-ratio: 4 / 3;
            width: 100%;
            height: auto;
          }

          img {
            max-width: 100%;
            height: auto;
            object-fit: cover;
          }
        `}</style>
      </section>
    </>
  );
};

export default ExperienceSection;
