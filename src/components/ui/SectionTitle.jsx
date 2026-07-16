import React from "react";

const SectionTitle = ({ label, title, description, align = "center" }) => {
  return (
    <div
      className={`mb-20 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-neutral-500">
        {label}
      </p>

      <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
        {title}
      </h2>

      {description && (
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-500">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
