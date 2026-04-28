import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SectionWrapper from "../Layout/SectionWrapper";

const HealthSection = () => {
  const sectionRef = useRef(null);

  // --- Entry Transforms ---
  const { scrollYProgress: rawScroll } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
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
  const insightsOpacity = useTransform(scroll, [0.4, 0.6], [0, 1]);
  const insightsY = useTransform(scroll, [0.4, 0.6], [35, 0]);

  const visualOpacity = useTransform(scroll, [0.5, 0.8], [0, 1]);
  const visualY = useTransform(scroll, [0.5, 0.8], [40, 0]);
  const visualScale = useTransform(scroll, [0.5, 0.8], [0.9, 1.0]);

  // --- Exit Transforms ---
  const { scrollYProgress: rawExit } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const exit = useSpring(rawExit, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const exitOpacity = useTransform(exit, [0.4, 0.9], [1, 0]);
  const exitY = useTransform(exit, [0.4, 0.9], [0, -40]);

  // Mock data for the temperature graph
  const points = [
    { x: 0, y: 70 },
    { x: 50, y: 65 },
    { x: 100, y: 75 },
    { x: 150, y: 60 },
    { x: 200, y: 68 },
    { x: 250, y: 62 },
    { x: 300, y: 72 },
    { x: 350, y: 66 },
    { x: 400, y: 70 },
  ];

  const createSmoothPath = (data) => {
    return data.reduce((acc, point, i, a) => {
      if (i === 0) return `M ${point.x},${point.y}`;
      const prev = a[i - 1];
      const cx = (prev.x + point.x) / 2;
      return `${acc} Q ${prev.x},${prev.y} ${cx},${(prev.y + point.y) / 2} T ${point.x},${point.y}`;
    }, "");
  };

  const smoothPathData = createSmoothPath(points);

  const insights = [
    {
      title: "Daily Trends",
      description: "See how your temperature changes over time",
    },
    {
      title: "Early Signals",
      description: "Detect unusual spikes instantly",
    },
    {
      title: "Continuous Monitoring",
      description: "Stay updated throughout your day",
    },
  ];

  return (
    <SectionWrapper
      ref={sectionRef}
      id="health"
      className="min-h-screen flex items-center py-0 overflow-hidden"
    >
      <motion.div
        style={{
          opacity: exitOpacity,
          y: exitY,
          willChange: "transform, opacity",
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center w-full py-20 lg:py-48"
      >
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
              HEALTH OVERVIEW
            </motion.span>
            <motion.h2
              style={{
                opacity: titleOpacity,
                y: titleY,
                willChange: "transform, opacity",
              }}
              className="text-subheader md:text-display font-display font-bold leading-tight lg:leading-[1.1] tracking-tighter text-textPrimary max-w-2xl"
            >
              Understand your body beyond the numbers
            </motion.h2>
            <motion.p
              style={{
                opacity: descOpacity,
                y: descY,
                willChange: "transform, opacity",
              }}
              className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-none lg:leading-[1.5] text-textSecondary font-body max-w-xl opacity-80"
            >
              Vitalis transforms real-time temperature data into meaningful
              insights, helping you recognize patterns and stay aware of your
              health.
            </motion.p>
          </div>

          <motion.div
            style={{
              opacity: insightsOpacity,
              y: insightsY,
              willChange: "transform, opacity",
            }}
            className="grid grid-cols-1 gap-8 pt-4 border-t border-white/5"
          >
            {insights.map((item, i) => (
              <div key={i} className="group flex flex-col space-y-1">
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accentBlue" />
                  <h4 className="text-largeBody font-body font-semibold text-textPrimary group-hover:text-accentBlue transition-colors duration-300">
                    {item.title}
                  </h4>
                </div>
                <p className="text-smallBody font-body text-textSecondary opacity-70">
                  {item.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Column: Minimal Visual */}
        <motion.div
          style={{
            opacity: visualOpacity,
            y: visualY,
            scale: visualScale,
            willChange: "transform, opacity",
          }}
          className="relative flex justify-center lg:justify-end"
        >
          {/* Expensive Floating Card */}
          <div className="relative w-full max-w-[500px] aspect-[4/5] bg-[#0B1220]/40 backdrop-blur-3xl border border-white/10 rounded-2xl md:rounded-[64px] p-12 overflow-hidden shadow-2xl flex flex-col justify-between">
            {/* Soft Ambient Glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-accentOrange/5 blur-[100px] rounded-full -mr-20 -mt-20" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accentBlue/5 blur-[100px] rounded-full -ml-20 -mb-20" />

            {/* Header of the visual */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
              <span className="text-[10px] font-bold text-textSecondary tracking-[0.3em] uppercase opacity-50">
                Body Temperature
              </span>
              <div className="text-7xl font-display font-bold text-textPrimary tracking-tighter">
                36.5<span className="text-3xl opacity-30 ml-1">°C</span>
              </div>
              <div className="px-4 py-1.5 rounded-full bg-accentOrange/10 border border-accentOrange/20 text-accentOrange text-[10px] font-bold tracking-widest uppercase shadow-glowOrange/10">
                Stable
              </div>
            </div>

            {/* Minimal Graph Area - Refined */}
            <div className="relative h-64 w-full mt-8 bg-[#05070D]/60 rounded-2xl md:rounded-[40px] border border-white/5 p-10 overflow-hidden group/viz shadow-inner">
              {/* Noise Texture Overlay (Inline SVG for reliability) */}
              <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay">
                <svg width="100%" height="100%">
                  <filter id="noiseFilter">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.8"
                      numOctaves="4"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noiseFilter)" />
                </svg>
              </div>

              {/* Healthy Zone Background */}
              <div className="absolute inset-x-0 top-1/3 bottom-1/4 bg-accentBlue/[0.03] border-y border-white/[0.03] backdrop-blur-sm" />

              <svg
                viewBox="0 0 400 120"
                className="absolute inset-0 w-full h-full p-10"
                preserveAspectRatio="none"
              >
                {/* 1. Deep Atmospheric Glow */}
                <motion.path
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2 }}
                  d={smoothPathData}
                  fill="none"
                  stroke="url(#elegantLineGradient)"
                  strokeWidth="20"
                  className="blur-2xl"
                />

                {/* 2. Main High-Precision Line */}
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.5, ease: [0.43, 0.13, 0.23, 0.96] }}
                  d={smoothPathData}
                  fill="none"
                  stroke="url(#expensiveLineGradient)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />

                <defs>
                  <linearGradient
                    id="expensiveLineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="30%" stopColor="#F59E0B" />
                    <stop offset="50%" stopColor="#FFFFFF" />
                    <stop offset="70%" stopColor="#2B82F6" />
                    <stop offset="100%" stopColor="#2B82F6" />
                  </linearGradient>
                  <linearGradient
                    id="elegantLineGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#2B82F6" />
                  </linearGradient>
                </defs>
              </svg>

              {/* Cinematic Scanning Line */}
              <motion.div
                animate={{ x: ["0%", "400%"] }}
                transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
                className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-transparent via-white/[0.05] to-transparent skew-x-12 pointer-events-none"
              />

              {/* Data Annotations & Floating Elements */}
              <div className="absolute inset-0 p-10 pointer-events-none">
                <div className="relative w-full h-full">
                  {/* Min/Max Floating Labels */}
                  <div className="absolute top-0 right-0 text-[8px] font-bold text-textSecondary uppercase tracking-widest flex flex-col items-end gap-1 opacity-40">
                    <span>Peak: 37.2°C</span>
                    <span>Low: 36.1°C</span>
                  </div>

                  {/* Healthy Zone Tag - Refined */}
                  <div className="absolute top-[38%] left-4 flex items-center gap-2">
                    <div className="w-1 h-[1px] bg-accentBlue/30" />
                    <span className="text-[7px] font-bold text-accentBlue/40 uppercase tracking-[0.3em]">
                      Healthy Range
                    </span>
                  </div>

                  {/* The Cinematic Dot */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                    style={{
                      position: "absolute",
                      left: "100%",
                      top: `${(70 / 120) * 100}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Lens Flare / Glow Layers */}
                    <div className="relative flex items-center justify-center">
                      <div className="absolute w-12 h-12 bg-white/20 blur-xl rounded-full animate-pulse" />
                      <div className="absolute w-4 h-4 bg-accentBlue/40 blur-md rounded-full" />
                      <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_15px_white] z-10" />

                      {/* Interactive Pulse Circle */}
                      <div className="absolute w-8 h-8 border border-white/20 rounded-full animate-ping opacity-20" />
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Footer of the visual */}
            <div className="relative z-10 pt-8 border-t border-white/5 flex justify-between items-center text-[10px] font-bold text-textSecondary uppercase tracking-widest opacity-60">
              <span>Sync Status: 100%</span>
              <span>Updated: Just Now</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </SectionWrapper>
  );
};

export default HealthSection;
