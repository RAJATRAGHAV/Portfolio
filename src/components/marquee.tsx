"use client";

import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  speed?: number;
};

export function Marquee({ children, className, reverse, speed = 40 }: Props) {
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <div
        className="marquee-track flex w-max whitespace-nowrap"
        style={{
          animationDuration: `${speed}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
