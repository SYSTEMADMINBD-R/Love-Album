import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Candle() {
  const [isLit, setIsLit] = useState(true);

  const handleBlowOut = () => {
    setIsLit(false);
  };

  return (
    <div 
      className="relative flex flex-col items-center justify-end h-64 cursor-pointer group"
      onClick={handleBlowOut}
    >
      {/* Flame */}
      <AnimatePresence>
        {isLit && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: [0, -5, 0, -2, 0],
              x: [0, 2, -2, 1, -1, 0]
            }}
            exit={{ 
              opacity: 0, 
              scale: 0, 
              y: -20,
              transition: { duration: 0.5, ease: "easeOut" } 
            }}
            transition={{ 
              y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
              x: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
            }}
            className="absolute top-0 w-8 h-16 bg-gradient-to-t from-yellow-400 via-orange-300 to-transparent rounded-full blur-[2px] origin-bottom z-20"
          >
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-4 h-8 bg-white rounded-full blur-[1px]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Smoke when blown out */}
      <AnimatePresence>
        {!isLit && (
          <motion.div
            initial={{ opacity: 0, y: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.5, 0], y: -50, scale: 2 }}
            transition={{ duration: 2, ease: "easeOut" }}
            className="absolute top-4 w-4 h-12 bg-gray-400 rounded-full blur-md z-20"
          />
        )}
      </AnimatePresence>

      {/* Wick */}
      <div className="relative w-1.5 h-6 bg-slate-800 rounded-t-sm z-10 -mb-1">
        {!isLit && <div className="absolute top-0 w-full h-2 bg-red-500 rounded-t-sm animate-pulse" />}
      </div>

      {/* Candle Body */}
      <div className="relative w-16 h-32 bg-gradient-to-r from-slate-100 via-white to-slate-200 rounded-sm shadow-inner overflow-hidden">
        {/* Wax drips */}
        <div className="absolute top-0 left-2 w-2 h-6 bg-white rounded-b-full shadow-sm" />
        <div className="absolute top-0 right-3 w-3 h-10 bg-white rounded-b-full shadow-sm" />
      </div>

      {/* Glow effect on the background when lit */}
      <AnimatePresence>
        {isLit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
            className="absolute top-8 w-64 h-64 bg-yellow-500/20 rounded-full blur-3xl -z-10 pointer-events-none"
          />
        )}
      </AnimatePresence>
      
      {/* Wish message popup */}
      <AnimatePresence>
        {!isLit && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute -bottom-24 w-max text-center"
          >
            <p className="font-serif text-2xl text-secondary italic">Your wish is my command...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
