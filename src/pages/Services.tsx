import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import FinalCTA from "@/components/FinalCTA";
import FAQAccordion from "@/components/FAQAccordion";
import { Building2, ShieldCheck, Wrench } from "lucide-react";
import { coreServices, supportingServices } from "@/data/services";

const servicesFAQs = [
  { question: "How do I know which service I need?", answer: "If you're not sure what you need, give us a call. We'll ask a few questions about the situation and point you in the right direction — no obligation." },
  { question: "Do you offer emergency electrical service?", answer: "We do our best to accommodate urgent requests. If you have a safety concern, let us know when you call and we'll prioritize accordingly." },
  { question: "Do you serve both residential and commercial customers?", answer: "Yes. We provide electrical services for homeowners and light commercial properties including offices, retail spaces, and small commercial buildings." },
];

const serviceOverview = [
  {
    icon: Wrench,
    title: "Repairs, installs, and upgrades",
    description: "From quick troubleshooting to larger electrical improvements, we cover the high-frequency work Bay Area customers call about most.",
  },
  {
    icon: Building2,
    title: "Homeowners and businesses",
    description: "The service lineup supports residential calls, light commercial projects, remodels, panel work, lighting, and dedicated circuits.",
  },
  {
    icon: ShieldCheck,
    title: "Built around trust and clarity",
    description: "We structure every visit around clean workmanship, clear scope, and code-conscious execution so the process feels straightforward.",
  },
];

const ServicesPage = () => (
  <>
    <ServiceHero
      eyebrow="Residential • Commercial • Repairs • Upgrades"
      headline="Electrical Services in San Jose & the Bay Area"
      subcopy="AMK Electric provides a full range of residential and commercial electrical services. From minor repairs to complex installations, we handle it all with quality and care."
      highlights={[
        "Panel upgrades, EV chargers, lighting, rewiring",
        "Residential homes and light commercial spaces",
        "Clear communication from first call to final walkthrough",
      ]}
      stats={[
        { value: `${coreServices.length}`, label: "Core services" },
        { value: `${supportingServices.length}`, label: "Specialty services" },
        { value: "San Jose", label: "Home base" },
      ]}
      panelTitle="Not sure which service fits your project?"
      panelBody="Tell us the issue, the room, or the type of upgrade you're planning. We'll help you narrow it down before you commit to anything."
    />

    <section className="section-padding pt-10">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Service Structure"
          title="What We Do"
          subtitle="We offer a broad range of electrical services for homes and businesses across the Bay Area. Every job gets the same focus on safety, quality, and clear communication."
        />
        <div className="grid gap-4 lg:grid-cols-3">
          {serviceOverview.map((item) => (
            <article key={item.title} className="panel-surface p-6 md:p-7">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gold/10 text-gold">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-serif text-primary mb-3">{item.title}</h3>
              <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card/45 pt-0">
      <div className="container-tight">
        <div className="panel-surface p-6 md:p-8 lg:p-10">
          <SectionHeading
            eyebrow="Primary Services"
            title="Core Services"
            subtitle="These are the main service categories customers usually start with when they're comparing electrical help."
            centered={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {coreServices.map(s => (
              <ServiceCard key={s.slug} title={s.shortTitle} description={s.introText[0].substring(0, 140) + "..."} slug={s.slug} />
            ))}
          </div>

          <SectionHeading
            eyebrow="Specialty Services"
            title="Additional Services"
            subtitle="Supporting electrical services that round out the site and give customers a clear path to specific project pages."
            centered={false}
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {supportingServices.map(s => (
              <ServiceCard key={s.slug} title={s.shortTitle} description={s.introText[0].substring(0, 140) + "..."} slug={s.slug} />
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-tight grid gap-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:items-start">
        <div>
          <SectionHeading eyebrow="FAQ" title="Questions About Our Services" centered={false} />
          <p className="text-muted-foreground leading-relaxed">
            A few quick answers that help visitors understand scope, urgency, and whether they're on the right page.
          </p>
        </div>
        <div className="panel-surface p-4 md:p-6">
          <FAQAccordion items={servicesFAQs} />
        </div>
      </div>
    </section>

    <FinalCTA />
  </>
);

export default ServicesPage;
