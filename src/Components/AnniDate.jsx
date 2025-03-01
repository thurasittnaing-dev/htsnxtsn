"use client";
import { motion } from "framer-motion";

const AnniDate = ({ text = "Since 28/March/2024" }) => {
  const textArray = text.split("");
  return (
    <div className="">
      {textArray.map((item, index) => (
        <motion.span
          key={index}
          className="mogra text-lg text-black"
          initial={{
            y: 0,
          }}
          animate={{
            y: [0, -10, 0],
            filter: ["blur(0px)", "blur(1px)", "blur(0px)"],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: 0.03 * index,
            repeatDelay: 0.1 * (textArray.length - 1),
            ease: "linear",
          }}
        >
          {item === " " ? " " : item}
        </motion.span>
      ))}
    </div>
  );
};

export default AnniDate;
