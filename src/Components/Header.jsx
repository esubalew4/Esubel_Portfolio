import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaToggleOff, FaToggleOn } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function Header(props) {
  const isDark = props.isDark;
  const setIsDark = props.setIsDark;

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const mainNav = ["Home", "About", "Skills", "Projects"];
  const topOffset = 50;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > topOffset) {
        setShowNav(false); // hide on scroll down
      } else {
        setShowNav(true); // show on scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <motion.header
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: showNav ? 0 : -80, opacity: showNav ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 left-0 w-full z-50 ${
        showNav && window.scrollY > topOffset
          ? "bg-bg-nav backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <motion.h1
          drag
          dragConstraints={{ right: 0, left: 0, top: 0, bottom: 0 }}
          dragElastic={0.06}
          onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
          className="text-blue-400 font-bold text-2xl cursor-pointer"
        >
          Esubel <span className="text-red-600">.</span>
        </motion.h1>

        {/* Menu Toggle Button (mobile) */}
        <button
          className="text-text-primary text-2xl md:hidden z-50 fixed top-4 right-4 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>

        {/* Navigation */}
        <AnimatePresence>
          {(menuOpen || window.innerWidth >= 768) && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className={`flex flex-col md:flex-row items-center 
              absolute md:static top-0 right-0 w-screen h-screen md:w-auto md:h-auto
              bg-bg-nav md:bg-transparent md:justify-between justify-center 
              ${menuOpen ? "block" : "hidden md:flex"}`}
            >
              {/* Middle group */}
              <ul className="flex flex-col md:flex-row gap-8 md:gap-6 items-center justify-center md:flex-1">
                {mainNav.map((item) => (
                  <AnchorLink key={item} href={`#${item}`}>
                    <li
                      className="text-text-primary hover:text-accent  text-xl md:text-base transition-colors cursor-pointer"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </li>
                  </AnchorLink>
                ))}
              </ul>

              {/* Contact */}
              <div className="flex items-center mt-6 md:mt-auto gap-4  justify-end md:ml-40 lg:ml-72">
                <div className="hidden md:block">
                  {isDark ? (
                    <FaToggleOn
                      className="text-accent text-2xl cursor-pointer"
                      onClick={toggleTheme}
                    />
                  ) : (
                    <FaToggleOff
                      className="text-text-primary text-2xl cursor-pointer"
                      onClick={toggleTheme}
                    />
                  )}
                </div>
                <AnchorLink href="#contact">
                  <button
                    className="text-white text-lg bg-accent px-4 py-0.5 hover:brightness-90 rounded-sm transition-colors cursor-pointer  duration-150"
                    onClick={() => setMenuOpen(false)}
                  >
                    Contact
                  </button>
                </AnchorLink>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
      <div className="fixed right-16 top-4 md:hidden">
        {isDark ? (
          <FaToggleOn
            className="text-accent text-2xl cursor-pointer"
            onClick={toggleTheme}
          />
        ) : (
          <FaToggleOff
            className="text-text-primary text-2xl cursor-pointer"
            onClick={toggleTheme}
          />
        )}
      </div>
    </motion.header>
  );
}
