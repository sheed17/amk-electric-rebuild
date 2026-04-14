"use client";

import { ArrowRight, type LucideIcon } from "lucide-react";
import React, { forwardRef } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

export interface ScrollCardItem {
  title: string;
  description: string;
  link: string;
  color: string;
  rotation: string;
  icon: LucideIcon;
  points?: string[];
  featured?: boolean;
}

export interface ScrollCardProps {
  eyebrow: string;
  title: string;
  description: string;
  cards: ScrollCardItem[];
  className?: string;
}

const ScrollCard = forwardRef<HTMLElement, ScrollCardProps>(
  ({ eyebrow, title, description, cards, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("section-dark section-padding relative overflow-hidden", className)}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
          <div className="absolute left-[10%] top-20 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
        </div>

        <div className="container-wide relative">
          <div className="grid gap-10 lg:grid-cols-[minmax(280px,0.72fr)_minmax(0,0.98fr)] lg:gap-12 xl:gap-16">
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <p className="section-kicker mb-4 text-gold-light">{eyebrow}</p>
              <h2 className="text-4xl font-serif text-primary-foreground md:text-5xl xl:text-6xl">
                {title}
              </h2>
              <p className="mt-5 max-w-xl text-base leading-8 text-primary-foreground/76 md:text-lg">
                {description}
              </p>
            </div>

            <div className="relative grid gap-5 md:gap-6 lg:gap-0">
              {cards.map((card, index) => (
                <figure
                  key={card.title}
                  className={cn(
                    "relative",
                    "lg:min-h-[76vh]",
                    index > 0 && "lg:-mt-[18vh]"
                  )}
                  style={{ zIndex: index + 1 }}
                >
                  <article
                    className={cn(
                      "group relative overflow-hidden rounded-[2rem] border border-white/10 p-6 shadow-[0_30px_80px_-44px_rgba(2,6,23,0.6)] backdrop-blur-sm transition-all duration-300",
                      "hover:-translate-y-1 hover:border-white/18 hover:shadow-[0_38px_90px_-44px_rgba(2,6,23,0.72)]",
                      "lg:sticky lg:top-24",
                      "md:p-7 lg:p-8",
                      card.rotation,
                      card.featured ? "min-h-[27rem]" : "min-h-[22rem]"
                    )}
                    style={{ backgroundColor: card.color }}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.12),transparent_38%)]" />

                    <div className="relative flex h-full flex-col">
                      <div className="mb-8 flex items-start justify-between gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-gold">
                          <card.icon className="h-5 w-5" />
                        </div>
                        <span className="text-[0.72rem] uppercase tracking-[0.18em] text-primary-foreground/46">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <div className="max-w-2xl">
                        <h3
                          className={cn(
                            "text-3xl font-serif text-primary-foreground",
                            card.featured && "md:text-[2.65rem]"
                          )}
                        >
                          {card.title}
                        </h3>
                        <p className="mt-4 text-sm leading-7 text-primary-foreground/76 md:text-base">
                          {card.description}
                        </p>
                      </div>

                      {card.points && card.points.length > 0 && (
                        <div className="mt-8 grid gap-3">
                          {card.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-2xl bg-white/6 px-4 py-3"
                            >
                              <div className="mt-1 h-2 w-2 rounded-full bg-gold" />
                              <p className="text-sm leading-7 text-primary-foreground/82">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      <div className="mt-auto pt-8">
                        <Link
                          to={card.link}
                          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] text-gold-light transition-colors hover:text-white"
                        >
                          Learn More
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ScrollCard.displayName = "ScrollCard";

export default ScrollCard;
