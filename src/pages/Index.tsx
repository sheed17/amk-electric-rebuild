import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
} from "lucide-react";

import TrustStrip from "@/components/TrustStrip";
import SectionHeading from "@/components/SectionHeading";
import FAQAccordion from "@/components/FAQAccordion";
import FinalCTA from "@/components/FinalCTA";
import HeroQuoteCard from "@/components/home/HeroQuoteCard";
import Reveal from "@/components/home/Reveal";
import ServicesSection from "@/components/site/services-section";
import { servicesSectionItems } from "@/components/site/site-data";
import WhyChooseUs from "@/components/site/why-choose-us";
import ProjectsBento from "@/components/site/projects-bento";

const homeFAQs = [
  { question: "What areas do you serve?", answer: "We serve San Jose and surrounding Bay Area cities including Santa Clara, Sunnyvale, Cupertino, Campbell, Milpitas, Mountain View, Los Gatos, Saratoga, and Palo Alto." },
  { question: "Do you offer free estimates?", answer: "We provide clear, upfront pricing. For most projects, we can give you a quote after understanding your needs. Give us a call or fill out our contact form to get started." },
  { question: "Do you handle permits?", answer: "Yes. When a project requires permits, we manage the permitting process and coordinate inspections to make sure the work is done to code." },
  { question: "Do you work on both homes and businesses?", answer: "Yes. We provide residential electrical services for homeowners and light commercial electrical work for offices, retail, and small commercial properties." },
  { question: "Can you install EV chargers?", answer: "Yes. We install Level 2 home chargers, run dedicated circuits, and let you know if your panel needs to be upgraded first." },
  { question: "Do you handle panel upgrades and rewiring?", answer: "We do. Older panels, service upgrades, new circuits, and whole-home or partial rewiring are all part of our regular scope." },
];

const HomePage = () => (
  <>
    <section className="section-dark relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:px-8 lg:pb-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
        <div className="absolute left-[10%] top-16 h-44 w-44 rounded-full bg-blue-400/10 blur-3xl" />
        <div className="absolute right-[8%] top-24 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-background/20" />
      </div>

      <div className="container-wide relative">
        <div className="grid gap-12 xl:grid-cols-[minmax(0,1.04fr)_minmax(360px,430px)] xl:items-center xl:gap-16">
          <Reveal className="max-w-3xl">
            <p className="section-kicker mb-5">San Jose &amp; Bay Area Electrician</p>
            <h1 className="max-w-4xl text-[3.35rem] font-extrabold tracking-[-0.055em] text-primary-foreground md:text-[4.35rem] xl:text-[4.9rem] xl:leading-[0.98]">
              Trusted Electrical Services for Homes &amp; Businesses
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-primary-foreground/80 md:text-[1.18rem]">
              Jin Electric Co provides residential and commercial electrical work across San Jose,
              Santa Clara, Sunnyvale, Cupertino, and nearby Bay Area communities. Clean work,
              clear communication, and dependable scheduling from the first call forward.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button
                variant="gold"
                size="lg"
                className="h-12 rounded-full px-6 text-[0.78rem] uppercase tracking-[0.16em]"
                asChild
              >
                <Link to="/contact">Request a Quote</Link>
              </Button>
              <Button
                variant="white-outline"
                size="lg"
                className="h-12 rounded-full border-primary-foreground/18 bg-primary-foreground/5 px-6 text-[0.78rem] uppercase tracking-[0.16em] hover:bg-primary-foreground/12 hover:text-primary-foreground"
                asChild
              >
                <a href="tel:4086085701">
                  <Phone className="mr-2 h-4 w-4" />
                  Call (408) 608-5701
                </a>
              </Button>
            </div>

            <div className="mt-8 grid gap-3 text-sm text-primary-foreground/80 sm:grid-cols-2">
              {[
                "Licensed & Insured",
                "Residential & Commercial",
                "English & Spanish",
                "Serving San Jose + nearby cities",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-sm">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.08} className="xl:pl-2">
            <div className="space-y-4">
              <HeroQuoteCard />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.05] p-5 shadow-[0_18px_48px_-38px_rgba(2,6,23,0.5)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-200">Fast Estimates</p>
                  <p className="mt-3 text-[1.35rem] font-bold tracking-[-0.03em] text-primary-foreground">
                    Clear scope before the work starts
                  </p>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/74">
                    We help you understand the likely path before scheduling begins.
                  </p>
                </div>
                <div className="rounded-[1.6rem] border border-white/8 bg-white/[0.04] p-5 shadow-[0_18px_48px_-38px_rgba(2,6,23,0.46)]">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-blue-200">Local Coverage</p>
                  <p className="mt-3 text-[1.35rem] font-bold tracking-[-0.03em] text-primary-foreground">
                    Serving homeowners and small businesses
                  </p>
                  <p className="mt-2 text-sm leading-6 text-primary-foreground/74">
                    Serving San Jose and nearby communities across Santa Clara County.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    <TrustStrip />

    <ServicesSection items={servicesSectionItems} />

    <WhyChooseUs />

    <ProjectsBento />

    <section className="section-padding">
      <div className="container-wide">
        <Reveal>
          <div className="panel-surface overflow-hidden p-8 md:p-10 lg:p-12 xl:p-14">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14 xl:gap-16">
              <div className="max-w-[34rem] lg:py-2">
                <p className="section-kicker mb-4 md:mb-5">SERVICE AREAS</p>
                <h2 className="text-4xl font-serif text-primary md:text-[3.15rem]">
                  Serving San Jose &amp; Nearby Communities
                </h2>
                <p className="mt-4 max-w-[32rem] text-base leading-8 text-muted-foreground md:mt-5 md:text-lg">
                  We’re based in San Jose and regularly schedule electrical work throughout Santa Clara County and surrounding Bay Area cities.
                </p>
              </div>
              <div className="rounded-[1.75rem] border border-border/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.92),rgba(247,248,250,0.88))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.86),0_18px_48px_-36px_rgba(30,42,59,0.18)] md:p-6 lg:p-7">
                <p className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary/55">
                  Regular Scheduling Coverage
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "San Jose",
                    "Santa Clara",
                    "Sunnyvale",
                    "Cupertino",
                    "Campbell",
                    "Milpitas",
                    "Mountain View",
                    "Los Gatos",
                    "Saratoga",
                    "Palo Alto",
                  ].map((city) => (
                    <span
                      key={city}
                      className="inline-flex min-h-11 items-center rounded-full border border-border/65 bg-white/82 px-4 py-2 text-sm font-medium text-primary/85 shadow-[0_1px_0_rgba(255,255,255,0.9)] transition-colors hover:border-border/90 hover:bg-white"
                    >
                      {city}
                    </span>
                  ))}
                </div>
                <Link
                  to="/service-areas"
                  className="group mt-7 inline-flex items-center gap-2.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
                >
                  View Service Areas
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
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
                        From San Jose to nearby Santa Clara County communities, we regularly book electrical work throughout the Bay.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-tight grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <Reveal>
          <div>
            <SectionHeading eyebrow="FAQ" title="Frequently Asked Questions" centered={false} />
            <p className="text-base leading-8 text-muted-foreground">
              Answers to the questions customers usually ask before scheduling repairs, upgrades,
              EV charger installs, or remodel electrical work.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.06} className="panel-surface p-4 md:p-6">
          <FAQAccordion items={homeFAQs} />
        </Reveal>
      </div>
    </section>

    <FinalCTA
      eyebrow="Get Started"
      title="Need Electrical Work Done Right?"
      subtitle="From repairs and panel upgrades to rewiring, lighting, remodel work, and EV chargers, Jin Electric Co is ready to help. Reach out for a quote or give us a call to talk through the project."
    />
  </>
);

export default HomePage;
