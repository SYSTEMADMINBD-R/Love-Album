import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LetterModal() {
  const [open, setOpen] = useState(false);
  const { t, lang } = useLanguage();
  const isBn = lang === "bn";
  const bnStyle = isBn ? { fontFamily: "'Hind Siliguri', sans-serif" } : {};

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={() => setOpen(true)}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="group relative flex flex-col items-center gap-4 cursor-pointer focus:outline-none"
      >
        {/* Envelope icon */}
        <div className="relative w-24 h-16 flex items-center justify-center">
          <svg viewBox="0 0 96 64" fill="none" className="w-full h-full drop-shadow-lg">
            <rect x="2" y="2" width="92" height="60" rx="6" fill="hsl(var(--card))" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.6" />
            <path d="M2 8 L48 40 L94 8" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.6" fill="none" />
          </svg>
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="absolute -top-2 left-1/2 -translate-x-1/2 text-primary/70 text-sm"
          >
            &#9825;
          </motion.div>
        </div>

        <span
          className="font-serif italic text-2xl md:text-3xl text-primary tracking-wide group-hover:text-primary/80 transition-colors"
          style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
        >
          {t.letterBtn}
        </span>

        <motion.div
          animate={{ scaleX: [0.4, 1, 0.4] }}
          transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
          className="h-[1px] w-16 bg-primary/40"
        />
      </motion.button>

      {/* Modal Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-foreground/70 backdrop-blur-sm"
          >
            {/* Letter Card */}
            <motion.div
              key="card"
              initial={{ opacity: 0, scale: 0.85, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg bg-[hsl(var(--card))] rounded-2xl shadow-2xl shadow-primary/20 border border-primary/20 overflow-hidden"
            >
              {/* Top decorative stripe */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-secondary/60 to-primary/40" />

              <div className="px-8 py-10 md:px-12 md:py-12 space-y-8 max-h-[75vh] overflow-y-auto">
                {/* Part 1 — Birthday message */}
                <div className="space-y-3 text-center">
                  <p
                    className="font-serif text-2xl md:text-3xl text-foreground font-semibold"
                    style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
                  >
                    {t.letterPart1Line1}
                  </p>
                  <div
                    className="font-serif italic text-foreground/75 text-base md:text-lg leading-relaxed space-y-1"
                    style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
                  >
                    <p>{t.letterPart1Line2}</p>
                    <p>{t.letterPart1Line3}</p>
                    <p>{t.letterPart1Line4}</p>
                    <p className="text-primary font-medium not-italic mt-2" style={bnStyle}>{t.letterPart1Line5}</p>
                  </div>
                </div>

                {/* Divider */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-[1px] bg-primary/20" />
                  <span className="text-primary/50 text-sm">&#9825;</span>
                  <div className="flex-1 h-[1px] bg-primary/20" />
                </div>

                {/* Part 2 — Batman quote */}
                <div
                  className="font-serif text-foreground/80 text-base md:text-lg leading-relaxed whitespace-pre-line"
                  style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : { fontStyle: "italic" }}
                >
                  {t.letterPart2}
                </div>

                {/* Signature — bottom right of letter */}
                <div className="flex justify-end pt-2">
                  <p
                    className="font-serif italic text-sm text-primary/70 tracking-wide"
                    style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
                  >
                    {isBn ? "আত্মার চিরন্তন ভালোবাসা" : "Eternal Love of the Soul"}
                  </p>
                </div>
              </div>

              {/* Bottom decorative stripe */}
              <div className="h-1 w-full bg-gradient-to-r from-primary/40 via-secondary/60 to-primary/40" />

              {/* Close button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 w-7 h-7 flex items-center justify-center rounded-full border border-primary/30 text-foreground/50 hover:text-foreground hover:border-primary/60 transition-all text-sm"
              >
                ✕
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
