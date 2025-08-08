import { assets } from "../assets/assets";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { FiMail, FiMessageCircle, FiPhone } from "react-icons/fi";

const Footer = (props) => {
  const isDark = props.isDark;
  return (
    <>
      <footer className="mt-10 bg-bg-footer flex flex-col justify-around gap-6 pt-8 pb-4 px-4 relative overflow-hidden text-text-primary">
        {/* Background pattern */}
        <img
          src={assets.trianglePattern}
          className={`absolute ${
            isDark ? "opacity-5" : "opacity-20"
          } -bottom-8 md:bottom-auto w-screen left-0`}
          alt="triangle pattern"
        />

        <div className="flex w-full justify-around items-center px-10 flex-col gap-12 md:flex-row relative z-10">
          {/* Left: Logo & description */}
          <div className="flex flex-col items-start text-sm gap-2 max-w-80">
            <h1
              onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
              className="text-secondary text-2xl flex items-center gap-1 cursor-pointer"
            >
              Esubel
              <span className="text-red-600 ">.</span>
            </h1>

            <p className="py-2 font-medium text-sm">
              <span className="text-lg">Let's Build Something Amazing!</span>
              <br />
              Whether it's a website, app, or just a chat. I'd love to hear from
              you.
            </p>

            <a
              href="https://github.com/esubalew4"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 px-8 py-2 bg-gray-500/50 shadow-2xl cursor-pointer hover:bg-bg-primary/20 font-medium duration-150"
            >
              Github
            </a>
          </div>

          {/* Right: Contact links */}
          <div className="flex md:gap-18 gap-10 flex-wrap justify-center">
            <div className="brightness-90 flex flex-col gap-3 text-secondary">
              <h1 className="text-[16px] font-medium mb-2">Stay In Touch</h1>

              {/* Phone */}
              <a
                href="tel:+251942143313"
                className="flex items-center gap-2 hover:underline"
              >
                <FiPhone
                  size={30}
                  className="border text-accent border-accent/20 bg-blue/10  p-1 rounded"
                />
                +251 94 214 3313
              </a>
              <a
                href="mailto:esubalewhussen4@gmail.com"
                className="flex items-center gap-2 hover:underline"
              >
                <FiMail
                  size={30}
                  className="border text-accent border-accent/20 bg-blue/10  p-1 rounded"
                />
                esubalewhussen4@gmail.com
              </a>
            </div>
          </div>
        </div>
        <div className="space-y-2 z-50">
          <h1 className=" text-center text-sm text-text-primary">
            &copy; 2025 Esubel. All projects are my own work.
          </h1>
          <p className="text-center text-xs text-text-primary/70 select-none">
            Developed by{" "}
            <a
              href="https://linkedin.com/in/your-linkedin"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-accent"
            >
              Esubalew
            </a>
            .
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
