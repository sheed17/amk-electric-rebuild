import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

const SectionHeading = ({ title, subtitle, eyebrow, centered = true, light = false, className }: SectionHeadingProps) => (
  <div className={cn(centered && "text-center", "mb-10 md:mb-12", className)}>
    {eyebrow && (
      <p className={cn(
        "section-kicker mb-4",
        centered && "justify-center",
        light && "text-gold-light"
      )}>
        {eyebrow}
      </p>
    )}
    <h2 className={cn(
      "text-4xl md:text-5xl font-serif leading-none mb-3",
      light ? "text-primary-foreground" : "text-primary"
    )}>
      {title}
    </h2>
    {subtitle && (
      <p className={cn(
        "text-base md:text-lg max-w-3xl leading-relaxed",
        centered && "mx-auto",
        light ? "text-primary-foreground/80" : "text-muted-foreground"
      )}>
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
