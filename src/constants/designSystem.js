// src/constants/designSystem.js

export const THEME = {
    dark: "dark",
    light: "light",
};

//
// 🟣 DARK MODE COLORS
//
export const COLORS = {
    // 🟢 BACKGROUND SYSTEM
    bgPrimary: "#05070D",
    bgSecondary: "#0B1220",

    // ⚪ TEXT SYSTEM
    textPrimary: "#E5E7EB",
    textSecondary: "#9CA3AF",
    textMuted: "#6B7280",

    // 🔵 ACCENTS (FEATURE SYSTEM)
    accentBlue: "#2B82F6",
    ctaBorder: "rgba(43,130,246,0.5)",
    activeBlue: "#1E5EFF",
    accentOrange: "#F59E0B",
    accentRed: "#EF4444",

    // 🧱 SURFACES
    card: "#0B1220",
    border: "#1F2937",
};

//
// ☀️ LIGHT MODE COLORS
//
export const COLORS_LIGHT = {
    // ⚪ BACKGROUND SYSTEM
    bgPrimary: "#F8FAFC",
    bgSecondary: "#FFFFFF",

    // ⚫ TEXT SYSTEM
    textPrimary: "#0F172A",
    textSecondary: "#475569",
    textMuted: "#64748B",

    // 🔵 ACCENTS (KEEP BRAND CONSISTENT)
    accentBlue: "#2B82F6",
    accentOrange: "#F59E0B",
    accentRed: "#EF4444",

    // 🧱 SURFACES 
    card: "#FFFFFF",
    border: "#E2E8F0",
};

//
// 🌫️ GLOW SYSTEM (USED IN FEATURES + WATCH BACKGROUND)
//
export const GLOW_SYSTEM = {
    blue: {
        color: "rgba(43, 130, 246, 0.08)",
        blur: 200,
        opacity: 0.08,
    },

    orange: {
        color: "rgba(245, 158, 11, 0.06)",
        blur: 220,
        opacity: 0.06,
    },

    red: {
        color: "rgba(239, 68, 68, 0.05)",
        blur: 240,
        opacity: 0.05,
    },
};

//
// 🧭 FEATURE STORY SYSTEM (SCROLL NARRATIVE)
//
export const FEATURES = [
    {
        id: "heartRate",
        label: "HEALTH MONITORING",
        title: "Real-time heart rate tracking",
        description:
            "Track your heart rate with precision sensors for continuous health insights.",
        color: "accentBlue",
        glow: "blue",
    },

    {
        id: "temperature",
        label: "HEALTH INSIGHTS",
        title: "Body temperature monitoring in real time",
        description:
            "Monitor your body temperature instantly with high-accuracy sensors designed for continuous tracking.",
        color: "accentOrange",
        glow: "orange",
    },

    {
        id: "safety",
        label: "SAFETY SYSTEM",
        title: "Environmental hazard detection",
        description:
            "Detect smoke, gas, and environmental risks in real time to keep you safe anywhere.",
        color: "accentRed",
        glow: "red",
    },
];


export const FEATURECARDS = [
  {
    id: "heartRate",
    label: "HEART RATE",
    value: "78 BPM",
    trend: "stable",
    icon: "up",
    color: "accentBlue",
    glow: "blue",
  },
  {
    id: "bodyTemp",
    label: "BODY TEMP",
    value: "36.5°C",
    trend: "normal",
    icon: "up",
    color: "accentOrange",
    glow: "orange",
  },
];