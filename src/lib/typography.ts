/**
 * Typography System Configuration
 *
 * Defines the type scale, text styles, and font configuration
 * for the portfolio. Uses a 1.250 (Major Third) modular scale.
 */

export interface TextStyle {
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
  fontWeight: string;
  fontFamily: string;
}

/**
 * Type Scale - Major Third (1.250 ratio)
 */
export const typeScale = {
  xs: "0.64rem", // 10.24px
  sm: "0.8rem", // 12.8px
  base: "1rem", // 16px
  lg: "1.25rem", // 20px
  xl: "1.563rem", // 25px
  "2xl": "1.953rem", // 31.25px
  "3xl": "2.441rem", // 39px
  "4xl": "3.052rem", // 48.8px
  "5xl": "3.815rem", // 61px
  "6xl": "4.768rem", // 76.3px
  hero: "6rem", // 96px - Hero only
  display: "7.5rem", // 120px - Large displays
} as const;

/**
 * Text Styles - Predefined combinations for common use cases
 */
export const textStyles: Record<string, TextStyle> = {
  display: {
    fontSize: typeScale.hero,
    lineHeight: "1.1",
    letterSpacing: "-0.03em",
    fontWeight: "700",
    fontFamily: "var(--font-display)",
  },
  h1: {
    fontSize: typeScale["5xl"],
    lineHeight: "1.2",
    letterSpacing: "-0.02em",
    fontWeight: "600",
    fontFamily: "var(--font-display)",
  },
  h2: {
    fontSize: typeScale["3xl"],
    lineHeight: "1.3",
    letterSpacing: "-0.01em",
    fontWeight: "600",
    fontFamily: "var(--font-display)",
  },
  h3: {
    fontSize: typeScale.xl,
    lineHeight: "1.4",
    letterSpacing: "-0.005em",
    fontWeight: "600",
    fontFamily: "var(--font-display)",
  },
  body: {
    fontSize: typeScale.lg,
    lineHeight: "1.7",
    letterSpacing: "0",
    fontWeight: "400",
    fontFamily: "var(--font-sans)",
  },
  bodySmall: {
    fontSize: typeScale.base,
    lineHeight: "1.6",
    letterSpacing: "0",
    fontWeight: "400",
    fontFamily: "var(--font-sans)",
  },
  caption: {
    fontSize: typeScale.xs,
    lineHeight: "1.5",
    letterSpacing: "0.1em",
    fontWeight: "600",
    fontFamily: "var(--font-sans)",
  },
  label: {
    fontSize: typeScale.sm,
    lineHeight: "1.5",
    letterSpacing: "0.05em",
    fontWeight: "500",
    fontFamily: "var(--font-sans)",
  },
};

/**
 * Font Configuration
 */
export const fontConfig = {
  display: {
    family: "Fraunces",
    variable: "--font-display",
    fallback: 'Georgia, "Times New Roman", serif',
  },
  sans: {
    family: "Inter",
    variable: "--font-sans",
    fallback:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  },
} as const;
