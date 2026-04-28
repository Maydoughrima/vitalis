import React, { useRef } from "react";
import SectionWrapper from "../Layout/SectionWrapper";
import heroImage from "../../assets/watch-front-view.png";
import Button from "../Buttons/Button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress: rawScroll } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scrollYProgress = useSpring(rawScroll, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Hero Exit Animations (now proportional to section height)
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  // Watch Visual Animations
  const watchScale = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);
  const watchOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.6]);

  // Glow Animations
  const glow1Opacity = useTransform(scrollYProgress, [0, 0.5], [0.05, 0]);
  const glow2Opacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);
  const glow3Opacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);

  return (
    <>
      <SectionWrapper
        ref={sectionRef}
        id="home"
        className="overflow-hidden !p-0 no-scrollbar"
      >
        <motion.div
          style={{ opacity, y, willChange: "transform, opacity" }}
          className="pt-32 lg:pt-52 min-h-[100dvh] lg:h-[100dvh] flex flex-col lg:flex-row items-stretch lg:items-center relative w-full px-6 md:px-12 lg:px-20"
        >
          {/* Text Content (Left Side) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-start items-center lg:items-start text-center lg:text-left z-20 order-2 lg:order-1 mt-8 lg:mt-0 gap-6">
            <div className="flex flex-col items-center lg:items-start gap-4">
              <div className="flex flex-col items-center lg:items-start gap-3 w-full">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.8,
                    delay: 1.5,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-textSecondary uppercase tracking-[0.12em] text-smallLabel md:text-largeLabel font-body font-medium"
                >
                  smart health system
                </motion.span>
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  style={{ willChange: "transform, opacity" }}
                  transition={{
                    duration: 0.8,
                    delay: 1.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-display2 lg:text-display font-display font-bold leading-none tracking-tighter text-textPrimary drop-shadow-[0_0_24px_rgba(77,163,255,0.08)]"
                >
                  VITALIS
                </motion.h1>
              </div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 1.9,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-smallBody md:text-largeBody tracking-[0.12em] leading-[1.4] text-textSecondary font-body max-w-[320px] sm:max-w-md mx-auto lg:mx-0"
              >
                Precision health monitoring on your wrist
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.1,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 w-full sm:w-auto"
            >
              <Button variant="primary">Explore</Button>
              <Button variant="secondary">Features</Button>
            </motion.div>
          </div>

          {/* Image Content (Centered on Desktop) */}
          <div className="w-full lg:w-auto relative lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 flex justify-center items-center z-10 order-1 mt-8 lg:mt-0 pointer-events-none">
            {/* Ambient Glows (Optimized for Mobile) */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.05 }}
              style={{ 
                opacity: glow1Opacity,
                willChange: "opacity"
              }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] bg-[#4DA3FF] blur-[60px] md:blur-[100px] rounded-full pointer-events-none"
            ></motion.div>

            {/* Hidden on mobile to save GPU */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              style={{ 
                opacity: glow2Opacity,
                willChange: "opacity"
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="hidden md:block absolute top-[60%] left-[90%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-[#4DA3FF] blur-[120px] rounded-full pointer-events-none"
            ></motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.04 }}
              style={{ 
                opacity: glow3Opacity,
                willChange: "opacity"
              }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
              className="hidden md:block absolute top-[65%] left-[35%] -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[700px] md:h-[700px] bg-[#6366F1] blur-[120px] rounded-full pointer-events-none"
            ></motion.div>

            <motion.img
              src={heroImage}
              alt="Vitalis Watch"
              initial={{ opacity: 0, rotate: -45, scale: 0.9 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              style={{ 
                scale: watchScale, 
                opacity: watchOpacity,
                willChange: "transform, opacity"
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="max-w-full max-h-[40vh] lg:max-h-[80vh] object-contain drop-shadow-watch pointer-events-auto relative z-10"
            />
          </div>

          {/* Stats Row (Beside Watch) */}
          <div className="w-full lg:w-auto flex flex-col md:flex-row justify-center items-center lg:items-start gap-8 md:gap-12 lg:gap-6 xl:gap-10 mt-16 lg:mt-0 lg:absolute lg:top-[75%] lg:-translate-y-1/2 lg:left-[calc(50%+22vh)] xl:left-[calc(50%+24vh)] 2xl:left-[calc(50%+26vh)] z-20 order-3 pt-8 border-t border-white/10 lg:border-none">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.4,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center lg:items-start gap-1 text-center lg:text-left"
            >
              <h3 className="text-compHeader font-display font-bold text-textPrimary">
                90k+
              </h3>
              <p className="text-smallLabel md:text-largeLabel font-body text-textSecondary uppercase tracking-widest">
                user registered
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.6,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center lg:items-start gap-1 text-center lg:text-left"
            >
              <h3 className="text-compHeader font-display font-bold text-textPrimary">
                85%
              </h3>
              <p className="text-smallLabel md:text-largeLabel  font-body text-textSecondary uppercase tracking-widest">
                client satisfaction
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.8,
                delay: 2.8,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="flex flex-col items-center lg:items-start gap-1 text-center lg:text-left"
            >
              <h3 className="text-compHeader font-display font-bold text-textPrimary">
                100K
              </h3>
              <p className="text-smallLabel md:text-largeLabel  font-body text-textSecondary uppercase tracking-widest">
                money protected
              </p>
            </motion.div>
          </div>
        </motion.div>
      </SectionWrapper>
    </>
  );
}
