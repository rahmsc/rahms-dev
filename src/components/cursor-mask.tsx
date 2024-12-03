"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MaskCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  if (!isHydrated) return null;

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      {/* Base layer navigation tabs - removed mix-blend-difference from parent */}
      <div className="absolute top-8 left-0 right-0 flex justify-center gap-6 z-10">
        <a
          href="/blog"
          className="px-6 py-2 text-[#a3a3a3] border-2 border-[#a3a3a3] rounded-full hover:text-[#ff4d4d] hover:border-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110 font-bold origin-center"
          tabIndex={0}
          aria-label="Visit Blog"
        >
          blog
        </a>
        <a
          href="/solvr"
          className="px-6 py-2 text-[#a3a3a3] border-2 border-[#a3a3a3] rounded-full hover:text-[#ff4d4d] hover:border-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110 font-bold origin-center"
          tabIndex={0}
          aria-label="Visit Product"
        >
          product
        </a>
      </div>

      {/* Film lines effect */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "repeating-linear-gradient(transparent, transparent 2px, rgba(0, 0, 0, 0.1) 2px, rgba(0, 0, 0, 0.1) 4px)",
          backgroundSize: "100% 4px",
          animation: "filmLines 2s linear infinite",
        }}
      />

      {/* Base text layer */}
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-[#a3a3a3] text-5xl md:text-7xl font-bold max-w-4xl text-center leading-relaxed">
          I&apos;m a <span className="text-[#ff4d4d]">developer</span> who likes
          to build <span className="text-[#ff4d4d]">applications</span> using{" "}
          <span className="text-[#ff4d4d]">NextJS</span> &<br />
          <span className="text-[#ff4d4d]">React Native</span>.
        </p>
        {/* Base layer icons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          <a
            href="https://twitter.com/rahmsc_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/daniel-milad-7467731a4/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#a3a3a3] hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:danmilad.code@gmail.com"
            className="text-[#a3a3a3] hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="Send Email"
          >
            <MdEmail className="w-8 h-8" />
          </a>
        </div>
      </div>

      {/* Mask layer */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center bg-white"
        animate={{}}
        style={{
          WebkitMaskImage:
            "radial-gradient(circle, black 0%, black 50%, transparent 50%)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskSize: "440px 440px",
          WebkitMaskPosition: `${mousePosition.x - 220}px ${
            mousePosition.y - 220
          }px`,
        }}
      >
        <p className="text-5xl md:text-7xl font-bold max-w-4xl text-center leading-relaxed text-black">
          I&apos;m <span className="text-[#ff4d4d]">passionate</span> about{" "}
          <br />
          <span className="text-[#ff4d4d]">designing</span> and{" "}
          <span className="text-[#ff4d4d]">building</span> creative{" "}
          <span className="text-[#ff4d4d]">solutions</span> for the <br />{" "}
          <span className="text-[#ff4d4d]">digital</span>
          <br /> space.
        </p>
        {/* Masked layer icons */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
          <a
            href="https://twitter.com/rahmsc_"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="Twitter Profile"
          >
            <FaTwitter className="w-8 h-8" />
          </a>
          <a
            href="https://linkedin.com/in/daniel-milad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="LinkedIn Profile"
          >
            <FaLinkedin className="w-8 h-8" />
          </a>
          <a
            href="mailto:danmilad.code@gmail.com"
            className="text-black hover:text-[#ff4d4d] transition-all duration-300 hover:-translate-y-1 hover:scale-110"
            aria-label="Send Email"
          >
            <MdEmail className="w-8 h-8" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}

// Update styles to only include filmLines animation
const styles = `
  @keyframes filmLines {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 0 -4px;
    }
  }
`;

// Add styles to document
if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);
}
