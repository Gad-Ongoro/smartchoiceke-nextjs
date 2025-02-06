"use client";

import { motion } from "framer-motion";

export function AnimatedGradientText({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ")

  return (
    <h1 className={`text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter ${className}`}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-4 last:mr-0">
          {word.split("").map((letter, letterIndex) => (
            <motion.span
              key={`${wordIndex}-${letterIndex}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: wordIndex * 0.1 + letterIndex * 0.03,
                type: "spring",
                stiffness: 150,
                damping: 25,
              }}
              className="inline-block text-transparent bg-clip-text 
                         bg-gradient-to-r from-blue-600 to-purple-600 
                         dark:from-blue-300 dark:to-purple-300"
            >
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </h1>
  )
}
