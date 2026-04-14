import ServiceCard from "@/components/ServiceCard";
import SectionHeading from "@/components/SectionHeading";
import { getRelatedServices } from "@/data/services";

interface RelatedServicesProps {
  slugs: string[];
}

const RelatedServices = ({ slugs }: RelatedServicesProps) => {
  const related = getRelatedServices(slugs);
  if (related.length === 0) return null;

  return (
    <section className="section-padding bg-card/45">
      <div className="container-tight">
        <SectionHeading
          eyebrow="Keep Exploring"
          title="Related Services"
          subtitle="If you're comparing options, these are the closest services customers usually look at next."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map(service => (
            <ServiceCard
              key={service.slug}
              title={service.shortTitle}
              description={service.introText[0].substring(0, 120) + "..."}
              slug={service.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
