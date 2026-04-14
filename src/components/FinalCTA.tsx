import SectionHeading from "@/components/SectionHeading";
import CTAButtons from "@/components/CTAButtons";

interface FinalCTAProps {
  dark?: boolean;
  eyebrow?: string;
  title?: string;
  subtitle?: string;
}

const FinalCTA = ({
  dark = true,
  eyebrow = "Request Service",
  title = "Ready to Get Started?",
  subtitle = "Whether you need a quick repair or a full electrical project, Jin Electric Co is here to help. Call us or request a quote — we'll get back to you promptly.",
}: FinalCTAProps) => (
  <section className={dark ? "section-dark section-padding" : "section-padding"}>
    <div className={`container-tight text-center ${dark ? "panel-surface-dark px-6 py-10 md:px-10 md:py-12" : "panel-surface px-6 py-10 md:px-10 md:py-12"}`}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        light={dark}
      />
      <CTAButtons variant={dark ? "dark-section" : "default"} className="justify-center" />
    </div>
  </section>
);

export default FinalCTA;
