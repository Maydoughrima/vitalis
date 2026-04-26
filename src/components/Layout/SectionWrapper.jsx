export default function SectionWrapper({ children, className = "" }) {
  return (
    <section
      className={`
        w-full
        bg-bgPrimary
        text-textPrimary py-6
        px-6 md:px-12 lg:px-20
        ${className}
      `}
    >
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
