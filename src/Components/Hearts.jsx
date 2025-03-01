"use client";
import { motion } from "framer-motion";
import React from 'react'
import { useEffect, useState } from "react";

function Hearts() {

    const colors = [
        "#FF4B6E", // Bright rose pink
        "#FF85A1", // Soft coral
        "#FF1493", // Deep pink
        "#E34234", // Warm red
        "#9C27B0", // Rich purple
        "#673AB7", // Deep purple
        "#3F51B5", // Royal blue
        "#FB6B90", // Salmon pink
        "#D81B60", // Ruby red
        "#C2185B", // Dark rose
    ];

    const [hearts, setHearts] = useState([]);

    useEffect(() => {
        const addHeart = () => {
            const newHeart = {
            id: Date.now(),
            x: Math.random() * 100,
            color: colors[Math.floor(Math.random() * colors.length)],
            };
            setHearts((prev) => [...prev, newHeart]);
        };
    
        const interval = setInterval(addHeart, 200);
        return () => clearInterval(interval);
    }, []);

  return (
    <>
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
            {hearts.map((heart) => (
                <motion.svg
                key={heart.id}
                xmlns="http://www.w3.org/2000/svg"
                className="absolute"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                initial={{
                    bottom: "100%",
                    left: `${heart.x}%`,
                    fill: heart.color,
                    opacity: 1,
                }}
                animate={{
                    bottom: "-100%",
                    rotate: [0, -35, 35, -35, 35, 0],
                    opacity: [1, 1, 0.7, 0.4, 0.2, 0],
                }}
                transition={{
                    duration: 8,
                    ease: "easeInOut",
                }}
                onAnimationComplete={() => {
                    setHearts((prev) => prev.filter((h) => h.id !== heart.id));
                }}
                >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
                </motion.svg>
            ))}
        </div>
    </>
  )
}

export default Hearts