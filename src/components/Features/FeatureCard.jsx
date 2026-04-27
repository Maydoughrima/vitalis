import React from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function FeatureCard({ data, className = "" }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20, y: 10 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-2 p-4 bg-card/20 border border-border shadow-featureCard backdrop-blur-md rounded-2xl w-fit items-center ${className}`}
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
