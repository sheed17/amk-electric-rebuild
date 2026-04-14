import ServiceHero from "@/components/ServiceHero";
import ContactForm from "@/components/ContactForm";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { businessContact } from "@/components/site/site-data";

const ContactPage = () => (
  <>
    <ServiceHero
      headline="Contact AMK Electric"
      subcopy="Have a question or need electrical work? Call AMK Electric or fill out the form below and we&apos;ll follow up promptly."
    />

    <section className="section-padding">
      <div className="container-tight">
        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-serif text-primary mb-6">Request Service</h2>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              Tell us about the project, repair, or upgrade you need and we&apos;ll follow up to discuss the details. For immediate needs, call us directly.
            </p>
            <ContactForm />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-primary mb-3">Call Us</h3>
              <a href={businessContact.phone.url} className="flex items-center gap-2 text-lg font-medium text-gold hover:text-gold-light transition-colors">
                <Phone className="w-5 h-5" />
                {businessContact.phone.text}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Email</h3>
              <a href={businessContact.email.url} className="flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors break-all">
                <Mail className="w-4 h-4 shrink-0" />
                {businessContact.email.text}
              </a>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Address</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>{businessContact.address.text}</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Service Area</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>San Jose, Santa Clara, Sunnyvale, Cupertino, Campbell, Milpitas, Mountain View, Los Gatos, Saratoga, and surrounding Bay Area communities.</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-primary mb-3">Hours</h3>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-gold mt-0.5 shrink-0" />
                <span>Monday – Saturday. Call or message anytime — we'll respond during business hours.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default ContactPage;
