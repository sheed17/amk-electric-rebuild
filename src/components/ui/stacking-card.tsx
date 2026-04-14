"use client";

import { motion } from "motion/react";
import { forwardRef } from "react";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";

export interface StackingProjectData {
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
  points?: string[];
}

interface CardProps {
  i: number;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  color: string;
  points?: string[];
}

interface StackingCardProps {
  eyebrow: string;
  title: string;
  description: string;
  projects: StackingProjectData[];
  className?: string;
}

export const Card = ({
  i,
  title,
  description,
  href,
  imageSrc,
  imageAlt,
  color,
  points,
}: CardProps) => {
  return (
    <div className="relative flex items-center justify-center py-6 md:py-7 lg:py-8">
      <motion.article
        style={{ backgroundColor: color }}
        whileHover={{ y: -6 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className={cn(
          "relative w-full origin-top overflow-hidden rounded-[2rem] border border-white/12 p-6 shadow-[0_34px_100px_-44px_rgba(2,6,23,0.72)]",
          "md:p-8 lg:w-[82%] lg:rounded-[2.4rem] lg:p-10 xl:w-[78%] xl:p-12"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(96,165,250,0.28),transparent_34%)]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/10 to-transparent" />

        <div className="relative">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="mb-3 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-blue-200/95 md:text-[0.72rem]">
                Project Type {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="max-w-3xl text-[1.9rem] font-black leading-[1.02] tracking-[-0.04em] text-white md:text-[2.4rem] lg:text-[2.9rem]">
                {title}
              </h3>
            </div>
            <div className="hidden rounded-full border border-white/15 bg-white/8 px-4 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-white/80 md:block">
              Bay Area
            </div>
          </div>

          <div className="mt-7 flex h-full flex-col gap-7 lg:mt-9 lg:flex-row lg:gap-10">
            <div className="w-full lg:w-[42%]">
              <p className="max-w-xl text-[0.98rem] leading-8 text-white/82 md:text-[1.02rem]">
                {description}
              </p>

              {points && points.length > 0 && (
                <ul className="mt-6 grid gap-3.5">
                  {points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-3 rounded-2xl bg-white/8 px-4 py-3 text-sm leading-6 text-white/92 backdrop-blur-sm"
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-300 shadow-[0_0_0_4px_rgba(147,197,253,0.12)]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              )}

              <span className="group mt-7 inline-flex items-center gap-2 pt-1">
                <Link
                  to={href}
                  className="text-sm font-bold uppercase tracking-[0.14em] text-white underline underline-offset-4 transition-colors hover:text-blue-200"
                >
                  Learn More
                </Link>
                <svg
                  width="22"
                  height="12"
                  viewBox="0 0 22 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white transition-transform duration-200 group-hover:translate-x-1"
                >
                  <path
                    d="M21.5303 6.53033C21.8232 6.23744 21.8232 5.76256 21.5303 5.46967L16.7574 0.696699C16.4645 0.403806 15.9896 0.403806 15.6967 0.696699C15.4038 0.989592 15.4038 1.46447 15.6967 1.75736L19.9393 6L15.6967 10.2426C15.4038 10.5355 15.4038 11.0104 15.6967 11.3033C15.9896 11.5962 16.4645 11.5962 16.7574 11.3033L21.5303 6.53033ZM0 6.75L21 6.75V5.25L0 5.25L0 6.75Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </div>

            <div className="relative h-[17rem] w-full overflow-hidden rounded-[1.65rem] border border-white/12 bg-slate-900/30 sm:h-[19rem] lg:h-auto lg:w-[58%]">
              <motion.div
                className="h-full w-full"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <img
                  src={imageSrc}
                  alt={imageAlt}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </motion.div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-slate-950/8 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 md:p-5">
                <div className="rounded-full border border-white/15 bg-slate-950/55 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-white/84 backdrop-blur-sm">
                  AMK Electric
                </div>
                <div className="rounded-full border border-blue-300/30 bg-blue-400/12 px-3 py-1.5 text-[0.68rem] font-semibold uppercase tracking-[0.18em] text-blue-100 backdrop-blur-sm">
                  Electrical Work
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </div>
  );
};

const StackingCard = forwardRef<HTMLElement, StackingCardProps>(
  ({ eyebrow, title, description, projects, className }, ref) => {
    return (
      <section
        ref={ref}
        className={cn("section-dark relative overflow-hidden", className)}
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
          <div className="absolute left-[10%] top-24 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
          <div className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        </div>

        <div className="container-wide relative py-20 md:py-24 lg:py-28">
          <section className="grid min-h-[40vh] place-content-center text-white">
            <div className="mx-auto max-w-4xl text-center">
              <p className="section-kicker mb-4 text-blue-200">{eyebrow}</p>
              <h2 className="text-4xl font-black tracking-[-0.05em] text-white md:text-5xl xl:text-6xl">
                {title}
              </h2>
              <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-white/78 md:text-lg">
                {description}
              </p>
            </div>
          </section>

          <section className="text-white">
            {projects.map((project, i) => {
              return (
                <Card
                  key={`project_${i}`}
                  i={i}
                  href={project.href}
                  imageSrc={project.imageSrc}
                  imageAlt={project.imageAlt}
                  title={project.title}
                  color={project.color}
                  description={project.description}
                  points={project.points}
                />
              );
            })}
          </section>
        </div>
      </section>
    );
  }
);

StackingCard.displayName = "StackingCard";

export default StackingCard;
