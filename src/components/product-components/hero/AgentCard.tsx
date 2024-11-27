/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

interface TeamMember {
  name: string;
  position: string;
  photos: string[];
  stats: Record<string, string>;
  cardNumber: string;
}

interface AgentCardProps {
  teamMembers: TeamMember[];
  currentIndex: number;
}

const AgentCard = ({ teamMembers, currentIndex }: AgentCardProps) => {
  const currentMember = teamMembers[currentIndex];
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!currentMember) {
    return <div>No team member data available.</div>;
  }

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    setPhotoIndex(0);
  }, [currentIndex]);

  useEffect(() => {
    if (!currentMember || currentMember.photos.length <= 1) return;

    const interval = setInterval(() => {
      setPhotoIndex((prev) => (prev + 1) % currentMember.photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentMember]);

  const getNumericValue = (value: string) => {
    const match = value.match(/\d+/);
    return match ? Number.parseInt(match[0]) : 0;
  };

  const calculatePower = () => {
    const totalPower = Object.values(currentMember.stats).reduce(
      (sum, value) => sum + getNumericValue(value),
      0
    );
    return Math.min(totalPower, 999); // Cap at 999
  };

  return (
    <div className="w-[350px] animate-floating">
      <div className="relative group pt-8">
        {/* Pokemon-style Card with Cyber Theme */}
        <div className="relative rounded-[20px] overflow-hidden border-4 border-cyber-blue/30 shadow-[0_0_15px_rgba(66,220,255,0.3)] before:content-[''] before:absolute before:inset-0 before:rounded-[16px] before:border-2 before:border-cyber-blue/20 before:z-10">
          {/* Textured background using multiple layers */}
          <div className="absolute inset-0 bg-navy-800">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(66,220,255,0.15),transparent_70%)] opacity-70" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(66,220,255,0.1),transparent_50%)] opacity-60" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(66,220,255,0.1),transparent_50%)] opacity-60" />
            {/* Noise texture overlay */}
            <div className="absolute inset-0 opacity-[0.15] mix-blend-soft-light">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PC9maWx0ZXI+PHJlY3Qgd2lkdGg9IjMwMCIgaGVpZ2h0PSIzMDAiIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] bg-repeat" />
            </div>
          </div>

          {/* Card Content */}
          <div className="relative p-4">
            {/* Header Section */}
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-white">
                {currentMember?.name || "Unknown"}
              </h3>
              <div className="text-cyber-blue font-bold">
                PWR {calculatePower()}
              </div>
            </div>

            {/* Image Section with Holographic Effect */}
            <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-navy-900/80 to-navy-800/80 backdrop-blur-sm" />
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(66,220,255,0.15),transparent_70%)] animate-pulse" />
              <Image
                src={currentMember?.photos[photoIndex] || ""}
                alt={`${currentMember?.name || "Unknown"} profile`}
                fill
                className="object-cover"
              />
              <Sparkles className="absolute top-2 right-2 text-cyber-blue h-6 w-6 animate-pulse" />
            </div>

            {/* AI Agent Info */}
            <div className="text-sm text-cyber-blue mb-4 border-b border-cyber-blue/20 pb-2">
              <span className="text-md font-semibold capitalize tracking-wider">
                {currentMember?.position || "Unknown"}
              </span>{" "}
              • <br />
              Level {Number.parseInt(currentMember?.cardNumber || "0")} AI Agent
            </div>

            {/* Stats Section */}
            <div className="space-y-3">
              {Object.entries(currentMember?.stats || {}).map(
                ([key, value]) => (
                  <div
                    key={key}
                    className="bg-navy-900/50 backdrop-blur-sm rounded p-2 flex justify-between items-center border border-cyber-blue/10"
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-full bg-cyber-blue/20 flex items-center justify-center text-cyber-blue">
                        {key.split(" ")[0]}
                      </div>
                      <span className="text-white font-medium">
                        {key.split(" ").slice(1).join(" ")}
                      </span>
                    </div>
                    <span className="text-cyber-blue font-bold">{value}</span>
                  </div>
                )
              )}
            </div>

            {/* Card Number */}
            <div className="absolute bottom-2 right-4 text-cyber-blue/60 text-sm">
              #{currentMember?.cardNumber || "000"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgentCard;
