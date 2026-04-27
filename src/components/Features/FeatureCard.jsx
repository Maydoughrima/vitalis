import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FeatureCard({ data, className = "" }) {
  const shadows = {
    blue: "0px 6px 25px rgba(43, 130, 246, 0.12), 0px 10px 40px rgba(43, 130, 246, 0.08), inset 0px 4px 30px rgba(43, 130, 246, 0.10)",
    orange: "0px 6px 25px rgba(245, 158, 11, 0.15), 0px 10px 40px rgba(245, 158, 11, 0.10), inset 0px 4px 30px rgba(245, 158, 11, 0.25)",
  };

  const currentShadow = data.glow === "orange" ? shadows.orange : shadows.blue;
  const currentBorder = data.glow === "orange" ? "border-accentOrange/20" : "border-border";

  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{ boxShadow: currentShadow }}
      className={`flex flex-col gap-2 p-4 bg-card/20 border ${currentBorder} backdrop-blur-md rounded-2xl w-fit items-center ${className}`}
    >
      <span className="text-smallLabel text-textMuted uppercase tracking-wider font-medium">
        {data.label}
      </span>

      <h4 className="text-defaultBody font-semibold text-textPrimary">
        {data.value}
      </h4>

      <div className="flex items-center gap-1 text-textSecondary text-smallLabel">
        <FiArrowUp className="w-3 h-3" />
        <span>{data.trend}</span>
      </div>
    </motion.div>
  );
}
