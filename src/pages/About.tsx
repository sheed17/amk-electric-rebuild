import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import FinalCTA from "@/components/FinalCTA";
import { CheckCircle } from "lucide-react";

const workTypes = [
  "Residential electrical repairs and troubleshooting",
  "Commercial and light industrial electrical work",
  "Panel upgrades and breaker replacements",
  "Lighting installation — recessed, fixtures, exterior",
  "EV charger installation",
  "Whole-home and partial rewiring",
  "Remodel and addition wiring",
  "Outlet, switch, and circuit work",
];

const expectations = [
  { title: "Clear communication", desc: "We explain the work, the cost, and the timeline before we start — and keep you updated along the way." },
  { title: "Responsive scheduling", desc: "We answer the phone, return calls quickly, and work to get you on the schedule when you need us." },
  { title: "Quality workmanship", desc: "Every job gets the same attention to detail. We do clean, safe, code-compliant work that holds up." },
  { title: "Honest recommendations", desc: "We'll tell you what you need and what you don't. No upselling, no unnecessary work." },
];

const AboutPage = () => (
  <>
    <ServiceHero
      headline="About AMK Electric"
      subcopy="A local electrical contractor serving San Jose and the Bay Area. Residential and commercial electrical work — done right, on time, with clear communication."
    />

    <section className="section-padding">
      <div className="container-tight max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-serif text-primary mb-6">Who We Are</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          AMK Electric is a local electrical contractor based in San Jose, California. We provide residential and commercial electrical services for homeowners, property managers, and business owners across the Bay Area.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          We focus on doing good work for local customers — showing up on time, communicating clearly, and delivering quality electrical installations and repairs that meet code and stand the test of time.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          Whether it's a straightforward outlet repair or a complex panel upgrade, every job gets our full attention. We believe that reliable electrical work starts with understanding the customer's needs and ends with a job done right.
        </p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-tight">
        <SectionHeading title="What You Can Expect" subtitle="Working with AMK Electric means working with people who care about the details." />
        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {expectations.map(item => (
            <div key={item.title}>
              <h3 className="font-semibold text-primary text-base mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading title="Types of Work We Handle" centered={false} />
        <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
          {workTypes.map(item => (
            <div key={item} className="flex items-center gap-3 py-2">
              <CheckCircle className="w-4 h-4 text-gold shrink-0" />
              <span className="text-sm text-foreground">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-tight text-center max-w-2xl mx-auto">
        <SectionHeading title="Our Service Area" subtitle="AMK Electric is based in San Jose and serves homeowners and businesses across the Bay Area, including Santa Clara, Sunnyvale, Cupertino, Campbell, Milpitas, Mountain View, Los Gatos, Saratoga, and Palo Alto." />
      </div>
    </section>

    <FinalCTA />
  </>
);

export default AboutPage;
