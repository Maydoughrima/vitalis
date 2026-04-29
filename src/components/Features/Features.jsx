import React, { useRef, useMemo } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import WatchLeftView from "../../assets/watch-left-view.png";
import WatchRightView from "../../assets/watch-right-view.png";
import FeatureCard from "./FeatureCard";
import { FEATURECARDS } from "../../constants/designSystem";
import Button from "../Buttons/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Features() {
  // --- Section 1 Refs & Transforms ---
  const section1Ref = useRef(null);
  const { scrollYProgress: rawScroll1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "start start"],
  });

  const scroll1 = useSpring(rawScroll1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Staggered Entry (Text before Image)
  const label1Opacity = useTransform(scroll1, [0.1, 0.3], [0, 1]);
  const label1Y = useTransform(scroll1, [0.1, 0.3], [20, 0]);
  const title1Opacity = useTransform(scroll1, [0.2, 0.4], [0, 1]);
  const title1Y = useTransform(scroll1, [0.2, 0.4], [25, 0]);
  const desc1Opacity = useTransform(scroll1, [0.3, 0.5], [0, 1]);
  const desc1Y = useTransform(scroll1, [0.3, 0.5], [30, 0]);

  // Visuals follow text
  const visual1Opacity = useTransform(scroll1, [0.5, 0.8], [0, 1]);
  const visual1Y = useTransform(scroll1, [0.5, 0.8], [40, 0]);
  const visual1Scale = useTransform(scroll1, [0.5, 0.8], [0.8, 1.0]);
  const ui1Opacity = useTransform(scroll1, [0.7, 0.9], [0, 1]);

  // --- Section 1 Exit ---
  const { scrollYProgress: rawExit1 } = useScroll({
    target: section1Ref,
    offset: ["start start", "end start"],
  });

  const exit1 = useSpring(rawExit1, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const exitOpacity1 = useTransform(exit1, [0.4, 0.9], [1, 0]);
  const exitY1 = useTransform(exit1, [0.4, 0.9], [0, -40]);

  // --- Section 2 Refs & Transforms ---
  const section2Ref = useRef(null);
  const { scrollYProgress: rawScroll2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "start start"],
  });

  const scroll2 = useSpring(rawScroll2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Staggered Entry (Text before Image)
  const label2Opacity = useTransform(scroll2, [0.1, 0.3], [0, 1]);
  const label2Y = useTransform(scroll2, [0.1, 0.3], [20, 0]);
  const title2Opacity = useTransform(scroll2, [0.2, 0.4], [0, 1]);
  const title2Y = useTransform(scroll2, [0.2, 0.4], [25, 0]);
  const desc2Opacity = useTransform(scroll2, [0.3, 0.5], [0, 1]);
  const desc2Y = useTransform(scroll2, [0.3, 0.5], [30, 0]);

  // Visuals follow text
  const visual2Opacity = useTransform(scroll2, [0.5, 0.8], [0, 1]);
  const visual2Y = useTransform(scroll2, [0.5, 0.8], [40, 0]);
  const visual2Scale = useTransform(scroll2, [0.5, 0.8], [0.8, 1.0]);
  const ui2Opacity = useTransform(scroll2, [0.7, 0.9], [0, 1]);

  // --- Section 2 Exit ---
  const { scrollYProgress: rawExit2 } = useScroll({
    target: section2Ref,
    offset: ["start start", "end start"],
  });

  const exit2 = useSpring(rawExit2, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const exitOpacity2 = useTransform(exit2, [0.4, 0.9], [1, 0]);
  const exitY2 = useTransform(exit2, [0.4, 0.9], [0, -40]);

  // --- Section 3 Refs & Transforms ---
  const section3Ref = useRef(null);
  const { scrollYProgress: rawScroll3 } = useScroll({
    target: section3Ref,
    offset: ["start end", "start start"],
  });

  const scroll3 = useSpring(rawScroll3, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Staggered Entry (Text before Image)
  const label3Opacity = useTransform(scroll3, [0.1, 0.3], [0, 1]);
  const label3Y = useTransform(scroll3, [0.1, 0.3], [20, 0]);
  const title3Opacity = useTransform(scroll3, [0.2, 0.4], [0, 1]);
  const title3Y = useTransform(scroll3, [0.2, 0.4], [25, 0]);
  const desc3Opacity = useTransform(scroll3, [0.3, 0.5], [0, 1]);
  const desc3Y = useTransform(scroll3, [0.3, 0.5], [30, 0]);

  // Visuals follow text
  const visual3Opacity = useTransform(scroll3, [0.5, 0.8], [0, 1]);
  const visual3Y = useTransform(scroll3, [0.5, 0.8], [40, 0]);
  const visual3Scale = useTransform(scroll3, [0.5, 0.8], [0.8, 1.0]);
  const ui3Opacity = useTransform(scroll3, [0.7, 0.9], [0, 1]);

  // --- Section 3 Exit ---
  const { scrollYProgress: rawExit3 } = useScroll({
    target: section3Ref,
    offset: ["start start", "end start"],
  });

  const exit3 = useSpring(rawExit3, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const exitOpacity3 = useTransform(exit3, [0.4, 0.9], [1, 0]);
  const exitY3 = useTransform(exit3, [0.4, 0.9], [0, -40]);

  return (
    <>
      {/* FEATURE 1 */}
      <SectionWrapper
        ref={section1Ref}
        id="features"
        className="min-h-screen flex items-center py-0"
      >
        <motion.div
          style={{
            opacity: exitOpacity1,
            y: exitY1,
            willChange: "transform, opacity",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full py-20 lg:py-20 items-center"
        >
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full order-1">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <motion.span
                  style={{
                    opacity: label1Opacity,
                    y: label1Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  Features
                </motion.span>
                <motion.h2
                  style={{
                    opacity: title1Opacity,
                    y: title1Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
                >
                  Built for real-time health intelligence
                </motion.h2>
              </div>
              <motion.p
                style={{
                  opacity: desc1Opacity,
                  y: desc1Y,
                  willChange: "transform, opacity",
                }}
                className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-none lg:leading-[1.5] text-textSecondary font-body max-w-[500px]"
              >
                Advanced sensors and smart systems designed for accuracy,
                safety, and real-world performance.
              </motion.p>
            </div>
          </div>

          {/* Visual / Product Image */}
          <motion.div
            style={{
              opacity: visual1Opacity,
              y: visual1Y,
              scale: visual1Scale,
              willChange: "transform, opacity",
            }}
            className="w-full flex items-center justify-center relative order-2 lg:row-span-2 group"
          >
            <motion.div
              style={{ opacity: ui1Opacity, willChange: "opacity" }}
              className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none"
            >
              <div className="w-full h-full transition-opacity duration-700 opacity-10 group-hover:opacity-100">
                {/* Ultra Soft Bloom */}
                <div className="absolute inset-[-20%] bg-accentBlue/[0.02] blur-[200px] md:blur-[300px] rounded-full" />
                {/* Soft Outer Bloom */}
                <div className="absolute inset-0 bg-accentBlue/[0.03] blur-[150px] md:blur-[220px] rounded-full" />
                {/* Inner Focused Glow */}
                <div className="absolute inset-[20%] bg-accentBlue/[0.06] blur-[80px] md:blur-[120px] rounded-full" />
              </div>
            </motion.div>
            <img
              src={WatchLeftView}
              alt="Vitalis Watch Left View"
              className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[-8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {FEATURECARDS.filter((item) => item.id === "heartRate").map(
              (item) => (
                <motion.div
                  key={item.id}
                  style={{ opacity: ui1Opacity, willChange: "opacity" }}
                >
                  <FeatureCard
                    data={item}
                    className="absolute bottom-[15%] left-4 lg:-left-8 xl:-left-14 z-20 hidden sm:flex"
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Sub-Features Content */}
          <motion.div
            style={{
              opacity: desc1Opacity,
              y: desc1Y,
              willChange: "transform, opacity",
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 md:gap-4 order-3 lg:mt-[-40px]"
          >
            <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3">
              <span className="text-smallLabel lg:text-largeLabel font-medium tracking-[0.12em] text-textSecondary uppercase">
                Health Monitoring
              </span>
              <h3 className="text-subheader font-semibold text-textPrimary tracking-tight leading-none lg:leading-[1.5]">
                Real-time heart rate tracking
              </h3>
            </div>
            <p className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] font-body text-textSecondary leading-[1.5] tracking-[0.12em] max-w-md">
              Track your heart rate with precision using advanced sensors,
              giving you real-time insights for better health decisions.
            </p>
          </motion.div>
        </motion.div>
      </SectionWrapper>

      {/* FEATURE 2 */}
      <SectionWrapper
        ref={section2Ref}
        className="min-h-screen flex items-center py-0"
      >
        <motion.div
          style={{
            opacity: exitOpacity2,
            y: exitY2,
            willChange: "transform, opacity",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full py-20 lg:py-20 items-center"
        >
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-left h-full order-1 lg:order-2">
            <div className="flex flex-col items-center lg:items-start gap-4 max-w-[500px]">
              <div className="flex flex-col items-center lg:items-start gap-3 w-full">
                <motion.span
                  style={{
                    opacity: label2Opacity,
                    y: label2Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  ECOSYSTEM
                </motion.span>
                <motion.h2
                  style={{
                    opacity: title2Opacity,
                    y: title2Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
                >
                  Powered by the Vitalis health core
                </motion.h2>
              </div>
              <motion.p
                style={{
                  opacity: desc2Opacity,
                  y: desc2Y,
                  willChange: "transform, opacity",
                }}
                className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-none lg:leading-[1.5] text-textSecondary font-body"
              >
                Your body temperature data flows seamlessly through the Vitalis
                system, working alongside other health metrics to deliver a
                complete, real-time wellness overview.
              </motion.p>
            </div>
          </div>

          {/* Visual / Product Image */}
          <motion.div
            style={{
              opacity: visual2Opacity,
              y: visual2Y,
              scale: visual2Scale,
              willChange: "transform, opacity",
            }}
            className="w-full flex items-center justify-center relative order-2 lg:order-1 lg:row-span-2 group"
          >
            <motion.div
              style={{ opacity: ui2Opacity, willChange: "opacity" }}
              className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none"
            >
              <div className="w-full h-full transition-opacity duration-700 opacity-10 group-hover:opacity-100">
                {/* Ultra Soft Bloom */}
                <div className="absolute inset-[-20%] bg-accentOrange/[0.02] blur-[200px] md:blur-[300px] rounded-full" />
                {/* Soft Outer Bloom */}
                <div className="absolute inset-0 bg-accentOrange/[0.03] blur-[150px] md:blur-[220px] rounded-full" />
                {/* Inner Focused Glow */}
                <div className="absolute inset-[20%] bg-accentOrange/[0.06] blur-[80px] md:blur-[120px] rounded-full" />
              </div>
            </motion.div>
            <img
              src={WatchRightView}
              alt="Vitalis Watch Right View"
              className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {FEATURECARDS.filter((item) => item.id === "bodyTemp").map(
              (item) => (
                <motion.div
                  key={item.id}
                  style={{ opacity: ui2Opacity, willChange: "opacity" }}
                >
                  <FeatureCard
                    data={item}
                    className="absolute bottom-[15%] right-4 lg:-right-8 xl:-right-14 z-20 hidden sm:flex"
                  />
                </motion.div>
              ),
            )}
          </motion.div>

          {/* Sub-Features Content */}
          <motion.div
            style={{
              opacity: desc2Opacity,
              y: desc2Y,
              willChange: "transform, opacity",
            }}
            className="flex flex-col items-center lg:items-end text-center lg:text-left gap-2 md:gap-4 order-3 lg:order-2 lg:mt-[-40px]"
          >
            <div className="flex flex-col items-center lg:items-start gap-2 md:gap-4 max-w-[500px] w-full">
              <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3 w-full">
                <span className="text-smallLabel lg:text-largeLabel font-medium tracking-[0.12em] text-textSecondary uppercase">
                  HEALTH INSIGHTS
                </span>
                <h3 className="text-subheader font-semibold text-textPrimary tracking-tight leading-none lg:leading-[1.5]">
                  Body temperature monitoring in real time
                </h3>
              </div>
              <p className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] font-body text-textSecondary leading-[1.5] tracking-[0.12em]">
                Track your body temperature instantly with precision sensors
                designed for continuous health awareness.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
      {/* FEATURE 3 */}
      <SectionWrapper
        ref={section3Ref}
        id="safety"
        className="min-h-screen flex items-center py-0"
      >
        <motion.div
          style={{
            opacity: exitOpacity3,
            y: exitY3,
            willChange: "transform, opacity",
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full py-20 lg:py-20 items-center"
        >
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full order-1">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <motion.span
                  style={{
                    opacity: label3Opacity,
                    y: label3Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  SAFETY ALERTS
                </motion.span>
                <motion.h2
                  style={{
                    opacity: title3Opacity,
                    y: title3Y,
                    willChange: "transform, opacity",
                  }}
                  className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(239,68,68,0.08)]"
                >
                  Real-time alerts when your temperature changes
                </motion.h2>
              </div>
              <motion.p
                style={{
                  opacity: desc3Opacity,
                  y: desc3Y,
                  willChange: "transform, opacity",
                }}
                className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] leading-none lg:leading-[1.5] text-textSecondary font-body max-w-[500px]"
              >
                Get notified instantly when your body temperature rises or drops
                beyond normal levels, helping you respond quickly and stay aware
                of potential health risks.
              </motion.p>
            </div>
          </div>

          {/* Visual / Product Image */}
          <motion.div
            style={{
              opacity: visual3Opacity,
              y: visual3Y,
              scale: visual3Scale,
              willChange: "transform, opacity",
            }}
            className="w-full flex items-center justify-center relative order-2 lg:row-span-2 group"
          >
            <motion.div
              style={{ opacity: ui3Opacity, willChange: "opacity" }}
              className="absolute w-[400px] h-[400px] md:w-[700px] md:h-[700px] pointer-events-none"
            >
              <div className="w-full h-full transition-opacity duration-700 opacity-10 group-hover:opacity-100">
                {/* Ultra Soft Bloom */}
                <div className="absolute inset-[-20%] bg-accentRed/[0.02] blur-[200px] md:blur-[300px] rounded-full" />
                {/* Soft Outer Bloom */}
                <div className="absolute inset-0 bg-accentRed/[0.03] blur-[150px] md:blur-[220px] rounded-full" />
                {/* Inner Focused Glow */}
                <div className="absolute inset-[20%] bg-accentRed/[0.06] blur-[80px] md:blur-[120px] rounded-full" />
              </div>
            </motion.div>
            <img
              src={WatchLeftView}
              alt="Vitalis Watch Safety View"
              className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[-8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {FEATURECARDS.filter((item) => item.id === "safety").map((item) => (
              <motion.div
                key={item.id}
                style={{ opacity: ui3Opacity, willChange: "opacity" }}
              >
                <FeatureCard
                  data={item}
                  className="absolute bottom-[15%] left-4 lg:-left-8 xl:-left-14 z-20 hidden sm:flex"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Sub-Features Content */}
          <motion.div
            style={{
              opacity: desc3Opacity,
              y: desc3Y,
              willChange: "transform, opacity",
            }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left gap-2 md:gap-4 order-3 lg:mt-[-40px]"
          >
            <div className="flex flex-col items-center lg:items-start gap-1 lg:gap-3">
              <span className="text-smallLabel lg:text-largeLabel font-medium tracking-[0.12em] text-textSecondary uppercase">
                SAFETY CONTROL
              </span>
              <h3 className="text-subheader font-semibold text-textPrimary tracking-tight leading-none lg:leading-[1.5]">
                Stay in control when it matters most
              </h3>
            </div>
            <div className="flex flex-col gap-4 lg:gap-6 items-center lg:items-start">
              <p className="text-smallBody md:text-largeBody tracking-wide lg:tracking-[0.12em] font-body text-textSecondary leading-[1.5] tracking-[0.12em] max-w-md">
                Clear, timely alerts help you respond instantly to temperature
                changes, keeping you aware, focused, and in control of your
                health at all times.
              </p>
              <motion.div
                style={{
                  opacity: desc3Opacity,
                  y: desc3Y,
                  willChange: "transform, opacity",
                }}
              >
                <Button variant="primary">See how vitalis work</Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
