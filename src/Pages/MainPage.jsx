import React, { useEffect, useState } from "react";
import ParticlesComponent from "../Components/Particles";
import Header from "../Components/Header";
import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "../Components/Footer";

const MainPage = () => {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? savedTheme === "dark" : true;
  });

  useEffect(() => {
    const theme = isDark ? "dark" : "light";
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDark]);
  return (
    <>
      {" "}
      <ParticlesComponent id="particles" />
      <Header isDark={isDark} setIsDark={setIsDark} />
      <Hero />
      <About />
      <Skills isDark={isDark} setIsDark={setIsDark} />
      <Projects />
      <Contact />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
};

export default MainPage;
