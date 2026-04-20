"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

type FadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

export function FadeUp({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: FadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once, amount: 0.15 });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

type WordsProps = {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "div";
};

export function RevealWords({
  text,
  className,
  delay = 0,
  as = "span",
}: WordsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const words = text.split(" ");
  const Wrapper = as === "div" ? "div" : "span";

  return (
    <Wrapper
      ref={ref as React.RefObject<HTMLSpanElement & HTMLDivElement>}
      className={className}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span
            className="relative inline-block"
            style={{
              lineHeight: "inherit",
              verticalAlign: "bottom",
              clipPath: "inset(-10% -2% -30% -2%)",
            }}
          >
            <motion.span
              className="inline-block will-change-transform"
              initial={{ y: "150%" }}
              animate={inView ? { y: "0%" } : { y: "150%" }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
                delay: delay + i * 0.055,
              }}
            >
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Wrapper>
  );
}

type CharsProps = {
  text: string;
  className?: string;
  delay?: number;
};

export function RevealChars({ text, className, delay = 0 }: CharsProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.05 });
  const chars = [...text];
  return (
    <span ref={ref} className={className}>
      {chars.map((ch, i) => (
        <span
          key={`${ch}-${i}`}
          className="inline-block overflow-hidden align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={{ y: "110%" }}
            animate={inView ? { y: "0%" } : { y: "110%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: delay + i * 0.02,
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
