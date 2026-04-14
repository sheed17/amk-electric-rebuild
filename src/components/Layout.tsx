import { Outlet } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import SiteNavbar from "@/components/site/navbar";
import TopBar from "@/components/site/top-bar";

const Layout = () => (
  <div className="min-h-screen flex flex-col">
    <ScrollToTop />
    <TopBar />
    <SiteNavbar />
    <main className="flex-1">
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default Layout;
