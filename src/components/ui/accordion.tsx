"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn(
      "rounded-2xl border border-[var(--line)] bg-[var(--surface)] px-6 py-4 transition-colors hover:border-[var(--muted)]",
      className
    )}
    {...props}
  />
);

const AccordionTrigger = ({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      className={cn(
        "group flex w-full items-center justify-between gap-4 text-left text-[var(--ink)]",
        className
      )}
      {...props}
    >
      <span className="flex-1">{children}</span>
      <span className="relative ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[var(--line)] transition-colors group-hover:border-[var(--ink)]">
        <Plus className="h-4 w-4 transition-transform duration-300 ease-out-expo group-data-[state=open]:rotate-45" />
      </span>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className={cn(
      "overflow-hidden text-[14px] text-[var(--ink-soft)] data-[state=closed]:animate-[accordion-up_200ms_ease] data-[state=open]:animate-[accordion-down_260ms_ease]",
      className
    )}
    {...props}
  />
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
