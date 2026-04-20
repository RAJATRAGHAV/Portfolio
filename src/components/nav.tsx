"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Download } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import { Magnetic } from "./magnetic";

const links = [
  { label: "Work", href: "#work", id: "work" },
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Contact", href: "#contact", id: "contact" },
];

const RESUME = "/Rajat-Raghav-Resume.pdf";

export function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-30% 0% -55% 0%", threshold: [0, 0.2, 0.5, 0.8, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className={`fixed inset-x-0 top-0 z-30 transition-all duration-500 ${
        scrolled
          ? "border-b border-[var(--line)] bg-[var(--bg)]/80 backdrop-blur-xl"
          : "border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex w-full max-w-container items-center justify-between px-6 py-4 md:px-10">
        <Link href="#top" className="flex items-center gap-3" aria-label="Home">
          <div className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]">
            <span className="font-display text-[15px] leading-none">R</span>
            <span className="pulse-ring absolute inset-0 rounded-full" />
          </div>
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="text-[13px] font-medium text-[var(--ink)]">
              Rajat Raghav
            </span>
            <span className="mono text-[10px] text-[var(--muted)]">
              Product Engineer · AI Systems
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 rounded-full border border-[var(--line)] bg-[var(--surface)]/70 px-2 py-1.5 backdrop-blur md:flex">
          {links.map((link) => {
            const active = activeId === link.id;
            return (
              <a
                key={link.href}
                href={link.href}
                className={`group relative rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active ? "text-[var(--ink)]" : "text-[var(--ink-soft)]"
                } hover:text-[var(--ink)]`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                    className="absolute inset-0 rounded-full bg-[var(--surface-muted)]"
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {active && (
                    <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                  )}
                  {link.label}
                </span>
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={RESUME}
            download
            aria-label="Download résumé"
            className="hidden h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)] transition-colors hover:border-[var(--ink)] sm:inline-flex"
          >
            <Download className="h-4 w-4" strokeWidth={1.5} />
          </a>
          <ThemeToggle />
          <Magnetic strength={12}>
            <a
              href="#contact"
              className="btn-primary hidden text-[13px] sm:inline-flex"
            >
              Let&rsquo;s talk
              <span aria-hidden>↗</span>
            </a>
          </Magnetic>
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] md:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <span
                className={`block h-[1.5px] w-4 bg-[var(--ink)] transition-transform duration-300 ${
                  mobileOpen ? "translate-y-[3px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-4 bg-[var(--ink)] transition-transform duration-300 ${
                  mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      <motion.div
        initial={false}
        animate={{
          height: mobileOpen ? "auto" : 0,
          opacity: mobileOpen ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="overflow-hidden border-t border-[var(--line)] bg-[var(--bg)]/95 backdrop-blur-xl md:hidden"
      >
        <nav className="mx-auto flex w-full max-w-container flex-col gap-1 px-6 py-6">
          {links.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between border-b border-[var(--line-soft)] py-3 text-[var(--ink)]"
            >
              <span className="editorial text-[22px]">{link.label}</span>
              <span className="mono text-[var(--muted)]">
                {String(idx + 1).padStart(2, "0")}
              </span>
            </a>
          ))}
          <a
            href={RESUME}
            download
            onClick={() => setMobileOpen(false)}
            className="btn-ghost mt-4 justify-center"
          >
            <Download className="h-4 w-4" />
            Download résumé
          </a>
          <a
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="btn-primary justify-center text-center"
          >
            Let&rsquo;s talk
            <span aria-hidden>↗</span>
          </a>
        </nav>
      </motion.div>
    </motion.header>
  );
}
