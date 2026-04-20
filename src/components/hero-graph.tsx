"use client";

import { motion } from "framer-motion";

const W = 520;
const H = 470;

const nodes = [
  { id: "api",    label: "Ingest",        sub: "API entry",        x: 260, y: 44,  primary: true  },
  { id: "rabbit", label: "Queue",         sub: "Message broker",   x: 88,  y: 170, primary: false },
  { id: "celery", label: "Orchestrator",  sub: "Batch workers",    x: 260, y: 170, primary: true  },
  { id: "s3",     label: "Fetch",         sub: "Document pull",    x: 432, y: 170, primary: false },
  { id: "ocr",    label: "OCR",           sub: "Text extraction",  x: 120, y: 300, primary: false },
  { id: "meta",   label: "Analysis",      sub: "Clauses · Terms",  x: 280, y: 300, primary: true  },
  { id: "redis",  label: "Cache",         sub: "Result store",     x: 432, y: 300, primary: false },
  { id: "qdrant", label: "Vectors",       sub: "Semantic index",   x: 120, y: 420, primary: false },
  { id: "mongo",  label: "Storage",       sub: "Document store",   x: 350, y: 420, primary: true  },
] as const;

type NodeId = typeof nodes[number]["id"];

const edges: [NodeId, NodeId][] = [
  ["api",    "celery"],
  ["rabbit", "celery"],
  ["s3",     "celery"],
  ["celery", "ocr"],
  ["celery", "meta"],
  ["celery", "redis"],
  ["ocr",    "qdrant"],
  ["meta",   "mongo"],
  ["redis",  "mongo"],
];

function getNode(id: NodeId) {
  return nodes.find((n) => n.id === id)!;
}

/* Travelling dot along a straight edge */
function TravelDot({ x1, y1, x2, y2, delay }: {
  x1: number; y1: number; x2: number; y2: number; delay: number;
}) {
  return (
    <motion.circle
      r={2.5}
      fill="var(--accent)"
      initial={{ cx: x1, cy: y1, opacity: 0 }}
      animate={{
        cx:      [x1, x2],
        cy:      [y1, y2],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration: 1.8,
        repeat: Infinity,
        repeatDelay: 1.4,
        delay,
        ease: "easeInOut",
        times: [0, 0.08, 0.92, 1],
      }}
    />
  );
}

function Edge({ from, to, idx }: { from: NodeId; to: NodeId; idx: number }) {
  const a = getNode(from);
  const b = getNode(to);
  const delay = idx * 0.32;

  return (
    <g>
      <line
        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
        stroke="var(--line)"
        strokeWidth={1}
      />
      {/* faint accent glow on hover / always subtle */}
      <motion.line
        x1={a.x} y1={a.y} x2={b.x} y2={b.y}
        stroke="var(--accent)"
        strokeWidth={0.6}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.35, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          repeatDelay: 1.4,
          delay,
          ease: "easeInOut",
        }}
      />
      <TravelDot x1={a.x} y1={a.y} x2={b.x} y2={b.y} delay={delay} />
    </g>
  );
}

function Node({ node, idx }: { node: typeof nodes[number]; idx: number }) {
  return (
    <motion.g
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.55,
        delay: 0.2 + idx * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
    >
      {/* outer pulse ring for primary nodes */}
      {node.primary && (
        <motion.circle
          cx={node.x} cy={node.y} r={21}
          fill="none"
          stroke="var(--accent)"
          strokeWidth={0.8}
          animate={{ r: [21, 32], opacity: [0.5, 0] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
            ease: "easeOut",
            delay: idx * 0.6,
          }}
        />
      )}

      {/* outer ring */}
      <circle
        cx={node.x} cy={node.y} r={19}
        fill="var(--surface)"
        stroke={node.primary ? "var(--accent)" : "var(--line)"}
        strokeWidth={node.primary ? 1.5 : 1}
      />

      {/* inner fill dot */}
      <motion.circle
        cx={node.x} cy={node.y} r={node.primary ? 6 : 4}
        fill={node.primary ? "var(--accent)" : "var(--ink-soft)"}
        animate={node.primary ? { r: [6, 8, 6] } : {}}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: idx * 0.4 }}
      />

      {/* label */}
      <text
        x={node.x} y={node.y + 32}
        textAnchor="middle"
        fontSize={10.5}
        fontWeight={600}
        fill="var(--ink)"
        fontFamily="var(--font-sans), ui-sans-serif"
        letterSpacing="0.01em"
      >
        {node.label}
      </text>
      <text
        x={node.x} y={node.y + 44}
        textAnchor="middle"
        fontSize={8.5}
        fill="var(--muted)"
        fontFamily="ui-monospace, monospace"
        letterSpacing="0.03em"
      >
        {node.sub}
      </text>
    </motion.g>
  );
}

export function HeroGraph() {
  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-full w-full"
      fill="none"
      aria-hidden
    >
      {edges.map(([from, to], i) => (
        <Edge key={`${from}-${to}`} from={from} to={to} idx={i} />
      ))}
      {nodes.map((node, i) => (
        <Node key={node.id} node={node} idx={i} />
      ))}
    </svg>
  );
}
