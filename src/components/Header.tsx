import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { ArrowRight, ChevronDown, Menu, Phone, X } from "lucide-react";

const serviceLinks = [
  {
    label: "Residential Electrical",
    path: "/services/residential-electrical",
    description: "Repairs, upgrades, lighting, and clean work in occupied homes.",
  },
  {
    label: "Commercial Electrical",
    path: "/services/commercial-electrical",
    description: "Electrical support for offices, retail, and light commercial spaces.",
  },
  {
    label: "Electrical Repairs",
    path: "/services/electrical-repairs",
    description: "Troubleshooting, breaker issues, dead outlets, and urgent fixes.",
  },
  {
    label: "Panel Upgrades",
    path: "/services/panel-upgrades",
    description: "Panel replacements and service upgrades for modern power needs.",
  },
  {
    label: "EV Charger Installation",
    path: "/services/ev-charger-installation",
    description: "Dedicated circuits and Level 2 charger installations for homes.",
  },
  {
    label: "Lighting Installation",
    path: "/services/lighting-installation",
    description: "Interior, exterior, and functional lighting improvements.",
  },
  {
    label: "Wiring & Rewiring",
    path: "/services/wiring-rewiring",
    description: "Remodel wiring, circuit additions, and older-home upgrades.",
  },
];

const navItems = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services", children: serviceLinks },
  { label: "Service Areas", path: "/service-areas" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const utilityItems = [
  "Serving San Jose & the Bay Area",
  "Residential & Commercial Electrical Work",
  "English & Spanish",
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 6);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (path: string) =>
    path === "/" ? location.pathname === "/" : location.pathname.startsWith(path);

  return (
    <>
      <div className="hidden border-b border-white/8 bg-primary md:block">
        <div className="container-wide flex h-10 items-center justify-between px-4 text-[0.68rem] uppercase tracking-[0.18em] text-primary-foreground/72 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 lg:gap-4">
            {utilityItems.map((item, index) => (
              <div key={item} className="flex items-center gap-3 lg:gap-4">
                {index > 0 && <span className="text-primary-foreground/22">/</span>}
                <span>{item}</span>
              </div>
            ))}
          </div>
          <a
            href="tel:4086085701"
            className="font-medium text-gold-light transition-colors hover:text-white"
          >
            (408) 608-5701
          </a>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-200",
          scrolled
            ? "border-b border-border/85 bg-background/82 shadow-[0_18px_48px_-34px_rgba(13,24,46,0.42)] backdrop-blur-xl"
            : "border-b border-border/55 bg-background/72 backdrop-blur-lg",
        )}
      >
        <div className="container-wide flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link to="/" className="group flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-gold/30 bg-gold text-accent-foreground shadow-[0_20px_40px_-26px_rgba(37,99,235,0.38)]">
              <span className="text-sm font-semibold tracking-[0.18em]">JE</span>
            </div>
            <div className="leading-none">
              <span className="block text-lg font-serif text-primary">Jin Electric Co</span>
              <span className="mt-1 block text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                Licensed Electrical Contractor
              </span>
            </div>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.children ? (
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button
                        className={cn(
                          "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                          isActive(item.path)
                            ? "text-gold"
                            : "text-foreground/82 hover:text-primary",
                        )}
                      >
                        {item.label}
                        <ChevronDown className="h-4 w-4" />
                      </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                      align="start"
                      sideOffset={14}
                      className="w-[340px] rounded-[1.25rem] border border-border/80 bg-background/98 p-2 shadow-[0_28px_70px_-34px_rgba(13,24,46,0.32)]"
                    >
                      <DropdownMenuLabel className="px-3 py-2 text-[0.68rem] uppercase tracking-[0.18em] text-muted-foreground">
                        Browse Services
                      </DropdownMenuLabel>
                      <DropdownMenuSeparator className="mx-2 bg-border/70" />
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild className="rounded-2xl px-3 py-0 focus:bg-muted/75">
                          <Link to={child.path} className="flex w-full items-center justify-between gap-4 py-3">
                            <span className="space-y-1">
                              <span className="block text-sm font-medium text-primary">{child.label}</span>
                              <span className="block text-xs leading-relaxed text-muted-foreground">
                                {child.description}
                              </span>
                            </span>
                            <ArrowRight className="h-4 w-4 shrink-0 text-gold" />
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "inline-flex items-center gap-1 rounded-full px-4 py-2 text-sm transition-colors",
                      isActive(item.path)
                        ? "text-gold"
                        : "text-foreground/82 hover:text-primary",
                    )}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-3 xl:flex">
            <a
              href="tel:4086085701"
              className="inline-flex items-center gap-2 rounded-full border border-border/80 bg-background/65 px-4 py-2 text-sm text-foreground transition-colors hover:border-gold/25 hover:text-primary"
            >
              <Phone className="h-4 w-4 text-gold" />
              (408) 608-5701
            </a>
            <Button
              variant="gold"
              size="sm"
              className="h-11 rounded-full px-5 text-[0.76rem] uppercase tracking-[0.16em]"
              asChild
            >
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          <button
            className="xl:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/85 bg-background/70 text-foreground"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="overflow-hidden border-t border-border/70 bg-background/96 xl:hidden"
            >
              <div className="container-wide px-4 py-5 sm:px-6">
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-border/75 bg-card/55 px-4 py-3">
                      <div className="flex items-center justify-between gap-4">
                        <Link
                          to={item.path}
                          className={cn(
                            "text-sm font-medium transition-colors",
                            isActive(item.path) ? "text-gold" : "text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                        {item.children && (
                          <button
                            onClick={() => setServicesOpen((open) => !open)}
                            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground"
                            aria-label="Toggle services menu"
                          >
                            <ChevronDown
                              className={cn("h-4 w-4 transition-transform", servicesOpen && "rotate-180")}
                            />
                          </button>
                        )}
                      </div>

                      {item.children && servicesOpen && (
                        <div className="mt-3 space-y-2 border-t border-border/70 pt-3">
                          {item.children.map((child) => (
                            <Link
                              key={child.path}
                              to={child.path}
                              className="block rounded-xl px-3 py-2 text-sm text-muted-foreground transition-colors hover:bg-muted/60 hover:text-primary"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  <a
                    href="tel:4086085701"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border/85 bg-card px-4 py-3 text-sm font-medium text-foreground"
                  >
                    <Phone className="h-4 w-4 text-gold" />
                    (408) 608-5701
                  </a>
                  <Button
                    variant="gold"
                    className="h-12 rounded-full text-[0.76rem] uppercase tracking-[0.16em]"
                    asChild
                  >
                    <Link to="/contact">Get a Quote</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
