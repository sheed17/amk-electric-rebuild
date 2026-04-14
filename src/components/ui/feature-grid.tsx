import * as React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

export interface Feature {
  id?: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  href: string;
}

export interface FeatureGridProps {
  features: Feature[];
  className?: string;
}

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <Link
    to={feature.href}
    className={cn(
      "group",
      "flex h-full flex-col items-start gap-5 sm:flex-row sm:items-center",
      "rounded-[1.5rem] border border-border/65 p-5 md:p-6",
      "bg-background/98 text-card-foreground shadow-[0_20px_48px_-36px_rgba(30,42,59,0.18)]",
      "transition-all duration-300",
      "hover:-translate-y-0.5 hover:border-primary/18 hover:shadow-[0_24px_56px_-34px_rgba(30,42,59,0.22)]",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
    )}
  >
    <div className="shrink-0">
      <div className="relative h-24 w-24 overflow-hidden rounded-[1.2rem] border border-border/55 bg-muted/25 sm:h-[6.5rem] sm:w-[6.5rem]">
        <img
          src={feature.imageSrc}
          alt={feature.imageAlt}
          className="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/8 via-transparent to-transparent" />
      </div>
    </div>

    <div className="flex h-full min-w-0 flex-1 items-center gap-4">
      <div className="min-w-0 flex-1">
        <h3 className="mb-1.5 text-[1.18rem] font-semibold leading-[1.15] text-foreground md:text-[1.22rem]">
          {feature.title}
        </h3>
        <p className="max-w-[34rem] text-sm leading-6 text-muted-foreground/95">
          {feature.description}
        </p>
      </div>

      <div className="flex shrink-0 self-end sm:self-center">
        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-muted/35 text-primary/70 transition-all duration-300 group-hover:border-primary/15 group-hover:bg-primary/5 group-hover:text-primary">
          <ArrowRight className="h-4.5 w-4.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </div>
  </Link>
);

const FeatureGrid = React.forwardRef<HTMLDivElement, FeatureGridProps>(
  ({ features, className }, ref) => {
    if (!features || features.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn("grid grid-cols-1 gap-5 lg:grid-cols-2", className)}
      >
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} />
        ))}
      </div>
    );
  }
);

FeatureGrid.displayName = "FeatureGrid";

export { FeatureGrid };
