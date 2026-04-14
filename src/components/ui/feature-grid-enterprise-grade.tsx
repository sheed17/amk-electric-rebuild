import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

type IconType =
  | React.ElementType
  | React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

export interface FeatureItem {
  id: string;
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

export interface FeatureGridProps {
  features: FeatureItem[];
  sectionTitle?: React.ReactNode;
  sectionSubtitle?: React.ReactNode;
  className?: string;
}

const FeatureGrid: React.FC<FeatureGridProps> = ({
  features,
  sectionTitle,
  sectionSubtitle,
  className,
}) => {
  if (!features || features.length === 0) {
    return null;
  }

  return (
    <section
      className={cn("bg-background text-foreground", className)}
      role="region"
      aria-label={sectionTitle ? `Features: ${sectionTitle}` : "Service Features"}
    >
      <div className="mx-auto max-w-7xl">
        {(sectionTitle || sectionSubtitle) && (
          <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
            {sectionTitle && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                {sectionTitle}
              </h2>
            )}
            {sectionSubtitle && (
              <p className="mt-4 text-lg text-muted-foreground">
                {sectionSubtitle}
              </p>
            )}
          </div>
        )}

        <div className="grid gap-5 sm:gap-6 md:grid-cols-2 lg:grid-cols-3" role="list">
          {features.map((feature) => (
            <Link key={feature.id} to={feature.href} className="group block focus-visible:outline-none">
              <Card
                className={cn(
                  "flex h-full flex-col rounded-[1.7rem] border border-border/60 bg-card/98 p-1 shadow-[0_24px_54px_-38px_rgba(30,42,59,0.18)] transition-all duration-300",
                  "hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-[0_28px_60px_-34px_rgba(30,42,59,0.22)]",
                  "focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2",
                )}
                role="listitem"
              >
                <CardHeader className="p-6 pb-3 md:p-7 md:pb-4">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/8 text-primary transition-colors duration-200 group-hover:border-primary/25 group-hover:bg-primary/10">
                      <feature.icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/60 bg-muted/35 text-primary/70 transition-all duration-300 group-hover:border-primary/20 group-hover:bg-primary/5 group-hover:text-primary">
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                  <CardTitle className="text-[1.3rem] font-semibold tracking-[-0.03em] text-foreground">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-6 pt-0 md:px-7 md:pb-7">
                  <CardDescription className="text-[0.97rem] leading-7 text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export { FeatureGrid };
