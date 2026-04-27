import React, { useRef } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import WatchLeftView from "../../assets/watch-left-view.png";
import WatchRightView from "../../assets/watch-right-view.png";
import FeatureCard from "./FeatureCard";
import { FEATURECARDS } from "../../constants/designSystem";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Features() {
  // --- Section 1 Refs & Transforms ---
  const section1Ref = useRef(null);
  const { scrollYProgress: scroll1 } = useScroll({
    target: section1Ref,
    offset: ["start end", "start start"],
  });

  const label1Opacity = useTransform(scroll1, [0.4, 0.6], [0, 1]);
  const label1Y = useTransform(scroll1, [0.4, 0.6], [20, 0]);
  const title1Opacity = useTransform(scroll1, [0.5, 0.7], [0, 1]);
  const title1Y = useTransform(scroll1, [0.5, 0.7], [25, 0]);
  const desc1Opacity = useTransform(scroll1, [0.6, 0.8], [0, 1]);
  const desc1Y = useTransform(scroll1, [0.6, 0.8], [30, 0]);
  const visual1Opacity = useTransform(scroll1, [0.7, 0.9], [0, 1]);
  const visual1Y = useTransform(scroll1, [0.7, 0.9], [40, 0]);
  const visual1Scale = useTransform(scroll1, [0.7, 1.0], [0.8, 1.0]);
  const ui1Opacity = useTransform(scroll1, [0.8, 1.0], [0, 1]);

  // --- Section 2 Refs & Transforms ---
  const section2Ref = useRef(null);
  const { scrollYProgress: scroll2 } = useScroll({
    target: section2Ref,
    offset: ["start end", "start start"],
  });

  const label2Opacity = useTransform(scroll2, [0.4, 0.6], [0, 1]);
  const label2Y = useTransform(scroll2, [0.4, 0.6], [20, 0]);
  const title2Opacity = useTransform(scroll2, [0.5, 0.7], [0, 1]);
  const title2Y = useTransform(scroll2, [0.5, 0.7], [25, 0]);
  const desc2Opacity = useTransform(scroll2, [0.6, 0.8], [0, 1]);
  const desc2Y = useTransform(scroll2, [0.6, 0.8], [30, 0]);
  const visual2Opacity = useTransform(scroll2, [0.7, 0.9], [0, 1]);
  const visual2Y = useTransform(scroll2, [0.7, 0.9], [40, 0]);
  const visual2Scale = useTransform(scroll2, [0.7, 1.0], [0.8, 1.0]);
  const ui2Opacity = useTransform(scroll2, [0.8, 1.0], [0, 1]);

  return (
    <>
      {/* FEATURE 1 */}
      <SectionWrapper
        ref={section1Ref}
        id="features"
        className="min-h-screen flex items-center py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full py-20 lg:py-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-start justify-center text-center lg:text-left h-full order-1">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center lg:items-start gap-3">
                <motion.span
                  style={{ opacity: label1Opacity, y: label1Y }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  Features
                </motion.span>
                <motion.h2
                  style={{ opacity: title1Opacity, y: title1Y }}
                  className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
                >
                  Built for real-time health intelligence
                </motion.h2>
              </div>
              <motion.p
                style={{ opacity: desc1Opacity, y: desc1Y }}
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
            }}
            className="w-full flex items-center justify-center relative order-2 lg:row-span-2"
          >
            <motion.div
              style={{ opacity: ui1Opacity }}
              className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#2B82F6]/[0.06] blur-[150px] md:blur-[200px] rounded-full pointer-events-none"
            />
            <img
              src={WatchLeftView}
              alt="Vitalis Watch Left View"
              className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[-8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {FEATURECARDS.filter((item) => item.id === "heartRate").map(
              (item) => (
                <motion.div key={item.id} style={{ opacity: ui1Opacity }}>
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
            style={{ opacity: desc1Opacity, y: desc1Y }}
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
        </div>
      </SectionWrapper>

      {/* FEATURE 2 */}
      <SectionWrapper
        ref={section2Ref}
        className="min-h-screen flex items-center py-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 w-full py-20 lg:py-20 items-center">
          {/* Text Content */}
          <div className="flex flex-col items-center lg:items-end justify-center text-center lg:text-left h-full order-1 lg:order-2">
            <div className="flex flex-col items-center lg:items-start gap-4 max-w-[500px]">
              <div className="flex flex-col items-center lg:items-start gap-3 w-full">
                <motion.span
                  style={{ opacity: label2Opacity, y: label2Y }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  ECOSYSTEM
                </motion.span>
                <motion.h2
                  style={{ opacity: title2Opacity, y: title2Y }}
                  className="text-subheader md:text-display font-display font-bold leading-none lg:leading-[1.1] tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
                >
                  Powered by the Vitalis health core
                </motion.h2>
              </div>
              <motion.p
                style={{ opacity: desc2Opacity, y: desc2Y }}
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
            }}
            className="w-full flex items-center justify-center relative order-2 lg:order-1 lg:row-span-2"
          >
            <motion.div
              style={{ opacity: ui2Opacity }}
              className="absolute w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#F59E0B]/[0.06] blur-[150px] md:blur-[200px] rounded-full pointer-events-none"
            />
            <img
              src={WatchRightView}
              alt="Vitalis Watch Right View"
              className="relative z-10 w-full h-auto max-w-[300px] sm:max-w-[400px] md:max-w-[500px] xl:max-w-[600px] object-contain rotate-[8deg] drop-shadow-2xl transition-transform duration-700 hover:scale-105"
            />
            {FEATURECARDS.filter((item) => item.id === "bodyTemp").map(
              (item) => (
                <motion.div key={item.id} style={{ opacity: ui2Opacity }}>
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
            style={{ opacity: desc2Opacity, y: desc2Y }}
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
        </div>
      </SectionWrapper>
    </>
  );
}
