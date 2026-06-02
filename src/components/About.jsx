import React from "react";

export function About() {
  return (
    <section
      id="about"
      className="w-full max-w-5xl mx-auto px-8 py-24 flex flex-col items-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-16 text-center">
        About<span className="text-primary">.</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-16 md:gap-24 w-full">
        {/* Left Side: Gradient Image Placeholder */}
        <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 mx-auto md:mx-0">
          {/* Slanted Dark Background */}
          <div className="absolute inset-0 bg-[#161a20] transform skew-x-12 translate-x-8"></div>
          {/* Gradient Foreground */}
          <div className="absolute inset-0 bg-linear-to-tr from-primary to-[#7dd3fc]"></div>
        </div>

        {/* Right Side: Text */}
        <div className="flex flex-col gap-6 text-slate-300 text-sm md:text-base leading-relaxed max-w-lg">
          <p>
            <strong className="text-white font-medium">Web Developer</strong>{" "}
            transitioning to a career in technology.
          </p>
          <p>
            Currently, my focus is on learning and mastering essential web
            development skills. I have a solid foundation in HTML, CSS, Git and
            JavaScript.
          </p>
          <p>
            Currently, my focus is on learning and mastering essential web
            development skills. I have a solid foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
