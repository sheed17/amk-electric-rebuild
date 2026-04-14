import { Link } from "react-router-dom";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { businessContact } from "@/components/site/site-data";

const serviceLinks = [
  { label: "Residential Electrical", path: "/services/residential-electrical" },
  { label: "Commercial Electrical", path: "/services/commercial-electrical" },
  { label: "Electrical Repairs", path: "/services/electrical-repairs" },
  { label: "Panel Upgrades", path: "/services/panel-upgrades" },
  { label: "EV Charger Installation", path: "/services/ev-charger-installation" },
  { label: "Lighting Installation", path: "/services/lighting-installation" },
  { label: "Wiring & Rewiring", path: "/services/wiring-rewiring" },
];

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Service Areas", path: "/service-areas" },
  { label: "Contact", path: "/contact" },
];

const Footer = () => (
  <footer className="section-dark px-4 pb-6 pt-4 sm:px-6 lg:px-8">
    <div className="container-wide">
      <div className="panel-surface-dark px-6 py-10 md:px-8 lg:px-10">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_0.7fr_0.9fr_1fr]">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/25 bg-gold text-accent-foreground shadow-[0_18px_40px_-28px_rgba(37,99,235,0.38)]">
                <span className="text-sm font-semibold tracking-[0.18em]">JE</span>
              </div>
              <div className="leading-none">
                <span className="block text-lg font-serif text-primary-foreground">Jin Electric Co</span>
                <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-primary-foreground/52">
                  San Jose Electrician
                </span>
              </div>
            </div>
            <p className="max-w-sm text-sm leading-7 text-primary-foreground/72">
              Jin Electric Co provides residential and commercial electrical work for homeowners,
              property managers, and small businesses across San Jose and nearby Bay Area cities.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row xl:flex-col">
              <a
                href={businessContact.phone.url}
                className="inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
              >
                <Phone className="h-4 w-4" />
                {businessContact.phone.text}
              </a>
              <a
                href={businessContact.email.url}
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground/84 transition-colors hover:text-gold-light break-all"
              >
                <Mail className="h-4 w-4" />
                {businessContact.email.text}
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-primary-foreground transition-colors hover:text-gold-light"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/48">
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/48">
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm text-primary-foreground/80 transition-colors hover:text-gold">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/48">
              Service Area
            </h4>
            <p className="text-sm leading-7 text-primary-foreground/72">
              Serving San Jose, Santa Clara, Sunnyvale, Cupertino, Campbell, Milpitas, Mountain View,
              Los Gatos, Saratoga, Palo Alto, and nearby communities.
            </p>
            <div className="mt-5 inline-flex items-start gap-3 rounded-2xl border border-white/8 bg-white/4 px-4 py-4">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <p className="text-sm leading-6 text-primary-foreground/78">
                {businessContact.address.text}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/8 pt-6 text-center">
          <p className="text-xs uppercase tracking-[0.16em] text-primary-foreground/42">
          © {new Date().getFullYear()} Jin Electric Co. All rights reserved. Serving San Jose & the Bay Area.
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
