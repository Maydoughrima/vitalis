import React, { useState } from "react";
import { PiDotOutlineFill } from "react-icons/pi";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
import Button from "../Buttons/Button";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  React.useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-15% 0px -80% 0px", // Focus on the top part of the screen
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    const sections = ["home", "features", "health", "about"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("home");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Features", id: "features" },
    { name: "Health", id: "health" },
    { name: "About", id: "about" },
  ];

  return (
    <>
      {/* Fixed Sticky Navbar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex justify-center px-6 md:px-12 lg:px-20 pt-4 pointer-events-none"
      >
        <nav className="pointer-events-auto relative w-full max-w-[1200px] flex justify-between p-2 lg:p-4 bg-[rgba(5,7,13,0.65)] backdrop-blur-[16px] shadow-nav border border-[rgba(255,255,255,0.2)] rounded-[8px] lg:rounded-[16px] items-center">
          <div className="Logo flex items-center">
            <p className="font-display font-bold text-[15px] lg:text-[22px]  text-textPrimary">
              VITALIS
            </p>
            <PiDotOutlineFill className="text-accentBlue lg:text-3xl" />
          </div>

          {/* links */}
          <ul className="gap-4 font-body text-textSecondary hidden md:flex items-center">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className={`text-largeLabel transition-all duration-300 ${
                    activeSection === link.id
                      ? "text-activeBlue font-semibold"
                      : "hover:text-accentBlue"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* cta */}
          <Button variant="navButton" className="hidden md:block">
            Get Started
          </Button>

          {/* menu burger */}
          <div
            className="menu bar md:hidden cursor-pointer p-2 relative z-50"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoCloseOutline className="text-accentBlue text-3xl transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] rotate-90 scale-110" />
            ) : (
              <IoMenuOutline className="text-accentBlue text-3xl transition-transform duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]" />
            )}
          </div>
        </nav>
      </motion.div>

      {/* mobile drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-[100dvh] bg-[rgba(5,7,13,0.98)] backdrop-blur-2xl z-40 flex flex-col pt-[100px] px-6 md:hidden transition-all duration-[700ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isOpen
            ? "translate-y-0 opacity-100 visible"
            : "-translate-y-full opacity-0 invisible"
        }`}
      >
        <ul
          className={`flex flex-col gap-6 font-display text-textPrimary mt-8 transition-all duration-[800ms] delay-100 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-medium block border-b border-[rgba(255,255,255,0.1)] pb-4 transition-colors ${
                  activeSection === link.id ? "text-activeBlue" : "hover:text-accentBlue"
                }`}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div
          className={`mt-auto mb-12 transition-all duration-[800ms] delay-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          <Button variant="navButton" className="w-full text-defaultCta">
            Get Started
          </Button>
        </div>
      </div>
    </>
  );
}
