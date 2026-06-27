import { useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Candle from "@/components/candle";

import photo1 from "@assets/b02a5afb-0a65-427c-8c09-0a61f3f6805b_1782550520978.jfif";
import photo2 from "@assets/ef0cfe33-fa3c-406a-814d-9f1e6c3a608d_1782550527974.jfif";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const yHero = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  
  return (
    <div className="w-full min-h-screen bg-background overflow-hidden font-sans">
      
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
          >
            Liza
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
          >
            Happy Birthday, my love
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
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-8">My Only Desirable Love</h2>
          <div className="max-w-2xl mx-auto space-y-6 text-foreground/80 leading-relaxed text-lg md:text-xl">
            <p>
              To the woman who completely redefined what it means to be alive. Before I met you, the world was ordinary. Now, every single moment is painted in the golden hues of your presence. You are the poetry I never knew how to write, the warmth I never knew I was missing.
            </p>
            <p>
              Finding your soulmate isn't just about finding someone you can live with; it's about finding the person you cannot imagine existing without. You are my heart's deepest, most profound certainty. Every smile, every touch, every quiet moment we share is a testament to how entirely I am yours.
            </p>
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

      {/* 3. Our Story */}
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
          >
            The Inner Feelings for You My Heartbeat
          </motion.h2>

          <div className="space-y-12 font-serif text-2xl md:text-4xl leading-snug text-foreground/90 italic">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              "You are my home. The safest place my soul has ever known."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              "Every day with you is a gift, unwrapped slowly in the quiet light of morning."
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              "I love you, not only for what you are, but for what I am when I am with you."
            </motion.p>
          </div>
        </div>
      </section>

      {/* 4. My Heartful Thoughts for the Soul of My Life */}
      <section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-6xl text-foreground mb-6">
            My Heartful Thoughts for the Soul of My Life
          </h2>
          <div className="w-16 h-[1px] bg-primary/40 mx-auto mb-12" />
        </motion.div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {[
            "There are no words grand enough to hold what I feel for you. Language was invented long before you, and so it falls short every time I try. You are something the world had never seen before and I am the luckiest soul alive for getting to witness you every day.",
            "You carry within you a light that I have never seen in anyone else. It is not in how you look, though you are breathtaking. It is in how you love, how you laugh, how you face the world with a quiet, unshakeable grace that humbles me to my core.",
            "On this birthday, I want you to know that my life did not truly begin until you walked into it. Every year you are alive is a year the world is richer, warmer, and more beautiful. You are not just the love of my life, Liza. You are the reason I believe in something greater than myself.",
            "I hope this year holds everything your heart has ever longed for. And I hope you know, always and without doubt, that you are endlessly, completely, irrevocably loved by me."
          ].map((text, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1, delay: i * 0.15 }}
              className="relative pl-8 border-l border-primary/30"
            >
              <p className="text-lg md:text-xl text-foreground/85 leading-relaxed font-serif">
                {text}
              </p>
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
          <h2 className="font-serif text-4xl md:text-5xl text-secondary mb-16">Make a Wish</h2>
          <Candle />
          <p className="mt-16 text-lg text-background/70 tracking-widest uppercase text-sm">
            Tap to blow out the candle
          </p>
        </motion.div>
        
        {/* Soft glowing ambient light behind candle */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-primary/20 rounded-full blur-[100px]" />
        </div>
      </section>

      {/* 5. Footer */}
      <footer className="py-24 bg-background text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="flex flex-col items-center space-y-6"
        >
          <div className="w-12 h-[1px] bg-primary/40 mb-4" />
          <p className="font-serif text-3xl md:text-4xl text-foreground italic">With all my love,</p>
          <p className="text-primary tracking-widest uppercase text-sm">June 28, 2026</p>
        </motion.div>
      </footer>

    </div>
  );
}
