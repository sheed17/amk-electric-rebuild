"use client";

import React from "react";

import { cn } from "@/lib/utils";

interface BentoGridProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoCardProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

interface BentoTitleProps {
  children?: React.ReactNode;
  className?: string;
}

interface BentoDescriptionProps {
  children?: React.ReactNode;
  className?: string;
}

interface BentoContentProps {
  children: React.ReactNode;
  className?: string;
}

interface BentoFeature {
  id: string;
  title?: string;
  description?: string;
  content: React.ReactNode;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentClassName?: string;
}

interface BentoGridWithFeaturesProps {
  features: BentoFeature[];
  className?: string;
}

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-px overflow-hidden rounded-[2.35rem] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-[1px] shadow-[0_40px_110px_-60px_rgba(0,0,0,0.62)] md:grid-cols-6 lg:grid-cols-6",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ id, children, className }: BentoCardProps) => {
  return (
    <div
      id={id}
      className={cn(
        "group/bento relative overflow-hidden bg-white/[0.02] px-6 py-7 ring-1 ring-inset ring-white/6 transition-all duration-300 hover:z-[1] hover:-translate-y-0.5 hover:ring-white/10 hover:shadow-[0_28px_72px_-42px_rgba(0,0,0,0.46)] sm:px-9 sm:py-9",
        "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.1),transparent_46%)] after:opacity-0 after:transition-opacity after:duration-300 group-hover/bento:after:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
};

const BentoTitle = ({ children, className }: BentoTitleProps) => {
  if (!children) return null;

  return (
    <h3
      className={cn(
        "text-left text-2xl font-bold tracking-[-0.045em] text-primary-foreground md:text-[2rem] md:leading-[1.02]",
        className,
      )}
    >
      {children}
    </h3>
  );
};

const BentoDescription = ({ children, className }: BentoDescriptionProps) => {
  if (!children) return null;

  return (
    <p
      className={cn(
        "mx-0 mt-4 max-w-2xl text-left text-[15px] font-normal leading-7 text-primary-foreground/78 md:text-base",
        className,
      )}
    >
      {children}
    </p>
  );
};

const BentoContent = ({ children, className }: BentoContentProps) => {
  return <div className={cn("mt-8 h-full w-full", className)}>{children}</div>;
};

const BentoGridWithFeatures = ({
  features,
  className,
}: BentoGridWithFeaturesProps) => {
  return (
    <div className="relative mb-6">
      <BentoGrid className={className}>
        {features.map((feature) => (
          <BentoCard
            key={feature.id}
            id={feature.id}
            className={feature.className}
          >
            <BentoTitle className={feature.titleClassName}>
              {feature.title}
            </BentoTitle>
            <BentoDescription className={feature.descriptionClassName}>
              {feature.description}
            </BentoDescription>
            <BentoContent className={feature.contentClassName}>
              {feature.content}
            </BentoContent>
          </BentoCard>
        ))}
      </BentoGrid>
    </div>
  );
};

export {
  BentoGrid,
  BentoCard,
  BentoTitle,
  BentoDescription,
  BentoContent,
  BentoGridWithFeatures,
  type BentoFeature,
  type BentoGridProps,
  type BentoCardProps,
};
