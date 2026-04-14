import { Features8 } from "@/components/ui/features-8";
import {
  whyChooseUsItems,
  whyChooseUsSteps,
  whyChooseUsSupportCard,
} from "@/components/site/site-data";

const WhyChooseUs = () => (
  <Features8
    title="Why Homeowners & Businesses Choose Jin Electric Co"
    description="San Jose homeowners and businesses call us for organized service, careful work, dependable scheduling, and clear next steps from start to finish."
    items={whyChooseUsItems}
    supportCard={whyChooseUsSupportCard}
    steps={whyChooseUsSteps}
  />
);

export default WhyChooseUs;
