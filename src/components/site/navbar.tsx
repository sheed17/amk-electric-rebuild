import { Navbar1 } from "@/components/ui/shadcnblocks-com-navbar1";
import {
  navbarContact,
  navbarLogo,
  navbarMenu,
  navbarMobileExtraLinks,
} from "@/components/site/site-data";

const SiteNavbar = () => (
  <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl shadow-[0_14px_40px_-34px_rgba(13,24,46,0.4)]">
    <Navbar1
      logo={navbarLogo}
      menu={navbarMenu}
      mobileExtraLinks={navbarMobileExtraLinks}
      contact={navbarContact}
    />
  </header>
);

export default SiteNavbar;
