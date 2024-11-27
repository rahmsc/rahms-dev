"use client";

import AgentCard from "./AgentCard";
import { useState, useEffect, useRef } from "react";
import AnimatedBackground from "./AnimatedBackground";

type TeamMember = {
  name: string;
  position: string;
  photos: string[];
  stats: Record<string, string>;

  cardNumber: string;
};

const teamMembers: TeamMember[] = [
  {
    name: "Sam",
    position: "SOCIAL MEDIA STRATEGIST",
    photos: ["/assets/agent-headshots/2.jpg"],
    stats: {
      "🏆 Engagement Rate": "⬆ 22%",
      "⚡ Daily Posts": "24",
      "🌎 Audience Reach": "1M+",
      "🚀 Follower Growth": "+5K/mo",
    },
    cardNumber: "001",
  },
  {
    name: "Alex",
    position: "CUSTOMER ENGAGEMENT SPECIALIST",
    photos: ["/assets/agent-headshots/1.jpg"],
    stats: {
      "⏱️ Response Time": "30 secs",
      "😊 Satisfaction Rate": "98%",
      "💬 Messages/Day": "1000+",
      "🌍 Languages": "12",
    },
    cardNumber: "002",
  },

  {
    name: "Taylor",
    position: "KNOWLEDGE BASE MANAGER",
    photos: ["/assets/agent-headshots/4.jpg"],
    stats: {
      "✔️ Accuracy": "99.5%",
      "📚 Database Size": "10 TB",
      "🔍 Queries Handled": "1000+/day",
      "🌐 Sources Maintained": "500+",
    },
    cardNumber: "003",
  },
  {
    name: "Jordan",
    position: "PRODUCTIVITY COACH",
    photos: ["/assets/agent-headshots/5.jpg"],
    stats: {
      "⏱️ Time Saved": "40hrs/mo",
      "✅ Tasks Completed": "500+/week",
      "⭐ Client Rating": "4.9/5",
      "📈 ROI Achieved": "300%",
    },
    cardNumber: "004",
  },
  {
    name: "Casey",
    position: "WORKFLOW AUTOMATION EXPERT",
    photos: ["/assets/agent-headshots/6.jpg"],
    stats: {
      "🔄 Processes Automated": "100+",
      "⚡ Efficiency Boost": "+35%",
      "💵 Revenue Generated": "$500K/yr",
      "🖥️ Systems Optimized": "25+",
    },
    cardNumber: "005",
  },
];

const TYPED_WORDS = ["Business", "Brand", "Community"] as const;

// type TypedWord = (typeof TYPED_WORDS)[number];

interface HeroSectionProps {
  className?: string;
}

// const TYPING_SPEEDS = {
//   DELETING: 100,
//   TYPING: 300,
//   PAUSE: 2000,
// } as const;

const SCROLL_CONFIG = {
  MAX_Z_TRANSLATE: 30,
  CARD_ROTATION_INTERVAL: 5000,
} as const;

const HeroSection: React.FC<HeroSectionProps> = ({ className }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [typedWord, setTypedWord] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [zTranslate, setZTranslate] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  // Auto-cycle effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === teamMembers.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  // Add this new effect for the typewriter animation
  useEffect(() => {
    const word = TYPED_WORDS[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setTypedWord(word.substring(0, typedWord.length + 1));
        setTypingSpeed(300);

        if (typedWord === word) {
          setTypingSpeed(2000); // Pause at end
          setIsDeleting(true);
        }
      } else {
        setTypedWord(word.substring(0, typedWord.length - 1));
        setTypingSpeed(100);

        if (typedWord === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % TYPED_WORDS.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [typedWord, isDeleting, wordIndex, typingSpeed]);

  // Optimize scroll handler with debounce
  useEffect(() => {
    const handleScroll = debounce(() => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const scrollProgress =
        1 - rect.bottom / (window.innerHeight + rect.height);
      const newZ = Math.max(
        0,
        Math.min(
          SCROLL_CONFIG.MAX_Z_TRANSLATE,
          scrollProgress * SCROLL_CONFIG.MAX_Z_TRANSLATE
        )
      );
      setZTranslate(newZ);
    }, 16); // ~60fps

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100vh-4rem)] flex flex-col lg:flex-row items-center 
      px-4 lg:px-6 py-12 sm:py-16 lg:py-20 overflow-hidden"
      aria-label="Hero Section"
    >
      <AnimatedBackground />

      {/* Main content - Added pt-16 for mobile to account for navbar */}
      <div
        className="relative z-20 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 
        gap-8 lg:gap-12 items-center pt-16 sm:pt-20 lg:pt-0"
      >
        {/* Left Content */}
        <div className="space-y-6 px-4 lg:pl-20 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white">
            Future-Proof Your
            <br />
            <span className="bg-gradient-to-br from-cyber-blue to-cyber-blue/70 text-transparent bg-clip-text">
              {typedWord}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          <p className="text-gray-400 font-mono text-base lg:text-lg max-w-xl mx-auto lg:mx-0">
            Propel your business into the future with custom AI
            solutions—automate tasks, expand effortlessly, and outpace your
            competition.
          </p>
          <button
            type="button"
            className="w-full sm:w-auto bg-gradient-to-br from-cyber-blue to-cyber-blue/70 
              text-dark-navy px-6 lg:px-8 py-3 rounded font-mono font-medium 
              hover:bg-opacity-90 transition-all focus:ring-2 focus:ring-cyber-blue 
              focus:outline-none"
            aria-label="Book Your Free AI Consultation"
          >
            Book Your Free AI Consultation ⮕
          </button>
        </div>

        {/* Right Content */}
        <div className="flex flex-col items-center gap-4 mt-8 lg:mt-0">
          <div className="flex items-center justify-center gap-8 w-full max-w-[min(100%,560px)]">
            <div
              className="w-full max-w-[384px] shrink-0"
              style={{
                perspective: "1000px",
                transformStyle: "preserve-3d",
              }}
            >
              <div
                style={{
                  transform: `translateZ(${zTranslate}px)`,
                  transition: "transform 0.3s ease-out",
                }}
              >
                <AgentCard
                  teamMembers={teamMembers}
                  currentIndex={currentIndex}
                />
              </div>
            </div>
          </div>

          {/* Indicator Dots */}
          {/* biome-ignore lint/a11y/useSemanticElements: <explanation> */}
          <div className="flex gap-2 mt-4" role="tablist">
            {teamMembers.map((member, index) => (
              <button
                type="button"
                key={member.cardNumber}
                onClick={() => {
                  setIsAutoPlaying(true);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentIndex
                    ? "w-6 bg-cyber-blue"
                    : "bg-cyber-blue/30 hover:bg-cyber-blue/50"
                }`}
                aria-label={`View ${member.name}'s profile`}
                aria-selected={index === currentIndex}
                role="tab"
                tabIndex={0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Utility function for scroll optimization
const debounce = (func: (...args: unknown[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: unknown[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

export default HeroSection;
