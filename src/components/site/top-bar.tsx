import { topBarItems, navbarContact } from "@/components/site/site-data";

const TopBar = () => (
  <div className="hidden border-b border-border/60 bg-white text-primary/78 md:block">
    <div className="container flex h-10 items-center justify-between px-4 text-[0.68rem] uppercase tracking-[0.18em] sm:px-6 lg:px-8">
      <div className="flex items-center gap-3 lg:gap-4">
        {topBarItems.map((item, index) => (
          <div key={item} className="flex items-center gap-3 lg:gap-4">
            {index > 0 && <span className="text-primary/24">/</span>}
            <span className="font-medium">{item}</span>
          </div>
        ))}
      </div>
      <a
        href={navbarContact.phone.url}
        className="font-medium text-primary transition-colors hover:text-accent"
      >
        {navbarContact.phone.text}
      </a>
    </div>
  </div>
);

export default TopBar;
