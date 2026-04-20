"use client";

import { useEffect, useState } from "react";

type Props = {
  timeZone?: string;
  label?: string;
  className?: string;
};

export function LiveClock({
  timeZone = "Asia/Kolkata",
  label = "IST",
  className,
}: Props) {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const update = () => {
      try {
        const formatted = new Intl.DateTimeFormat("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
          timeZone,
        }).format(new Date());
        setTime(formatted);
      } catch {
        setTime("");
      }
    };
    update();
    const id = window.setInterval(update, 1000);
    return () => window.clearInterval(id);
  }, [timeZone]);

  return (
    <span className={className} suppressHydrationWarning>
      {time || "--:--:--"} <span className="opacity-60">{label}</span>
    </span>
  );
}
