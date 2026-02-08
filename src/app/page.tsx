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
          className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <motion.div className="space-y-8" variants={fadeUp}>
            <div className="inline-flex items-center gap-3 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-emerald-700 dark:text-emerald-200">
              <Sparkles className="h-4 w-4 text-emerald-600 dark:text-emerald-200" />
              AI Product Engineer
            </div>
            <div className="space-y-6">
              <h1 className="text-4xl font-semibold leading-tight text-zinc-900 dark:text-white sm:text-6xl">
                I design agentic AI systems and the infrastructure that keeps
                them reliable.
              </h1>
              <p className="text-lg text-zinc-600 dark:text-zinc-300">
                Multi-agent orchestration, complex contract algorithms, secure
                deployments, and the white papers that make the stack
                understandable for teams and stakeholders.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="#systems"
                className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                Explore systems
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <a
                href="#papers"
                className="rounded-full border border-zinc-200/70 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-white/20 dark:text-white dark:hover:border-white/40"
              >
                Read papers
              </a>
              <a
                href="https://www.linkedin.com/in/your-handle"
                className="rounded-full border border-zinc-200/70 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-white/20 dark:text-white dark:hover:border-white/40"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-500 dark:text-zinc-400">
              <span>AI systems • SaaS • Infrastructure</span>
              <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:inline-flex" />
              <span>Remote · Global · UTC+5:30</span>
            </div>
          </motion.div>

          <motion.div className="space-y-6" variants={fadeUp}>
            <div className="grid gap-4 sm:grid-cols-2">
              {signatureCapabilities.map((capability) => (
                <div
                  key={capability.title}
                  className="rounded-3xl border border-zinc-200/70 bg-white/80 p-6 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
                >
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-white">
                    {capability.title}
                  </h3>
                  <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                    {capability.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                    {capability.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-white/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-2xl border border-zinc-200/70 bg-white/90 p-5 dark:border-white/10 dark:bg-zinc-950/70"
                >
                  <div className="text-2xl font-semibold text-zinc-900 dark:text-white">
                    {metric.value}
                  </div>
                  <div className="mt-2 text-xs uppercase tracking-[0.2em] text-zinc-500">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <section id="work" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Selected Work
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                Case studies that prove rigor at scale
              </h2>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              2022 — 2024
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group flex h-full flex-col justify-between rounded-3xl border border-zinc-200/70 bg-white/80 p-7 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                    <span>{project.focus}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">
                    {project.summary}
                  </p>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-200">
                    {project.impact}
                  </p>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-white/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="focus" className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-5">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Focus
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Agentic systems across product and infrastructure
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              I bridge product strategy and technical execution to deliver
              outcomes across AI workflows, contract intelligence, and resilient
              infrastructure.
            </p>
            <div className="space-y-4 rounded-2xl border border-zinc-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-300">
                Highlights
              </h3>
              <ul className="space-y-3 text-sm text-zinc-600 dark:text-zinc-300">
                {highlights.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {focusAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-2xl border border-zinc-200/70 bg-white/80 p-6 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {area.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  {area.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-white/10"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="development" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Development
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                What I build under the hood
              </h2>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Agentic systems • Contract AI • FastAPI
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {developmentPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl border border-zinc-200/70 bg-white/80 p-7 dark:border-white/10 dark:bg-white/5"
              >
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {pillar.description}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-zinc-500 dark:text-zinc-400">
                  {pillar.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="systems" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Systems
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                Architected for rigor, auditability, and scale
              </h2>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              AI-native • Contract intelligence • Production-ready
            </span>
          </div>
          <Accordion
            type="single"
            collapsible
            className="grid gap-4 lg:grid-cols-3"
          >
            {systemBlueprints.map((system) => (
              <AccordionItem key={system.title} value={system.title}>
                <AccordionTrigger>{system.title}</AccordionTrigger>
                <AccordionContent className="mt-4 space-y-3">
                  <p>{system.description}</p>
                  <div className="text-xs uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-200">
                    {system.signal}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Deployment & Reliability
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {deploymentStack.map((item) => (
                <div key={item} className="flex items-start gap-3 text-sm">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-400" />
                  <span className="text-zinc-600 dark:text-zinc-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="papers" className="space-y-10">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                White Papers
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                Research that translates into product decisions
              </h2>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Systems thinking • Evidence-backed
            </span>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {papers.map((paper) => (
              <div
                key={paper.title}
                className="group rounded-3xl border border-zinc-200/70 bg-white/80 p-7 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10"
              >
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-zinc-500">
                  <span>Paper</span>
                  <span>{paper.year}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                  {paper.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-300">
                  {paper.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-zinc-500 dark:text-zinc-400">
                  {paper.topics.map((topic) => (
                    <span
                      key={topic}
                      className="rounded-full border border-zinc-200/70 px-3 py-1 dark:border-white/10"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Experience
            </div>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
              Product-minded engineering leader
            </h2>
            <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
              I lead delivery across AI features, platform architecture, and
              infrastructure scale. Comfortable guiding strategy, execution, and
              cross-functional alignment.
            </p>
            <div className="mt-8 space-y-6">
              {experience.map((role) => (
                <div
                  key={role.role}
                  className="border-l border-zinc-200/70 pl-6 dark:border-white/10"
                >
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium text-zinc-900 dark:text-white">
                      {role.role}
                    </span>
                    <span className="text-zinc-500 dark:text-zinc-400">
                      {role.period}
                    </span>
                  </div>
                  <div className="mt-1 text-sm text-zinc-600 dark:text-zinc-300">
                    {role.company}
                  </div>
                  <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                    {role.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Approach
              </div>
              <div className="mt-6 space-y-5">
                {approach.map((item) => (
                  <div key={item.title} className="space-y-2">
                    <div className="text-sm font-semibold text-zinc-900 dark:text-white">
                      {item.title}
                    </div>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-200/70 bg-white/80 p-8 dark:border-white/10 dark:bg-white/5">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Operating style
              </div>
              <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300">
                I ship iteratively, prioritize clarity, and keep a bias for
                measurable outcomes. I&apos;m equally comfortable in roadmap
                debates and scaling services in production.
              </p>
            </div>
          </div>
        </section>

        <section id="skills" className="space-y-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
                Skills
              </div>
              <h2 className="mt-3 text-3xl font-semibold text-zinc-900 dark:text-white">
                Tools I rely on
              </h2>
            </div>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              Product, engineering, execution
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-zinc-200/70 bg-white/90 px-4 py-2 text-sm text-zinc-700 dark:border-white/10 dark:bg-zinc-950/70 dark:text-zinc-200"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        <section
          id="contact"
          className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-zinc-200/70 bg-white/80 p-10 md:flex-row md:items-center dark:border-white/10 dark:bg-white/5"
        >
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600 dark:text-emerald-300">
              Contact
            </div>
            <h2 className="text-3xl font-semibold text-zinc-900 dark:text-white">
              Let&apos;s build something ambitious.
            </h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-300">
              Reach out for product engineering, AI platforms, or infrastructure
              work.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:hello@yourdomain.com"
              className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-semibold text-white transition hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
            >
              hello@yourdomain.com
            </a>
            <a
              href="https://cal.com/your-handle"
              className="rounded-full border border-zinc-200/70 px-5 py-2 text-sm font-semibold text-zinc-700 transition hover:border-zinc-300 dark:border-white/20 dark:text-white dark:hover:border-white/40"
              target="_blank"
              rel="noreferrer"
            >
              Book a call
            </a>
          </div>
        </section>
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
