import { motion } from "framer-motion";
import balloon1 from "@assets/balloon1_1782554910850.png";
import balloon2 from "@assets/balloon2_1782554910861.png";

const balloons = [
  { img: balloon1, left: "5%",  size: 52,  delay: 0,    duration: 14 },
  { img: balloon2, left: "15%", size: 64,  delay: 3,    duration: 17 },
  { img: balloon1, left: "28%", size: 46,  delay: 7,    duration: 13 },
  { img: balloon2, left: "42%", size: 68,  delay: 1.5,  duration: 18 },
  { img: balloon1, left: "58%", size: 50,  delay: 5,    duration: 15 },
  { img: balloon2, left: "70%", size: 60,  delay: 9,    duration: 16 },
  { img: balloon1, left: "82%", size: 56,  delay: 2,    duration: 14 },
  { img: balloon2, left: "92%", size: 44,  delay: 6,    duration: 12 },
];

export default function Balloons() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {balloons.map((b, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0"
          style={{ left: b.left }}
          initial={{ y: "110vh", x: 0, opacity: 0 }}
          animate={{
            y: [
              "110vh",
              "80vh",
              "55vh",
              "30vh",
              "5vh",
              "-15vh",
            ],
            x: [0, 12, -10, 14, -8, 10],
            opacity: [0, 0.85, 0.9, 0.85, 0.8, 0],
          }}
          transition={{
            duration: b.duration,
            delay: b.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 4 + 2,
            ease: "easeInOut",
            times: [0, 0.2, 0.4, 0.6, 0.85, 1],
          }}
        >
          <motion.img
            src={b.img}
            alt=""
            style={{ width: b.size, height: "auto" }}
            animate={{ rotate: [-4, 4, -3, 5, -4] }}
            transition={{
              duration: b.duration * 0.5,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
              delay: b.delay,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
