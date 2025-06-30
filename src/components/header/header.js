import React, { useState } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "skills", label: "Skills" },
    { to: "projects", label: "Projects" },
    { to: "experience", label: "Experience" },
    { to: "education", label: "Education" },
    { to: "contact", label: "Get in Touch" },
  ];

  return (
    <header className="fixed top-0 w-full bg-[#282c34] text-white px-8 h-20 box-border z-[1000] flex items-center justify-between">
      {/* Logo */}
      <div className="text-2xl font-bold">Dev Rockz</div>

      {/* Hamburger Icon */}
      <div
        className="md:hidden flex flex-col gap-1 cursor-pointer"
        onClick={toggleMenu}
      >
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
        <span className="w-6 h-[3px] bg-white rounded-sm"></span>
      </div>

      {/* Navigation Links */}
      <nav
        className={`
          ${menuOpen ? "flex" : "hidden"} 
          md:flex 
          flex-col md:flex-row 
          gap-6 md:gap-6
          md:static 
          absolute top-20 left-0 right-0 
          bg-[#282c34] md:bg-transparent 
          px-4 py-4 md:p-0 
          items-center
        `}
      >
        {navLinks.map((link) => (
          <Link
            key={link.to}
            to={link.to}
            smooth={true}
            duration={600}
            offset={-80}
            onClick={closeMenu}
            spy={true}
            activeClass="!text-[#61dafb] !font-bold"
            className="text-white text-base cursor-pointer transition-colors duration-300 hover:text-[#61dafb]"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;