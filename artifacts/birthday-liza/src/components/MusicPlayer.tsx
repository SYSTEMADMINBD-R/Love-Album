import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MUSIC_URL = "https://k.top4top.io/m_3830y3d611.mp3";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const audio = new Audio(MUSIC_URL);
    audio.loop = true;
    audio.volume = 0.45;
    audioRef.current = audio;

    audio.addEventListener("canplaythrough", () => setReady(true));

    const tryAutoplay = () => {
      audio.play().then(() => {
        setPlaying(true);
        setShowHint(false);
      }).catch(() => {
        setShowHint(true);
      });
    };

    tryAutoplay();

    const onInteraction = () => {
      if (!playing && audioRef.current) {
        audioRef.current.play().then(() => {
          setPlaying(true);
          setShowHint(false);
        });
      }
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("scroll", onInteraction);
    };

    window.addEventListener("pointerdown", onInteraction);
    window.addEventListener("scroll", onInteraction, { passive: true });

    return () => {
      audio.pause();
      audio.src = "";
      window.removeEventListener("pointerdown", onInteraction);
      window.removeEventListener("scroll", onInteraction);
    };
  }, []);

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().then(() => setPlaying(true));
    }
  };

  return (
    <>
      {/* Autoplay hint */}
      <AnimatePresence>
        {showHint && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="fixed bottom-20 left-1/2 -translate-x-1/2 z-50 bg-foreground/80 backdrop-blur-sm text-background/90 text-xs px-4 py-2 rounded-full pointer-events-none"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Tap anywhere to start the music
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating music button */}
      <motion.button
        onClick={toggle}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-5 left-5 z-50 w-11 h-11 flex items-center justify-center rounded-full border border-primary/40 bg-background/80 backdrop-blur-sm shadow-lg shadow-primary/10 hover:border-primary/80 transition-all duration-300"
        title={playing ? "Pause music" : "Play music"}
      >
        <AnimatePresence mode="wait">
          {playing ? (
            <motion.svg
              key="pause"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-primary"
            >
              <rect x="6" y="4" width="4" height="16" rx="1" />
              <rect x="14" y="4" width="4" height="16" rx="1" />
            </motion.svg>
          ) : (
            <motion.svg
              key="play"
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              transition={{ duration: 0.2 }}
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4 text-primary ml-0.5"
            >
              <path d="M8 5.14v14.72a1 1 0 0 0 1.5.86l11-7.36a1 1 0 0 0 0-1.72l-11-7.36A1 1 0 0 0 8 5.14z" />
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Animated ring when playing */}
        {playing && (
          <motion.span
            className="absolute inset-0 rounded-full border border-primary/30"
            animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeOut" }}
          />
        )}
      </motion.button>
    </>
  );
}
