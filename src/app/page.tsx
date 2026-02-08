"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  const navLinks = [
    { label: "Work", href: "#work" },
    { label: "Focus", href: "#focus" },
    { label: "Development", href: "#development" },
    { label: "Systems", href: "#systems" },
    { label: "Papers", href: "#papers" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const focusAreas = [
    {
      title: "Agentic AI Systems",
      description:
        "Graph-based agents, tool orchestration, and evaluation loops you can trust.",
      points: ["StateGraph design", "Self-verification", "Tool governance"],
    },
    {
      title: "Contract Intelligence",
      description:
        "Hybrid algorithms for clause extraction, deviation detection, and risk scoring.",
      points: ["RRF ranking", "Cross-encoders", "CUAD tuning"],
    },
    {
      title: "Infrastructure & Deployments",
      description:
        "Production-grade FastAPI systems with realtime streaming and observability.",
      points: ["ASGI concurrency", "SSE/WebSockets", "Tenant isolation"],
    },
  ];

  const projects = [
    {
      title: "Agentic Contract Review",
      year: "2024",
      summary:
        "Built a multi-agent compliance engine with planner/analyzer/verifier loops.",
      impact: "Reduced review turnaround by 55% with higher precision.",
      focus: "Agentic Systems",
      stack: ["LangGraph", "FastAPI", "Qdrant", "RoBERTa"],
    },
    {
      title: "RRF-Powered Retrieval Layer",
      year: "2023",
      summary:
        "Combined dense vectors and keyword search with reciprocal rank fusion.",
      impact: "Lifted clause recall and reduced false positives by 31%.",
      focus: "Search + Ranking",
      stack: ["Qdrant", "MySQL", "Cross-encoders", "Python"],
    },
    {
      title: "FastAPI Operations Backbone",
      year: "2022",
      summary:
        "Designed an event-driven backend with streaming updates and tenant isolation.",
      impact: "99.95% uptime with 40% faster incident response.",
      focus: "Infra + Reliability",
      stack: ["FastAPI", "Redis", "S3", "Kubernetes"],
    },
  ];

  const experience = [
    {
      role: "Product Engineer",
      company: "AI + SaaS Studio",
      period: "2022 — Present",
      summary:
        "Lead agentic AI delivery, contract intelligence systems, and platform reliability.",
    },
    {
      role: "Software Engineer",
      company: "Cloud Platform Company",
      period: "2019 — 2022",
      summary:
        "Built multi-tenant SaaS workflows, optimized APIs, and scaled core services.",
    },
  ];

  const skills = [
    "TypeScript",
    "LangGraph",
    "FastAPI",
    "React",
    "Node.js",
    "Python",
    "PostgreSQL",
    "Qdrant",
    "Kubernetes",
    "Terraform",
    "LLM Ops",
    "RAG Pipelines",
    "System Design",
    "Product Strategy",
  ];

  const metrics = [
    { label: "Agentic systems shipped", value: "12+" },
    { label: "Years in AI + SaaS", value: "7+" },
    { label: "White papers authored", value: "6+" },
  ];

  const highlights = [
    "Architected graph-based cognitive pipelines for agentic review systems.",
    "Built hybrid semantic + keyword retrieval for legal-grade precision.",
    "Shipped secure, observable FastAPI infra with real-time streaming.",
    "Translated research into product decisions through white papers.",
  ];

  const approach = [
    {
      title: "Define",
      description:
        "Align on risk, success metrics, and system constraints early.",
    },
    {
      title: "Engineer",
      description:
        "Prototype fast, validate, and ship hardened systems with tests and telemetry.",
    },
    {
      title: "Operationalize",
      description:
        "Automate deployments, optimize performance, and guard with SLOs.",
    },
  ];

  const developmentPillars = [
    {
      title: "Agentic Frameworks",
      description:
        "Graph-based cognitive architectures built with LangGraph and MCP for iterative reasoning.",
      items: [
        "StateGraph orchestration with shared AgentState",
        "Planner / Analyzer / Verifier loops for compliance",
        "Sandboxed code execution via Docker templates",
        "Tooling exposed through MCP server contracts",
      ],
    },
    {
      title: "Contract Review Algorithms",
      description:
        "Hybrid ensemble of deterministic rules, semantic search, and ML models.",
      items: [
        "CUAD-tuned RoBERTa for clause extraction",
        "RRF across Qdrant + MySQL for ranking",
        "Cross-encoder reranking for precision",
        "Deviation detection via cosine similarity thresholds",
      ],
    },
    {
      title: "FastAPI Infrastructure",
      description:
        "High-concurrency, event-driven backend with resilient middleware.",
      items: [
        "ASGI async I/O with Uvicorn for scale",
        "WebSockets + SSE for real-time updates",
        "Redis rate limiting and tenant-aware middleware",
        "Polyglot storage: MongoDB, S3, Qdrant",
      ],
    },
  ];

  const signatureCapabilities = [
    {
      title: "Multi-agent orchestration",
      description:
        "Designing cooperative agent swarms with routing, memory, and self-correction.",
      tags: ["LangGraph", "MCP", "Tooling"],
    },
    {
      title: "Algorithmic rigor",
      description:
        "Building deterministic checks, probabilistic scoring, and retrieval systems.",
      tags: ["RRF", "Cross-encoders", "CUAD"],
    },
    {
      title: "Production-grade AI",
      description:
        "Infrastructure for reliability, observability, and secure deployments.",
      tags: ["FastAPI", "K8s", "SLOs"],
    },
    {
      title: "Research communication",
      description:
        "Authoring white papers that make complex systems legible and actionable.",
      tags: ["Technical writing", "Evaluation", "Roadmaps"],
    },
  ];

  const systemBlueprints = [
    {
      title: "Contract intelligence core",
      description:
        "Hybrid clause extraction, semantic retrieval, and deviation detection.",
      signal: "RRF + RoBERTa + cosine thresholds",
    },
    {
      title: "Agentic review loop",
      description:
        "Planner → Analyzer → Verifier pipeline for grounded compliance checks.",
      signal: "Graph-based retries and tool gating",
    },
    {
      title: "Real-time operations",
      description:
        "WebSocket + SSE streaming for long-running analysis and UI feedback.",
      signal: "ASGI concurrency with tenant isolation",
    },
  ];

  const papers = [
    {
      title: "Agentic Contract Intelligence",
      year: "2024",
      description:
        "A graph-based cognitive architecture for high-precision contract review.",
      topics: ["LangGraph", "MCP", "Verification"],
    },
    {
      title: "RRF Retrieval for Legal Systems",
      year: "2023",
      description:
        "Combining dense and keyword search with reciprocal rank fusion.",
      topics: ["RRF", "Qdrant", "MySQL"],
    },
    {
      title: "FastAPI at Scale",
      year: "2022",
      description:
        "Designing multi-tenant, event-driven backends for AI workloads.",
      topics: ["ASGI", "SSE", "Observability"],
    },
  ];

  const deploymentStack = [
    "Dockerized execution and sandboxing",
    "CI/CD with environment parity",
    "Cost-aware autoscaling and caching",
    "Observability across traces, logs, and metrics",
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg)] text-[var(--text)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px] dark:bg-emerald-500/10" />
        <div className="absolute top-40 -left-20 h-[360px] w-[360px] rounded-full bg-blue-500/10 blur-[130px] dark:bg-blue-500/10" />
        <div className="absolute bottom-0 right-1/3 h-[320px] w-[320px] rounded-full bg-purple-500/10 blur-[140px] dark:bg-purple-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(15,23,42,0.08),transparent_45%)] dark:bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_45%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(to_right,rgba(15,23,42,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.06)_1px,transparent_1px)] dark:opacity-30 dark:[background-image:linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:56px_56px]" />
      </div>

      <header className="sticky top-0 z-20 border-b border-zinc-200/70 bg-white/80 backdrop-blur dark:border-white/5 dark:bg-zinc-950/80">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200/70 bg-white text-xs font-semibold uppercase tracking-[0.2em] text-zinc-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-200">
              R
            </div>
            <div>
              <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                Rajat
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Product Engineer
              </div>
            </div>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-500 md:flex dark:text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition hover:text-zinc-900 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="/resume.pdf"
              className="hidden rounded-full border border-zinc-200/70 px-4 py-2 text-sm font-medium text-zinc-700 transition hover:border-zinc-300 sm:inline-flex dark:border-white/10 dark:text-zinc-100 dark:hover:border-white/30"
            >
              Download resume
            </a>
            <ThemeToggle />
            <a
              href="mailto:hello@yourdomain.com"
              className="rounded-full bg-zinc-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </header>

      <main className="relative mx-auto flex w-full max-w-6xl flex-col gap-24 px-6 pb-24 pt-16">
        <motion.section
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/50 bg-gradient-to-br from-white via-zinc-50/50 to-white p-12 shadow-2xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 dark:shadow-zinc-950/50 lg:p-16"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.15),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.15),transparent_50%)]" />
          
          <div className="relative grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div className="space-y-8" variants={fadeUp}>
              <motion.div
                className="inline-flex items-center gap-3 rounded-full border border-emerald-400/50 bg-gradient-to-r from-emerald-50 to-emerald-100/50 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 shadow-lg shadow-emerald-500/10 dark:border-emerald-400/40 dark:from-emerald-950/30 dark:to-emerald-900/20 dark:text-emerald-200"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Sparkles className="h-4 w-4 animate-pulse text-emerald-600 dark:text-emerald-300" />
                AI Product Engineer
              </motion.div>
              
              <div className="space-y-6">
                <motion.h1
                  className="bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 bg-clip-text text-5xl font-bold leading-[1.1] text-transparent dark:from-white dark:via-zinc-100 dark:to-white sm:text-7xl"
                  variants={fadeUp}
                >
                  I design{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-emerald-400 dark:to-teal-400">
                      agentic AI systems
                    </span>
                    <motion.span
                      className="absolute inset-0 -z-10 bg-gradient-to-r from-emerald-200/50 to-teal-200/50 blur-2xl dark:from-emerald-500/20 dark:to-teal-500/20"
                      animate={{
                        opacity: [0.5, 1, 0.5],
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                  </span>{" "}
                  and the infrastructure that keeps them reliable.
                </motion.h1>
                
                <motion.p
                  className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-300"
                  variants={fadeUp}
                >
                  Multi-agent orchestration, complex contract algorithms, secure
                  deployments, and the white papers that make the stack
                  understandable for teams and stakeholders.
                </motion.p>
              </div>
              
              <motion.div
                className="flex flex-wrap gap-4"
                variants={fadeUp}
              >
                <motion.a
                  href="#systems"
                  className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/30 dark:from-white dark:to-zinc-100 dark:text-zinc-900 dark:shadow-white/10 dark:hover:shadow-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Explore systems
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </motion.a>
                <motion.a
                  href="#papers"
                  className="rounded-full border-2 border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-white hover:shadow-lg dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read papers
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/your-handle"
                  className="rounded-full border-2 border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-white hover:shadow-lg dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  LinkedIn
                </motion.a>
              </motion.div>
              
              <motion.div
                className="flex flex-wrap items-center gap-6 text-sm font-medium text-zinc-500 dark:text-zinc-400"
                variants={fadeUp}
              >
                <span className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" />
                  AI systems • SaaS • Infrastructure
                </span>
                <span className="hidden h-1 w-1 rounded-full bg-zinc-400 sm:inline-flex" />
                <span>Remote · Global · UTC+5:30</span>
              </motion.div>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeUp}>
              <div className="grid gap-4 sm:grid-cols-2">
                {signatureCapabilities.map((capability, idx) => (
                  <motion.div
                    key={capability.title}
                    className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-white/90 p-6 shadow-lg shadow-zinc-900/5 backdrop-blur-sm transition-all hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/10 dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ y: -4 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100 dark:from-emerald-950/20" />
                    <div className="relative">
                      <h3 className="text-base font-bold text-zinc-900 dark:text-white">
                        {capability.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                        {capability.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-2 text-xs">
                        {capability.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-1 font-medium text-zinc-600 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="grid gap-4 sm:grid-cols-3">
                {metrics.map((metric, idx) => (
                  <motion.div
                    key={metric.label}
                    className="relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white to-zinc-50/50 p-6 shadow-lg shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/70 dark:to-zinc-900/50"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    whileHover={{ scale: 1.05, y: -4 }}
                  >
                    <div className="text-3xl font-bold text-zinc-900 dark:text-white">
                      {metric.value}
                    </div>
                    <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                      {metric.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="work"
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap items-end justify-between gap-6"
            variants={fadeUp}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Selected Work
              </div>
              <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                Case studies that prove rigor at scale
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              2022 — 2024
            </span>
          </motion.div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <motion.article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-8 shadow-xl shadow-zinc-900/5 transition-all hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50 dark:hover:border-white/20 dark:hover:bg-white/5"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-emerald-50/0 to-emerald-50/0 transition-all group-hover:from-emerald-50/50 group-hover:via-emerald-50/30 group-hover:to-emerald-50/50 dark:group-hover:from-emerald-950/30 dark:group-hover:via-emerald-950/20 dark:group-hover:to-emerald-950/30" />
                
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="space-y-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full border border-emerald-200/60 bg-emerald-50/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-400/30 dark:bg-emerald-950/40 dark:text-emerald-200">
                        {project.focus}
                      </span>
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                        {project.year}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold leading-tight text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {project.summary}
                    </p>
                    
                    <div className="rounded-lg border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-teal-50/50 p-3 dark:border-emerald-400/20 dark:from-emerald-950/40 dark:to-teal-950/40">
                      <p className="text-sm font-bold text-emerald-700 dark:text-emerald-200">
                        {project.impact}
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="focus"
          className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div className="space-y-6" variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
              Focus
            </div>
            <h2 className="bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
              Agentic systems across product and infrastructure
            </h2>
            <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              I bridge product strategy and technical execution to deliver
              outcomes across AI workflows, contract intelligence, and resilient
              infrastructure.
            </p>
            <motion.div
              className="space-y-4 rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/50 to-white p-8 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50"
              variants={fadeUp}
            >
              <h3 className="text-sm font-bold uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-300">
                Highlights
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                {highlights.map((item, idx) => (
                  <motion.li
                    key={item}
                    className="flex gap-4"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area, idx) => (
              <motion.div
                key={area.title}
                className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-6 shadow-lg shadow-zinc-900/5 transition-all hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/10 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50 dark:hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-teal-50/0 transition-all group-hover:from-emerald-50/50 group-hover:to-teal-50/30 dark:group-hover:from-emerald-950/30 dark:group-hover:to-teal-950/20" />
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {area.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {area.points.map((point) => (
                      <span
                        key={point}
                        className="rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1 text-xs font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="development"
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/50 bg-gradient-to-br from-white via-zinc-50/30 to-white p-12 shadow-2xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 dark:shadow-zinc-950/50 lg:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_20%_50%,rgba(16,185,129,0.12),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.08),transparent_50%)] dark:bg-[radial-gradient(circle_at_80%_50%,rgba(59,130,246,0.12),transparent_50%)]" />
          
          <div className="relative space-y-12">
            <motion.div
              className="flex flex-wrap items-end justify-between gap-6"
              variants={fadeUp}
            >
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                  Development
                </div>
                <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                  What I build under the hood
                </h2>
              </div>
              <span className="rounded-full border border-zinc-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
                Agentic systems • Contract AI • FastAPI
              </span>
            </motion.div>
            
            <div className="grid gap-8 lg:grid-cols-3">
              {developmentPillars.map((pillar, idx) => (
                <motion.div
                  key={pillar.title}
                  className="group relative overflow-hidden rounded-2xl border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-7 shadow-xl shadow-zinc-900/5 transition-all hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50 dark:hover:border-white/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.15 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 via-teal-50/0 to-blue-50/0 transition-all group-hover:from-emerald-50/40 group-hover:via-teal-50/30 group-hover:to-blue-50/40 dark:group-hover:from-emerald-950/30 dark:group-hover:via-teal-950/20 dark:group-hover:to-blue-950/30" />
                  <div className="relative z-10">
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {pillar.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {pillar.description}
                    </p>
                    <ul className="mt-6 space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                      {pillar.items.map((item, itemIdx) => (
                        <motion.li
                          key={item}
                          className="flex gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.15 + itemIdx * 0.05 }}
                        >
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 shadow-md shadow-emerald-500/30" />
                          <span className="leading-relaxed">{item}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="systems"
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap items-end justify-between gap-6"
            variants={fadeUp}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Systems
              </div>
              <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                Architected for rigor, auditability, and scale
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              AI-native • Contract intelligence • Production-ready
            </span>
          </motion.div>
          
          <Accordion
            type="single"
            collapsible
            className="grid gap-6 lg:grid-cols-3"
          >
            {systemBlueprints.map((system, idx) => (
              <motion.div
                key={system.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
              >
                <AccordionItem value={system.title}>
                  <AccordionTrigger className="text-lg font-bold">
                    {system.title}
                  </AccordionTrigger>
                  <AccordionContent className="mt-4 space-y-4">
                    <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                      {system.description}
                    </p>
                    <div className="rounded-lg border border-emerald-200/60 bg-gradient-to-r from-emerald-50 to-teal-50/50 p-3 text-xs font-bold uppercase tracking-[0.3em] text-emerald-700 dark:border-emerald-400/20 dark:from-emerald-950/40 dark:to-teal-950/40 dark:text-emerald-200">
                      {system.signal}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
          
          <motion.div
            className="rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-10 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-600 dark:text-emerald-300">
              Deployment & Reliability
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {deploymentStack.map((item, idx) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-4 text-sm"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1 }}
                >
                  <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-gradient-to-br from-emerald-400 to-teal-400 shadow-lg shadow-emerald-500/30" />
                  <span className="leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          id="papers"
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap items-end justify-between gap-6"
            variants={fadeUp}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                White Papers
              </div>
              <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                Research that translates into product decisions
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              Systems thinking • Evidence-backed
            </span>
          </motion.div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            {papers.map((paper, idx) => (
              <motion.div
                key={paper.title}
                className="group relative overflow-hidden rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-8 shadow-xl shadow-zinc-900/5 transition-all hover:border-zinc-300 hover:shadow-2xl hover:shadow-zinc-900/10 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50 dark:hover:border-white/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/0 via-purple-50/0 to-pink-50/0 transition-all group-hover:from-blue-50/40 group-hover:via-purple-50/30 group-hover:to-pink-50/40 dark:group-hover:from-blue-950/30 dark:group-hover:via-purple-950/20 dark:group-hover:to-pink-950/30" />
                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-blue-200/60 bg-blue-50/80 px-3 py-1 text-xs font-bold uppercase tracking-[0.3em] text-blue-700 dark:border-blue-400/30 dark:bg-blue-950/40 dark:text-blue-200">
                      Paper
                    </span>
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500">
                      {paper.year}
                    </span>
                  </div>
                  <h3 className="mt-5 text-xl font-bold leading-tight text-zinc-900 dark:text-white">
                    {paper.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {paper.description}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {paper.topics.map((topic) => (
                      <span
                        key={topic}
                        className="rounded-full border border-zinc-200/60 bg-white/80 px-3 py-1.5 text-xs font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="about"
          className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-10 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50"
            variants={fadeUp}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
              Experience
            </div>
            <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
              Product-minded engineering leader
            </h2>
            <p className="mt-5 text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
              I lead delivery across AI features, platform architecture, and
              infrastructure scale. Comfortable guiding strategy, execution, and
              cross-functional alignment.
            </p>
            <div className="mt-10 space-y-8">
              {experience.map((role, idx) => (
                <motion.div
                  key={role.role}
                  className="relative border-l-2 border-emerald-300/60 pl-8 dark:border-emerald-400/40"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.2 }}
                >
                  <div className="absolute -left-2 top-0 h-4 w-4 rounded-full border-2 border-emerald-300 bg-white dark:border-emerald-400 dark:bg-zinc-950" />
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-zinc-900 dark:text-white">
                      {role.role}
                    </span>
                    <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400">
                      {role.period}
                    </span>
                  </div>
                  <div className="mt-2 text-sm font-semibold text-zinc-600 dark:text-zinc-300">
                    {role.company}
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                    {role.summary}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-8 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Approach
              </div>
              <div className="mt-6 space-y-6">
                {approach.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="text-base font-bold text-zinc-900 dark:text-white">
                      {item.title}
                    </div>
                    <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              className="rounded-[2rem] border border-zinc-200/60 bg-gradient-to-br from-white via-zinc-50/30 to-white p-8 shadow-xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950/50 dark:via-zinc-900/30 dark:to-zinc-950/50"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Operating style
              </div>
              <p className="mt-5 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">
                I ship iteratively, prioritize clarity, and keep a bias for
                measurable outcomes. I&apos;m equally comfortable in roadmap
                debates and scaling services in production.
              </p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="space-y-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            className="flex flex-wrap items-end justify-between gap-6"
            variants={fadeUp}
          >
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Skills
              </div>
              <h2 className="mt-4 bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                Tools I rely on
              </h2>
            </div>
            <span className="rounded-full border border-zinc-200/60 bg-white/80 px-4 py-2 text-sm font-semibold text-zinc-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-zinc-300">
              Product, engineering, execution
            </span>
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-3"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skills.map((skill, idx) => (
              <motion.span
                key={skill}
                className="rounded-full border border-zinc-200/60 bg-gradient-to-br from-white to-zinc-50/50 px-5 py-2.5 text-sm font-semibold text-zinc-700 shadow-lg shadow-zinc-900/5 transition-all hover:scale-110 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/10 dark:border-white/10 dark:from-zinc-950/70 dark:to-zinc-900/50 dark:text-zinc-200 dark:hover:border-white/20"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.section>

        <motion.section
          id="contact"
          className="relative overflow-hidden rounded-[2.5rem] border border-zinc-200/50 bg-gradient-to-br from-white via-zinc-50/30 to-white p-12 shadow-2xl shadow-zinc-900/5 dark:border-white/10 dark:from-zinc-950 dark:via-zinc-900/50 dark:to-zinc-950 dark:shadow-zinc-950/50 lg:p-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.1),transparent_70%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(16,185,129,0.15),transparent_70%)]" />
          <motion.div
            className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center"
            variants={fadeUp}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-50/50 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.4em] text-emerald-700 dark:border-emerald-400/40 dark:bg-emerald-950/30 dark:text-emerald-200">
                Contact
              </div>
              <h2 className="bg-gradient-to-br from-zinc-900 to-zinc-700 bg-clip-text text-4xl font-bold text-transparent dark:from-white dark:to-zinc-300">
                Let&apos;s build something ambitious.
              </h2>
              <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
                Reach out for product engineering, AI platforms, or infrastructure
                work.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <motion.a
                href="mailto:hello@yourdomain.com"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-zinc-900 to-zinc-800 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-zinc-900/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-zinc-900/30 dark:from-white dark:to-zinc-100 dark:text-zinc-900 dark:shadow-white/10 dark:hover:shadow-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                hello@yourdomain.com
              </motion.a>
              <motion.a
                href="https://cal.com/your-handle"
                className="rounded-full border-2 border-zinc-300 bg-white/80 px-6 py-3 text-sm font-semibold text-zinc-700 backdrop-blur-sm transition-all hover:border-zinc-400 hover:bg-white hover:shadow-lg dark:border-white/20 dark:bg-white/5 dark:text-white dark:hover:border-white/40 dark:hover:bg-white/10"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a call
              </motion.a>
            </div>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-zinc-200/70 py-8 dark:border-white/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-zinc-500 sm:flex-row">
          <span>© 2026 Rajat. All rights reserved.</span>
          <div className="flex items-center gap-4 text-zinc-500">
            <a
              href="https://github.com/your-handle"
              className="transition hover:text-zinc-900 dark:hover:text-zinc-300"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/your-handle"
              className="transition hover:text-zinc-900 dark:hover:text-zinc-300"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="mailto:hello@yourdomain.com"
              className="transition hover:text-zinc-900 dark:hover:text-zinc-300"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
