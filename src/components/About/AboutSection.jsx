import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionWrapper from "../Layout/SectionWrapper";
import aboutVisual from "../../assets/watch-front-view.png";

const AboutSection = () => {
  const sectionRef = useRef(null);

  // --- Entry Transforms ---
  const { scrollYProgress: rawScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "center center"],
  });

  const scroll = useSpring(rawScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const labelOpacity = useTransform(scroll, [0.1, 0.3], [0, 1]);
  const labelY = useTransform(scroll, [0.1, 0.3], [20, 0]);
  const titleOpacity = useTransform(scroll, [0.2, 0.4], [0, 1]);
  const titleY = useTransform(scroll, [0.2, 0.4], [25, 0]);
  const descOpacity = useTransform(scroll, [0.3, 0.5], [0, 1]);
  const descY = useTransform(scroll, [0.3, 0.5], [30, 0]);
  const pointsOpacity = useTransform(scroll, [0.4, 0.7], [0, 1]);
  const pointsY = useTransform(scroll, [0.4, 0.7], [35, 0]);

  const visualOpacity = useTransform(scroll, [0.3, 0.8], [0, 1]);
  const visualScale = useTransform(scroll, [0.3, 0.8], [0.95, 1]);
  const visualX = useTransform(scroll, [0.3, 0.8], [20, 0]);

  const highlights = [
    "Precision-driven sensors",
    "Continuous real-time tracking",
    "Instant alert awareness",
  ];

  return (
    <SectionWrapper
      ref={sectionRef}
      id="about"
      className="min-h-screen flex items-center py-16 lg:py-32 overflow-hidden border-t border-white/5"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center w-full">
        {/* Left Column: Text Content */}
        <div className="flex flex-col space-y-12">
          <div className="space-y-6">
            <motion.span
              style={{
                opacity: labelOpacity,
                y: labelY,
                willChange: "transform, opacity",
              }}
              className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium block"
            >
              ABOUT VITALIS
            </motion.span>
            <motion.h2
              style={{
                opacity: titleOpacity,
                y: titleY,
                willChange: "transform, opacity",
              }}
              className="text-subheader md:text-display font-display font-bold leading-tight lg:leading-[1.1] tracking-tighter text-textPrimary max-w-2xl"
            >
              Built to keep you aware of what matters most
            </motion.h2>
            <motion.p
              style={{
                opacity: descOpacity,
                y: descY,
                willChange: "transform, opacity",
              }}
              className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-normal lg:leading-[1.5] text-textSecondary font-body max-w-xl opacity-80"
            >
              Vitalis is designed around delivering clear, real-time insight
              into your body through precise temperature tracking and continuous
              monitoring—helping you stay aware, informed, and in control.
            </motion.p>
          </div>

          <motion.div
            style={{
              opacity: pointsOpacity,
              y: pointsY,
              willChange: "transform, opacity",
            }}
            className="flex flex-col gap-4 pt-8 border-t border-white/5"
          >
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
                <span className="text-smallLabel md:text-largeLabel font-body font-medium tracking-widest text-textSecondary uppercase opacity-70">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Visual */}
        <motion.div
          style={{
            opacity: visualOpacity,
            scale: visualScale,
            x: visualX,
            willChange: "transform, opacity",
          }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative group">
            {/* Ambient Background Glows */}
            <div className="absolute -inset-20 bg-accentBlue/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="absolute -inset-20 bg-accentOrange/5 blur-[120px] rounded-full opacity-50" />

            {/* The Image */}
            <div className="relative rounded-[32px] md:rounded-[48px] overflow-hidden border border-white/10 shadow-2xl bg-bgSecondary">
              <img
                src={aboutVisual}
                alt="Vitalis Premium Watch Visual"
                className="w-full max-w-[480px] max-h-[70vh] object-contain hover:scale-105 transition-transform duration-1000"
              />

              {/* Soft Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-bgPrimary/60 via-transparent to-transparent opacity-60 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-tr from-accentBlue/5 via-transparent to-accentOrange/5 opacity-40 pointer-events-none" />
            </div>

            {/* Floating Detail Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 md:-top-12 md:-right-12 bg-bgSecondary/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-accentBlue font-body font-bold tracking-[0.2em] uppercase">
                  Sensor Status
                </span>
                <span className="text-lg font-body font-bold text-textPrimary">
                  Optimized
                </span>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 bg-bgSecondary/80 backdrop-blur-xl border border-white/10 p-6 md:p-8 rounded-2xl shadow-2xl hidden md:block"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-accentOrange font-body font-bold tracking-[0.2em] uppercase">
                  Material
                </span>
                <span className="text-lg font-body font-bold text-textPrimary">
                  Aerospace Grade
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
