"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden px-4">

      {/* Floating cards (desktop only) */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="hidden md:block absolute top-10 left-10 w-60 h-40 bg-gray-800 rounded-xl opacity-70"
      />

      <motion.div
        animate={{ y: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8 }}
        className="hidden md:block absolute bottom-20 right-20 w-72 h-48 bg-gray-700 rounded-xl opacity-70"
      />

      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="hidden md:block absolute top-1/3 right-10 w-40 h-28 bg-gray-600 rounded-xl opacity-70"
      />

      <motion.div
        animate={{ y: [0, 25, 0] }}
        transition={{ repeat: Infinity, duration: 5 }}
        className="hidden md:block absolute bottom-10 left-1/3 w-32 h-24 bg-gray-500 rounded-xl opacity-70"
      />

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center text-center min-h-screen">

        <div className="bg-white/10 backdrop-blur-lg p-6 md:p-10 rounded-2xl shadow-xl max-w-2xl w-full">

          {/* Brand */}
          <p className="text-gray-400 text-xs md:text-sm mb-2 tracking-wide">
            IMPEXVIAA GLOBAL TRADE
          </p>

          {/* Heading */}
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Trade Globally with Verified Businesses
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-sm md:text-lg text-gray-300">
            Secure escrow, verified companies, and seamless international trading.
          </p>

          {/* Buttons with navigation */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

            <Link href="/auth/signup" className="w-full sm:w-auto">
              <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold w-full hover:scale-105 transition">
                Get Started
              </button>
            </Link>

            <Link href="/auth/login" className="w-full sm:w-auto">
              <button className="border border-white px-6 py-3 rounded-xl w-full hover:bg-white hover:text-black transition">
                Verify Business
              </button>
            </Link>

          </div>

        </div>
      </div>
    </div>
  );
}