import React, { useRef } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import WatchLeftView from "../../assets/watch-left-view.png";
import FeatureCard from "./FeatureCard";
import { FEATURECARDS } from "../../constants/designSystem";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "start start"],
  });

  // 1. Text Content (Appears as Hero is fading - staggered internally)
  const labelOpacity = useTransform(scrollYProgress, [0.4, 0.6], [0, 1]);
  const labelY = useTransform(scrollYProgress, [0.4, 0.6], [20, 0]);

  const titleOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const titleY = useTransform(scrollYProgress, [0.5, 0.7], [25, 0]);

  const descOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const descY = useTransform(scrollYProgress, [0.6, 0.8], [30, 0]);

  // 2. Visual / Product Image (Appears next)
  const visualOpacity = useTransform(scrollYProgress, [0.7, 0.9], [0, 1]);
  const visualY = useTransform(scrollYProgress, [0.7, 0.9], [40, 0]);
  const visualScale = useTransform(scrollYProgress, [0.7, 1.0], [0.8, 1.0]);

  // 3. UI Elements (Glows / Cards - Appear last)
  const uiOpacity = useTransform(scrollYProgress, [0.8, 1.0], [0, 1]);

  return (
    <SectionWrapper
      ref={sectionRef}
      className="min-h-screen flex items-center py-0"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full py-12 md:py-20 items-center">
        {/* 1. Main Text Content (Top on Mobile, Left on Desktop) */}
        <div className="flex flex-col items-start justify-center lg:text-left h-full order-1">
          <div className="flex flex-col items-start gap-4">
            <div className="flex flex-col items-start gap-3">
              <motion.span
                style={{ opacity: labelOpacity, y: labelY }}
                className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
              >
                Features
              </motion.span>
              <motion.h2
                style={{ opacity: titleOpacity, y: titleY }}
                className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
              >
                Built for real-time health intelligence
              </motion.h2>
            </div>
            <motion.p
              style={{ opacity: descOpacity, y: descY }}
              className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-none lg:leading-[1.5] text-textSecondary font-body max-w-[500px]"
            >
              Advanced sensors and smart systems designed for accuracy, safety,
              and real-world performance.
            </motion.p>
          </div>
        </div>

        {/* 2. Visual / Product Image (Middle on Mobile, Right on Desktop) */}
        <motion.div
          style={{ opacity: visualOpacity, y: visualY, scale: visualScale }}
          className="w-full flex items-center justify-center relative order-2 lg:row-span-2"
        >
          {/* Group 3: Ambient Glow (Appears last) */}
          <motion.div
            style={{ opacity: uiOpacity }}
            className="absolute w-[600px] h-[600px] bg-[#2B82F6]/[0.03] blur-[300px] rounded-full pointer-events-none"
          />

          <img
            src={WatchLeftView}
            alt="Vitalis Watch Left View"
            className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[-8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
          />

          {FEATURECARDS.filter((item) => item.id === "heartRate").map(
            (item) => (
              <motion.div key={item.id} style={{ opacity: uiOpacity }}>
                <FeatureCard
                  data={item}
                  className="absolute bottom-[15%] left-4 lg:-left-8 xl:-left-14 z-20 hidden sm:flex"
                />
              </motion.div>
            ),
          )}
        </motion.div>

        {/* 3. Sub-Features Content (Bottom on Mobile, Below Main Text on Desktop) */}
        <motion.div
          style={{ opacity: descOpacity, y: descY }}
          className="flex flex-col items-start gap-2 md:gap-4 order-3 lg:mt-[-40px]"
        >
          <div className="flex flex-col items-start gap-1 lg:gap-3">
            <span className="text-smallLabel lg:text-largeLabel font-medium tracking-[0.12em] text-textSecondary uppercase">
              Health Monitoring
            </span>
            <h3 className="text-subheader font-semibold text-textPrimary tracking-tight leading-none lg:leading-[1.5]">
              Real-time heart rate tracking
            </h3>
          </div>
          <p className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] font-body text-textSecondary leading-[1.5] tracking-[0.12em] max-w-md">
            Track your heart rate with precision using advanced sensors, giving
            you real-time insights for better health decisions.
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
