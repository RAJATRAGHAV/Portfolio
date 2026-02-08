"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

const Accordion = AccordionPrimitive.Root;

const AccordionItem = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>) => (
  <AccordionPrimitive.Item
    className={cn(
      "rounded-3xl border border-zinc-200/70 bg-white/80 px-6 py-5 transition hover:border-zinc-300 hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:border-white/20 dark:hover:bg-white/10",
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
        "group flex w-full items-center justify-between gap-4 text-left text-lg font-semibold text-zinc-900 dark:text-white",
        className
      )}
      {...props}
    >
      <span>{children}</span>
      <ChevronRight className="h-5 w-5 text-emerald-600 transition group-data-[state=open]:rotate-90 dark:text-emerald-200" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
);

const AccordionContent = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>) => (
  <AccordionPrimitive.Content
    className={cn(
      "overflow-hidden text-sm text-zinc-600 dark:text-zinc-300",
      className
    )}
    {...props}
  />
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
