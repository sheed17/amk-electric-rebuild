import {
  FeatureGrid,
  type FeatureItem,
} from "@/components/ui/feature-grid-enterprise-grade";

interface ServicesSectionProps {
  items: FeatureItem[];
}

const ServicesSection = ({ items }: ServicesSectionProps) => (
  <section className="py-20 md:py-24">
    <div className="container-wide">
      <div className="mb-9 md:mb-12 lg:mb-14">
        <p className="section-kicker">Core Services</p>
        <h2 className="mt-4 text-4xl font-medium text-primary md:text-5xl">
          Our Electrical Services
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-8 text-muted-foreground">
          From repairs and troubleshooting to installations and upgrades, we handle a wide range of residential and commercial electrical work.
        </p>
      </div>

      <FeatureGrid features={items} />
    </div>
  </section>
);

export default ServicesSection;
