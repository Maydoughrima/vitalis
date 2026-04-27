import React, { forwardRef } from "react";

const SectionWrapper = forwardRef(({ children, className = "" }, ref) => {
  return (
    <section
      ref={ref}
      className={`
        w-full
        bg-bgPrimary
        text-textPrimary py-6
        px-6 md:px-12 lg:px-20
        ${className}
      `}
    >
      <div className="max-w-[1600px] mx-auto w-full">{children}</div>
    </section>
  );
});

SectionWrapper.displayName = "SectionWrapper";

export default SectionWrapper;
