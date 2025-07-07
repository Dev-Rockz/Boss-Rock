import React, { useState, useEffect } from "react";

const GetInTouchSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [activeTab, setActiveTab] = useState("contact");

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log("Form submitted:", formData);
    alert("Message sent! Thanks for reaching out.");
    setFormData({ name: "", email: "", message: "" });
  };

  const socialLinks = [
    { name: "GitHub", icon: "🐙", link: "#", color: "hover:text-purple-400" },
    { name: "LinkedIn", icon: "💼", link: "#", color: "hover:text-blue-400" },
    { name: "Twitter", icon: "🐦", link: "#", color: "hover:text-sky-400" },
    { name: "Instagram", icon: "📸", link: "#", color: "hover:text-pink-400" },
  ];

  const services = [
    { name: "Web Development", icon: "🌐", desc: "Modern responsive websites" },
    { name: "UI/UX Design", icon: "🎨", desc: "Beautiful user experiences" },
    { name: "Mobile Apps", icon: "📱", desc: "iOS & Android applications" },
    { name: "Consulting", icon: "💡", desc: "Technical guidance & strategy" },
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" },
  ];

  return (
    <section
      id="contact"
      className={`min-h-screen px-8 py-12 bg-gray-900 box-border transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-white mb-4 drop-shadow-lg">
            <span className="drop-shadow-glow-white">
              Lets create something
            </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {" "}
              Amazing
            </span>
          </h2>
          <p className="text-gray-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? I'm here to help you build
            incredible digital experiences.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div
          className={`flex justify-center mb-12 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex bg-gray-800 rounded-xl p-2 border border-cyan-500/30">
            {["contact", "services", "about"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab
                    ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div
          className={`transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {activeTab === "contact" && (
            <div className="flex flex-wrap gap-8 justify-center items-start">
              {/* Contact Info */}
              <div className="flex-1 min-w-[300px] max-w-md">
                <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 mb-6">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6 drop-shadow-md">
                    Get in Touch
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-200">
                      <span className="text-cyan-400 text-xl">📍</span>
                      <span className="text-gray-300">Bohol, Philippines</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-200">
                      <span className="text-cyan-400 text-xl">📧</span>
                      <span className="text-gray-300">rocky@example.com</span>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-700/50 hover:bg-gray-700 transition-all duration-200">
                      <span className="text-cyan-400 text-xl">📞</span>
                      <span className="text-gray-300">+63 912 345 6789</span>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                  <h3 className="text-xl font-semibold text-cyan-400 mb-4">
                    Follow Me
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.link}
                        className={`flex items-center gap-2 p-3 rounded-lg bg-gray-700/50 text-gray-300 hover:bg-gray-700 transition-all duration-200 ${social.color}`}
                      >
                        <span className="text-lg">{social.icon}</span>
                        <span className="text-sm">{social.name}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="flex-1 min-w-[400px] max-w-lg">
                <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300">
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-6">
                    Send Message
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-300 mb-2 text-sm font-medium">
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="5"
                        className="w-full p-3 rounded-lg bg-gray-700 border border-gray-600 text-white placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 transition-all duration-200"
                        placeholder="Tell me about your project..."
                      ></textarea>
                    </div>
                    <button
                      onClick={handleSubmit}
                      className="w-full p-4 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:from-cyan-400 hover:to-blue-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-gray-800 transition-all duration-200 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
                    >
                      Send Message 🚀
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">
                  What I Offer
                </h3>
                <p className="text-gray-300 text-lg">
                  Professional services to bring your vision to life
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map((service, index) => (
                  <div
                    key={service.name}
                    className={`p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 animate-fadeIn`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl">{service.icon}</span>
                      <h4 className="text-xl font-semibold text-cyan-400">
                        {service.name}
                      </h4>
                    </div>
                    <p className="text-gray-300">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "about" && (
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-4">About Me</h3>
                <p className="text-gray-300 text-lg max-w-2xl mx-auto">
                  I'm a passionate developer from Bohol, Philippines, dedicated
                  to creating exceptional digital experiences that make a
                  difference.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`text-center p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-300 hover:scale-105 animate-fadeIn`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className="p-6 bg-gray-800 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  Technologies I Work With
                </h4>
                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "Node.js",
                    "JavaScript",
                    "TypeScript",
                    "Python",
                    "MongoDB",
                    "PostgreSQL",
                    "AWS",
                    "Docker",
                    "Git",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-gray-700 text-gray-300 rounded-full text-sm hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-white transition-all duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default GetInTouchSection;
