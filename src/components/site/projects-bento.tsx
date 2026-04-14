import { projectBentoFeatures } from "@/components/site/site-data";
import { BentoGridWithFeatures } from "@/components/ui/bento-grid";

const ProjectsBento = () => (
  <section className="section-dark section-padding relative overflow-hidden">
    <div className="pointer-events-none absolute inset-x-0 top-0 h-full">
      <div className="absolute left-[8%] top-20 h-56 w-56 rounded-full bg-white/6 blur-3xl" />
      <div className="absolute right-[10%] top-40 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
    </div>

    <div className="container-wide relative">
      <div className="mx-auto mb-12 max-w-4xl text-center md:mb-16">
        <p className="section-kicker mb-4 text-blue-200">COMMON PROJECT TYPES</p>
        <h2 className="text-4xl font-black tracking-[-0.05em] text-primary-foreground md:text-5xl xl:text-6xl">
          Common Electrical Projects We Handle
        </h2>
        <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-primary-foreground/76 md:text-lg">
          A quick look at the kinds of jobs homeowners, property managers, and small businesses call us for most often.
        </p>
      </div>

      <BentoGridWithFeatures features={projectBentoFeatures} />
    </div>
  </section>
);

export default ProjectsBento;
