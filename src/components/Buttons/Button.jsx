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
      "bg-accentBlue px-[20px] py-[12px] font-body text-[14px] font-semibold text-textPrimary hover:bg-activeBlue transition-all duration-200 hover:shadow-buttonSecondary hover:scale-[1.02]",
    secondary:
      "bg-transparent px-[20px] py-[12px] border border-ctaBorder font-body text-[14px] font-semibold text-accentBlue hover:bg-accentBlue hover:text-textPrimary transition-all duration-200 transform hover:scale-[1.02]",
    navButton:
      "bg-accentBlue px-[16px] py-[10px] md:px-[12px] md:py-[9px] md:text-smallCta font-body text-[14px] font-semibold text-textPrimary hover:bg-activeBlue transition-all duration-200 hover:shadow-buttonSecondary hover:scale-[1.02]",
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
