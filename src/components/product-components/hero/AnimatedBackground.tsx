"use client";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-dark-navy/90 backdrop-blur-sm z-10" />
      <div className="grid-pattern" />
      <div className="moving-gradient" />
    </div>
  );
};

export default AnimatedBackground;
