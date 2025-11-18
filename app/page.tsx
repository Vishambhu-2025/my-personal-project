"use client";

import { motion } from "framer-motion";
import { Construction, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-5">
      {/* Floating Icon Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -20 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
        className="mb-8"
      >
        <Construction size={120} className="text-yellow-400" />
      </motion.div>

      {/* Fade-in Content */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Website Under Construction
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-4 text-lg md:text-xl text-gray-300 text-center max-w-xl"
      >
        We are building something awesome. Stay tuned for updates!
      </motion.p>

      {/* Pulsing loader */}
      <motion.div
        className="mt-10 flex items-center gap-3 text-yellow-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <Clock size={26} className="animate-spin-slow" />
        <span className="text-lg">Loading updates...</span>
      </motion.div>

      {/* Custom slow spin animation */}
      <style>{`
        .animate-spin-slow {
          animation: spin 3s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
