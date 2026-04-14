import { useState } from "react";
import { PhoneCall } from "lucide-react";

import { businessContact } from "@/components/site/site-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const HeroQuoteCard = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const service = String(formData.get("service") || "").trim();
    const details = String(formData.get("details") || "").trim();

    const subject = encodeURIComponent(`Website Quote Request${service ? ` - ${service}` : ""}`);
    const body = encodeURIComponent(
      [
        "New quote request from the homepage hero form.",
        "",
        `Name: ${name || "Not provided"}`,
        `Phone: ${phone || "Not provided"}`,
        `Service needed: ${service || "Not provided"}`,
        "",
        "Project details:",
        details || "Not provided",
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.href = `${businessContact.email.url}?subject=${subject}&body=${body}`;
  };

  if (submitted) {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_80px_-48px_rgba(2,6,23,0.58)] md:p-7">
        <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-blue-200">
          Request Received
        </p>
        <h2 className="text-[2rem] font-bold tracking-[-0.04em] text-primary-foreground md:text-[2.2rem] md:leading-[1.02]">
          Thanks, we&apos;ll follow up shortly
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/74">
          We&apos;ll reach out to confirm the project details and next steps. If you need help right away, give us a call.
        </p>
        <a
          href={businessContact.phone.url}
          className="mt-6 inline-flex items-center gap-2 rounded-full border border-gold/35 bg-gold px-5 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-accent-foreground transition-transform duration-200 hover:-translate-y-0.5 hover:bg-gold/90"
        >
          <PhoneCall className="h-4 w-4" />
          {businessContact.phone.text}
        </a>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.04))] p-6 shadow-[0_30px_80px_-48px_rgba(2,6,23,0.58)] md:p-7">
      <p className="mb-3 text-[0.72rem] font-semibold uppercase tracking-[0.2em] text-blue-200">
        Request a Quote
      </p>
      <h2 className="max-w-sm text-[2rem] font-bold tracking-[-0.04em] text-primary-foreground md:text-[2.25rem] md:leading-[1.02]">
        Tell us what you need
      </h2>
      <p className="mt-4 max-w-md text-sm leading-7 text-primary-foreground/72">
        Share the project, issue, or service you&apos;re looking for and we&apos;ll point you toward the right next step.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3.5">
        <Input
          required
          name="name"
          placeholder="Name"
          className="h-11 rounded-xl border-white/20 bg-white/94 text-primary placeholder:text-muted-foreground"
        />
        <Input
          required
          name="phone"
          type="tel"
          placeholder="Phone"
          className="h-11 rounded-xl border-white/20 bg-white/94 text-primary placeholder:text-muted-foreground"
        />
        <Input
          name="service"
          placeholder="Service needed"
          className="h-11 rounded-xl border-white/20 bg-white/94 text-primary placeholder:text-muted-foreground"
        />
        <Textarea
          name="details"
          rows={3}
          placeholder="Brief project details"
          className="min-h-[96px] rounded-xl border-white/20 bg-white/94 text-primary placeholder:text-muted-foreground"
        />

        <Button
          type="submit"
          variant="gold"
          className="h-12 w-full rounded-full text-[0.78rem] uppercase tracking-[0.16em]"
        >
          Submit Request
        </Button>
      </form>
    </div>
  );
};

export default HeroQuoteCard;
