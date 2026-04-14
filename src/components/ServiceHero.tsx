import CTAButtons from "@/components/CTAButtons";
import { CheckCircle2, PhoneCall } from "lucide-react";

interface ServiceHeroProps {
  headline: string;
  subcopy: string;
  eyebrow?: string;
  highlights?: string[];
  panelTitle?: string;
  panelBody?: string;
  panelItems?: string[];
  panelFootnote?: string;
  requestHref?: string;
}

const defaultHighlights = [
  "Fast scheduling and clear communication",
  "Residential and commercial expertise",
  "Clean, code-focused installations",
];

const ServiceHero = ({
  headline,
  subcopy,
  eyebrow = "AMK Electric",
  highlights = defaultHighlights,
  panelTitle = "Need help right away?",
  panelBody = "Tell us what you're dealing with and we'll help you figure out the right next step before work begins.",
  panelItems = defaultHighlights,
  panelFootnote = "Serving San Jose, Santa Clara, Sunnyvale, Cupertino, and nearby Bay Area communities.",
  requestHref = "/contact",
}: ServiceHeroProps) => (
  <section className="section-dark relative overflow-hidden px-4 pb-14 pt-14 sm:px-6 md:pb-16 md:pt-20 lg:px-8 lg:pb-18">
    <div className="container-tight relative">
      <div className="grid gap-8 lg:grid-cols-[minmax(0,1.12fr)_360px] lg:items-end lg:gap-10">
        <div className="max-w-4xl">
          <p className="section-kicker mb-4">{eyebrow}</p>
          <h1 className="mb-4 text-4xl font-serif text-primary-foreground md:text-5xl lg:text-6xl">
            {headline}
          </h1>
          <p className="mb-6 max-w-2xl text-base leading-8 text-primary-foreground/82 md:text-lg">
            {subcopy}
          </p>
          <CTAButtons variant="dark-section" requestHref={requestHref} />

          <div className="mt-6 grid gap-3 text-sm text-primary-foreground/86 sm:grid-cols-2">
            {highlights.slice(0, 4).map((item) => (
              <div
                key={item}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm"
              >
                <CheckCircle2 className="h-4 w-4 text-gold" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <aside className="overflow-hidden rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-6 shadow-[0_28px_72px_-44px_rgba(2,6,23,0.62)] md:p-7">
          <p className="section-kicker mb-4 text-gold-light">Service Summary</p>
          <h2 className="mb-3 text-2xl font-serif text-primary-foreground md:text-[2rem]">{panelTitle}</h2>
          <p className="leading-7 text-primary-foreground/74">
            {panelBody}
          </p>

          <div className="mt-6 space-y-3">
            {panelItems.slice(0, 4).map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl bg-slate-950/24 px-4 py-3 ring-1 ring-inset ring-white/6">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <p className="text-sm text-primary-foreground/86">{item}</p>
              </div>
            ))}
          </div>

          <a
            href="tel:4086467828"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-gold/40 bg-gold px-5 py-3 text-sm uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-300 hover:-translate-y-0.5 hover:bg-gold/90"
          >
            <PhoneCall className="h-4 w-4" />
            Call (408) 646-7828
          </a>
          <p className="mt-4 text-sm leading-relaxed text-primary-foreground/64">
            {panelFootnote}
          </p>
        </aside>
      </div>
    </div>
  </section>
);

export default ServiceHero;
