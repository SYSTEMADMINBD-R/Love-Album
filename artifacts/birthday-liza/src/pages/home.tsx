import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Candle from "@/components/candle";
import LetterModal from "@/components/LetterModal";
import { useLanguage } from "@/context/LanguageContext";

import photo1 from "@assets/b02a5afb-0a65-427c-8c09-0a61f3f6805b_1782550520978.jfif";
import photo2 from "@assets/ef0cfe33-fa3c-406a-814d-9f1e6c3a608d_1782550527974.jfif";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const { lang, toggle, t } = useLanguage();
  const isBn = lang === "bn";

  const fontClass = isBn ? "font-bengali" : "";

  return (
    <div
      className={`w-full min-h-screen bg-background overflow-hidden ${isBn ? "" : "font-sans"}`}
      style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif" } : {}}
    >
      {/* Floating Language Toggle */}
      <div className="fixed top-5 right-5 z-50">
        <button
          onClick={toggle}
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-primary/40 bg-background/80 backdrop-blur-sm text-sm text-foreground/80 hover:border-primary/80 hover:text-foreground transition-all duration-300 shadow-lg shadow-primary/10"
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={lang}
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 6 }}
              transition={{ duration: 0.25 }}
              className="font-medium tracking-wide"
              style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif" } : {}}
            >
              {isBn ? "English" : "বাংলা"}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      {/* 1. Hero Section */}
      <section className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden bg-foreground">
        <motion.div
          style={{ y: yHero }}
          className="absolute inset-0 w-full h-full"
        >
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
            style={{ backgroundImage: `url(${photo1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background" />
        </motion.div>

        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#fdfbf7] tracking-wider mb-6"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
          >
            {t.heroName}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
            className="h-[1px] w-24 bg-primary/60 mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, delay: 1.2, ease: "easeOut" }}
            className="text-xl md:text-3xl text-secondary font-serif italic tracking-wide"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
          >
            {t.heroSubtitle}
          </motion.p>
        </div>
      </section>

      {/* 2. My Only Desirable Love */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-24"
        >
          <h2
            className="font-serif text-4xl md:text-6xl text-foreground mb-8"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
          >
            {t.section2Title}
          </h2>
          <div
            className="max-w-2xl mx-auto space-y-6 text-foreground/80 leading-relaxed text-lg md:text-xl"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif" } : {}}
          >
            <p>{t.section2Para1}</p>
            <p>{t.section2Para2}</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[3/4] w-full max-w-md mx-auto"
          >
            <div className="absolute inset-0 bg-primary/10 rounded-2xl transform -rotate-3 scale-105" />
            <img
              src={photo1}
              alt="Liza"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-2xl shadow-primary/20"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[2/3] w-full max-w-sm mx-auto md:mt-32"
          >
            <div className="absolute inset-0 bg-secondary/20 rounded-t-full transform rotate-2 scale-105" />
            <img
              src={photo2}
              alt="Liza"
              className="relative z-10 w-full h-full object-cover rounded-t-full shadow-2xl shadow-secondary/30"
            />
          </motion.div>
        </div>
      </section>

      {/* 3. The Inner Feelings */}
      <section className="py-32 bg-primary/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="font-serif text-4xl md:text-5xl text-primary"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
          >
            {t.section3Title}
          </motion.h2>

          <div
            className="space-y-12 font-serif text-2xl md:text-4xl leading-snug text-foreground/90 italic"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
          >
            {[t.section3Quote1, t.section3Quote2, t.section3Quote3].map((q, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: (i + 1) * 0.2 }}
              >
                {q}
              </motion.p>
            ))}
          </div>
        </div>
      </section>

      {/* 4. My Heartful Thoughts */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2
            className="font-serif text-4xl md:text-6xl text-foreground mb-6"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
          >
            {t.section4Title}
          </h2>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-12" />
        </motion.div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {[t.section4Para1, t.section4Para2, t.section4Para3, t.section4Para4].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="relative pl-8 border-l border-primary/30"
            >
              <p
                className="text-lg md:text-xl text-foreground/85 leading-relaxed font-serif"
                style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif" } : {}}
              >
                {text}
              </p>
            </motion.div>
          ))}

          <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-primary/25 to-transparent my-16" />

          {[t.section4Poem1, t.section4Poem2, t.section4Poem3].map((poem, i) => (
            <motion.div
              key={`poem-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.2, delay: i * 0.2 }}
              className="text-center py-8 px-6"
            >
              <p
                className="font-serif italic text-xl md:text-2xl text-foreground/90 leading-relaxed tracking-wide"
                style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
              >
                &ldquo;{poem}&rdquo;
              </p>
              <div className="mt-6 flex items-center justify-center">
                <span className="text-primary/60 text-lg">&#9825;</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Make a Wish */}
      <section className="py-32 px-6 bg-foreground text-background relative flex flex-col items-center justify-center min-h-[80vh]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-center z-10"
        >
          <h2
            className="font-serif text-4xl md:text-5xl text-secondary mb-16"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontWeight: 600 } : {}}
          >
            {t.section5Title}
          </h2>
          <Candle />
          <p
            className="mt-16 text-background/70 tracking-widest uppercase text-sm"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", textTransform: "none", letterSpacing: "0.05em" } : {}}
          >
            {t.section5Hint}
          </p>
        </motion.div>

        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* 6. Letter Section */}
      <section className="py-32 px-6 flex flex-col items-center justify-center bg-primary/5 relative">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2 }}
          className="flex flex-col items-center"
        >
          <LetterModal />
        </motion.div>
      </section>

      {/* 7. Footer */}
      <footer className="py-24 bg-background text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="w-12 h-[1px] bg-primary/40 mb-4" />
          <p
            className="font-serif text-3xl md:text-4xl text-foreground italic"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", fontStyle: "normal" } : {}}
          >
            {t.footerSign}
          </p>
          <p
            className="text-primary tracking-widest uppercase text-sm"
            style={isBn ? { fontFamily: "'Hind Siliguri', sans-serif", textTransform: "none" } : {}}
          >
            {t.footerDate}
          </p>
        </motion.div>
      </footer>
    </div>
  );
}
