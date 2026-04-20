"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { useRef, useState } from "react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Cursor } from "@/components/cursor";
import { LiveClock } from "@/components/live-clock";
import { Magnetic } from "@/components/magnetic";
import { Marquee } from "@/components/marquee";
import { Nav } from "@/components/nav";
import { FadeUp, RevealWords } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";

const EMAIL = "rajatraghav07@gmail.com";
const PHONE = "+91 99717 94844";
const GITHUB = "https://github.com/tensorajat";
const LINKEDIN = "https://www.linkedin.com/in/rajat7raghav/";
const RESUME = "/Rajat-Raghav-Resume.pdf";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

type Project = {
  n: string;
  title: string;
  subtitle: string;
  year: string;
  kind: string;
  role: string;
  summary: string;
  highlights: string[];
  metrics: [string, string][];
  stack: string[];
  accent: string;
  visual: "loop" | "graph" | "stack" | "bars";
};

const projects: Project[] = [
  {
    n: "01",
    title: "Bulk Analyzer",
    subtitle: "Agentic AI Analytics System",
    year: "2024 – now",
    kind: "Sole engineer · Enterprise scale",
    role: "Agentic AI · Distributed systems",
    summary:
      "An AI-driven bulk document analytics platform for an enterprise contract-intelligence client, processing 1M+ contracts through agentic workflows, semantic clause compliance, and risk anomaly detection.",
    highlights: [
      "LangGraph state machines with cyclic reasoning, fallback nodes, and contextual state hydration",
      "Custom load balancer over RabbitMQ + Celery turning blocking ingestion into parallel ML inference",
      "MongoDB vector traversal to resolve deeply nested Contract Family hierarchies semantically",
      "Interactive Knowledge Graphs via React Flow + Redux surfacing cross-document entity relationships",
    ],
    metrics: [
      ["1M+", "Contracts processed"],
      ["−60%", "Legal review time"],
      ["Days → min", "Review cycles"],
    ],
    stack: [
      "LangGraph",
      "LangChain",
      "Agentic RAG",
      "Qdrant",
      "FastAPI",
      "RabbitMQ",
      "Celery",
      "MongoDB",
      "React Flow",
      "AWS",
    ],
    accent: "from-[#0a5c4a] via-[#117f66] to-[#7be0c5]",
    visual: "graph",
  },
  {
    n: "02",
    title: "Contract Review Engine",
    subtitle: "Compliance & Risk Analysis",
    year: "2024 – now",
    kind: "Precision · Real-time",
    role: "Product engineering · NLP",
    summary:
      "The precision counterpart to the bulk analyzer: a single-contract deep-analysis engine delivering real-time, clause-level legal intelligence via agentic AI workflows.",
    highlights: [
      "Async FastAPI streaming endpoints for zero-UI-blocking compliance feedback under concurrent load",
      "Agentic RAG with Qdrant + Sentence Transformers extracting terms, schedules, and obligations from legal prose",
      "Semantic risk scoring engine cross-referencing clauses against corporate playbooks",
      "Multi-perspective analysis system evaluating contracts from distinct negotiating stances",
    ],
    metrics: [
      ["−60%", "Legal review time"],
      ["5×", "Faster risk flagging"],
      ["0", "UI blocking"],
    ],
    stack: [
      "FastAPI",
      "LangChain",
      "Qdrant",
      "Sentence Transformers",
      "Agentic RAG",
      "NLP",
      "MongoDB",
    ],
    accent: "from-[#c8ff4d] via-[#8fbf1b] to-[#3b5e00]",
    visual: "loop",
  },
  {
    n: "03",
    title: "Contract & Proposal Generator",
    subtitle: "Agentic Document Generation",
    year: "2024 – now",
    kind: "Agentic · Multilingual",
    role: "Platform engineering · NLP",
    summary:
      "Industry-grade AI platform assembling legally-compliant contracts and proposals in under 10 seconds, across 1,000+ templates, 25+ languages, and multiple jurisdictions.",
    highlights: [
      "Agentic generation engine producing compliant contracts from 1,000+ templates in <10 seconds",
      "Multilingual NLP pipelines supporting 25+ languages with jurisdiction-aligned clause insertion",
      "MongoDB-backed template system with dynamic clause substitution and rule-based compliance",
      "Async FastAPI background workers with Pytest-validated error recovery",
    ],
    metrics: [
      ["<10s", "Generation time"],
      ["1,000+", "Templates"],
      ["25+", "Languages"],
    ],
    stack: [
      "FastAPI",
      "LangChain",
      "Agentic AI",
      "Prompt Engineering",
      "MongoDB",
      "React.js",
      "Pytest",
    ],
    accent: "from-[#ff6b3d] via-[#ff9f4a] to-[#ffe765]",
    visual: "stack",
  },
];

const capabilities = [
  {
    n: "i",
    title: "Agentic AI systems",
    copy: "LangGraph state machines, cyclic reasoning loops, fallback nodes, and multi-agent orchestration built for unstructured legal and enterprise data.",
    tags: ["LangGraph", "LangChain", "Agentic RAG"],
  },
  {
    n: "ii",
    title: "Retrieval & RAG",
    copy: "Qdrant, FAISS, Sentence Transformers, and prompt-engineered LLM calls tuned for clause-level extraction and compliance cross-referencing.",
    tags: ["Qdrant", "FAISS", "Semantic Search"],
  },
  {
    n: "iii",
    title: "FastAPI at scale",
    copy: "Async streaming endpoints, real-time SSE, and tenant-aware middleware that stays calm under concurrent LLM load.",
    tags: ["FastAPI", "Async", "Streaming"],
  },
  {
    n: "iv",
    title: "Distributed infra",
    copy: "RabbitMQ + Celery with custom load balancing, OpenTelemetry tracing, and AWS-native CI/CD for zero-downtime deploys.",
    tags: ["RabbitMQ", "Celery", "AWS"],
  },
];

const experience = [
  {
    year: "Jan 2024 – now",
    role: "Product Engineer",
    org: "AI SaaS Startup",
    location: "Remote · India",
    copy: "Sole engineer on an enterprise engagement. Shipped three production AI systems: Bulk Analyzer, Contract Review Engine, and Contract Generator. Processing 1M+ documents and cutting legal review time by 60%.",
    stack: ["LangGraph", "FastAPI", "Qdrant", "RabbitMQ", "AWS"],
  },
];

const stack = [
  "Python",
  "TypeScript",
  "FastAPI",
  "Node.js",
  "React.js",
  "Next.js",
  "LangChain",
  "LangGraph",
  "Agentic RAG",
  "Qdrant",
  "FAISS",
  "MongoDB",
  "MySQL",
  "RabbitMQ",
  "Celery",
  "Docker",
  "AWS",
  "OpenTelemetry",
];

const principles = [
  {
    n: "i",
    title: "Systems over scripts",
    copy: "Every shipped thing is a system with a state graph, a failure mode, and a retry policy.",
  },
  {
    n: "ii",
    title: "Boring infra, sharp product",
    copy: "Use the dullest possible infrastructure; save the cleverness for the product surface.",
  },
  {
    n: "iii",
    title: "Evals over vibes",
    copy: "A model is not done because it looks right. It is done when the eval suite agrees.",
  },
  {
    n: "iv",
    title: "Own the whole thing",
    copy: "Sole-engineer shipping taught me that the loop (client call → design → code → deploy → learn) must belong to one person.",
  },
];

const faq = [
  {
    q: "What kind of work do you take on?",
    a: "Agentic AI builds (LangGraph, multi-agent orchestration), contract/legal intelligence systems, and FastAPI platform work. I like hard problems that live at the intersection of LLMs, retrieval, and production infrastructure.",
  },
  {
    q: "Can you operate as a sole engineer?",
    a: "Yes, it's how I've spent the last two years. I delivered an enterprise engagement end-to-end, covering client meetings, architecture, ingestion pipelines, ML inference, front-end, and deploy.",
  },
  {
    q: "How do you usually work?",
    a: "Async-first with a weekly sync and written updates. I ship incrementally, document decisions in memos, and run evaluation suites alongside the product so latency and quality regressions are caught early.",
  },
  {
    q: "Availability and timezone?",
    a: "Based in India (IST). I overlap comfortably with APAC, EU, and US East-Coast mornings. Most client pairs work in 4–6 hour daily windows.",
  },
  {
    q: "Do you do rescue missions?",
    a: "Yes. Stalled AI launches, drifting latency, brittle retrieval. I'll scope a two-week audit and hand back a written plan with the quick wins already shipped.",
  },
  {
    q: "Can I get your resume?",
    a: "Sure, there's a download button in the hero and footer, or email rajatraghav07@gmail.com and I'll send an up-to-date copy.",
  },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const heroY = useTransform(scrollYProgress, [0, 0.2], ["0%", "-18%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.14], [1, 0.05]);

  const [copied, setCopied] = useState(false);
  const [activeProject, setActiveProject] = useState<number | null>(null);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <div
      id="top"
      ref={containerRef}
      className="relative min-h-screen bg-[var(--bg)] text-[var(--ink)]"
    >
      <Cursor />
      <ScrollProgress />
      <Nav />

      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <motion.section
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative mx-auto flex w-full max-w-container flex-col px-6 pb-10 pt-28 md:px-10 md:pb-14 md:pt-32"
      >
        {/* top meta strip */}
        <div className="flex items-center justify-between text-[var(--muted)]">
          <FadeUp delay={0.1}>
            <div className="mono flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inset-0 animate-ping rounded-full bg-[var(--accent)] opacity-70" />
                <span className="relative h-2 w-2 rounded-full bg-[var(--accent)]" />
              </span>
              Available · Q2 2026
            </div>
          </FadeUp>
          <FadeUp delay={0.2} className="hidden sm:block">
            <div className="mono">
              <LiveClock timeZone="Asia/Kolkata" label="· India" />
            </div>
          </FadeUp>
        </div>

        {/* eyebrow */}
        <div className="mt-12 flex items-baseline gap-4 md:mt-16">
          <FadeUp delay={0.3}>
            <span className="mono text-[var(--muted)]">
              <span className="text-[var(--ink)]">(01)</span> · Portfolio / Rajat
              Raghav
            </span>
          </FadeUp>
        </div>

        {/* display headline */}
        <h1 className="display mt-6 text-[clamp(3.4rem,11vw,10.5rem)] md:mt-8">
          <span className="block">
            <RevealWords text="Agentic AI," />
          </span>
          <span className="block">
            <RevealWords text="shipped" delay={0.15} />{" "}
            <span className="italic-serif accent-underline">
              <RevealWords text="solo," delay={0.26} />
            </span>{" "}
            <RevealWords text="at" delay={0.38} />
          </span>
          <span className="block">
            <RevealWords text="enterprise" delay={0.48} />{" "}
            <span className="italic-serif">
              <RevealWords text="scale." delay={0.62} />
            </span>
          </span>
        </h1>

        <div className="mt-12 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[1.15fr_0.85fr] md:gap-16">
          <FadeUp delay={0.45}>
            <p className="max-w-xl text-[17px] leading-[1.55] text-[var(--ink-soft)] md:text-[19px]">
              I&rsquo;m{" "}
              <span className="italic-serif text-[var(--ink)]">Rajat</span>, a
              product engineer shipping{" "}
              <strong className="text-[var(--ink)]">three production AI systems</strong>{" "}
              that process <strong className="text-[var(--ink)]">1M+ contracts</strong>{" "}
              and cut legal review time by <strong className="text-[var(--ink)]">60%</strong>.
              Sole engineer, end-to-end.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={14}>
                <a href="#work" className="btn-primary">
                  See the work
                  <span aria-hidden>↓</span>
                </a>
              </Magnetic>
              <Magnetic strength={12}>
                <a
                  href={RESUME}
                  download
                  className="btn-ghost"
                >
                  <Download className="h-4 w-4" />
                  Download résumé
                </a>
              </Magnetic>
              <Magnetic strength={10}>
                <button onClick={copyEmail} className="btn-ghost">
                  {copied ? (
                    <>
                      <Check className="h-4 w-4" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-4 w-4" /> {EMAIL}
                    </>
                  )}
                </button>
              </Magnetic>
            </div>
          </FadeUp>

          <FadeUp delay={0.6}>
            <div className="relative overflow-hidden rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-5">
              <div className="mono flex items-center justify-between text-[var(--muted)]">
                <span>
                  <span className="mr-2 inline-block h-1.5 w-1.5 translate-y-[-1px] rounded-full bg-[var(--accent)]" />
                  Transmission
                </span>
                <span className="blink">●</span>
              </div>

              <div className="mt-5 space-y-2 font-[ui-monospace] text-[12px] leading-[1.6] text-[var(--ink-soft)]">
                <div className="text-[var(--muted)]">
                  $ status --project bulk-analyzer
                </div>
                <div>
                  <span className="text-[var(--accent)]">ok</span> ingest ·
                  1,041,287 docs
                </div>
                <div>
                  <span className="text-[var(--accent)]">ok</span> langgraph ·
                  state=healthy
                </div>
                <div>
                  <span className="text-[var(--accent)]">ok</span> qdrant ·
                  p95=42ms
                </div>
                <div>
                  <span className="text-[var(--accent)]">ok</span> celery ·
                  workers=12
                </div>
                <div className="text-[var(--muted)]">$ now playing</div>
                <div className="flex items-center gap-2">
                  <span className="italic-serif text-[var(--ink)]">
                    &ldquo;Designing agents that survive production&rdquo;
                  </span>
                </div>
                <div className="text-[var(--muted)]">— working draft</div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[var(--line)] pt-5">
                {[
                  ["2+", "Years"],
                  ["3", "AI systems"],
                  ["1M+", "Documents"],
                ].map(([v, l]) => (
                  <div key={l}>
                    <div className="font-display text-[24px] leading-none text-[var(--ink)]">
                      {v}
                    </div>
                    <div className="mono mt-2 text-[10px] text-[var(--muted)]">
                      {l}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeUp>
        </div>

        <div className="mt-auto flex items-center justify-between pb-8 pt-14 text-[var(--muted)]">
          <span className="mono">Scroll</span>
          <span className="mono animate-pulse">↓</span>
          <span className="mono hidden md:inline">
            § Work · About · Papers · Contact
          </span>
        </div>
      </motion.section>

      {/* ============================================================ */}
      {/*  MARQUEE BELT                                                  */}
      {/* ============================================================ */}
      <section className="relative border-y border-[var(--line)] bg-[var(--bg-raised)] py-6">
        <Marquee speed={36}>
          {[
            "Agentic AI",
            "Contract intelligence",
            "LangGraph state machines",
            "Agentic RAG",
            "FastAPI at scale",
            "Distributed systems",
            "Knowledge Graphs",
            "Sole-engineer shipping",
          ].map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="mx-8 inline-flex items-center gap-8 font-display text-[40px] leading-none text-[var(--ink)] md:text-[56px]"
            >
              <span>{item}</span>
              <span className="italic-serif text-[var(--accent)]">✦</span>
            </span>
          ))}
        </Marquee>
      </section>

      {/* ============================================================ */}
      {/*  SELECTED WORK                                                 */}
      {/* ============================================================ */}
      <section
        id="work"
        className="relative mx-auto w-full max-w-container px-6 py-28 md:px-10 md:py-40"
      >
        <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--line)] pb-8">
          <div>
            <div className="mono text-[var(--muted)]">
              <span className="text-[var(--ink)]">(02)</span> · Selected work
            </div>
            <h2 className="editorial mt-3 text-[clamp(2.4rem,5vw,4.2rem)]">
              Three systems,{" "}
              <span className="italic-serif">one operator.</span>
            </h2>
          </div>
          <div className="mono max-w-sm text-right text-[var(--muted)]">
            Jan 2024 – now · Built and owned end-to-end.
          </div>
        </div>

        <div className="mt-10 divide-y divide-[var(--line)]">
          {projects.map((project, idx) => (
            <ProjectRow
              key={project.title}
              project={project}
              index={idx}
              active={activeProject === idx}
              onEnter={() => setActiveProject(idx)}
              onLeave={() => setActiveProject(null)}
            />
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-10 flex justify-end">
          <a
            href={RESUME}
            download
            className="mono link-underline text-[var(--muted)] hover:text-[var(--ink)]"
          >
            Download full résumé →
          </a>
        </FadeUp>
      </section>

      {/* ============================================================ */}
      {/*  ABOUT                                                         */}
      {/* ============================================================ */}
      <section
        id="about"
        className="relative border-t border-[var(--line)] bg-[var(--bg-raised)] py-28 md:py-40"
      >
        <div className="mx-auto grid w-full max-w-container gap-16 px-6 md:grid-cols-[0.9fr_1.1fr] md:px-10">
          <div>
            <div className="mono text-[var(--muted)]">
              <span className="text-[var(--ink)]">(03)</span> · About
            </div>
            <h2 className="editorial mt-3 text-[clamp(2.4rem,5vw,4rem)]">
              A product engineer who ships{" "}
              <span className="italic-serif">the whole loop.</span>
            </h2>
            <FadeUp delay={0.1}>
              <div className="mt-10 space-y-5 text-[17px] leading-[1.7] text-[var(--ink-soft)]">
                <p>
                  I spent the last two years building{" "}
                  <span className="italic-serif text-[var(--ink)]">
                    contract intelligence
                  </span>{" "}
                  systems for enterprise legal teams, as the only engineer on
                  the project. Client meetings on Monday, shipped by Friday.
                </p>
                <p>
                  The work lives at the intersection of{" "}
                  <span className="italic-serif text-[var(--ink)]">
                    language models
                  </span>
                  ,{" "}
                  <span className="italic-serif text-[var(--ink)]">
                    information retrieval
                  </span>
                  , and{" "}
                  <span className="italic-serif text-[var(--ink)]">
                    distributed systems
                  </span>
                  . LangGraph state machines, Agentic RAG over Qdrant,
                  RabbitMQ + Celery under FastAPI, all running on AWS behind
                  OpenTelemetry traces.
                </p>
                <p>
                  Shipping production AI alone means every design decision has
                  your name on it. That&rsquo;s the job I signed up for.
                </p>
              </div>
            </FadeUp>
          </div>

          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {capabilities.slice(0, 3).map((p, i) => (
                <FadeUp key={p.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                    <div className="mono text-[var(--muted)]">0{i + 1}</div>
                    <h3 className="editorial mt-2 text-[22px]">{p.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[var(--ink-soft)]">
                      {p.copy}
                    </p>
                  </div>
                </FadeUp>
              ))}
              <FadeUp delay={0.24}>
                <a
                  href="#contact"
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[var(--ink)] bg-[var(--ink)] p-6 text-[var(--bg)] transition-colors"
                >
                  <div className="mono opacity-70">04 · Always</div>
                  <div>
                    <h3 className="editorial mt-10 text-[22px]">
                      Work with me
                    </h3>
                    <div className="mt-3 inline-flex items-center gap-1.5 text-[14px] opacity-90 transition-transform group-hover:translate-x-1">
                      Start a conversation
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </a>
              </FadeUp>
            </div>

            <div className="space-y-5">
              <div className="mono text-[var(--muted)]">Capabilities</div>
              <ul className="divide-y divide-[var(--line)]">
                {capabilities.map((c, i) => (
                  <FadeUp key={c.title} delay={i * 0.06}>
                    <li className="grid grid-cols-[40px_1fr] items-baseline gap-6 py-4 md:grid-cols-[40px_1.2fr_1.4fr_auto]">
                      <span className="italic-serif text-[var(--muted)]">
                        {c.n}.
                      </span>
                      <span className="editorial text-[22px]">{c.title}</span>
                      <span className="text-[14px] leading-[1.55] text-[var(--ink-soft)] md:col-start-3">
                        {c.copy}
                      </span>
                      <span className="mono hidden text-[var(--muted)] md:inline">
                        {c.tags.join(" · ")}
                      </span>
                    </li>
                  </FadeUp>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  PRINCIPLES                                                    */}
      {/* ============================================================ */}
      <section
        id="principles"
        className="relative mx-auto w-full max-w-container px-6 py-28 md:px-10 md:py-40"
      >
        <div className="border-b border-[var(--line)] pb-8">
          <div className="mono text-[var(--muted)]">
            <span className="text-[var(--ink)]">(04)</span> · Principles
          </div>
          <h2 className="editorial mt-3 max-w-4xl text-[clamp(2.4rem,5vw,4.2rem)]">
            Four rules I don&rsquo;t{" "}
            <span className="italic-serif">negotiate.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-0 md:grid-cols-2">
          {principles.map((p, i) => (
            <FadeUp
              key={p.title}
              delay={i * 0.08}
              className={`relative border-[var(--line)] px-0 py-10 md:px-10 md:py-14 ${
                i % 2 === 0 ? "md:border-r" : ""
              } ${i < 2 ? "border-b md:border-b" : ""} ${
                i >= 2 ? "border-b md:border-b-0" : ""
              }`}
            >
              <div className="flex items-start gap-6">
                <span className="font-display text-[64px] leading-none text-[var(--muted)] md:text-[88px]">
                  {p.n}.
                </span>
                <div className="pt-3">
                  <h3 className="editorial text-[26px] md:text-[32px]">
                    {p.title}
                  </h3>
                  <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                    {p.copy}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.1} className="mt-20">
          <blockquote className="mx-auto max-w-4xl text-center">
            <div className="font-display text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.2] text-[var(--ink)]">
              <span className="italic-serif text-[var(--muted)]">&ldquo;</span>
              The best software feels inevitable, like the problem could only
              have been solved this way. Everything else is{" "}
              <span className="italic-serif">scaffolding.</span>
              <span className="italic-serif text-[var(--muted)]">&rdquo;</span>
            </div>
            <div className="mono mt-6 text-[var(--muted)]">
              personal memo, 2024
            </div>
          </blockquote>
        </FadeUp>
      </section>

      {/* ============================================================ */}
      {/*  EXPERIENCE + EDUCATION                                        */}
      {/* ============================================================ */}
      <section
        id="experience"
        className="relative border-t border-[var(--line)] bg-[var(--bg-raised)] py-28 md:py-40"
      >
        <div className="mx-auto w-full max-w-container px-6 md:px-10">
          <div className="border-b border-[var(--line)] pb-8">
            <div className="mono text-[var(--muted)]">
              <span className="text-[var(--ink)]">(05)</span> · Experience
            </div>
            <h2 className="editorial mt-3 text-[clamp(2.4rem,5vw,4rem)]">
              Two years, one company,{" "}
              <span className="italic-serif">three shipped systems.</span>
            </h2>
          </div>

          <div className="mt-10 divide-y divide-[var(--line)]">
            {experience.map((e, i) => (
              <FadeUp key={e.role} delay={i * 0.08}>
                <div className="group grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-[200px_1fr_1fr_auto] md:gap-10">
                  <div className="mono text-[var(--muted)]">{e.year}</div>
                  <div>
                    <div className="editorial text-[28px] leading-tight">
                      {e.role}
                    </div>
                    <div className="mt-1 text-[14px] text-[var(--muted)]">
                      {e.org} · {e.location}
                    </div>
                  </div>
                  <p className="text-[15px] leading-[1.6] text-[var(--ink-soft)]">
                    {e.copy}
                  </p>
                  <div className="flex flex-wrap gap-2 md:justify-end">
                    {e.stack.map((s) => (
                      <span key={s} className="chip">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================ */}
      {/*  STACK                                                         */}
      {/* ============================================================ */}
      <section
        id="stack"
        className="relative border-y border-[var(--line)]"
      >
        <div className="mx-auto w-full max-w-container px-6 pb-10 pt-20 md:px-10 md:pb-14 md:pt-28">
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-[var(--line)] pb-8">
            <div>
              <div className="mono text-[var(--muted)]">
                <span className="text-[var(--ink)]">(06)</span> · Stack
              </div>
              <h2 className="editorial mt-3 text-[clamp(2.4rem,5vw,4rem)]">
                Tools I <span className="italic-serif">trust</span> to run hot.
              </h2>
            </div>
            <p className="max-w-sm text-[15px] text-[var(--ink-soft)]">
              Deliberately small. Learned deeply. Chosen because they survive
              incident review at 3 a.m.
            </p>
          </div>
        </div>

        <Marquee speed={44}>
          {stack.map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="mx-6 inline-flex items-center gap-6 font-display text-[34px] leading-none text-[var(--muted-strong)] md:text-[44px]"
            >
              <span>{s}</span>
              <span className="text-[var(--line)]">/</span>
            </span>
          ))}
        </Marquee>
        <Marquee speed={52} reverse>
          {[
            "Docker",
            "Jenkins",
            "NGINX",
            "AWS EC2",
            "S3",
            "CloudFront",
            "Elasticsearch",
            "IAM",
            "Cloudflare",
            "Pytest",
          ].map((s, i) => (
            <span
              key={`${s}-${i}`}
              className="mx-6 inline-flex items-center gap-6 font-display text-[28px] leading-none text-[var(--muted)] md:text-[36px]"
            >
              <span className="italic-serif">{s}</span>
              <span className="text-[var(--line)]">·</span>
            </span>
          ))}
        </Marquee>

        <div className="mx-auto w-full max-w-container px-6 pb-20 pt-10 md:px-10 md:pb-28">
          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                h: "AI & LLM",
                items: [
                  "LangChain",
                  "LangGraph",
                  "Agentic RAG",
                  "Qdrant / FAISS",
                  "Sentence Transformers",
                ],
              },
              {
                h: "Backend",
                items: [
                  "Python",
                  "FastAPI",
                  "Node.js",
                  "Async Processing",
                  "Pytest",
                ],
              },
              {
                h: "Distributed",
                items: [
                  "RabbitMQ",
                  "Celery",
                  "Load Balancing",
                  "OpenTelemetry",
                  "Microservices",
                ],
              },
              {
                h: "Cloud & Infra",
                items: [
                  "AWS EC2 / S3",
                  "Amplify · CloudFront",
                  "Docker · Jenkins",
                  "NGINX · CI/CD",
                  "IAM · Cloudflare",
                ],
              },
            ].map((col, i) => (
              <FadeUp key={col.h} delay={i * 0.08}>
                <div className="rounded-2xl border border-[var(--line)] bg-[var(--surface)] p-6">
                  <div className="mono text-[var(--muted)]">{col.h}</div>
                  <ul className="mt-4 space-y-2 text-[15px] text-[var(--ink-soft)]">
                    {col.items.map((x) => (
                      <li key={x} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[var(--accent)]" />
                        {x}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FAQ                                                           */}
      {/* ============================================================ */}
      <section
        id="faq"
        className="relative mx-auto w-full max-w-container px-6 py-28 md:px-10 md:py-40"
      >
        <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <div>
            <div className="mono text-[var(--muted)]">
              <span className="text-[var(--ink)]">(07)</span> · Questions
            </div>
            <h2 className="editorial mt-3 text-[clamp(2.4rem,5vw,4rem)]">
              Anything else you&rsquo;d{" "}
              <span className="italic-serif">like to ask?</span>
            </h2>
            <p className="mt-8 max-w-sm text-[15px] leading-[1.6] text-[var(--ink-soft)]">
              A few things I&rsquo;m asked often. If your question isn&rsquo;t
              here, write to me. I answer every legitimate inbound within 48
              hours.
            </p>
            <div className="mt-8">
              <Magnetic>
                <a
                  href={`mailto:${EMAIL}?subject=A%20question%20for%20you`}
                  className="btn-ghost"
                >
                  Ask directly →
                </a>
              </Magnetic>
            </div>
          </div>
          <div>
            <Accordion type="single" collapsible className="space-y-3">
              {faq.map((item, i) => (
                <AccordionItem key={item.q} value={`q-${i}`}>
                  <AccordionTrigger>
                    <span className="flex items-baseline gap-4">
                      <span className="mono text-[var(--muted)]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="editorial text-[20px] md:text-[22px]">
                        {item.q}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="ml-10 mt-3">
                    <p className="max-w-xl text-[15px] leading-[1.6]">
                      {item.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTACT                                                       */}
      {/* ============================================================ */}
      <section
        id="contact"
        className="relative border-t border-[var(--line)] bg-[var(--bg-raised)]"
      >
        <div className="mx-auto w-full max-w-container px-6 py-32 md:px-10 md:py-48">
          <div className="mono text-[var(--muted)]">
            <span className="text-[var(--ink)]">(08)</span> · Contact
          </div>

          <h2 className="display mt-8 text-[clamp(3rem,12vw,11rem)] leading-[0.9]">
            <span className="block">
              <RevealWords text="Got something" />
            </span>
            <span className="block">
              <RevealWords text="worth" delay={0.15} />{" "}
              <span className="italic-serif accent-underline">
                <RevealWords text="building?" delay={0.26} />
              </span>
            </span>
          </h2>

          <div className="mt-14 grid gap-10 border-t border-[var(--line)] pt-10 md:grid-cols-[1.1fr_0.9fr]">
            <FadeUp>
              <p className="max-w-xl text-[18px] leading-[1.6] text-[var(--ink-soft)]">
                Agentic AI delivery, contract intelligence, or platform rescue.
                If the problem is hard and the team is honest, write to me.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Magnetic>
                  <a
                    href={`mailto:${EMAIL}?subject=Hello%20Rajat`}
                    className="btn-primary"
                  >
                    {EMAIL}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href={RESUME} download className="btn-ghost">
                    <Download className="h-4 w-4" />
                    Résumé (PDF)
                  </a>
                </Magnetic>
                <Magnetic>
                  <a href="#top" className="btn-ghost">
                    Back to top ↑
                  </a>
                </Magnetic>
              </div>
              <div className="mt-8 mono text-[var(--muted)]">
                Or call: <span className="text-[var(--ink)]">{PHONE}</span>
              </div>
            </FadeUp>

            <FadeUp delay={0.12}>
              <ul className="divide-y divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-[var(--surface)]">
                {[
                  ["GitHub", "github.com/tensorajat", GITHUB],
                  ["LinkedIn", "linkedin.com/in/rajat7raghav", LINKEDIN],
                  ["Email", EMAIL, `mailto:${EMAIL}`],
                  ["Résumé", "PDF · 3 pages", RESUME],
                ].map(([label, handle, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      target={href.startsWith("http") ? "_blank" : undefined}
                      rel={href.startsWith("http") ? "noreferrer" : undefined}
                      download={label === "Résumé" ? true : undefined}
                      className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-[var(--bg-raised)]"
                    >
                      <span className="flex items-center gap-4">
                        <span className="mono text-[var(--muted)]">
                          {label}
                        </span>
                        <span className="text-[14px] text-[var(--ink-soft)]">
                          {handle}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[var(--muted)] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--ink)]" />
                    </a>
                  </li>
                ))}
              </ul>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FOOTER / COLOPHON                                             */}
      {/* ============================================================ */}
      <footer className="border-t border-[var(--line)] bg-[var(--bg)]">
        <div className="mx-auto w-full max-w-container px-6 py-14 md:px-10">
          <div className="grid gap-10 md:grid-cols-[1fr_1fr_1fr_auto]">
            <div>
              <div className="mono text-[var(--muted)]">Index</div>
              <ul className="mt-4 space-y-2 text-[14px]">
                {[
                  ["Work", "#work"],
                  ["About", "#about"],
                  ["Principles", "#principles"],
                  ["Experience", "#experience"],
                  ["Stack", "#stack"],
                  ["Contact", "#contact"],
                ].map(([l, h]) => (
                  <li key={h}>
                    <a href={h} className="link-underline">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="mono text-[var(--muted)]">Elsewhere</div>
              <ul className="mt-4 space-y-2 text-[14px]">
                <li>
                  <a
                    href={GITHUB}
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub / tensorajat
                  </a>
                </li>
                <li>
                  <a
                    href={LINKEDIN}
                    className="link-underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn / rajat7raghav
                  </a>
                </li>
                <li>
                  <a href={`mailto:${EMAIL}`} className="link-underline">
                    {EMAIL}
                  </a>
                </li>
                <li>
                  <a href={RESUME} download className="link-underline">
                    Résumé (PDF)
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <div className="mono text-[var(--muted)]">Colophon</div>
              <p className="mt-4 text-[13px] leading-[1.6] text-[var(--ink-soft)]">
                Set in <span className="italic-serif">Fraunces</span> &{" "}
                <span className="italic-serif">Inter</span>. Built with Next.js,
                Tailwind, Framer Motion. Hand-tuned in a terminal, not a
                template.
              </p>
            </div>
            <div className="text-right md:text-left">
              <div className="mono text-[var(--muted)]">Now</div>
              <div className="mono mt-4 text-[var(--ink)]">
                <LiveClock timeZone="Asia/Kolkata" label="IST" />
              </div>
            </div>
          </div>

          <div className="mt-14 flex flex-wrap items-end justify-between gap-6 border-t border-[var(--line)] pt-6">
            <div className="font-display text-[clamp(3.2rem,10vw,9rem)] leading-[0.85] text-[var(--ink)]">
              Rajat&nbsp;
              <span className="italic-serif">Raghav</span>
              <span className="text-[var(--accent)]">.</span>
            </div>
            <div className="mono text-[var(--muted)]">
              © {new Date().getFullYear()} · All rights reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================== */
/*  Project row                                                        */
/* ================================================================== */

function ProjectRow({
  project,
  index,
  active,
  onEnter,
  onLeave,
}: {
  project: Project;
  index: number;
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: index * 0.06 }}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      onFocus={onEnter}
      onBlur={onLeave}
      className="group relative py-10 md:py-14"
    >
      <motion.div
        aria-hidden
        initial={false}
        animate={{ scaleX: active ? 1 : 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformOrigin: "left center" }}
        className={`pointer-events-none absolute inset-0 -z-0 bg-gradient-to-r ${project.accent} opacity-[0.08]`}
      />

      <div className="relative grid grid-cols-1 items-start gap-6 md:grid-cols-[90px_1.15fr_0.85fr_auto] md:gap-10 p-4">
        <div className="mono pt-2 text-[var(--muted)]">{project.n}</div>

        <div>
          <div className="mono mb-3 text-[var(--muted)]">{project.kind}</div>
          <h3 className="editorial text-[clamp(2rem,5vw,3.4rem)] leading-[0.98]">
            <span className="relative inline-block">
              {project.title}
              <motion.span
                aria-hidden
                initial={false}
                animate={{ width: active ? "100%" : "0%" }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="absolute -bottom-1 left-0 h-[3px] bg-[var(--accent)]"
              />
            </span>
          </h3>
          <div className="mt-1 text-[14px] italic-serif text-[var(--muted)]">
            {project.subtitle}
          </div>
          <p className="mt-5 max-w-xl text-[15px] leading-[1.6] text-[var(--ink-soft)]">
            {project.summary}
          </p>
          <motion.div
            initial={false}
            animate={{
              height: active ? "auto" : 0,
              opacity: active ? 1 : 0,
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-5 space-y-2 border-t border-[var(--line)] pt-5 text-[13.5px] leading-[1.55] text-[var(--ink-soft)]">
              {project.highlights.map((h) => (
                <li key={h} className="flex gap-3">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
            <div className="mt-5 grid max-w-2xl grid-cols-3 gap-4">
              {project.metrics.map(([v, l]) => (
                <div key={l}>
                  <div className="font-display text-[26px] leading-none text-[var(--ink)]">
                    {v}
                  </div>
                  <div className="mono mt-2 text-[10px] text-[var(--muted)]">
                    {l}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.stack.map((s) => (
                <span key={s} className="chip">
                  {s}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="hidden md:block">
          <ProjectVisual kind={project.visual} active={active} />
        </div>

        <div className="flex flex-col items-start gap-4 md:items-end md:text-right">
          <div className="mono text-[var(--muted)]">{project.year}</div>
          <div className="mono text-[var(--muted-strong)]">{project.role}</div>
          <motion.div
            animate={{ x: active ? 4 : 0, y: active ? -4 : 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--line)] bg-[var(--surface)] text-[var(--ink)]"
          >
            <ArrowUpRight className="h-4 w-4" />
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================== */
/*  Project key visual                                                  */
/* ================================================================== */

function ProjectVisual({
  kind,
  active,
}: {
  kind: Project["visual"];
  active: boolean;
}) {
  const stroke = "var(--ink-soft)";
  const accent = "var(--accent)";

  return (
    <div className="relative h-36 w-full overflow-hidden rounded-xl border border-[var(--line)] bg-[var(--surface-muted)]">
      <motion.div
        className="absolute inset-0"
        initial={false}
        animate={{ opacity: active ? 1 : 0.5 }}
        transition={{ duration: 0.4 }}
      >
        <svg viewBox="0 0 200 140" className="h-full w-full" fill="none">
          {kind === "graph" && (
            <g>
              {/* static edges */}
              <line x1="28" y1="70" x2="100" y2="36" stroke={stroke} strokeWidth="0.8" />
              <line x1="28" y1="70" x2="100" y2="104" stroke={stroke} strokeWidth="0.8" />
              <line x1="100" y1="36" x2="172" y2="70" stroke={stroke} strokeWidth="0.8" />
              <line x1="100" y1="104" x2="172" y2="70" stroke={stroke} strokeWidth="0.8" />
              <line x1="100" y1="36" x2="100" y2="104" stroke={stroke} strokeWidth="0.6" strokeDasharray="2 2" />
              {/* animated accent path */}
              <motion.path
                d="M28,70 L172,70"
                stroke={accent} strokeWidth="1.5" strokeDasharray="3 4"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: active ? 1 : 0, opacity: active ? 1 : 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
              {/* nodes */}
              <circle cx="28" cy="70" r="7" fill="var(--bg)" stroke={stroke} strokeWidth="1" />
              <circle cx="100" cy="36" r="7" fill="var(--bg)" stroke={stroke} strokeWidth="1" />
              <circle cx="100" cy="104" r="7" fill="var(--bg)" stroke={stroke} strokeWidth="1" />
              <motion.circle
                cx="172" cy="70" r="7"
                fill={accent}
                animate={{ r: active ? 9 : 7 }}
                transition={{ duration: 0.4 }}
              />
              {/* node labels */}
              <text x="28" y="74" textAnchor="middle" fontSize="6" fill="var(--bg)" fontFamily="ui-monospace">A</text>
              <text x="100" y="40" textAnchor="middle" fontSize="6" fill={stroke} fontFamily="ui-monospace">B</text>
              <text x="100" y="108" textAnchor="middle" fontSize="6" fill={stroke} fontFamily="ui-monospace">C</text>
            </g>
          )}

          {kind === "loop" && (
            <g>
              {/* rotating dashed ring */}
              <motion.g
                animate={{ rotate: active ? 360 : 0 }}
                transition={{ duration: 6, repeat: active ? Infinity : 0, ease: "linear" }}
                style={{ transformOrigin: "100px 70px" }}
              >
                <circle cx="100" cy="70" r="44" stroke={stroke} strokeWidth="0.8" strokeDasharray="4 4" fill="none" />
              </motion.g>
              {/* orbit dot */}
              <motion.circle
                cx="100" cy="26"
                r="6"
                fill={accent}
                animate={{ opacity: active ? 1 : 0.5 }}
                transition={{ duration: 0.4 }}
              />
              <circle cx="144" cy="70" r="4" fill={stroke} opacity="0.6" />
              <circle cx="100" cy="114" r="4" fill={stroke} opacity="0.6" />
              <circle cx="56" cy="70" r="4" fill={stroke} opacity="0.6" />
              {/* center label */}
              <circle cx="100" cy="70" r="16" stroke={stroke} strokeWidth="0.6" fill="var(--bg)" />
              <text x="100" y="73" textAnchor="middle" fontSize="8" fill={stroke} fontFamily="ui-monospace">loop</text>
            </g>
          )}

          {kind === "stack" && (
            <g>
              {([
                [140, 10],
                [110, 22],
                [125, 34],
                [95, 46],
              ] as [number, number][]).map(([w, y], i) => (
                <motion.rect
                  key={i}
                  x={(200 - w) / 2}
                  y={y + 38}
                  width={w}
                  height={11}
                  rx={2}
                  stroke={stroke}
                  strokeWidth="0.8"
                  fill={i === 0 ? accent : "transparent"}
                  animate={{ width: active ? w : w * 0.85, x: active ? (200 - w) / 2 : (200 - w * 0.85) / 2 }}
                  transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
              {/* pulse dot */}
              <motion.circle
                cx="100" cy="112"
                r="4"
                fill={accent}
                animate={{ opacity: active ? [0.4, 1, 0.4] : 0.3 }}
                transition={{ duration: 1.6, repeat: Infinity }}
              />
            </g>
          )}

          {kind === "bars" && (
            <g>
              {[30, 62, 44, 76, 52, 68, 38, 84, 56, 46].map((h, i) => (
                <motion.rect
                  key={i}
                  x={16 + i * 17}
                  width={11}
                  rx={2}
                  fill={i === 7 ? accent : stroke}
                  style={{ transformBox: "fill-box", transformOrigin: "center bottom" }}
                  initial={false}
                  animate={{ height: active ? h : h * 0.45, y: active ? 108 - h : 108 - h * 0.45 }}
                  transition={{ duration: 0.5, delay: i * 0.03, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </g>
          )}
        </svg>
      </motion.div>
    </div>
  );
}
