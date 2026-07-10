import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-[11px] font-medium tracking-wide",
  {
    variants: {
      tone: {
        neutral: "border-white/10 bg-white/5 text-stone-300",
        saffron: "border-saffron/30 bg-saffron/10 text-saffron-glow",
        emerald: "border-emerald-deep/50 bg-emerald-deep/15 text-emerald-soft",
        crimson: "border-crimson/30 bg-crimson/10 text-red-400",
      },
    },
    defaultVariants: {
      tone: "neutral",
    },
  }
);

export type BadgeTone = NonNullable<VariantProps<typeof badgeVariants>["tone"]>;

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}

export { Badge, badgeVariants };
