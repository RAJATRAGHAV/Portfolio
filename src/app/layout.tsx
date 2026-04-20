import type { Metadata, Viewport } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  axes: ["opsz"],
  display: "swap",
});

const siteUrl = "https://rajatraghav.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Rajat Raghav — Product Engineer · Agentic AI & Systems",
    template: "%s · Rajat Raghav",
  },
  description:
    "Product Engineer shipping three production AI systems that process 1M+ contracts — Agentic AI, LangGraph, FastAPI, AWS.",
  keywords: [
    "Rajat Raghav",
    "Product Engineer",
    "Agentic AI",
    "LangGraph",
    "LangChain",
    "Agentic RAG",
    "FastAPI",
    "Contract Intelligence",
    "AWS",
  ],
  authors: [{ name: "Rajat Raghav", url: siteUrl }],
  creator: "Rajat Raghav",
  openGraph: {
    type: "website",
    title: "Rajat Raghav — Product Engineer · Agentic AI & Systems",
    description:
      "Three production AI systems, 1M+ contracts processed, LangGraph + FastAPI + AWS. Sole-engineer, end-to-end.",
    siteName: "Rajat Raghav",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "Rajat Raghav — Product Engineer",
    description:
      "Agentic AI, contract intelligence, and production infrastructure. Shipping solo at enterprise scale.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#efeae0" },
    { media: "(prefers-color-scheme: dark)", color: "#0b0b0c" },
  ],
};

const themeBoot = `(() => {
  try {
    const stored = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = stored === 'light' || stored === 'dark' ? stored : (prefersDark ? 'dark' : 'dark');
    document.documentElement.classList.toggle('dark', theme === 'dark');
  } catch (_) {
    document.documentElement.classList.add('dark');
  }
})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeBoot }} />
      </head>
      <body
        className={`${inter.variable} ${fraunces.variable} grain antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
