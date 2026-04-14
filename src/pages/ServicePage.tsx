import { useParams, Navigate } from "react-router-dom";
import { getServiceBySlug } from "@/data/services";
import ServiceHero from "@/components/ServiceHero";
import PageIntro from "@/components/PageIntro";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import { ArrowRight, BadgeCheck, CheckCircle2, ClipboardList, MapPin, PhoneCall, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const serviceAreas = [
    "San Jose",
    "Santa Clara",
    "Sunnyvale",
    "Cupertino",
    "Campbell",
    "Milpitas",
    "Mountain View",
    "Los Gatos",
  ];

  const projectScopes = service.included.slice(0, 6);

  const processSteps = [
    {
      icon: PhoneCall,
      title: "Tell us what you're seeing",
      description: "We start with the issue, the space, and the urgency so we can point you toward the right service fast.",
    },
    {
      icon: ClipboardList,
      title: "Get a clear plan",
      description: "You get a straightforward scope, next-step recommendation, and communication that keeps things easy to follow.",
    },
    {
      icon: ShieldCheck,
      title: "Professional work onsite",
      description: "Installations and repairs are handled carefully, cleanly, and with attention to code and long-term reliability.",
    },
    {
      icon: BadgeCheck,
      title: "Walkthrough before wrap-up",
      description: "We close the loop by confirming what was done and making sure you understand the outcome and next considerations.",
    },
  ];

  return (
    <>
      <ServiceHero
        eyebrow={`${service.shortTitle} Service · San Jose & Bay Area`}
        headline={service.heroHeadline}
        subcopy={service.heroSubcopy}
        highlights={[
          "Licensed & Insured",
          service.slug === "commercial-electrical" ? "Commercial Electrical" : "Residential & Commercial",
          "English & Spanish",
          "Serving San Jose + nearby cities",
        ]}
        panelTitle={`Need ${service.shortTitle.toLowerCase()} help?`}
        panelBody={`A clear next step for ${service.shortTitle.toLowerCase()} work starts with understanding the issue, the space, and the timing before anything is scheduled.`}
        panelItems={service.included.slice(0, 4)}
        panelFootnote="Local scheduling across San Jose, Santa Clara County, and nearby Bay Area communities."
      />

      <section className="section-padding bg-card/45">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Common Problems"
            title={service.signsTitle}
            subtitle="These are the situations that most often lead customers to book this type of electrical service."
            centered={false}
            className="mb-8 max-w-3xl md:mb-10"
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {service.signs.map((sign, i) => (
              <article
                key={i}
                className="panel-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-[0_18px_40px_-28px_rgba(30,42,59,0.18)] md:p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex h-9 min-w-9 items-center justify-center rounded-xl bg-gold/10 px-2 text-sm font-semibold tracking-[0.08em] text-gold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mb-2 text-[1.35rem] font-serif leading-[1.15] text-primary md:text-[1.5rem]">
                  {sign.title}
                </h3>
                <p className="text-sm leading-6 text-muted-foreground/95">
                  {sign.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageIntro
        eyebrow="Service Overview"
        title={service.introTitle}
        paragraphs={service.introText}
        highlights={service.included}
        asideTitle="Common work on this page"
      />

      <section className="section-padding pt-10 md:pt-12">
        <div className="container-tight grid gap-5 xl:grid-cols-[minmax(0,1.08fr)_0.92fr] xl:items-start">
          <div className="panel-surface p-6 md:p-7 lg:p-8">
            <SectionHeading eyebrow="What We Handle" title={service.includedTitle} centered={false} className="mb-8" />
            <div className="grid gap-3 sm:grid-cols-2">
              {service.included.map((item, i) => (
                <div key={i} className="flex items-start gap-3 rounded-2xl border border-border bg-background/75 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  <span className="text-sm md:text-base text-foreground leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel-surface p-6 md:p-7 lg:p-8">
              <p className="section-kicker mb-4">How We Work</p>
              <h3 className="mb-5 text-3xl font-serif text-primary md:text-4xl">
                A cleaner process from first call to final walkthrough
              </h3>
              <div className="space-y-4">
                {processSteps.map((step) => (
                  <div key={step.title} className="rounded-2xl bg-muted/38 px-4 py-4">
                    <div className="mb-2 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                        <step.icon className="h-4 w-4" />
                      </div>
                      <h4 className="text-2xl font-serif text-primary">{step.title}</h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>
              <a
                href="tel:4086467828"
                className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-gold transition-colors hover:text-gold-light"
              >
                <PhoneCall className="h-4 w-4" />
                Call for Scheduling
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 md:pb-10">
        <div className="container-tight">
          <div className="panel-surface flex flex-col gap-5 px-6 py-6 md:flex-row md:items-center md:justify-between md:px-8">
            <div>
              <p className="section-kicker mb-3">Need Help With {service.shortTitle}?</p>
              <h3 className="text-2xl font-serif text-primary md:text-3xl">
                Request a quote or call now to talk through the job
              </h3>
            </div>
            <div className="shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
              >
                Request Service
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-dark section-padding">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Why AMK Electric"
            title={service.whyChooseTitle}
            subtitle="The goal is not just getting the work done. It is making the entire service experience feel organized, responsive, and trustworthy."
            light
          />
          <div className="grid gap-5 sm:grid-cols-2">
            {service.whyChoose.map((item, i) => (
              <div key={i} className="rounded-[1.8rem] border border-white/8 bg-white/[0.04] p-6 shadow-[0_22px_56px_-40px_rgba(0,0,0,0.42)] md:p-7">
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-400/12 text-blue-200">
                  <BadgeCheck className="h-5 w-5" />
                </div>
                <h3 className="mb-3 text-[1.8rem] font-serif text-primary-foreground">{item.title}</h3>
                <p className="text-sm leading-7 text-primary-foreground/74 md:text-[0.98rem]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-card/45">
        <div className="container-tight">
          <SectionHeading
            eyebrow="Common Project Scopes"
            title={`Common ${service.shortTitle} project scopes`}
            subtitle="These are the kinds of scopes customers usually ask us about when this service comes up."
            centered={false}
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {projectScopes.map((scope, index) => (
              <article key={scope} className="panel-surface p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-border/80 hover:shadow-[0_16px_36px_-26px_rgba(30,42,59,0.16)] md:p-6">
                <div className="mb-3 inline-flex rounded-full bg-primary/6 px-3 py-1.5 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-primary/58">
                  Scope {String(index + 1).padStart(2, "0")}
                </div>
                <h3 className="text-[1.2rem] font-serif leading-[1.2] text-primary">{scope}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding pt-10 md:pt-12">
        <div className="container-tight">
          <div className="panel-surface overflow-hidden p-8 md:p-10 lg:p-12">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14">
              <div className="max-w-[34rem]">
                <p className="section-kicker mb-4">Service Areas</p>
                <h2 className="text-4xl font-serif text-primary md:text-[3rem]">
                  Serving San Jose &amp; nearby communities
                </h2>
                <p className="mt-4 text-base leading-8 text-muted-foreground md:text-lg">
                  AMK Electric schedules {service.shortTitle.toLowerCase()} work throughout Santa Clara County and nearby Bay Area cities for homeowners and small businesses.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,248,250,0.88))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_18px_48px_-36px_rgba(30,42,59,0.18)] md:p-6 lg:p-7">
                <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary/55">
                  Regular Scheduling Coverage
                </p>
                <div className="flex flex-wrap gap-3">
                  {serviceAreas.map((city) => (
                    <span
                      key={city}
                      className="inline-flex min-h-11 items-center rounded-full border border-border/65 bg-white/82 px-4 py-2 text-sm font-medium text-primary/85 shadow-[0_1px_0_rgba(255,255,255,0.9)]"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <div className="mt-6 rounded-[1.2rem] bg-muted/42 px-4 py-4 md:px-5">
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        Local scheduling, broader coverage
                      </p>
                      <p className="mt-1 text-sm leading-7 text-muted-foreground">
                        From San Jose to nearby Santa Clara County communities, we regularly book {service.shortTitle.toLowerCase()} work throughout the Bay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding pt-10 md:pt-12">
        <div className="container-tight grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
          <div>
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" centered={false} />
            <p className="text-muted-foreground leading-relaxed">
              Straight answers to the questions customers usually ask before booking this service.
            </p>
          </div>
          <div className="panel-surface p-4 md:p-5">
            <FAQAccordion items={service.faqs} />
          </div>
        </div>
      </section>

      <FinalCTA
        eyebrow={`${service.shortTitle} Service`}
        title={`Need ${service.shortTitle.toLowerCase()} done right?`}
        subtitle={`Whether you need repairs, upgrades, planning help, or a quote for upcoming ${service.shortTitle.toLowerCase()} work, AMK Electric is ready to help across San Jose and nearby Bay Area communities.`}
      />
    </>
  );
};

export default ServicePage;
