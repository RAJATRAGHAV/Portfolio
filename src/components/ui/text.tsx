import React from "react";
import { cn } from "@/lib/utils";
import { textStyles, type TextStyle } from "@/lib/typography";

export type TextVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodySmall"
  | "caption"
  | "label";

export interface TextProps extends React.HTMLAttributes<HTMLElement> {
  variant?: TextVariant;
  as?: keyof React.JSX.IntrinsicElements;
  children: React.ReactNode;
}

/**
 * Text Component
 *
 * A flexible typography component that applies predefined text styles
 * based on the variant prop. Supports semantic HTML elements via the 'as' prop.
 *
 * @example
 * <Text variant="h1" as="h1">Heading</Text>
 * <Text variant="body">Body text</Text>
 * <Text variant="caption" className="text-muted">Caption</Text>
 */
export const Text = React.forwardRef<HTMLElement, TextProps>(
  ({ variant = "body", as, className, children, style, ...props }, ref) => {
    const Component = (as || getDefaultElement(variant)) as keyof React.JSX.IntrinsicElements;
    const variantStyle = textStyles[variant];

    const combinedStyle: React.CSSProperties = {
      fontSize: variantStyle.fontSize,
      lineHeight: variantStyle.lineHeight,
      letterSpacing: variantStyle.letterSpacing,
      fontWeight: variantStyle.fontWeight,
      fontFamily: variantStyle.fontFamily,
      ...style,
    };

    return React.createElement(
      Component,
      {
        ref,
        className: cn(className),
        style: combinedStyle,
        ...props,
      },
      children
    );
  },
);

Text.displayName = "Text";

/**
 * Helper function to determine the default HTML element for each variant
 */
function getDefaultElement(variant: TextVariant): keyof React.JSX.IntrinsicElements {
  const elementMap: Record<TextVariant, keyof React.JSX.IntrinsicElements> = {
    display: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    body: "p",
    bodySmall: "p",
    caption: "span",
    label: "span",
  };

  return elementMap[variant];
}
