"use client";

import { FaCoins } from "react-icons/fa6";
import Link from "next/link";
import { usePoints } from "@/context/PointsContext";

const Header = () => {
  const { points } = usePoints();

  return (
    <header className="bg-gray-900 text-white py-5 px-6 shadow-2xl border-b border-gray-800">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo Section */}
        <Link
          href="/"
          className="group relative"
        >
          <span className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-all duration-300">
            Quiz App
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></div>
        </Link>

        {/* Points Section */}
        <div className="flex items-center gap-3 bg-gray-800 px-6 py-3 rounded-xl border border-gray-700 shadow-lg hover:shadow-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
          <div className="relative">
            <FaCoins className="text-yellow-400 text-3xl drop-shadow-lg animate-pulse" />
          </div>
          
          <div className="flex items-center gap-2 border-l border-gray-700 pl-3">
            <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">
              Points
            </span>
            <span className="text-2xl font-bold text-blue-400 tabular-nums">
              {points}
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;