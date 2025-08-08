import React, { useEffect, useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Hero from "./Pages/Hero";
import ParticlesComponent from "./Components/Particles";
import About from "./Pages/About";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";

const App = () => {
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
      <Hero isDark={isDark} setIsDark={setIsDark} />
      <About />
      <Skills isDark={isDark} setIsDark={setIsDark} />
      <Projects />
      <Contact />
      <Footer isDark={isDark} setIsDark={setIsDark} />
    </>
  );
};

export default App;
