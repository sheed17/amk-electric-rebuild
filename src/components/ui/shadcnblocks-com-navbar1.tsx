import {
  BatteryCharging,
  Building2,
  Cable,
  CircuitBoard,
  House,
  Lightbulb,
  Menu,
  Phone,
  PlugZap,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface MenuItem {
  title: string;
  url: string;
  description?: string;
  icon?: JSX.Element;
  items?: MenuItem[];
}

export interface Navbar1Props {
  logo?: {
    url: string;
    src?: string;
    alt: string;
    title: string;
  };
  menu?: MenuItem[];
  mobileExtraLinks?: {
    name: string;
    url: string;
  }[];
  contact?: {
    phone: {
      text: string;
      url: string;
    };
    cta: {
      text: string;
      url: string;
    };
  };
}

const Navbar1 = ({
  logo = {
    url: "/",
    alt: "Jin Electric Co",
    title: "Jin Electric Co",
  },
  menu = [
    { title: "Home", url: "/" },
    {
      title: "Services",
      url: "/services",
      items: [
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
      ],
    },
    {
      title: "Service Areas",
      url: "/service-areas",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Contact",
      url: "/contact",
    },
  ],
  mobileExtraLinks = [],
  contact = {
    phone: { text: "(408) 608-5701", url: "tel:4086085701" },
    cta: { text: "Get a Quote", url: "/contact" },
  },
}: Navbar1Props) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <section className="py-4">
      <div className="container">
        <nav className="hidden justify-between lg:flex">
          <div className="flex items-center gap-6">
            <Link to={logo.url} className="flex items-center gap-3.5">
              {logo.src ? (
                <img src={logo.src} className="w-10 rounded-xl shadow-[0_10px_24px_-18px_rgba(30,42,59,0.45)]" alt={logo.alt} />
              ) : null}
              <span className="text-[1.2rem] font-black tracking-[-0.04em] text-primary">
                {logo.title}
              </span>
            </Link>
            <div className="flex items-center">
              <NavigationMenu>
                <NavigationMenuList>
                  {menu.map((item) => renderMenuItem(item))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={contact.phone.url}
              className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-gold/30 hover:text-primary"
            >
              <Phone className="size-4 text-gold" />
              {contact.phone.text}
            </a>
            <Button asChild size="sm" className="h-10 rounded-full bg-gold px-5 text-[0.72rem] uppercase tracking-[0.16em] text-accent-foreground hover:bg-gold/90">
              <Link to={contact.cta.url}>{contact.cta.text}</Link>
            </Button>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between gap-4">
            <Link to={logo.url} className="flex items-center gap-3">
              {logo.src ? (
                <img src={logo.src} className="w-10 rounded-xl shadow-[0_10px_24px_-18px_rgba(30,42,59,0.45)]" alt={logo.alt} />
              ) : null}
              <span className="text-[1.14rem] font-black tracking-[-0.04em] text-primary">{logo.title}</span>
            </Link>
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="rounded-full border-border bg-background">
                  <Menu className="size-4" />
                </Button>
              </SheetTrigger>
              <SheetContent className="overflow-y-auto border-l border-border bg-background">
                <SheetHeader>
                  <SheetTitle>
                    <Link to={logo.url} className="flex items-center gap-3">
                      {logo.src ? (
                        <img src={logo.src} className="w-10 rounded-xl shadow-[0_10px_24px_-18px_rgba(30,42,59,0.45)]" alt={logo.alt} />
                      ) : null}
                      <span className="text-[1.08rem] font-extrabold tracking-[-0.03em] text-primary">
                        {logo.title}
                      </span>
                    </Link>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-6 flex flex-col gap-6">
                  <Accordion
                    type="single"
                    collapsible
                    className="flex w-full flex-col gap-4"
                  >
                    {menu.map((item) =>
                      renderMobileMenuItem(item, () => setMobileMenuOpen(false)),
                    )}
                  </Accordion>
                  {mobileExtraLinks.length > 0 && (
                    <div className="border-t py-4">
                      <div className="grid grid-cols-2 justify-start">
                        {mobileExtraLinks.map((link, idx) => (
                          <Link
                            key={idx}
                            className="inline-flex h-10 items-center gap-2 whitespace-nowrap rounded-md px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-accent-foreground"
                            to={link.url}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-3">
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={contact.phone.url}>{contact.phone.text}</a>
                    </Button>
                    <Button asChild className="rounded-full bg-gold text-accent-foreground hover:bg-gold/90">
                      <Link to={contact.cta.url} onClick={() => setMobileMenuOpen(false)}>
                        {contact.cta.text}
                      </Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

const renderMenuItem = (item: MenuItem) => {
  if (item.items) {
    return (
      <NavigationMenuItem key={item.title} className="text-muted-foreground">
        <NavigationMenuTrigger className="rounded-full bg-transparent text-foreground/82 hover:bg-muted/60 hover:text-primary data-[state=open]:bg-muted/60 data-[state=open]:text-primary">
          {item.title}
        </NavigationMenuTrigger>
        <NavigationMenuContent>
          <ul className="w-80 p-3">
            <NavigationMenuLink>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    className="flex select-none gap-4 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
                    to={subItem.url}
                  >
                    {subItem.icon}
                    <div>
                      <div className="text-sm font-semibold text-primary">
                        {subItem.title}
                      </div>
                      {subItem.description && (
                        <p className="text-sm leading-snug text-muted-foreground">
                          {subItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </NavigationMenuLink>
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>
    );
  }

  return (
    <Link
      key={item.title}
      className="group inline-flex h-10 w-max items-center justify-center rounded-full bg-transparent px-4 py-2 text-sm font-medium text-foreground/82 transition-colors hover:bg-muted/60 hover:text-primary"
      to={item.url}
    >
      {item.title}
    </Link>
  );
};

const renderMobileMenuItem = (item: MenuItem, onNavigate: () => void) => {
  if (item.items) {
    return (
      <AccordionItem key={item.title} value={item.title} className="border-b-0">
        <AccordionTrigger className="py-0 font-semibold text-primary hover:no-underline">
          {item.title}
        </AccordionTrigger>
        <AccordionContent className="mt-2">
          {item.items.map((subItem) => (
            <Link
              key={subItem.title}
              className="flex select-none gap-4 rounded-md p-3 leading-none outline-none transition-colors hover:bg-muted hover:text-accent-foreground"
              to={subItem.url}
              onClick={onNavigate}
            >
              {subItem.icon}
              <div>
                <div className="text-sm font-semibold text-primary">{subItem.title}</div>
                {subItem.description && (
                  <p className="text-sm leading-snug text-muted-foreground">
                    {subItem.description}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </AccordionContent>
      </AccordionItem>
    );
  }

  return (
    <Link key={item.title} to={item.url} onClick={onNavigate} className="font-semibold text-primary">
      {item.title}
    </Link>
  );
};

export { Navbar1 };
