import { Clock3, MapPin, ShieldCheck, Star } from "lucide-react";

import Reveal from "@/components/home/Reveal";

const items = [
  { icon: ShieldCheck, text: "Licensed & Insured" },
  { icon: Clock3, text: "Responsive Scheduling" },
  { icon: Star, text: "Quality Workmanship" },
  { icon: MapPin, text: "Local Bay Area Team" },
];

const TrustStrip = () => (
  <section className="relative z-20 -mt-10 px-4 sm:px-6 lg:px-8">
    <div className="container-wide">
      <Reveal className="panel-surface grid gap-4 rounded-[2rem] px-5 py-5 md:grid-cols-2 md:px-6 lg:grid-cols-4">
        {items.map(({ icon: Icon, text }) => (
          <div key={text} className="flex items-center gap-3 rounded-2xl bg-muted/35 px-4 py-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gold/12 text-gold">
              <Icon className="h-5 w-5" />
            </span>
            <div>
              <p className="text-[0.72rem] uppercase tracking-[0.18em] text-primary/45">Trusted Service</p>
              <p className="text-sm font-medium text-primary">{text}</p>
            </div>
          </div>
        ))}
      </Reveal>
    </div>
  </section>
);

export default TrustStrip;
