import React from "react";
import Button from "../Buttons/Button";

const Footer = () => {
  return (
    <footer className="w-full bg-bgSecondary border-t border-white/5 pt-12 pb-8 px-6 md:px-12 lg:px-20 overflow-hidden">
      <div className="max-w-[1600px] mx-auto w-full flex flex-col space-y-10">
        
        {/* TOP SECTION: Optional CTA */}
        <div className="flex flex-col lg:flex-row items-center lg:justify-between gap-10 lg:gap-8 py-10 lg:py-8 border-b border-white/5 text-center lg:text-left">
          <h3 className="text-subheader md:text-compHeader lg:text-subheader font-display font-bold tracking-tighter text-textPrimary">
            Stay aware. <br className="hidden lg:block" />
            <span className="text-textSecondary">Stay in control.</span>
          </h3>
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Button variant="primary" to="/get-started" className="w-full sm:w-auto">
              Get Started
            </Button>
            <Button variant="secondary" to="/features" className="w-full sm:w-auto">
              Learn More
            </Button>
          </div>
        </div>

        {/* MAIN CONTENT: Brand + Nav */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-10 items-start">
          {/* LEFT: Brand */}
          <div className="flex flex-col items-center lg:items-start space-y-6 lg:space-y-4 max-w-sm mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="text-lg md:text-xl font-display font-bold tracking-[0.2em] text-textPrimary">
              VITALIS
            </h2>
            <p className="text-smallBody font-body text-textSecondary leading-relaxed opacity-70">
              Smart health monitoring designed for real-time awareness.
            </p>
          </div>

          {/* RIGHT: Navigation */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-12 gap-x-8 lg:justify-items-end">
            {/* Product */}
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-body font-bold text-accentBlue tracking-[0.2em] uppercase">
                Product
              </span>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#features" className="text-smallLabel font-body text-textSecondary hover:text-textPrimary transition-colors duration-200">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#health" className="text-smallLabel font-body text-textSecondary hover:text-textPrimary transition-colors duration-200">
                    Health Insights
                  </a>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-body font-bold text-accentBlue tracking-[0.2em] uppercase">
                Company
              </span>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#about" className="text-smallLabel font-body text-textSecondary hover:text-textPrimary transition-colors duration-200">
                    About
                  </a>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="flex flex-col space-y-4">
              <span className="text-[10px] font-body font-bold text-accentBlue tracking-[0.2em] uppercase">
                Support
              </span>
              <ul className="flex flex-col space-y-2">
                <li>
                  <a href="#contact" className="text-smallLabel font-body text-textSecondary hover:text-textPrimary transition-colors duration-200">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5 text-center">
          <span className="text-[10px] font-body text-textSecondary/50 tracking-widest uppercase">
            &copy; 2026 Vitalis. All rights reserved.
          </span>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            <span className="text-[10px] font-body text-textSecondary/30 tracking-[0.1em] uppercase">
              Privacy Policy
            </span>
            <span className="text-[10px] font-body text-textSecondary/30 tracking-[0.1em] uppercase">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
