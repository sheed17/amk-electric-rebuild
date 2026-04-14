import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  slug: string;
  icon?: React.ReactNode;
}

const ServiceCard = ({ title, description, slug }: ServiceCardProps) => (
  <Link
    to={`/services/${slug}`}
    className="panel-surface group block h-full overflow-hidden p-6 md:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold/50"
  >
    <div className="mb-5 flex items-center justify-between gap-4">
      <span className="section-kicker text-primary/60">Service</span>
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/10 text-gold transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight className="h-4 w-4" />
      </span>
    </div>
    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-3 group-hover:text-gold transition-colors">
      {title}
    </h3>
    <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
      {description}
    </p>
    <span className="inline-flex items-center text-sm uppercase tracking-[0.15em] text-gold transition-all">
      Learn More
    </span>
  </Link>
);

export default ServiceCard;
