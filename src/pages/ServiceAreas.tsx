import ServiceHero from "@/components/ServiceHero";
import SectionHeading from "@/components/SectionHeading";
import CityGrid from "@/components/CityGrid";
import FinalCTA from "@/components/FinalCTA";

const ServiceAreasPage = () => (
  <>
    <ServiceHero
      headline="Service Areas — San Jose & the Bay Area"
      subcopy="Jin Electric Co provides residential and commercial electrical services throughout San Jose and nearby Bay Area communities."
    />

    <section className="section-padding">
      <div className="container-tight">
        <SectionHeading title="Where We Work" subtitle="We're based in San Jose and serve homeowners and businesses across Santa Clara County and the surrounding area." />
        <CityGrid />
        <p className="text-sm text-muted-foreground text-center mt-8">
          Don't see your city listed? Give us a call at <a href="tel:4086085701" className="text-gold font-medium">(408) 608-5701</a> — we may still be able to help. We're happy to confirm availability for nearby areas.
        </p>
      </div>
    </section>

    <section className="section-padding bg-card">
      <div className="container-tight max-w-2xl mx-auto text-center">
        <SectionHeading title="Local Knowledge Matters" subtitle="Knowing the Bay Area means knowing the building styles, the local codes, and the common electrical issues that come with homes and businesses in this region." />
        <p className="text-sm text-muted-foreground leading-relaxed">
          From older San Jose neighborhoods with outdated wiring to newer Sunnyvale developments that need EV charger circuits, we bring local experience to every project.
        </p>
      </div>
    </section>

    <FinalCTA />
  </>
);

export default ServiceAreasPage;
