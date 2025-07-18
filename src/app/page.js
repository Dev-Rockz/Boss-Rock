// src/app/page.js

"use client";

import React, { useEffect, useState } from "react";
import Header from "../components/header/header";
import ProfileSection from "../components/home/homepage";
import AboutSection from "@/components/aboutMe/aboutMe";
import ProjectsSection from "@/components/projects/projects";
// import Footer from "../components/footer/footer";
// import AboutSection from "../components/aboutme/aboutsection";
import SkillsSection from "@/components/skills/skills";
import EducationAchievements from "@/components/education/education";
import ExperienceSection from "@/components/experience/experience";
import GetInTouchSection from "@/components/getInTouch/getInTouch";

function App() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowHeader(false); // scrolling down
      } else {
        setShowHeader(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Header visible={showHeader} />
      <ProfileSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationAchievements />
      <GetInTouchSection />
      {/* <Footer />  */}
    </>
  );
}

export default App;
