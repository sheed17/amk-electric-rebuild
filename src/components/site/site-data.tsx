import {
  BatteryCharging,
  Building2,
  Cable,
  CalendarDays,
  ClipboardList,
  Clock3,
  CircuitBoard,
  House,
  Lightbulb,
  MapPin,
  Phone,
  PlugZap,
  ShieldCheck,
  TriangleAlert,
  Wrench,
  type LucideIcon,
} from "lucide-react";

import type { BentoFeature } from "@/components/ui/bento-grid";
import type { FeatureItem } from "@/components/ui/feature-grid-enterprise-grade";
import type { MenuItem, Navbar1Props } from "@/components/ui/shadcnblocks-com-navbar1";
import type { StackingProjectData } from "@/components/ui/stacking-card";

export interface WhyChooseUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface WhyChooseUsSupportCard {
  title: string;
  description: string;
}

export interface WhyChooseUsStep {
  icon: LucideIcon;
  label: string;
  align: "left" | "right";
}

export const topBarItems = [
  "Serving San Jose & the Bay Area",
  "Residential & Commercial Electrical Work",
  "English & Spanish",
] as const;

export const navbarLogo: NonNullable<Navbar1Props["logo"]> = {
  url: "/",
  alt: "AMK Electric logo",
  title: "AMK Electric",
};

export const servicesDropdownItems: MenuItem[] = [
  {
    title: "Residential Electrical",
    description: "Safe, reliable electrical work for homes, remodels, upgrades, and repairs",
    icon: <House className="size-5 shrink-0" />,
    url: "/services/residential-electrical",
  },
  {
    title: "Commercial Electrical",
    description: "Electrical services for offices, retail spaces, and commercial properties",
    icon: <Building2 className="size-5 shrink-0" />,
    url: "/services/commercial-electrical",
  },
  {
    title: "Electrical Repairs",
    description: "Troubleshooting, diagnostics, and repairs for common electrical issues",
    icon: <Wrench className="size-5 shrink-0" />,
    url: "/services/electrical-repairs",
  },
  {
    title: "Panel Upgrades",
    description: "Service panel upgrades for safety, capacity, and code compliance",
    icon: <CircuitBoard className="size-5 shrink-0" />,
    url: "/services/panel-upgrades",
  },
  {
    title: "EV Charger Installation",
    description: "Home and business EV charging solutions installed correctly",
    icon: <BatteryCharging className="size-5 shrink-0" />,
    url: "/services/ev-charger-installation",
  },
  {
    title: "Lighting Installation",
    description: "Interior, exterior, accent, and security lighting installation",
    icon: <Lightbulb className="size-5 shrink-0" />,
    url: "/services/lighting-installation",
  },
  {
    title: "Wiring & Rewiring",
    description: "New wiring, rewiring, and electrical updates for older properties",
    icon: <Cable className="size-5 shrink-0" />,
    url: "/services/wiring-and-rewiring",
  },
  {
    title: "Dedicated Circuits",
    description: "Dedicated power for appliances, equipment, remodels, and additions",
    icon: <PlugZap className="size-5 shrink-0" />,
    url: "/services/dedicated-circuits",
  },
];

export const navbarMenu: MenuItem[] = [
  { title: "Home", url: "/" },
  { title: "Services", url: "/services", items: servicesDropdownItems },
  { title: "Service Areas", url: "/service-areas" },
  { title: "About", url: "/about" },
  { title: "Contact", url: "/contact" },
];

export const navbarMobileExtraLinks: NonNullable<Navbar1Props["mobileExtraLinks"]> = [];

export const navbarContact: NonNullable<Navbar1Props["contact"]> = {
  phone: {
    text: "(408) 646-7828",
    url: "tel:4086467828",
  },
  cta: {
    text: "Request Service",
    url: "/contact",
  },
};

export const businessContact = {
  phone: {
    text: "(408) 646-7828",
    url: "tel:4086467828",
  },
  email: {
    text: "amkelectric16@gmail.com",
    url: "mailto:amkelectric16@gmail.com",
  },
  address: {
    text: "130 Lewis Rd # 8, San Jose, CA 95111",
  },
} as const;

export const servicesSectionItems: FeatureItem[] = [
  {
    id: "residential-electrical",
    icon: House,
    title: "Residential Electrical",
    description: "Safe, reliable electrical work for homes, remodels, service upgrades, and everyday repairs.",
    href: "/services/residential-electrical",
  },
  {
    id: "commercial-electrical",
    icon: Building2,
    title: "Commercial Electrical",
    description: "Electrical work for offices, retail spaces, and light commercial properties that need dependable coordination.",
    href: "/services/commercial-electrical",
  },
  {
    id: "electrical-repairs",
    icon: Wrench,
    title: "Electrical Repairs",
    description: "Troubleshooting and repair for flickering lights, faulty outlets, dead circuits, and breaker issues.",
    href: "/services/electrical-repairs",
  },
  {
    id: "panel-upgrades",
    icon: CircuitBoard,
    title: "Panel Upgrades",
    description: "Service panel upgrades for safety, added capacity, remodels, and EV charger readiness.",
    href: "/services/panel-upgrades",
  },
  {
    id: "ev-charger-installation",
    icon: BatteryCharging,
    title: "EV Charger Installation",
    description: "EV charging solutions installed with dedicated circuits, load review, and clean final placement.",
    href: "/services/ev-charger-installation",
  },
  {
    id: "lighting-installation",
    icon: Lightbulb,
    title: "Lighting Installation",
    description: "Interior, exterior, accent, and security lighting to improve visibility, comfort, and curb appeal.",
    href: "/services/lighting-installation",
  },
  {
    id: "wiring-and-rewiring",
    icon: Cable,
    title: "Wiring & Rewiring",
    description: "New wiring and rewiring for older homes, remodels, additions, and upgraded power needs.",
    href: "/services/wiring-and-rewiring",
  },
  {
    id: "dedicated-circuits",
    icon: PlugZap,
    title: "Dedicated Circuits / Remodel Electrical",
    description: "Dedicated power for appliances, workshop tools, office equipment, remodels, and additions.",
    href: "/services/dedicated-circuits",
  },
];

export const whyChooseUsItems: WhyChooseUsItem[] = [
  {
    icon: MapPin,
    title: "Local Bay Area Team",
    description: "Based in San Jose, we understand local homes, businesses, and code requirements.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Workmanship",
    description: "Clean, safe, code-compliant electrical work done with care and attention to detail.",
  },
  {
    icon: Clock3,
    title: "Responsive & On Time",
    description: "We communicate clearly, show up when expected, and keep projects moving.",
  },
  {
    icon: ClipboardList,
    title: "Clear Communication",
    description: "Straightforward recommendations, transparent scope, and no confusion about next steps.",
  },
];

export const whyChooseUsSupportCard: WhyChooseUsSupportCard = {
  title: "Residential & Commercial",
  description:
    "From homes and remodels to offices, retail spaces, and light commercial work, we tailor the approach to the property and project.",
};

export const whyChooseUsSteps: WhyChooseUsStep[] = [
  {
    icon: Phone,
    label: "Call or message",
    align: "right",
  },
  {
    icon: CalendarDays,
    label: "Schedule window",
    align: "left",
  },
  {
    icon: ClipboardList,
    label: "Scope & next steps",
    align: "right",
  },
];

export const projectBentoFeatures: BentoFeature[] = [
  {
    id: "panel-upgrades-to-200a",
    title: "Panel Upgrades to 200A",
    description:
      "Service upgrades for safety, capacity, and code compliance when a property has outgrown the existing panel.",
    titleClassName: "text-[2.3rem] md:text-[2.9rem]",
    descriptionClassName: "max-w-2xl text-primary-foreground/84",
    content: (
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.28fr)_minmax(240px,0.72fr)]">
        <div className="space-y-5">
          {[
            "Increase service capacity for remodels, HVAC, EV chargers, and modern appliances",
            "Replace aging or undersized equipment with cleaner, safer distribution",
            "Create room for future electrical demand without patchwork add-ons",
          ].map((item) => (
            <div key={item} className="flex items-start gap-4 text-[15px] leading-7 text-primary-foreground/84">
              <div className="mt-1 flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-400/12 text-blue-200 transition-all duration-300 group-hover/bento:bg-blue-400/18 group-hover/bento:text-white">
                <CircuitBoard className="h-4 w-4" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[1.8rem] bg-slate-950/34 p-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] transition-colors duration-300 group-hover/bento:bg-slate-950/42">
          <div className="text-sm font-semibold text-primary-foreground/96">
            Common reasons to upgrade
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {["EV chargers", "Older panels", "Home additions", "Remodels"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/8 bg-white/6 px-3.5 py-2 text-xs font-medium text-primary-foreground/78"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    className:
      "col-span-1 md:col-span-4 lg:col-span-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.045))] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]",
  },
  {
    id: "kitchen-bath-remodel-wiring",
    title: "Kitchen & Bathroom Remodel Wiring",
    description:
      "Circuits, appliance feeds, lighting, switches, and finish electrical work coordinated with renovation timelines.",
    titleClassName: "text-[1.8rem] md:text-[2.05rem]",
    descriptionClassName: "text-primary-foreground/76",
    content: (
      <div className="space-y-5">
        <div className="space-y-3.5">
          {[
            "Kitchen appliance circuits and dedicated loads",
            "Bathroom GFCI protection and vanity lighting",
            "Finish switches, outlets, and fixture installation",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm leading-7 text-primary-foreground/82">
              <span className="mt-2 h-2 w-2 rounded-full bg-blue-300 transition-colors duration-300 group-hover/bento:bg-white" />
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {["Remodel coordination", "Lighting plans", "Appliance feeds"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/7 bg-white/[0.06] px-3.5 py-2 text-xs font-medium text-primary-foreground/72 transition-colors duration-300 group-hover/bento:bg-white/[0.08]"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    className:
      "col-span-1 md:col-span-2 lg:col-span-2 bg-white/[0.03]",
  },
  {
    id: "project-coverage",
    title: "Also Commonly Scheduled",
    description:
      "Smaller scopes and support work that often come up alongside upgrades, remodels, lighting, and repairs.",
    titleClassName: "text-[1.45rem] md:text-[1.65rem]",
    descriptionClassName: "max-w-3xl text-primary-foreground/66",
    content: (
      <div className="grid gap-5 lg:grid-cols-[minmax(0,0.84fr)_1.16fr] lg:items-center">
        <div className="max-w-xl text-sm leading-7 text-primary-foreground/60">
          These are the supporting scopes that often round out larger electrical projects and service visits.
        </div>
        <div className="flex flex-wrap gap-2.5">
        {[
          { label: "Office & retail buildouts", icon: Building2 },
          { label: "Outdoor & security lighting", icon: Lightbulb },
          { label: "Dedicated circuits for equipment", icon: PlugZap },
          { label: "Troubleshooting recurring issues", icon: Wrench },
        ].map((item) => (
          <div
            key={item.label}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/6 bg-white/[0.045] px-3.5 py-2.5 text-sm text-primary-foreground/74 transition-colors duration-300 group-hover/bento:bg-white/[0.06]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-950/28 text-blue-200 transition-all duration-300 group-hover/bento:bg-slate-950/40 group-hover/bento:text-white">
              <item.icon className="h-3.5 w-3.5" />
            </div>
            <span className="leading-6">{item.label}</span>
          </div>
        ))}
        </div>
      </div>
    ),
    className:
      "col-span-1 md:col-span-6 bg-white/[0.014]",
  },
  {
    id: "whole-home-rewiring",
    title: "Whole-Home Rewiring",
    description:
      "Targeted or full rewiring to improve safety, capacity, and long-term reliability in aging properties.",
    titleClassName: "text-[2rem] md:text-[2.45rem]",
    descriptionClassName: "max-w-2xl text-primary-foreground/80",
    content: (
      <div className="grid gap-9 lg:grid-cols-[minmax(0,1.15fr)_minmax(230px,0.85fr)]">
        <div className="space-y-5">
          {[
            "Update aging wiring for safer daily use and improved reliability",
            "Plan partial or full-scope rewiring around the condition of the property",
            "Coordinate upgrades for grounding, circuits, and future electrical demand",
          ].map((item) => (
            <div key={item} className="flex items-start gap-4 text-[15px] leading-7 text-primary-foreground/82">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-400/12 text-blue-200 transition-all duration-300 group-hover/bento:bg-blue-400/18 group-hover/bento:text-white">
                <Cable className="h-4 w-4" />
              </div>
              <span>{item}</span>
            </div>
          ))}
        </div>
        <div className="rounded-[1.8rem] bg-slate-950/28 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition-colors duration-300 group-hover/bento:bg-slate-950/38">
          <div className="text-sm font-semibold text-primary-foreground/92">
            Often paired with
          </div>
          <div className="mt-5 flex flex-wrap gap-2.5">
            {["Older homes", "Service upgrades", "Remodel planning", "Safety corrections"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/7 bg-white/[0.055] px-3.5 py-2 text-xs font-medium text-primary-foreground/74"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
    className:
      "col-span-1 md:col-span-4 lg:col-span-4 bg-[linear-gradient(180deg,rgba(255,255,255,0.085),rgba(255,255,255,0.03))]",
  },
  {
    id: "additional-scheduled-work",
    title: "Additional Project Scopes",
    description:
      "Smaller but common jobs we handle alongside larger upgrades, remodels, and service calls.",
    titleClassName: "text-[1.72rem] md:text-[1.95rem]",
    descriptionClassName: "text-primary-foreground/72",
    content: (
      <div className="space-y-5">
        {[
          { label: "EV charger installation", icon: BatteryCharging },
          { label: "Office & retail buildouts", icon: Building2 },
          { label: "Outdoor & security lighting", icon: Lightbulb },
        ].map((item) => (
          <div key={item.label} className="flex items-start gap-3 text-sm leading-7 text-primary-foreground/78">
            <div className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-blue-400/10 text-blue-200 transition-all duration-300 group-hover/bento:bg-blue-400/16 group-hover/bento:text-white">
              <item.icon className="h-4 w-4" />
            </div>
            <span>{item.label}</span>
          </div>
        ))}
        <div className="flex flex-wrap gap-2.5 pt-1">
          {["Dedicated circuits", "Diagnostics", "Small commercial"].map((item) => (
            <span
              key={item}
              className="rounded-full border border-white/7 bg-white/[0.05] px-3.5 py-2 text-xs font-medium text-primary-foreground/70"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    ),
    className:
      "col-span-1 md:col-span-2 lg:col-span-2 bg-white/[0.024]",
  },
];

export const commonProjectStackingCards: StackingProjectData[] = [
  {
    title: "Panel Upgrades to 200A",
    description:
      "Service upgrades for safety, capacity, and code compliance when a property has outgrown the existing panel.",
    href: "/services/panel-upgrades",
    imageSrc:
      "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Electrical panel upgrade with breakers and labeled circuits",
    color: "#162234",
    points: [
      "Increase service capacity for remodels, HVAC, EV chargers, and modern appliances",
      "Replace aging or undersized equipment with cleaner, safer distribution",
      "Create room for future electrical demand without patchwork add-ons",
    ],
  },
  {
    title: "Whole-Home Rewiring",
    description:
      "Targeted or full rewiring to improve safety, capacity, and long-term reliability in aging properties.",
    href: "/services/wiring-and-rewiring",
    imageSrc:
      "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Electrician working on wiring inside a wall cavity",
    color: "#1E2A3B",
    points: [
      "Older homes with outdated or insufficient wiring",
      "Partial or full-scope rewiring based on condition and goals",
      "Code-focused planning for safer long-term use",
    ],
  },
  {
    title: "Kitchen & Bathroom Remodel Wiring",
    description:
      "Circuits, appliance feeds, lighting, switches, and finish electrical work coordinated with renovation timelines.",
    href: "/services/residential-electrical",
    imageSrc:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Modern kitchen remodel with finished electrical lighting and appliances",
    color: "#223247",
    points: [
      "Kitchen appliance circuits and dedicated loads",
      "Bathroom GFCI protection and vanity lighting",
      "Finish switches, outlets, and fixture installation",
    ],
  },
  {
    title: "EV Charger Installation",
    description:
      "Dedicated circuits, charger mounting, and load considerations for homes, offices, and mixed-use properties.",
    href: "/services/ev-charger-installation",
    imageSrc:
      "https://images.unsplash.com/photo-1593941707882-a56bbc8df24c?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Electric vehicle charging station installed in a parking area",
    color: "#24354F",
    points: [
      "Level 2 charger installation",
      "Load review and breaker capacity checks",
      "Clean routing and code-conscious installation",
    ],
  },
  {
    title: "Office & Retail Buildouts",
    description:
      "Lighting, devices, branch circuits, and electrical coordination for tenant improvements and new layouts.",
    href: "/services/commercial-electrical",
    imageSrc:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Commercial office interior prepared for electrical buildout work",
    color: "#182433",
  },
  {
    title: "Outdoor & Security Lighting",
    description:
      "Path, facade, security, and parking-area lighting that improves visibility, function, and curb appeal.",
    href: "/services/lighting-installation",
    imageSrc:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Exterior lighting installed along a home's entry path",
    color: "#1A2738",
  },
  {
    title: "Dedicated Circuits",
    description:
      "Dedicated power for appliances, equipment, garage tools, office devices, and remodel additions.",
    href: "/services/dedicated-circuits",
    imageSrc:
      "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Dedicated outlet and appliance connection for a high-demand circuit",
    color: "#17212E",
  },
  {
    title: "Troubleshooting Recurring Issues",
    description:
      "Diagnosis and repair for flickering lights, tripping breakers, dead outlets, and other recurring electrical problems.",
    href: "/services/electrical-repairs",
    imageSrc:
      "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Electrician diagnosing an electrical issue with testing equipment",
    color: "#202D41",
  },
];
