import React from "react";
import { Link } from "react-router-dom";

export default function Button({
  children,
  variant = "primary",
  className = "", // ✅ FIXED
  to,
  onClick,
  ...props
}) {
  const baseStyles = "rounded-[8px]";

  const variants = {
    primary:
      "bg-accentBlue px-4 py-2.5 sm:px-5 sm:py-3 md:px-[20px] md:py-[12px] font-body text-[13px] md:text-[14px] font-semibold text-textPrimary hover:bg-activeBlue transition-all duration-200 hover:shadow-buttonSecondary hover:scale-[1.02] flex items-center justify-center whitespace-nowrap",
    secondary:
      "bg-transparent px-4 py-2.5 sm:px-5 sm:py-3 md:px-[20px] md:py-[12px] border border-ctaBorder font-body text-[13px] md:text-[14px] font-semibold text-accentBlue hover:bg-accentBlue hover:text-textPrimary transition-all duration-200 transform hover:scale-[1.02] flex items-center justify-center whitespace-nowrap",
    navButton:
      "bg-accentBlue px-3.5 py-2 sm:px-4 sm:py-2.5 md:px-[12px] md:py-[9px] md:text-smallCta font-body text-[13px] md:text-[14px] font-semibold text-textPrimary hover:bg-activeBlue transition-all duration-200 hover:shadow-buttonSecondary hover:scale-[1.02] flex items-center justify-center whitespace-nowrap",
  };

  if (to) {
    return (
      <Link
        to={to}
        className={`${baseStyles} ${variants[variant]} ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
