/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  theme: {
    extend: {
      colors: {
        // 🟢 BASE BACKGROUND SYSTEM
        bgPrimary: "#05070D",
        bgSecondary: "#0B1220",

        // ⚪ TEXT SYSTEM
        textPrimary: "#E5E7EB",
        textSecondary: "#9CA3AF",
        textMuted: "#6B7280",

        // 🔵 ACCENT SYSTEM (FEATURE COLORS)
        accentBlue: "#2B82F6",
        activeBlue: "#1E5EFF",
        accentOrange: "#F59E0B",
        accentRed: "#EF4444",
        ctaBorder: "rgba(43,130,246,0.5)",

        // 🌫️ CARD + UI SURFACES
        card: "#0B1220",
        border: "#1F2937",
      },

      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },

      boxShadow: {
        buttonSecondary:
          "0px 8px 20px rgba(0, 0, 0, 0.25), 0px 0px 20px rgba(43, 130, 246, 0.2)",

        // 🌑 BASE DEPTH SHADOW
        soft: "0px 6px 20px rgba(0, 0, 0, 0.2)",

        // 🔵 BLUE GLOW (HEART RATE)
        glowBlue: "0px 0px 40px rgba(43, 130, 246, 0.08)",

        // 🟠 ORANGE GLOW (TEMP)
        glowOrange: "0px 0px 45px rgba(245, 158, 11, 0.06)",

        // 🔴 RED GLOW (SAFETY)
        glowRed: "0px 0px 50px rgba(239, 68, 68, 0.05)",

        // 🧭 NAV SHADOW
        nav: "0px 8px 24px rgba(0, 0, 0, 0.13)",

        // 💳 FEATURE CARD SHADOW
        featureCard:
          "0px 6px 25px rgba(43, 130, 246, 0.12), inset 0px 4px 30px rgba(43, 130, 246, 0.10)",
      },

      dropShadow: {
        watch: [
          "0px 20px 40px rgba(0, 0, 0, 0.35)",
          "0px 10px 20px rgba(0, 0, 0, 0.2)",
        ],
      },

      blur: {
        glow: "180px",
      },

      fontSize: {
        defaultCta: "14px",
        smallCta: "12px",
        hoverCta: "14px",

        display: "80px",
        display2: "64px",

        header: "48px",
        subheader: "36px",
        compHeader: "28px",

        largeBody: "18px",
        defaultBody: "16px",
        smallBody: "14px",

        largeLabel: "14px",
        smallLabel: "12px",
        caption: "11px",
      },
    },
  },

  plugins: [],
};
